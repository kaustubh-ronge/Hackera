
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const User = require('./models/user');
const HotelBooking = require('./models/HotelBooking');


const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static('public'));


function checkAuth(req, res, next) {
    if (req.cookies.username) {
        next();
    } else {
        res.redirect('/login.html');
    }
}

app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, phone, address, age } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword, phone, address, age });
        await user.save();

        res.redirect('/login.html');
    } catch (err) {
        res.status(500).send('Error registering new user.');
    }
});


app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            res.cookie('username', user.name, { httpOnly: true });
            res.redirect('/index.html');
        } else {
            res.send('Invalid email or password');
        }
    } catch (err) {
        res.status(500).send('Error logging in.');
    }
});

// Logout route
app.post('/api/logout', (req, res) => {
    res.clearCookie('username');
    res.send('Logged out');
});

// Route to get the logged-in user's data
app.get('/api/me', (req, res) => {
    if (req.cookies.username) {
        res.json({ name: req.cookies.username });
    } else {
        res.status(401).send('Not authenticated');
    }
});


const BookingSchema = new mongoose.Schema({
   
    date: String,
    start: String,
    end: String
});

const Booking = mongoose.model('Booking', BookingSchema);

// Define static routes and their estimated costs for Maharashtra
// const routesData = [
//     { start: 'mumbai', end: 'pune', cost: 500, middleRoutes: ['lonavala'] },
//     { start: 'mumbai', end: 'nagpur', cost: 1200, middleRoutes: ['indore', 'bhopal'] },
//     { start: 'pune', end: 'nagpur', cost: 1000, middleRoutes: ['aurangabad', 'amravati'] },
//     { start: 'mumbai', end: 'aurangabad', cost: 800, middleRoutes: ['shirdi'] },
//     { start: 'pune', end: 'aurangabad', cost: 700, middleRoutes: ['nashik'] },
//     { start: 'nagpur', end: 'aurangabad', cost: 900, middleRoutes: ['bhusawal'] }
// ];

app.post('/api/bookings', async (req, res) => {
    const {  date, start, end } = req.body;
    
    
    const lowerStart = start.toLowerCase();
    const lowerEnd = end.toLowerCase();
    
 
    const route = routesData.find(route => 
        route.start === lowerStart && route.end === lowerEnd
    );
    const estimatedCost = route ? route.cost : 0;
    const middleRoutes = route ? route.middleRoutes.join(', ') : '';

    const booking = new Booking({  date, start, end });
    try {
        await booking.save();
        res.status(201).json({
            message: 'Booking saved successfully!',
            estimatedCost,
            middleRoutes
        });
    } catch (error) {
        res.status(400).send('Error saving booking');
    }
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('username');
    res.send('Logged out');
});


app.get('/api/me', (req, res) => {
    if (req.cookies.username) {
        res.json({ name: req.cookies.username });
    } else {
        res.status(401).send('Not authenticated');
    }
});





app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
