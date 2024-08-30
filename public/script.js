document.getElementById('bookingForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        alert(`Booking submitted successfully! Estimated Cost: $${result.estimatedCost} \nMiddle Routes: ${result.middleRoutes}`);
    } catch (error) {
        console.error('Error submitting booking:', error);
    }
});

document.getElementById('checkCities').addEventListener('click', () => {
    predictCities();
});


const routesData = [
    { start: 'Mumbai', end: 'Pune', cost: 500, middleRoutes: ['Lonavala'] },
    { start: 'Mumbai', end: 'Nagpur', cost: 1200, middleRoutes: ['Indore', 'Bhopal'] },
    { start: 'Pune', end: 'Nagpur', cost: 1000, middleRoutes: ['Aurangabad', 'Amravati'] },
    { start: 'Mumbai', end: 'Aurangabad', cost: 800, middleRoutes: ['Shirdi'] },
    { start: 'Pune', end: 'Aurangabad', cost: 700, middleRoutes: ['Nashik'] },
    { start: 'Nagpur', end: 'Aurangabad', cost: 900, middleRoutes: ['Bhusawal'] },
    // Adding more routes
    { start: 'Nashik', end: 'Pune', cost: 600, middleRoutes: ['Shirdi'] },
    { start: 'Mumbai', end: 'Kolhapur', cost: 1000, middleRoutes: ['Lonavala', 'Satara'] },
    { start: 'Nagpur', end: 'Kolhapur', cost: 1400, middleRoutes: ['Amravati', 'Sangli'] },
    { start: 'Pune', end: 'Nashik', cost: 500, middleRoutes: ['Ahmednagar'] },
    { start: 'Aurangabad', end: 'Nashik', cost: 400, middleRoutes: ['Jalgaon'] },
    { start: 'Nagpur', end: 'Pune', cost: 1100, middleRoutes: ['Wardha', 'Amravati'] },
    { start: 'Mumbai', end: 'Nashik', cost: 300, middleRoutes: ['Kasara'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1300, middleRoutes: ['Solapur', 'Satara'] },
    { start: 'Nashik', end: 'Nagpur', cost: 900, middleRoutes: ['Jalgaon', 'Bhusawal'] },
    { start: 'Pune', end: 'Mumbai', cost: 450, middleRoutes: ['Lonavala'] },
    { start: 'Kolhapur', end: 'Nagpur', cost: 1400, middleRoutes: ['Sangli', 'Solapur'] },
    { start: 'Mumbai', end: 'Amravati', cost: 1000, middleRoutes: ['Nasik', 'Jalgaon'] },
    { start: 'Pune', end: 'Solapur', cost: 400, middleRoutes: ['Baramati'] },
    { start: 'Mumbai', end: 'Chandrapur', cost: 1500, middleRoutes: ['Aurangabad', 'Nagpur'] },
    { start: 'Pune', end: 'Kolhapur', cost: 500, middleRoutes: ['Satara'] },
    { start: 'Nagpur', end: 'Chandrapur', cost: 200, middleRoutes: ['Wardha'] },
    { start: 'Mumbai', end: 'Nanded', cost: 1000, middleRoutes: ['Aurangabad', 'Parbhani'] },
    { start: 'Nashik', end: 'Kolhapur', cost: 1100, middleRoutes: ['Pune', 'Satara'] },
    { start: 'Pune', end: 'Jalgaon', cost: 700, middleRoutes: ['Ahmednagar', 'Aurangabad'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1200, middleRoutes: ['Amravati', 'Akola'] },
    { start: 'Mumbai', end: 'Ratnagiri', cost: 600, middleRoutes: ['Chiplun'] },
    { start: 'Aurangabad', end: 'Pune', cost: 700, middleRoutes: ['Ahmednagar'] },
    { start: 'Nagpur', end: 'Nanded', cost: 600, middleRoutes: ['Yavatmal'] },
    { start: 'Pune', end: 'Satara', cost: 300, middleRoutes: [] },
    { start: 'Mumbai', end: 'Dhule', cost: 800, middleRoutes: ['Nasik', 'Malegaon'] },
    { start: 'Nagpur', end: 'Yavatmal', cost: 300, middleRoutes: [] },
    { start: 'Mumbai', end: 'Satara', cost: 700, middleRoutes: ['Pune'] },
    { start: 'Nashik', end: 'Aurangabad', cost: 500, middleRoutes: ['Ahmednagar'] },
    { start: 'Pune', end: 'Bhandara', cost: 1300, middleRoutes: ['Nagpur', 'Wardha'] },
    { start: 'Mumbai', end: 'Bhandara', cost: 1600, middleRoutes: ['Aurangabad', 'Nagpur'] },
    { start: 'Nagpur', end: 'Akola', cost: 400, middleRoutes: ['Amravati'] },
    { start: 'Pune', end: 'Ahmednagar', cost: 300, middleRoutes: [] },
    { start: 'Mumbai', end: 'Latur', cost: 900, middleRoutes: ['Pune', 'Solapur'] },
    { start: 'Nashik', end: 'Latur', cost: 800, middleRoutes: ['Ahmednagar', 'Beed'] },
    { start: 'Aurangabad', end: 'Ratnagiri', cost: 1000, middleRoutes: ['Pune', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Gondia', cost: 200, middleRoutes: [] },
    { start: 'Mumbai', end: 'Beed', cost: 700, middleRoutes: ['Nashik', 'Aurangabad'] },
    { start: 'Pune', end: 'Chiplun', cost: 500, middleRoutes: ['Satara'] },
    { start: 'Nagpur', end: 'Wardha', cost: 100, middleRoutes: [] },
    { start: 'Nashik', end: 'Chandrapur', cost: 1200, middleRoutes: ['Jalgaon', 'Nagpur'] },
    { start: 'Mumbai', end: 'Yavatmal', cost: 1100, middleRoutes: ['Aurangabad', 'Nanded'] },
    { start: 'Pune', end: 'Bhusawal', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad'] },
    { start: 'Nagpur', end: 'Malegaon', cost: 700, middleRoutes: ['Akola', 'Dhule'] },
    { start: 'Mumbai', end: 'Jalna', cost: 750, middleRoutes: ['Nashik', 'Aurangabad'] },
    { start: 'Pune', end: 'Gondia', cost: 1500, middleRoutes: ['Nagpur', 'Bhandara'] },
    { start: 'Aurangabad', end: 'Latur', cost: 600, middleRoutes: ['Beed'] },
    { start: 'Nagpur', end: 'Shirdi', cost: 800, middleRoutes: ['Amravati', 'Nashik'] },
    { start: 'Mumbai', end: 'Solapur', cost: 1000, middleRoutes: ['Pune'] },
    { start: 'Pune', end: 'Dhule', cost: 900, middleRoutes: ['Nashik', 'Malegaon'] },
    { start: 'Nagpur', end: 'Ahmednagar', cost: 900, middleRoutes: ['Aurangabad', 'Shirdi'] },
    { start: 'Nashik', end: 'Solapur', cost: 1100, middleRoutes: ['Pune', 'Satara'] },
    { start: 'Mumbai', end: 'Nashik', cost: 400, middleRoutes: ['Thane', 'Kasara'] },
    { start: 'Aurangabad', end: 'Dhule', cost: 600, middleRoutes: ['Jalgaon', 'Malegaon'] },
    { start: 'Nagpur', end: 'Ratnagiri', cost: 1500, middleRoutes: ['Amravati', 'Kolhapur'] },
    { start: 'Pune', end: 'Chandrapur', cost: 1400, middleRoutes: ['Nagpur', 'Wardha'] },
    { start: 'Mumbai', end: 'Akola', cost: 1200, middleRoutes: ['Nashik', 'Jalgaon'] },
    { start: 'Pune', end: 'Amravati', cost: 1000, middleRoutes: ['Aurangabad', 'Nagpur'] },
    { start: 'Nagpur', end: 'Satara', cost: 1300, middleRoutes: ['Amravati', 'Pune'] },
    { start: 'Mumbai', end: 'Sangli', cost: 900, middleRoutes: ['Pune', 'Satara'] },
    { start: 'Aurangabad', end: 'Beed', cost: 300, middleRoutes: [] },
    { start: 'Nagpur', end: 'Parbhani', cost: 700, middleRoutes: ['Yavatmal', 'Nanded'] },
    { start: 'Mumbai', end: 'Wardha', cost: 1300, middleRoutes: ['Aurangabad', 'Nagpur'] },
    { start: 'Pune', end: 'Chandrapur', cost: 1400, middleRoutes: ['Nagpur', 'Wardha'] },
    { start: 'Nashik', end: 'Beed', cost: 600, middleRoutes: ['Aurangabad'] },
    { start: 'Pune', end: 'Nanded', cost: 1000, middleRoutes: ['Solapur', 'Latur'] },
    { start: 'Nagpur', end: 'Latur', cost: 1100, middleRoutes: ['Amravati', 'Solapur'] },
    { start: 'Mumbai', end: 'Ahmednagar', cost: 600, middleRoutes: ['Nashik', 'Shirdi'] },
    { start: 'Aurangabad', end: 'Solapur', cost: 700, middleRoutes: ['Beed'] },
    { start: 'Nagpur', end: 'Satara', cost: 1200, middleRoutes: ['Amravati', 'Pune'] },
    { start: 'Mumbai', end: 'Chiplun', cost: 500, middleRoutes: ['Ratnagiri'] },
    { start: 'Pune', end: 'Ratnagiri', cost: 700, middleRoutes: ['Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Shirdi', cost: 800, middleRoutes: ['Amravati', 'Nashik'] },
    { start: 'Mumbai', end: 'Bhusawal', cost: 900, middleRoutes: ['Nashik', 'Jalgaon'] },
    { start: 'Pune', end: 'Yavatmal', cost: 1300, middleRoutes: ['Aurangabad', 'Nanded'] },
    { start: 'Nagpur', end: 'Shirdi', cost: 800, middleRoutes: ['Amravati', 'Nashik'] },
    { start: 'Mumbai', end: 'Parbhani', cost: 1000, middleRoutes: ['Nashik', 'Aurangabad'] },
    { start: 'Pune', end: 'Bhandara', cost: 1300, middleRoutes: ['Nagpur', 'Wardha'] },
    { start: 'Nagpur', end: 'Latur', cost: 1100, middleRoutes: ['Amravati', 'Solapur'] },
    { start: 'Mumbai', end: 'Sangli', cost: 900, middleRoutes: ['Pune', 'Satara'] },
    { start: 'Pune', end: 'Yavatmal', cost: 1300, middleRoutes: ['Aurangabad', 'Nanded'] },
    { start: 'Nagpur', end: 'Wardha', cost: 100, middleRoutes: [] },
    { start: 'Mumbai', end: 'Ratnagiri', cost: 600, middleRoutes: ['Chiplun'] },
    { start: 'Pune', end: 'Latur', cost: 900, middleRoutes: ['Solapur', 'Osmanabad'] },
    { start: 'Aurangabad', end: 'Osmanabad', cost: 400, middleRoutes: ['Beed'] },
    { start: 'Nagpur', end: 'Osmanabad', cost: 1000, middleRoutes: ['Amravati', 'Latur'] },
    { start: 'Mumbai', end: 'Gondia', cost: 1600, middleRoutes: ['Aurangabad', 'Nagpur'] },
    { start: 'Pune', end: 'Wardha', cost: 1200, middleRoutes: ['Nagpur'] },
    { start: 'Nashik', end: 'Yavatmal', cost: 800, middleRoutes: ['Jalgaon', 'Akola'] },
    { start: 'Aurangabad', end: 'Shirdi', cost: 300, middleRoutes: [] },
    { start: 'Nagpur', end: 'Nashik', cost: 900, middleRoutes: ['Amravati', 'Aurangabad'] },
    { start: 'Mumbai', end: 'Nagpur', cost: 1200, middleRoutes: ['Indore', 'Bhopal'] }
];

function predictCities() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    
    const lowerStart = start.toLowerCase();
    const lowerEnd = end.toLowerCase();

    
    const route = routesData.find(route => 
        route.start.toLowerCase() === lowerStart && route.end.toLowerCase() === lowerEnd
    );

    const tableBody = document.querySelector('#citiesTable tbody');
    tableBody.innerHTML = ''; 

    if (route) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${route.start} to ${route.end}</td><td>$${route.cost}</td><td>${route.middleRoutes.join(', ')}</td>`;
        tableBody.appendChild(row);
    } else {
        tableBody.innerHTML = '<tr><td colspan="3" class="text-center">No available routes for the selected locations</td></tr>';
    }
}



    $('.nav-item').on('click', function() {
        var $this = $(this);
        
        $this.addClass('animate');
        
        setTimeout(function() {
            $this.removeClass('animate');
        }, 500); 
    });

    scrollReveal()