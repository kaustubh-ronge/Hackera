// Sample predefined routes data with start and end points in Maharashtra
const routes = [
    {
        id: 1,
        start: "Mumbai",
        end: "Pune",
        name: "Mumbai to Pune via Lonavala",
        distance: 150, // Distance in km
        steps: [
            "Start at Mumbai",
            "Continue to Navi Mumbai",
            "Turn left to reach Lonavala",
            "Destination at Pune"
        ],
        hotels: [
            { name: "The Orchid Hotel", location: "Lonavala", cost: 5000 },
            { name: "Novotel Imagica Khopoli", location: "Khopoli", cost: 6000 }
        ],
        foodOptions: [
            { name: "Sunny Da Dhaba", location: "Lonavala", cost: 500 },
            { name: "Fariyas Resort Restaurant", location: "Lonavala", cost: 700 },
            { name: "A1 Chaat Corner", location: "Mumbai", cost: 200 },
            { name: "Hotel Shree Krishna", location: "Pune", cost: 300 }
        ],
        placesToVisit: [
            { name: "Lonavala Lake", cost: 200 },
            { name: "Bhushi Dam", cost: 150 },
            { name: "Elephanta Caves", cost: 250 },
            { name: "Gateway of India", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Bus", cost: 1500 },
            { mode: "Train", cost: 2000 },
            { mode: "Cab", cost: 3500 }
        ]
    },
    // Other route objects with similar structure...

        // Route 1
        {
            id: 2,
            start: "Pune",
            end: "Mumbai",
            name: "Pune to Mumbai via Khandala",
            distance: 160,
            steps: [
                "Start at Pune",
                "Drive to Khandala",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "The Dukes Retreat", location: "Khandala", cost: 5500 },
                { name: "Hotel Kamath", location: "Mumbai", cost: 4500 }
            ],
            foodOptions: [
                { name: "Hotel Kamat", location: "Khandala", cost: 600 },
                { name: "Madhuban Restaurant", location: "Mumbai", cost: 700 }
            ],
            placesToVisit: [
                { name: "Karla Caves", cost: 300 },
                { name: "Lonavala Lake", cost: 200 }
            ],
            transportation: [
                { mode: "Bus", cost: 1600 },
                { mode: "Train", cost: 2000 }
            ]
        },
        // Route 2
        {
            id: 3,
            start: "Mumbai",
            end: "Aurangabad",
            name: "Mumbai to Aurangabad via Nashik",
            distance: 300,
            steps: [
                "Start at Mumbai",
                "Drive to Nashik",
                "Continue to Aurangabad"
            ],
            hotels: [
                { name: "The Gateway Hotel", location: "Nashik", cost: 5000 },
                { name: "Vivanta Aurangabad", location: "Aurangabad", cost: 7000 }
            ],
            foodOptions: [
                { name: "Sula Vineyard Restaurant", location: "Nashik", cost: 700 },
                { name: "Hotel Panchavati", location: "Aurangabad", cost: 600 }
            ],
            placesToVisit: [
                { name: "Sula Vineyard", cost: 400 },
                { name: "Ellora Caves", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 4000 },
                { mode: "Train", cost: 2500 }
            ]
        },
        // Route 3
        {
            id: 4,
            start: "Nagpur",
            end: "Mumbai",
            name: "Nagpur to Mumbai via Jalna",
            distance: 450,
            steps: [
                "Start at Nagpur",
                "Drive to Jalna",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "Hotel Centre Point", location: "Nagpur", cost: 4000 },
                { name: "The Orchid Hotel", location: "Mumbai", cost: 5000 }
            ],
            foodOptions: [
                { name: "Café Coffee Day", location: "Nagpur", cost: 250 },
                { name: "Leopold Café", location: "Mumbai", cost: 700 }
            ],
            placesToVisit: [
                { name: "Nagpur Orange Orchard", cost: 200 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Train", cost: 3000 },
                { mode: "Bus", cost: 1800 }
            ]
        },
        // Route 4
        {
            id: 5,
            start: "Pune",
            end: "Aurangabad",
            name: "Pune to Aurangabad via Ahmednagar",
            distance: 220,
            steps: [
                "Start at Pune",
                "Drive to Ahmednagar",
                "Continue to Aurangabad"
            ],
            hotels: [
                { name: "Hotel Ashoka", location: "Ahmednagar", cost: 3500 },
                { name: "The Aurangabad Marriott", location: "Aurangabad", cost: 6000 }
            ],
            foodOptions: [
                { name: "A1 Restaurant", location: "Ahmednagar", cost: 400 },
                { name: "Hotel Mangi Ferra", location: "Aurangabad", cost: 500 }
            ],
            placesToVisit: [
                { name: "Ajanta Caves", cost: 300 },
                { name: "Ellora Caves", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 3000 },
                { mode: "Train", cost: 2200 }
            ]
        },
        // Route 5
        {
            id: 6,
            start: "Mumbai",
            end: "Pune",
            name: "Mumbai to Pune via Thane",
            distance: 130,
            steps: [
                "Start at Mumbai",
                "Drive to Thane",
                "Continue to Pune"
            ],
            hotels: [
                { name: "Hotel Vihang's Inn", location: "Thane", cost: 4000 },
                { name: "The Leela Palace", location: "Pune", cost: 7000 }
            ],
            foodOptions: [
                { name: "Kailash Parbat", location: "Thane", cost: 600 },
                { name: "Ajeet Fast Food", location: "Pune", cost: 300 }
            ],
            placesToVisit: [
                { name: "Kasa Fort", cost: 150 },
                { name: "Shaniwarwada", cost: 200 }
            ],
            transportation: [
                { mode: "Cab", cost: 2500 },
                { mode: "Train", cost: 1500 }
            ]
        },
        // Route 6
        {
            id: 7,
            start: "Nagpur",
            end: "Aurangabad",
            name: "Nagpur to Aurangabad via Wardha",
            distance: 530,
            steps: [
                "Start at Nagpur",
                "Drive to Wardha",
                "Continue to Aurangabad"
            ],
            hotels: [
                { name: "Hotel Aangan", location: "Wardha", cost: 2800 },
                { name: "Hotel Rajwada", location: "Aurangabad", cost: 5000 }
            ],
            foodOptions: [
                { name: "Shivaji Veg Restaurant", location: "Wardha", cost: 250 },
                { name: "Shiv Sagar", location: "Aurangabad", cost: 400 }
            ],
            placesToVisit: [
                { name: "Wardha Ashram", cost: 200 },
                { name: "Bibi Ka Maqbara", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 3500 },
                { mode: "Bus", cost: 2000 }
            ]
        },
        // Route 7
        {
            id: 8,
            start: "Mumbai",
            end: "Nagpur",
            name: "Mumbai to Nagpur via Nashik",
            distance: 500,
            steps: [
                "Start at Mumbai",
                "Drive to Nashik",
                "Continue to Nagpur"
            ],
            hotels: [
                { name: "Ginger Nashik", location: "Nashik", cost: 3500 },
                { name: "Hotel Centre Point", location: "Nagpur", cost: 4000 }
            ],
            foodOptions: [
                { name: "Grape View Restaurant", location: "Nashik", cost: 600 },
                { name: "The Yellow Chilli", location: "Nagpur", cost: 500 }
            ],
            placesToVisit: [
                { name: "Sula Vineyard", cost: 300 },
                { name: "Futala Lake", cost: 150 }
            ],
            transportation: [
                { mode: "Train", cost: 3000 },
                { mode: "Bus", cost: 2200 }
            ]
        },
        // Route 8
        {
            id: 9,
            start: "Pune",
            end: "Nashik",
            name: "Pune to Nashik via Igatpuri",
            distance: 200,
            steps: [
                "Start at Pune",
                "Drive to Igatpuri",
                "Continue to Nashik"
            ],
            hotels: [
                { name: "Hotel Manas", location: "Igatpuri", cost: 3500 },
                { name: "The Gateway Hotel", location: "Nashik", cost: 5000 }
            ],
            foodOptions: [
                { name: "Sula Vineyard Restaurant", location: "Nashik", cost: 700 },
                { name: "Hotel Shree Krishna", location: "Pune", cost: 400 }
            ],
            placesToVisit: [
                { name: "Kalsubai Peak", cost: 200 },
                { name: "Pandav Leni", cost: 150 }
            ],
            transportation: [
                { mode: "Car", cost: 3000 },
                { mode: "Bus", cost: 1800 }
            ]
        },
        // Route 9
        {
            id: 10,
            start: "Aurangabad",
            end: "Nagpur",
            name: "Aurangabad to Nagpur via Jalna",
            distance: 470,
            steps: [
                "Start at Aurangabad",
                "Drive to Jalna",
                "Continue to Nagpur"
            ],
            hotels: [
                { name: "Hotel Panchavati", location: "Jalna", cost: 3000 },
                { name: "Hotel Aangan", location: "Nagpur", cost: 3500 }
            ],
            foodOptions: [
                { name: "Hotel Shree Krishna", location: "Aurangabad", cost: 500 },
                { name: "Kailash Parbat", location: "Nagpur", cost: 600 }
            ],
            placesToVisit: [
                { name: "Bibi Ka Maqbara", cost: 250 },
                { name: "Nagzira Wildlife Sanctuary", cost: 300 }
            ],
            transportation: [
                { mode: "Car", cost: 3500 },
                { mode: "Train", cost: 2200 }
            ]
        },
        // Route 10
        {
            id: 11,
            start: "Nagpur",
            end: "Mumbai",
            name: "Nagpur to Mumbai via Wardha",
            distance: 550,
            steps: [
                "Start at Nagpur",
                "Drive to Wardha",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "Hotel Aangan", location: "Wardha", cost: 2800 },
                { name: "The Leela Mumbai", location: "Mumbai", cost: 8000 }
            ],
            foodOptions: [
                { name: "Shiv Sagar", location: "Wardha", cost: 300 },
                { name: "Leopold Café", location: "Mumbai", cost: 700 }
            ],
            placesToVisit: [
                { name: "Wardha Ashram", cost: 200 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Train", cost: 3500 },
                { mode: "Bus", cost: 2000 }
            ]
        },
        // Route 11
        {
            id: 12,
            start: "Mumbai",
            end: "Nashik",
            name: "Mumbai to Nashik via Thane",
            distance: 180,
            steps: [
                "Start at Mumbai",
                "Drive to Thane",
                "Continue to Nashik"
            ],
            hotels: [
                { name: "Hotel Vihang's Inn", location: "Thane", cost: 4000 },
                { name: "Ginger Nashik", location: "Nashik", cost: 3500 }
            ],
            foodOptions: [
                { name: "Hotel Kamat", location: "Thane", cost: 500 },
                { name: "Sula Vineyard Restaurant", location: "Nashik", cost: 700 }
            ],
            placesToVisit: [
                { name: "Kasa Fort", cost: 150 },
                { name: "Sula Vineyard", cost: 300 }
            ],
            transportation: [
                { mode: "Train", cost: 1800 },
                { mode: "Car", cost: 2500 }
            ]
        },
        // Route 12
        {
            id: 13,
            start: "Aurangabad",
            end: "Mumbai",
            name: "Aurangabad to Mumbai via Nashik",
            distance: 500,
            steps: [
                "Start at Aurangabad",
                "Drive to Nashik",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "Hotel Panchavati", location: "Nashik", cost: 3000 },
                { name: "The Orchid Hotel", location: "Mumbai", cost: 5000 }
            ],
            foodOptions: [
                { name: "Sula Vineyard Restaurant", location: "Nashik", cost: 700 },
                { name: "Kailash Parbat", location: "Mumbai", cost: 600 }
            ],
            placesToVisit: [
                { name: "Ellora Caves", cost: 250 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Car", cost: 4000 },
                { mode: "Train", cost: 2500 }
            ]
        },
        // Route 13
        {
            id: 14,
            start: "Pune",
            end: "Nagpur",
            name: "Pune to Nagpur via Ahmednagar",
            distance: 400,
            steps: [
                "Start at Pune",
                "Drive to Ahmednagar",
                "Continue to Nagpur"
            ],
            hotels: [
                { name: "Hotel Ashoka", location: "Ahmednagar", cost: 3500 },
                { name: "Hotel Centre Point", location: "Nagpur", cost: 4000 }
            ],
            foodOptions: [
                { name: "Hotel Kamat", location: "Ahmednagar", cost: 400 },
                { name: "Café Coffee Day", location: "Nagpur", cost: 250 }
            ],
            placesToVisit: [
                { name: "Ajanta Caves", cost: 300 },
                { name: "Nagzira Wildlife Sanctuary", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 3500 },
                { mode: "Train", cost: 3000 }
            ]
        },
        // Route 14
        {
            id: 15,
            start: "Mumbai",
            end: "Pune",
            name: "Mumbai to Pune via Khopoli",
            distance: 140,
            steps: [
                "Start at Mumbai",
                "Drive to Khopoli",
                "Continue to Pune"
            ],
            hotels: [
                { name: "Novotel Imagica Khopoli", location: "Khopoli", cost: 6000 },
                { name: "Hotel Le Meridien", location: "Pune", cost: 7000 }
            ],
            foodOptions: [
                { name: "Fariyas Resort Restaurant", location: "Khopoli", cost: 700 },
                { name: "Hotel Shree Krishna", location: "Pune", cost: 300 }
            ],
            placesToVisit: [
                { name: "Imagica Theme Park", cost: 500 },
                { name: "Shaniwarwada", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 2500 },
                { mode: "Bus", cost: 1600 }
            ]
        },
        // Route 15
        {
            id: 16,
            start: "Aurangabad",
            end: "Pune",
            name: "Aurangabad to Pune via Nashik",
            distance: 330,
            steps: [
                "Start at Aurangabad",
                "Drive to Nashik",
                "Continue to Pune"
            ],
            hotels: [
                { name: "The Gateway Hotel", location: "Nashik", cost: 5000 },
                { name: "Hotel Vihar", location: "Pune", cost: 4000 }
            ],
            foodOptions: [
                { name: "Sula Vineyard Restaurant", location: "Nashik", cost: 700 },
                { name: "Ajeet Fast Food", location: "Pune", cost: 300 }
            ],
            placesToVisit: [
                { name: "Ellora Caves", cost: 250 },
                { name: "Shaniwarwada", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 3000 },
                { mode: "Train", cost: 2000 }
            ]
        },
        // Route 16
        {
            id: 17,
            start: "Pune",
            end: "Aurangabad",
            name: "Pune to Aurangabad via Shirdi",
            distance: 240,
            steps: [
                "Start at Pune",
                "Drive to Shirdi",
                "Continue to Aurangabad"
            ],
            hotels: [
                { name: "Hotel Sai Grand", location: "Shirdi", cost: 3500 },
                { name: "Hotel The Royal", location: "Aurangabad", cost: 5000 }
            ],
            foodOptions: [
                { name: "Shirdi Sai Food Court", location: "Shirdi", cost: 300 },
                { name: "Hotel Shree Krishna", location: "Aurangabad", cost: 500 }
            ],
            placesToVisit: [
                { name: "Sai Baba Temple", cost: 200 },
                { name: "Bibi Ka Maqbara", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 3000 },
                { mode: "Bus", cost: 1800 }
            ]
        },
        // Route 17
        {
            id: 18,
            start: "Nagpur",
            end: "Mumbai",
            name: "Nagpur to Mumbai via Amravati",
            distance: 480,
            steps: [
                "Start at Nagpur",
                "Drive to Amravati",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "Hotel Mehfil Inn", location: "Amravati", cost: 3500 },
                { name: "The Leela Mumbai", location: "Mumbai", cost: 8000 }
            ],
            foodOptions: [
                { name: "Hotel Rainbow", location: "Amravati", cost: 300 },
                { name: "Kailash Parbat", location: "Mumbai", cost: 600 }
            ],
            placesToVisit: [
                { name: "Ambareshwar Temple", cost: 150 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Train", cost: 3000 },
                { mode: "Bus", cost: 2200 }
            ]
        },
        // Route 18
        {
            id: 19,
            start: "Mumbai",
            end: "Aurangabad",
            name: "Mumbai to Aurangabad via Nashik",
            distance: 440,
            steps: [
                "Start at Mumbai",
                "Drive to Nashik",
                "Continue to Aurangabad"
            ],
            hotels: [
                { name: "The Gateway Hotel", location: "Nashik", cost: 5000 },
                { name: "Hotel Rajwada", location: "Aurangabad", cost: 5000 }
            ],
            foodOptions: [
                { name: "Sula Vineyard Restaurant", location: "Nashik", cost: 700 },
                { name: "Hotel Mangi Ferra", location: "Aurangabad", cost: 500 }
            ],
            placesToVisit: [
                { name: "Sula Vineyard", cost: 300 },
                { name: "Ellora Caves", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 3500 },
                { mode: "Train", cost: 2500 }
            ]
        },
        // Route 19
        {
            id: 20,
            start: "Pune",
            end: "Mumbai",
            name: "Pune to Mumbai via Lonavala",
            distance: 160,
            steps: [
                "Start at Pune",
                "Drive to Lonavala",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "The Orchid Hotel", location: "Lonavala", cost: 5000 },
                { name: "The Leela Palace", location: "Mumbai", cost: 8000 }
            ],
            foodOptions: [
                { name: "Sunny Da Dhaba", location: "Lonavala", cost: 500 },
                { name: "Ajeet Fast Food", location: "Pune", cost: 300 }
            ],
            placesToVisit: [
                { name: "Lonavala Lake", cost: 200 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Car", cost: 2500 },
                { mode: "Train", cost: 1500 }
            ]
        },
        // Route 20
        {
            id: 21,
            start: "Mumbai",
            end: "Pune",
            name: "Mumbai to Pune via Karjat",
            distance: 140,
            steps: [
                "Start at Mumbai",
                "Drive to Karjat",
                "Continue to Pune"
            ],
            hotels: [
                { name: "Hotel Laxmi", location: "Karjat", cost: 3000 },
                { name: "The Leela Palace", location: "Pune", cost: 7000 }
            ],
            foodOptions: [
                { name: "Kailash Parbat", location: "Karjat", cost: 500 },
                { name: "Hotel Shree Krishna", location: "Pune", cost: 300 }
            ],
            placesToVisit: [
                { name: "Karjat Dam", cost: 150 },
                { name: "Shaniwarwada", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 2500 },
                { mode: "Train", cost: 1500 }
            ]
        },
        // Route 21
        {
            id: 22,
            start: "Aurangabad",
            end: "Mumbai",
            name: "Aurangabad to Mumbai via Jalna",
            distance: 450,
            steps: [
                "Start at Aurangabad",
                "Drive to Jalna",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "Hotel Shree Krishna", location: "Jalna", cost: 3000 },
                { name: "The Orchid Hotel", location: "Mumbai", cost: 5000 }
            ],
            foodOptions: [
                { name: "Hotel Panchavati", location: "Jalna", cost: 400 },
                { name: "Leopold Café", location: "Mumbai", cost: 700 }
            ],
            placesToVisit: [
                { name: "Ellora Caves", cost: 250 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Car", cost: 3500 },
                { mode: "Train", cost: 2200 }
            ]
        },
        // Route 22
        {
            id: 23,
            start: "Nagpur",
            end: "Mumbai",
            name: "Nagpur to Mumbai via Amravati",
            distance: 500,
            steps: [
                "Start at Nagpur",
                "Drive to Amravati",
                "Continue to Mumbai"
            ],
            hotels: [
                { name: "Hotel Mehfil Inn", location: "Amravati", cost: 3500 },
                { name: "The Leela Mumbai", location: "Mumbai", cost: 8000 }
            ],
            foodOptions: [
                { name: "Hotel Rainbow", location: "Amravati", cost: 300 },
                { name: "Kailash Parbat", location: "Mumbai", cost: 600 }
            ],
            placesToVisit: [
                { name: "Ambareshwar Temple", cost: 150 },
                { name: "Gateway of India", cost: 150 }
            ],
            transportation: [
                { mode: "Car", cost: 3500 },
                { mode: "Train", cost: 3000 }
            ]
        },
        // Route 23
        {
            id: 24,
            start: "Mumbai",
            end: "Nagpur",
            name: "Mumbai to Nagpur via Wardha",
            distance: 550,
            steps: [
                "Start at Mumbai",
                "Drive to Wardha",
                "Continue to Nagpur"
            ],
            hotels: [
                { name: "Hotel Aangan", location: "Wardha", cost: 2800 },
                { name: "Hotel Centre Point", location: "Nagpur", cost: 4000 }
            ],
            foodOptions: [
                { name: "Shiv Sagar", location: "Wardha", cost: 300 },
                { name: "The Yellow Chilli", location: "Nagpur", cost: 500 }
            ],
            placesToVisit: [
                { name: "Wardha Ashram", cost: 200 },
                { name: "Futala Lake", cost: 150 }
            ],
            transportation: [
                { mode: "Train", cost: 3500 },
                { mode: "Bus", cost: 2000 }
            ]
        },
        // Route 24
        {
            id: 25,
            start: "Pune",
            end: "Aurangabad",
            name: "Pune to Aurangabad via Shirdi",
            distance: 240,
            steps: [
                "Start at Pune",
                "Drive to Shirdi",
                "Continue to Aurangabad"
            ],
            hotels: [
                { name: "Hotel Sai Grand", location: "Shirdi", cost: 3500 },
                { name: "Hotel Rajwada", location: "Aurangabad", cost: 5000 }
            ],
            foodOptions: [
                { name: "Shirdi Sai Food Court", location: "Shirdi", cost: 300 },
                { name: "Hotel Shree Krishna", location: "Aurangabad", cost: 500 }
            ],
            placesToVisit: [
                { name: "Sai Baba Temple", cost: 200 },
                { name: "Bibi Ka Maqbara", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 3000 },
                { mode: "Bus", cost: 1800 }
            ]
        },
        // Route 25
        {
            id: 26,
            start: "Mumbai",
            end: "Pune",
            name: "Mumbai to Pune via Lonavala",
            distance: 160,
            steps: [
                "Start at Mumbai",
                "Drive to Lonavala",
                "Continue to Pune"
            ],
            hotels: [
                { name: "The Orchid Hotel", location: "Lonavala", cost: 5000 },
                { name: "The Leela Palace", location: "Pune", cost: 7000 }
            ],
            foodOptions: [
                { name: "Sunny Da Dhaba", location: "Lonavala", cost: 500 },
                { name: "Ajeet Fast Food", location: "Pune", cost: 300 }
            ],
            placesToVisit: [
                { name: "Lonavala Lake", cost: 200 },
                { name: "Shaniwarwada", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 2500 },
                { mode: "Train", cost: 1500 }
            ]
        },
        // Route 26
       
    

];

