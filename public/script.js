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

// Define static routes and their estimated costs for Maharashtra
const routesData = [
    { start: 'Mumbai', end: 'Pune', cost: 500, middleRoutes: ['Lonavala'] },
    { start: 'Mumbai', end: 'Nagpur', cost: 1200, middleRoutes: ['Indore', 'Bhopal'] },
    { start: 'Pune', end: 'Nagpur', cost: 1000, middleRoutes: ['Aurangabad', 'Amravati'] },
    { start: 'Mumbai', end: 'Aurangabad', cost: 800, middleRoutes: ['Shirdi'] },
    { start: 'Pune', end: 'Aurangabad', cost: 700, middleRoutes: ['Nashik'] },
    { start: 'Nagpur', end: 'Aurangabad', cost: 900, middleRoutes: ['Bhusawal'] }
];

function predictCities() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    // Transform to lowercase for case-insensitive comparison
    const lowerStart = start.toLowerCase();
    const lowerEnd = end.toLowerCase();

    // Filter routes that match the selected start and end locations
    const route = routesData.find(route => 
        route.start.toLowerCase() === lowerStart && route.end.toLowerCase() === lowerEnd
    );

    const tableBody = document.querySelector('#citiesTable tbody');
    tableBody.innerHTML = ''; // Clear previous results

    if (route) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${route.start} to ${route.end}</td><td>$${route.cost}</td><td>${route.middleRoutes.join(', ')}</td>`;
        tableBody.appendChild(row);
    } else {
        tableBody.innerHTML = '<tr><td colspan="3" class="text-center">No available routes for the selected locations</td></tr>';
    }
}
