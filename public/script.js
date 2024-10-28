document.addEventListener('DOMContentLoaded', async () => {

    let nav = document.querySelector('.navbar');
window.onscroll =  function (){
    if(document.documentElement.scrollTop > 10){
        nav.classList.add('header-scrolled')
    }
    else{
        nav.classList.remove('header-scrolled')
    }
}


let screenWidth = window.innerWidth

if(screenWidth>320 && screenWidth<438){
    nav.style ='background-color:#091020;'
}




let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function(a){
    a.addEventListener("click",()=>{
        navCollapse.classList.remove("show")
    })
})


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
    { start: 'Mumbai', end: 'Pune', cost: 500, middleRoutes: ['Lonavala', 'Khandala'] },
    { start: 'Mumbai', end: 'Nagpur', cost: 1800, middleRoutes: ['Lonavala', 'Pune', 'Solapur', 'Aurangabad', 'Nanded', 'Wardha'] },
    { start: 'Pune', end: 'Nagpur', cost: 1500, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Bhusawal', 'Akola', 'Wardha', 'Nagpur'] },
    { start: 'Mumbai', end: 'Aurangabad', cost: 800, middleRoutes: ['Thane', 'Nashik', 'Shirdi', 'Ellora Caves'] },
    { start: 'Pune', end: 'Aurangabad', cost: 700, middleRoutes: ['Nashik', 'Shani Shingnapur', 'Ellora Caves', 'Daulatabad Fort'] },
    { start: 'Nagpur', end: 'Aurangabad', cost: 900, middleRoutes: ['Amravati', 'Akola', 'Jalgaon', 'Bhusawal'] },
    { start: 'Nashik', end: 'Pune', cost: 600, middleRoutes: ['Shirdi', 'Ahmednagar', 'Chakan', 'Khed'] },
    { start: 'Mumbai', end: 'Kolhapur', cost: 1300, middleRoutes: ['Thane', 'Lonavala', 'Satara', 'Mahabaleshwar', 'Panhala Fort'] },
    { start: 'Nagpur', end: 'Kolhapur', cost: 1700, middleRoutes: ['Amravati', 'Akola', 'Solapur', 'Pandharpur', 'Sangli'] },
    { start: 'Pune', end: 'Nashik', cost: 700, middleRoutes: ['Ahmednagar', 'Shani Shingnapur', 'Bhandardara', 'Trimbakeshwar'] },
    { start: 'Aurangabad', end: 'Nashik', cost: 700, middleRoutes: ['Jalgaon', 'Bhusawal', 'Malegaon', 'Bhandardara'] },
    { start: 'Nagpur', end: 'Pune', cost: 1600, middleRoutes: ['Wardha', 'Amravati', 'Akola', 'Jalgaon', 'Nashik'] },
    { start: 'Mumbai', end: 'Nashik', cost: 350, middleRoutes: ['Thane', 'Kasara', 'Igatpuri', 'Trimbakeshwar', 'Shirdi'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1300, middleRoutes: ['Solapur', 'Satara', 'Mahabaleshwar', 'Ratnagiri'] },
    { start: 'Nashik', end: 'Nagpur', cost: 1100, middleRoutes: ['Jalgaon', 'Bhusawal', 'Amravati', 'Pench National Park'] },
    { start: 'Pune', end: 'Mumbai', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Khopoli', 'Panvel'] },
    { start: 'Kolhapur', end: 'Nagpur', cost: 1900, middleRoutes: ['Sangli', 'Solapur', 'Akola', 'Amravati', 'Wardha'] },
    { start: 'Mumbai', end: 'Amravati', cost: 1200, middleRoutes: ['Nashik', 'Jalgaon', 'Burhanpur', 'Khandwa', 'Melghat Tiger Reserve'] },
    { start: 'Pune', end: 'Solapur', cost: 600, middleRoutes: ['Baramati', 'Indapur', 'Pandharpur', 'Akkalkot'] },
    { start: 'Mumbai', end: 'Chandrapur', cost: 2000, middleRoutes: ['Pune', 'Aurangabad', 'Nagpur', 'Wardha', 'Tadoba Andhari Tiger Reserve'] },
    { start: 'Pune', end: 'Kolhapur', cost: 600, middleRoutes: ['Satara', 'Karad', 'Panhala', 'Dajipur Wildlife Sanctuary'] },
    { start: 'Nagpur', end: 'Chandrapur', cost: 400, middleRoutes: ['Wardha', 'Hinganghat', 'Warora', 'Tadoba Andhari Tiger Reserve'] },
    { start: 'Mumbai', end: 'Nanded', cost: 1500, middleRoutes: ['Pune', 'Solapur', 'Tuljapur', 'Osmanabad', 'Parbhani'] },
    { start: 'Nashik', end: 'Kolhapur', cost: 1200, middleRoutes: ['Pune', 'Satara', 'Mahabaleshwar', 'Panhala'] },
    { start: 'Pune', end: 'Jalgaon', cost: 900, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Ajanta Caves', 'Chalisgaon'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1500, middleRoutes: ['Amravati', 'Akola', 'Parbhani', 'Osmanabad'] },
    { start: 'Mumbai', end: 'Ratnagiri', cost: 700, middleRoutes: ['Chiplun', 'Ganpatipule', 'Dapoli', 'Guhagar'] },
    { start: 'Aurangabad', end: 'Pune', cost: 800, middleRoutes: ['Ahmednagar', 'Shirdi', 'Sangamner', 'Rajgurunagar'] },
    { start: 'Nagpur', end: 'Nanded', cost: 800, middleRoutes: ['Yavatmal', 'Hingoli', 'Parbhani', 'Hazur Sahib'] },
    { start: 'Pune', end: 'Satara', cost: 400, middleRoutes: ['Wai', 'Panchgani', 'Mahabaleshwar'] },
    { start: 'Mumbai', end: 'Dhule', cost: 900, middleRoutes: ['Thane', 'Nashik', 'Malegaon', 'Shirpur'] },
    { start: 'Nagpur', end: 'Yavatmal', cost: 500, middleRoutes: ['Wardha', 'Pulgaon', 'Digras'] },
    { start: 'Mumbai', end: 'Satara', cost: 800, middleRoutes: ['Lonavala', 'Pune', 'Mahabaleshwar'] },
    { start: 'Nashik', end: 'Aurangabad', cost: 600, middleRoutes: ['Shirdi', 'Ellora Caves', 'Daulatabad Fort'] },
    { start: 'Pune', end: 'Bhandara', cost: 1500, middleRoutes: ['Nagpur', 'Wardha', 'Tadoba Andhari Tiger Reserve', 'Gondia'] },
    { start: 'Mumbai', end: 'Bhandara', cost: 1700, middleRoutes: ['Aurangabad', 'Nagpur', 'Wardha', 'Tadoba Andhari Tiger Reserve'] },
    { start: 'Nagpur', end: 'Akola', cost: 500, middleRoutes: ['Amravati', 'Daryapur', 'Anjangaon'] },
    { start: 'Pune', end: 'Ahmednagar', cost: 400, middleRoutes: ['Shirur', 'Shani Shingnapur', 'Ranjangaon'] },
    { start: 'Mumbai', end: 'Latur', cost: 1200, middleRoutes: ['Pune', 'Solapur', 'Tuljapur', 'Osmanabad'] },
    { start: 'Nashik', end: 'Latur', cost: 1000, middleRoutes: ['Ahmednagar', 'Beed', 'Parli Vaijnath', 'Udgir Fort'] },
    { start: 'Aurangabad', end: 'Ratnagiri', cost: 1200, middleRoutes: ['Pune', 'Satara', 'Kolhapur', 'Chiplun'] },
    { start: 'Nagpur', end: 'Gondia', cost: 400, middleRoutes: ['Bhandara', 'Tumsar', 'Pench National Park'] },
    { start: 'Mumbai', end: 'Beed', cost: 800, middleRoutes: ['Nashik', 'Aurangabad', 'Shani Shingnapur'] },
    { start: 'Pune', end: 'Chiplun', cost: 600, middleRoutes: ['Satara', 'Mahabaleshwar', 'Poladpur'] },
    { start: 'Nagpur', end: 'Wardha', cost: 200, middleRoutes: ['Hinganghat', 'Sevagram', 'Pulgaon'] },
    { start: 'Mumbai', end: 'Parbhani', cost: 1000, middleRoutes: ['Pune', 'Solapur', 'Tuljapur', 'Nanded'] },
    { start: 'Pune', end: 'Parbhani', cost: 800, middleRoutes: ['Solapur', 'Tuljapur', 'Osmanabad', 'Beed'] },
    { start: 'Nagpur', end: 'Dhule', cost: 1100, middleRoutes: ['Amravati', 'Jalgaon', 'Chalisgaon'] },
    { start: 'Mumbai', end: 'Hingoli', cost: 1500, middleRoutes: ['Pune', 'Solapur', 'Parbhani', 'Nanded'] },
    { start: 'Nashik', end: 'Hingoli', cost: 1000, middleRoutes: ['Shirdi', 'Parbhani', 'Nanded'] },
    { start: 'Pune', end: 'Hingoli', cost: 1400, middleRoutes: ['Solapur', 'Tuljapur', 'Nanded'] },
    { start: 'Nagpur', end: 'Shirdi', cost: 1000, middleRoutes: ['Amravati', 'Jalgaon', 'Aurangabad'] },
    { start: 'Mumbai', end: 'Chiplun', cost: 600, middleRoutes: ['Panvel', 'Khopoli', 'Poladpur'] },
    { start: 'Pune', end: 'Belgaum', cost: 1000, middleRoutes: ['Satara', 'Kolhapur', 'Gokak'] },
    { start: 'Nagpur', end: 'Amravati', cost: 300, middleRoutes: ['Wardha', 'Pulgaon'] },
    { start: 'Mumbai', end: 'Gondia', cost: 1500, middleRoutes: ['Aurangabad', 'Nagpur', 'Bhandara'] },
    { start: 'Pune', end: 'Bhopal', cost: 1800, middleRoutes: ['Indore', 'Ujjain', 'Dewas'] },
    { start: 'Nagpur', end: 'Pune', cost: 1600, middleRoutes: ['Amravati', 'Akola', 'Jalgaon', 'Nashik', 'Lonavala'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Thane', 'Khopoli', 'Lonavala', 'Khandala', 'Wakad'] },
    { start: 'Nagpur', end: 'Ahmednagar', cost: 1300, middleRoutes: ['Wardha', 'Aurangabad', 'Shirdi'] },
    { start: 'Pune', end: 'Nanded', cost: 1300, middleRoutes: ['Solapur', 'Tuljapur', 'Parbhani', 'Hingoli'] },
    { start: 'Aurangabad', end: 'Chandrapur', cost: 1600, middleRoutes: ['Jalgaon', 'Nagpur', 'Wardha', 'Tadoba'] },
    { start: 'Mumbai', end: 'Wardha', cost: 1500, middleRoutes: ['Aurangabad', 'Nagpur', 'Sevagram'] },
    { start: 'Nashik', end: 'Solapur', cost: 900, middleRoutes: ['Ahmednagar', 'Daund', 'Baramati'] },
    { start: 'Pune', end: 'Satara', cost: 500, middleRoutes: ['Wai', 'Mahabaleshwar'] },
    { start: 'Nagpur', end: 'Yavatmal', cost: 500, middleRoutes: ['Wardha', 'Pulgaon', 'Digras'] },
    { start: 'Mumbai', end: 'Dhule', cost: 900, middleRoutes: ['Thane', 'Nashik', 'Malegaon', 'Shirpur'] },
    { start: 'Pune', end: 'Shirdi', cost: 500, middleRoutes: ['Sangamner', 'Loni'] },
    { start: 'Nagpur', end: 'Bhandara', cost: 400, middleRoutes: ['Kamptee', 'Tumsar'] },
    { start: 'Mumbai', end: 'Solapur', cost: 1200, middleRoutes: ['Pune', 'Daund', 'Baramati', 'Indapur'] },
    { start: 'Aurangabad', end: 'Solapur', cost: 800, middleRoutes: ['Beed', 'Osmanabad', 'Tuljapur'] },
    { start: 'Nagpur', end: 'Mumbai', cost: 1600, middleRoutes: ['Wardha', 'Amravati', 'Akola', 'Jalgaon', 'Nashik'] },
    { start: 'Aurangabad', end: 'Goa', cost: 1800, middleRoutes: ['Pune', 'Satara', 'Kolhapur', 'Belgaum', 'Dudhsagar Falls', 'Panaji'] },
    { start: 'Mumbai', end: 'Hyderabad', cost: 2000, middleRoutes: ['Pune', 'Solapur', 'Bijapur', 'Gulbarga', 'Ramoji Film City'] },
    { start: 'Pune', end: 'Udaipur', cost: 2500, middleRoutes: ['Mumbai', 'Surat', 'Vadodara', 'Ahmedabad', 'Mount Abu', 'Haldighati'] },
    { start: 'Nagpur', end: 'Bhopal', cost: 1000, middleRoutes: ['Seoni', 'Pachmarhi', 'Hoshangabad', 'Bhimbetka', 'Sanchi'] },
    { start: 'Mumbai', end: 'Jaipur', cost: 2500, middleRoutes: ['Surat', 'Vadodara', 'Udaipur', 'Ajmer', 'Pushkar'] },
    { start: 'Pune', end: 'Bangalore', cost: 1800, middleRoutes: ['Kolhapur', 'Belgaum', 'Hubli', 'Chitradurga', 'Tumkur'] },
    { start: 'Mumbai', end: 'Bangalore', cost: 2000, middleRoutes: ['Pune', 'Satara', 'Hubli', 'Chitradurga', 'Hassan', 'Mysore'] },
    { start: 'Aurangabad', end: 'Ahmedabad', cost: 1300, middleRoutes: ['Jalgaon', 'Indore', 'Dewas', 'Ujjain', 'Godhra'] },
    { start: 'Nagpur', end: 'Jabalpur', cost: 800, middleRoutes: ['Seoni', 'Pench National Park', 'Bhedaghat', 'Mandla'] },
    {start: 'Mumbai', end: 'Kalyan', cost: 600, middleRoutes: ['Thane', 'Bhiwandi', 'Dombivli', 'Kalyan'] },
    { start: 'Pune', end: 'Nasik', cost: 700, middleRoutes: ['Khed', 'Sinnar', 'Niphad', 'Nasik'] },
    { start: 'Aurangabad', end: 'Jalgaon', cost: 600, middleRoutes: ['Chalisgaon', 'Pachora', 'Jalgaon'] },
    { start: 'Nagpur', end: 'Amravati', cost: 400, middleRoutes: ['Wardha', 'Pulgaon', 'Morshi', 'Amravati'] },
    { start: 'Mumbai', end: 'Alibaug', cost: 800, middleRoutes: ['Panvel', 'Uran', 'Mandwa', 'Alibaug'] },
    { start: 'Pune', end: 'Satara', cost: 400, middleRoutes: ['Khandala', 'Wai', 'Mahabaleshwar', 'Satara'] },
    { start: 'Aurangabad', end: 'Pune', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Shirdi', 'Ahmednagar', 'Pune'] },
    { start: 'Nagpur', end: 'Jalna', cost: 800, middleRoutes: ['Wardha', 'Sevagram', 'Pulgaon', 'Malkapur', 'Jalna'] },
    { start: 'Mumbai', end: 'Ratnagiri', cost: 900, middleRoutes: ['Chiplun', 'Khed', 'Ganpatipule', 'Ratnagiri'] },
    { start: 'Pune', end: 'Kolhapur', cost: 700, middleRoutes: ['Satara', 'Kagal', 'Kolhapur'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1200, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dombivli', cost: 500, middleRoutes: ['Thane', 'Bhiwandi', 'Kalyan', 'Dombivli'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Nagpur', cost: 1500, middleRoutes: ['Jalna', 'Wardha', 'Amravati', 'Nagpur'] },
    { start: 'Nagpur', end: 'Nashik', cost: 1400, middleRoutes: ['Wardha', 'Amravati', 'Akola', 'Jalgaon', 'Nashik'] },
    { start: 'Mumbai', end: 'Beed', cost: 800, middleRoutes: ['Aurangabad', 'Jalna', 'Beed'] },
    { start: 'Pune', end: 'Ratnagiri', cost: 1000, middleRoutes: ['Satara', 'Khatav', 'Mahabaleshwar', 'Chiplun', 'Ratnagiri'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Bhandara', cost: 500, middleRoutes: ['Sevagram', 'Wardha', 'Kamptee', 'Bhandara'] },
    { start: 'Mumbai', end: 'Satara', cost: 700, middleRoutes: ['Pune', 'Khandala', 'Wai', 'Mahabaleshwar', 'Satara'] },
    { start: 'Pune', end: 'Shirdi', cost: 600, middleRoutes: ['Sangamner', 'Nashik', 'Shirdi'] },
    { start: 'Aurangabad', end: 'Chandrapur', cost: 1600, middleRoutes: ['Jalna', 'Wardha', 'Nagpur', 'Chandrapur'] },
    { start: 'Nagpur', end: 'Yavatmal', cost: 500, middleRoutes: ['Wardha', 'Pulgaon', 'Digras', 'Yavatmal'] },
    { start: 'Mumbai', end: 'Nanded', cost: 1200, middleRoutes: ['Aurangabad', 'Beed', 'Parbhani', 'Nanded'] },
    { start: 'Pune', end: 'Solapur', cost: 500, middleRoutes: ['Baramati', 'Indapur', 'Solapur'] },
    { start: 'Aurangabad', end: 'Nashik', cost: 700, middleRoutes: ['Jalna', 'Beed', 'Ahmednagar', 'Nashik'] },
    { start: 'Nagpur', end: 'Gondia', cost: 400, middleRoutes: ['Tumsar', 'Saragbundia', 'Gondia'] },
    { start: 'Mumbai', end: 'Kolhapur', cost: 1300, middleRoutes: ['Satara', 'Mahabaleshwar', 'Kagal', 'Kolhapur'] },
    { start: 'Pune', end: 'Panhala', cost: 600, middleRoutes: ['Satara', 'Kavthemahankal', 'Panhala'] },
    { start: 'Aurangabad', end: 'Jalgaon', cost: 700, middleRoutes: ['Chalisgaon', 'Pachora', 'Jalgaon'] },
    { start: 'Nagpur', end: 'Akola', cost: 800, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Ratnagiri', cost: 1000, middleRoutes: ['Chiplun', 'Khed', 'Ganpatipule', 'Ratnagiri'] },
    { start: 'Pune', end: 'Latur', cost: 1300, middleRoutes: ['Solapur', 'Tuljapur', 'Udgir', 'Latur'] },
    { start: 'Aurangabad', end: 'Shirdi', cost: 700, middleRoutes: ['Jalna', 'Beed', 'Ahmednagar', 'Shirdi'] },
    { start: 'Nagpur', end: 'Chandrapur', cost: 500, middleRoutes: ['Wardha', 'Nagbhid', 'Chandrapur'] },
    { start: 'Mumbai', end: 'Jalna', cost: 950, middleRoutes: ['Aurangabad', 'Jalna'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Solapur', cost: 700, middleRoutes: ['Beed', 'Osmanabad', 'Solapur'] },
    { start: 'Nagpur', end: 'Yavatmal', cost: 600, middleRoutes: ['Wardha', 'Pulgaon', 'Digras', 'Yavatmal'] },
    { start: 'Mumbai', end: 'Aurangabad', cost: 1200, middleRoutes: ['Pune', 'Beed', 'Aurangabad'] },
    { start: 'Pune', end: 'Kolhapur', cost: 800, middleRoutes: ['Satara', 'Kagal', 'Kolhapur'] },
    { start: 'Aurangabad', end: 'Bhusawal', cost: 800, middleRoutes: ['Jalna', 'Partur', 'Bhusawal'] },
    { start: 'Nagpur', end: 'Wardha', cost: 300, middleRoutes: ['Kamptee', 'Pulgaon', 'Wardha'] },
    { start: 'Mumbai', end: 'Dhule', cost: 800, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Shirdi', cost: 500, middleRoutes: ['Sangamner', 'Shirdi'] },
    { start: 'Aurangabad', end: 'Nanded', cost: 1000, middleRoutes: ['Jalna', 'Parbhani', 'Nanded'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Satara', cost: 900, middleRoutes: ['Pune', 'Khandala', 'Wai', 'Mahabaleshwar', 'Satara'] },
    { start: 'Pune', end: 'Beed', cost: 600, middleRoutes: ['Aurangabad', 'Jalna', 'Beed'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Jalna', cost: 800, middleRoutes: ['Wardha', 'Pulgaon', 'Amravati', 'Jalna'] },
    { start: 'Mumbai', end: 'Latur', cost: 1100, middleRoutes: ['Pune', 'Solapur', 'Udgir', 'Latur'] },
    { start: 'Pune', end: 'Nashik', cost: 600, middleRoutes: ['Sangamner', 'Nashik'] },
    { start: 'Aurangabad', end: 'Satara', cost: 800, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Bhandara', cost: 500, middleRoutes: ['Wardha', 'Kamptee', 'Bhandara'] },
    { start: 'Mumbai', end: 'Kolhapur', cost: 1100, middleRoutes: ['Pune', 'Satara', 'Mahabaleshwar', 'Kolhapur'] },
    { start: 'Pune', end: 'Aurangabad', cost: 800, middleRoutes: ['Khed', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Jalgaon', cost: 600, middleRoutes: ['Chalisgaon', 'Pachora', 'Jalgaon'] },
    { start: 'Nagpur', end: 'Amravati', cost: 500, middleRoutes: ['Wardha', 'Pulgaon', 'Amravati'] },
    { start: 'Mumbai', end: 'Beed', cost: 800, middleRoutes: ['Aurangabad', 'Jalna', 'Beed'] },
    { start: 'Pune', end: 'Ratnagiri', cost: 1000, middleRoutes: ['Satara', 'Khatav', 'Mahabaleshwar', 'Chiplun', 'Ratnagiri'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1200, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700,middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    {start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] },
    { start: 'Mumbai', end: 'Pune', cost: 450, middleRoutes: ['Lonavala', 'Khandala', 'Pune'] },
    { start: 'Pune', end: 'Jalgaon', cost: 800, middleRoutes: ['Ahmednagar', 'Aurangabad', 'Jalgaon'] },
    { start: 'Aurangabad', end: 'Kolhapur', cost: 1400, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara', 'Kolhapur'] },
    { start: 'Nagpur', end: 'Solapur', cost: 1300, middleRoutes: ['Amravati', 'Akola', 'Khamgaon', 'Baramati', 'Solapur'] },
    { start: 'Mumbai', end: 'Dhule', cost: 1000, middleRoutes: ['Nashik', 'Malegaon', 'Dhule'] },
    { start: 'Pune', end: 'Aurangabad', cost: 1000, middleRoutes: ['Khed', 'Sinnar', 'Nashik', 'Jalgaon', 'Aurangabad'] },
    { start: 'Aurangabad', end: 'Satara', cost: 900, middleRoutes: ['Jalna', 'Beed', 'Solapur', 'Satara'] },
    { start: 'Nagpur', end: 'Akola', cost: 700, middleRoutes: ['Amravati', 'Khamgaon', 'Akola'] }];

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
        row.innerHTML = `<td style="background-color:white; ">${route.start} to ${route.end}</td><td style="background-color:white;">rs.${route.cost}</td><td style="background-color:white;">${route.middleRoutes.join(', ')}</td>`;
        tableBody.appendChild(row);
    } else {
        tableBody.innerHTML = '<tr><td style="background-color:white;" colspan="3" class="text-center">No available routes for the selected locations</td></tr>';
    }
}


    try {
        const response = await fetch('/api/me');
        if (response.ok) {
            const data = await response.json();
           
            document.getElementById('user-info').style.display = 'block';
            document.getElementById('username').textContent = `Welcome, ${data.name}`;
            document.getElementById('logout').style.display = 'inline'; 
            document.getElementById('login-link').style.display = 'none';
            document.getElementById('register-link').style.display = 'none';
        } else {
          
            document.getElementById('user-info').style.display = 'none';
            document.getElementById('logout').style.display = 'none';
            document.getElementById('login-link').style.display = 'inline';
            document.getElementById('register-link').style.display = 'inline';
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});

document.getElementById('logout').addEventListener('click', async () => {
    try {
        await fetch('/api/logout', { method: 'POST' });
        window.location.reload();
    } catch (error) {
        console.error('Error logging out:', error);
    }



    $('.nav-item').on('click', function() {
        var $this = $(this);
        
        $this.addClass('animate');
        
        setTimeout(function() {
            $this.removeClass('animate');
        }, 500); 
    });

    

});

    // ScrollReveal({
    //     reset : true,
    //     distance: "60px",
    //     duration: 2500,
    //     delay: 400


    // })

    
    // ScrollReveal({ reset: true }).reveal('h3', { delay: 500 });