// Function to calculate route cost based on distance, hotel prices, food, places to visit, and transportation
function calculateRouteCost(route) {
    const costPerKm = 0.5; // Example cost per km
    const travelCost = route.distance * costPerKm;

    // Calculate total hotel costs (sum of all hotel costs on the route)
    const totalHotelCost = route.hotels.reduce((total, hotel) => total + hotel.cost, 0);

    // Calculate total food costs (sum of all food costs on the route)
    const totalFoodCost = route.foodOptions.reduce((total, food) => total + food.cost, 0);

    // Calculate total places to visit costs (sum of all costs for visiting places)
    const totalPlacesCost = route.placesToVisit.reduce((total, place) => total + place.cost, 0);

    // Calculate total transportation costs (sum of all transportation costs)
    const totalTransportCost = route.transportation.reduce((total, transport) => total + transport.cost, 0);

    // Total cost is travel cost + hotel costs + food costs + places to visit costs + transportation costs
    const totalCost = travelCost + totalHotelCost + totalFoodCost + totalPlacesCost + totalTransportCost;
    return totalCost;
}

// Function to reverse steps and hotels for reversed routes
function reverseRoute(route) {
    const reversedSteps = [...route.steps].reverse().map(step => {
        // Replacing start and end points in the step description
        return step.replace(route.start, route.end).replace(route.end, route.start);
    });

    const reversedHotels = [...route.hotels].reverse().map(hotel => {
        return {
            name: hotel.name,
            location: hotel.location,
            cost: hotel.cost
        };
    });

    return {
        ...route,
        start: route.end,
        end: route.start,
        steps: reversedSteps,
        hotels: reversedHotels
    };
}


