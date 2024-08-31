document.getElementById('bus-selection-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const route = document.getElementById('route').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Mock bus data with multiple images (Replace with API call in a real application)
    const mockBuses = [
        { 
            name: 'Bus A', 
            route: route, 
            adults: adults, 
            children: children, 
            price: '$50', 
            images: [
                'https://example.com/bus-a1.jpg',
                'https://example.com/bus-a2.jpg',
                'https://example.com/bus-a3.jpg'
            ]
        },
        { 
            name: 'Bus B', 
            route: route, 
            adults: adults, 
            children: children, 
            price: '$70', 
            images: [
                'https://example.com/bus-b1.jpg',
                'https://example.com/bus-b2.jpg',
                'https://example.com/bus-b3.jpg'
            ]
        }
    ];

    // Display bus results
    const resultsContainer = document.getElementById('bus-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    mockBuses.forEach(bus => {
        const busElement = document.createElement('div');
        busElement.className = 'bus-item';
        
        // Create image gallery
        const imageGallery = bus.images.map(src => `<img src="${src}" alt="Bus Image">`).join('');
        
        busElement.innerHTML = `
            <div class="bus-images">
                ${imageGallery}
            </div>
            <div>
                <h3>${bus.name}</h3>
                <p>Price: ${bus.price}</p>
                <button onclick="bookBus('${bus.name}')">Book Now</button>
            </div>
        `;
        resultsContainer.appendChild(busElement);
    });
});

function bookBus(busName) {
    // Redirect to booking page with bus name as query parameter
    window.location.href = `bus-confirmation.html?bus=${encodeURIComponent(busName)}`;
}