function displayRoutes() {
    const startLocation = document.getElementById("start").value;
    const endLocation = document.getElementById("end").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filteredRoutes = routes.filter(route => route.start.toLowerCase() === startLocation && route.end.toLowerCase() === endLocation);

    
    const reversedRoutes = routes.filter(route => route.start.toLowerCase() === endLocation && route.end.toLowerCase() === startLocation);

    if (filteredRoutes.length === 0 && reversedRoutes.length === 0) {
        resultsDiv.innerHTML = "<p>No routes found for the selected start and end locations.</p>";
        return;
    }

    let cheapestRoute = null;
    let lowestCost = Infinity;

   
    function createRouteTable(route, isReversed = false) {
        const totalCost = calculateRouteCost(route);

       
        let tableHTML = `
        <div class="tables-container">
            <!-- Left Side Data -->
            <div class="table-wrapper">
                <table class="route-table">
                    <thead>
                        <tr><th colspan="2">${isReversed ? `${route.name} (Reversed)` : route.name}</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Total Distance:</td><td>${route.distance} km</td></tr>
                        <tr><td>Travel Cost:</td><td>₹${(route.distance * 0.5).toFixed(2)}</td></tr>
                        <tr><td>Hotel Costs:</td><td>₹${route.hotels.reduce((total, hotel) => total + hotel.cost, 0)}</td></tr>
                        <tr><td>Food Costs:</td><td>₹${route.foodOptions.reduce((total, food) => total + (food.cost || 0), 0)}</td></tr>
                        <tr><td>Places to Visit Costs:</td><td>₹${route.placesToVisit.reduce((total, place) => total + (place.cost || 0), 0)}</td></tr>
                        <tr><td>Transportation Costs:</td><td>₹${route.transportation.reduce((total, transport) => total + (transport.cost || 0), 0)}</td></tr>
                        <tr><td><strong>Total Estimated Cost:</strong></td><td><strong>₹${totalCost.toFixed(2)}</strong></td></tr>
                    </tbody>
                </table>
            </div>
            
            <!-- Right Side Data -->
            <div class="table-wrapper">
                <table class="route-table">
                    <thead>
                        <tr><th colspan="2">${isReversed ? `${route.name} (Reversed)` : route.name}</th></tr>
                    </thead>
                    <tbody>
                        <tr><th colspan="2">Steps:</th></tr>
                        ${route.steps.map(step => `<tr><td colspan="2">${step}</td></tr>`).join('')}
                        <tr><th colspan="2">Suggested Hotels:</th></tr>
                        ${route.hotels.map(hotel => `<tr><td colspan="2">${hotel.name} at ${hotel.location} - ₹${hotel.cost}</td></tr>`).join('')}
                        <tr><th colspan="2">Food Options:</th></tr>
                        ${route.foodOptions.map(food => `<tr><td colspan="2">${food.name} at ${food.location} - Specialty: ${food.specialty}</td></tr>`).join('')}
                        <tr><th colspan="2">Places to Visit:</th></tr>
                        ${route.placesToVisit.map(place => `<tr><td colspan="2">${place.name} - ${place.description}</td></tr>`).join('')}
                        <tr><th colspan="2">Transportation:</th></tr>
                        ${route.transportation.map(transport => `<tr><td colspan="2">${transport.mode} - ${transport.description}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
        
        
    

        return tableHTML;
    }


    // Display regular routes
    filteredRoutes.forEach(route => {
        const routeDiv = document.createElement("div");
        routeDiv.className = "route";
        routeDiv.innerHTML = createRouteTable(route);
        resultsDiv.appendChild(routeDiv);

        // Check for the cheapest route
        const totalCost = calculateRouteCost(route);
        if (totalCost < lowestCost) {
            lowestCost = totalCost;
            cheapestRoute = route;
        }
    });

    // Display reversed routes
    reversedRoutes.forEach(route => {
        const reversedRoute = reverseRoute(route);
        const routeDiv = document.createElement("div");
        routeDiv.className = "route";
        routeDiv.innerHTML = createRouteTable(reversedRoute, true);
        resultsDiv.appendChild(routeDiv);

        // Check for the cheapest reversed route
        const totalCost = calculateRouteCost(reversedRoute);
        if (totalCost < lowestCost) {
            lowestCost = totalCost;
            cheapestRoute = reversedRoute;
        }
    });

    // Display the cheapest route information
    if (cheapestRoute) {
        const cheapestRouteDiv = document.createElement("div");
        cheapestRouteDiv.className = "cheapest-route";
        cheapestRouteDiv.innerHTML = `<h2>Cheapest Route: ${cheapestRoute.name}</h2>
            <p>Estimated cost: ₹${lowestCost.toFixed(2)}</p>`;
        resultsDiv.appendChild(cheapestRouteDiv);
    }
}

// Attach event listener to the button
// Attach event listener to the button
document.getElementById("calculate").addEventListener("click", () => {
    displayRoutes();
});
