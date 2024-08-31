
const routes = [
    // Route 26
    {
        "id": 26,
        "start": "Mumbai",
        "end": "Nagpur",
        "name": "Mumbai to Nagpur via Nashik",
        "distance": 850,
        "steps": [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Nagpur"
        ],
        "buses": [
            { "type": "Luxury", "price": 2500 },
            { "type": "Standard", "price": 1800 },
            { "type": "Sleeper", "price": 2000 },
            { "type": "Semi-Luxury", "price": 2200 }
        ],
        "hotels": [
            { "name": "Hotel Sai Palace", "location": "Nashik", "cost": 4000 },
            { "name": "Taj Nagpur", "location": "Nagpur", "cost": 6000 }
        ],
        "foodOptions": [
            { "name": "Vihang Restaurant", "location": "Nashik", "cost": 600 },
            { "name": "Punjabi Dhaba", "location": "Nagpur", "cost": 400 }
        ],
        "placesToVisit": [
            { "name": "Sula Vineyard", "cost": 500 },
            { "name": "Deekshabhoomi", "cost": 0 }
        ],
        "transportation": [
            { "mode": "Car", "cost": 6000 },
            { "mode": "Train", "cost": 3500 }
        ]
    },
    // Route 27
    {
        "id": 27,
        "start": "Mumbai",
        "end": "Aurangabad",
        "name": "Mumbai to Aurangabad via Nashik",
        "distance": 340,
        "steps": [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Aurangabad"
        ],
        "buses": [
            { "type": "Luxury", "price": 1500 },
            { "type": "Standard", "price": 1000 },
            { "type": "Sleeper", "price": 1200 },
            { "type": "Semi-Luxury", "price": 1400 }
        ],
        "hotels": [
            { "name": "Hotel Taj", "location": "Aurangabad", "cost": 7000 },
            { "name": "Hotel Sagar", "location": "Nashik", "cost": 3000 }
        ],
        "foodOptions": [
            { "name": "Hotel Ruchira", "location": "Aurangabad", "cost": 500 },
            { "name": "Nashik Food Court", "location": "Nashik", "cost": 400 }
        ],
        "placesToVisit": [
            { "name": "Ajanta Caves", "cost": 500 },
            { "name": "Ellora Caves", "cost": 500 }
        ],
        "transportation": [
            { "mode": "Car", "cost": 3000 },
            { "mode": "Train", "cost": 1500 }
        ]
    },
    // Route 28
    {
        "id": 28,
        "start": "Mumbai",
        "end": "Goa",
        "name": "Mumbai to Goa via Ratnagiri",
        "distance": 450,
        "steps": [
            "Start at Mumbai",
            "Drive to Ratnagiri",
            "Continue to Goa"
        ],
        "buses": [
            { "type": "Luxury", "price": 2000 },
            { "type": "Standard", "price": 1500 },
            { "type": "Sleeper", "price": 1800 },
            { "type": "Semi-Luxury", "price": 1700 }
        ],
        "hotels": [
            { "name": "Ratnagiri Beach Resort", "location": "Ratnagiri", "cost": 3500 },
            { "name": "Goa Marriott", "location": "Goa", "cost": 8000 }
        ],
        "foodOptions": [
            { "name": "Fish Curry Restaurant", "location": "Ratnagiri", "cost": 600 },
            { "name": "Goan Delights", "location": "Goa", "cost": 500 }
        ],
        "placesToVisit": [
            { "name": "Ganapatipule Beach", "cost": 0 },
            { "name": "Baga Beach", "cost": 0 }
        ],
        "transportation": [
            { "mode": "Car", "cost": 5000 },
            { "mode": "Train", "cost": 2500 }
        ]
    },
    // Route 29
    {
        "id": 29,
        "start": "Pune",
        "end": "Kolhapur",
        "name": "Pune to Kolhapur via Satara",
        "distance": 230,
        "steps": [
            "Start at Pune",
            "Drive to Satara",
            "Continue to Kolhapur"
        ],
        "buses": [
            { "type": "Luxury", "price": 1200 },
            { "type": "Standard", "price": 900 },
            { "type": "Sleeper", "price": 1000 },
            { "type": "Semi-Luxury", "price": 1100 }
        ],
        "hotels": [
            { "name": "Hotel Sai International", "location": "Satara", "cost": 2500 },
            { "name": "Hotel Maratha", "location": "Kolhapur", "cost": 4000 }
        ],
        "foodOptions": [
            { "name": "Hotel Shree Shakti", "location": "Satara", "cost": 300 },
            { "name": "Kolhapur Misal", "location": "Kolhapur", "cost": 200 }
        ],
        "placesToVisit": [
            { "name": "Kaas Plateau", "cost": 100 },
            { "name": "Mahalaxmi Temple", "cost": 0 }
        ],
        "transportation": [
            { "mode": "Car", "cost": 2000 },
            { "mode": "Train", "cost": 1200 }
        ]
    },
    // Route 30
    {
        "id": 30,
        "start": "Nagpur",
        "end": "Jabalpur",
        "name": "Nagpur to Jabalpur via Seoni",
        "distance": 260,
        "steps": [
            "Start at Nagpur",
            "Drive to Seoni",
            "Continue to Jabalpur"
        ],
        "buses": [
            { "type": "Luxury", "price": 1800 },
            { "type": "Standard", "price": 1400 },
            { "type": "Sleeper", "price": 1500 },
            { "type": "Semi-Luxury", "price": 1600 }
        ],
        "hotels": [
            { "name": "Hotel Nagpur", "location": "Nagpur", "cost": 4000 },
            { "name": "Hotel Narmada", "location": "Jabalpur", "cost": 3500 }
        ],
        "foodOptions": [
            { "name": "Nagpur Dhaba", "location": "Nagpur", "cost": 400 },
            { "name": "Jabalpur Eats", "location": "Jabalpur", "cost": 300 }
        ],
        "placesToVisit": [
            { "name": "Pench National Park", "cost": 500 },
            { "name": "Rani Durgavati Museum", "cost": 100 }
        ],
        "transportation": [
            { "mode": "Car", "cost": 2000 },
            { "mode": "Train", "cost": 1000 }
        ]
    },
    {
        "id": 90,
        "start": "Aurangabad",
        "end": "Chandigarh",
        "name": "Aurangabad to Chandigarh via Delhi",
        "distance": 1200,
        "steps": [
            "Start at Aurangabad",
            "Fly to Delhi",
            "Drive to Chandigarh"
        ],
        "buses": [
            { "type": "Luxury", "price": 3000 },
            { "type": "Standard", "price": 2000 },
            { "type": "Sleeper", "price": 2500 },
            { "type": "Semi-Luxury", "price": 2700 }
        ],
        "hotels": [
            { "name": "Hotel Delhi Elite", "location": "Delhi", "cost": 4000 },
            { "name": "Hotel Chandigarh Heights", "location": "Chandigarh", "cost": 4500 }
        ],
        "foodOptions": [
            { "name": "Delhi Street Food", "location": "Delhi", "cost": 350 },
            { "name": "Chandigarh Cuisine", "location": "Chandigarh", "cost": 400 }
        ],
        "placesToVisit": [
            { "name": "Chandigarh Rock Garden", "cost": 150 }
        ],
        "transportation": [
            { "mode": "Flight", "cost": 8000 },
            { "mode": "Car", "cost": 6000 }
        ]
    },

    // Route 31
{
    "id": 31,
    "start": "Mumbai",
    "end": "Ratnagiri",
    "name": "Mumbai to Ratnagiri via Alibaug",
    "distance": 340,
    "steps": [
        "Start at Mumbai",
        "Drive to Alibaug",
        "Continue to Ratnagiri"
    ],
    "hotels": [
        { "name": "Alibaug Beach Resort", "location": "Alibaug", "cost": 4500 },
        { "name": "Ratnagiri Heritage", "location": "Ratnagiri", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Coastal Restaurant", "location": "Alibaug", "cost": 600 },
        { "name": "Ratnagiri Food Corner", "location": "Ratnagiri", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Alibaug Beach", "cost": 0 },
        { "name": "Ganapatipule Beach", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 1200, "timings": ["08:00 AM", "01:00 PM", "06:00 PM"], "availability": "High" }
    ]
},
// Route 32
{
    "id": 32,
    "start": "Pune",
    "end": "Mumbai",
    "name": "Pune to Mumbai via Lonavala",
    "distance": 160,
    "steps": [
        "Start at Pune",
        "Drive to Lonavala",
        "Continue to Mumbai"
    ],
    "hotels": [
        { "name": "The Orchid Hotel", "location": "Lonavala", "cost": 5000 },
        { "name": "The Leela Palace", "location": "Mumbai", "cost": 7000 }
    ],
    "foodOptions": [
        { "name": "Sunny Da Dhaba", "location": "Lonavala", "cost": 500 },
        { "name": "Ajeet Fast Food", "location": "Mumbai", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Lonavala Lake", "cost": 200 },
        { "name": "Gateway of India", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 800, "timings": ["09:00 AM", "02:00 PM", "07:00 PM"], "availability": "Moderate" }
    ]
},
// Route 33
{
    "id": 33,
    "start": "Nagpur",
    "end": "Pune",
    "name": "Nagpur to Pune via Aurangabad",
    "distance": 550,
    "steps": [
        "Start at Nagpur",
        "Drive to Aurangabad",
        "Continue to Pune"
    ],
    "hotels": [
        { "name": "Aurangabad Hotel", "location": "Aurangabad", "cost": 5000 },
        { "name": "Hotel Park Central", "location": "Pune", "cost": 6000 }
    ],
    "foodOptions": [
        { "name": "Aurangabad Biryani", "location": "Aurangabad", "cost": 600 },
        { "name": "Pune Café", "location": "Pune", "cost": 400 }
    ],
    "placesToVisit": [
        { "name": "Ellora Caves", "cost": 500 },
        { "name": "Sinhagad Fort", "cost": 100 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 2500, "timings": ["10:00 AM", "03:00 PM", "08:00 PM"], "availability": "Low" }
    ]
},
// Route 34
{
    "id": 34,
    "start": "Mumbai",
    "end": "Shirdi",
    "name": "Mumbai to Shirdi via Nashik",
    "distance": 300,
    "steps": [
        "Start at Mumbai",
        "Drive to Nashik",
        "Continue to Shirdi"
    ],
    "hotels": [
        { "name": "Hotel Sai Leela", "location": "Shirdi", "cost": 4000 },
        { "name": "Hotel Panchavati", "location": "Nashik", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Shirdi Prasad", "location": "Shirdi", "cost": 200 },
        { "name": "Nashik Dining", "location": "Nashik", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Sai Baba Temple", "cost": 0 },
        { "name": "Kalaram Temple", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 1000, "timings": ["07:00 AM", "12:00 PM", "05:00 PM"], "availability": "High" }
    ]
},
// Route 35
{
    "id": 35,
    "start": "Mumbai",
    "end": "Alibaug",
    "name": "Mumbai to Alibaug via Panvel",
    "distance": 100,
    "steps": [
        "Start at Mumbai",
        "Drive to Panvel",
        "Continue to Alibaug"
    ],
    "hotels": [
        { "name": "U Tropicana Alibaug", "location": "Alibaug", "cost": 6000 },
        { "name": "Hotel Panvel", "location": "Panvel", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "The Fish Grill", "location": "Alibaug", "cost": 700 },
        { "name": "Panvel Veg Restaurant", "location": "Panvel", "cost": 400 }
    ],
    "placesToVisit": [
        { "name": "Alibaug Beach", "cost": 0 },
        { "name": "Kihim Beach", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 600, "timings": ["06:00 AM", "11:00 AM", "04:00 PM"], "availability": "Very High" }
    ]
},

        // Route 36
{
    "id": 36,
    "start": "Pune",
    "end": "Nashik",
    "name": "Pune to Nashik via Kalyan",
    "distance": 220,
    "steps": [
        "Start at Pune",
        "Drive to Kalyan",
        "Continue to Nashik"
    ],
    "hotels": [
        { "name": "Hotel Kailash", "location": "Nashik", "cost": 3500 },
        { "name": "Hotel Prince", "location": "Kalyan", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Nashik Fast Food", "location": "Nashik", "cost": 400 },
        { "name": "Kalyan Diner", "location": "Kalyan", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Sula Vineyard", "cost": 500 },
        { "name": "Kalyan Caves", "cost": 200 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 1000, "timings": ["08:00 AM", "02:00 PM", "07:00 PM"], "availability": "Moderate" }
    ]
},
// Route 37
{
    "id": 37,
    "start": "Nagpur",
    "end": "Bhopal",
    "name": "Nagpur to Bhopal via Seoni",
    "distance": 380,
    "steps": [
        "Start at Nagpur",
        "Drive to Seoni",
        "Continue to Bhopal"
    ],
    "hotels": [
        { "name": "Hotel Nagpur", "location": "Nagpur", "cost": 4000 },
        { "name": "Hotel Lake View", "location": "Bhopal", "cost": 4500 }
    ],
    "foodOptions": [
        { "name": "Nagpur Cuisine", "location": "Nagpur", "cost": 500 },
        { "name": "Bhopal Biryani", "location": "Bhopal", "cost": 400 }
    ],
    "placesToVisit": [
        { "name": "Pench National Park", "cost": 500 },
        { "name": "Taj-ul-Masajid", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 2000, "timings": ["09:00 AM", "03:00 PM", "08:00 PM"], "availability": "Low" }
    ]
},
// Route 38
{
    "id": 38,
    "start": "Mumbai",
    "end": "Panjim",
    "name": "Mumbai to Panjim via Goa",
    "distance": 450,
    "steps": [
        "Start at Mumbai",
        "Drive to Goa",
        "Continue to Panjim"
    ],
    "hotels": [
        { "name": "Hotel Goan Heritage", "location": "Goa", "cost": 5000 },
        { "name": "Panaji Residency", "location": "Panjim", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Goa Seafood", "location": "Goa", "cost": 600 },
        { "name": "Panjim Café", "location": "Panjim", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Baga Beach", "cost": 0 },
        { "name": "Dudhsagar Falls", "cost": 200 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 2500, "timings": ["07:00 AM", "12:00 PM", "05:00 PM"], "availability": "Moderate" }
    ]
},
// Route 39
{
    "id": 39,
    "start": "Pune",
    "end": "Aurangabad",
    "name": "Pune to Aurangabad via Ahmednagar",
    "distance": 270,
    "steps": [
        "Start at Pune",
        "Drive to Ahmednagar",
        "Continue to Aurangabad"
    ],
    "hotels": [
        { "name": "Hotel Panchavati", "location": "Ahmednagar", "cost": 3000 },
        { "name": "Hotel Taj", "location": "Aurangabad", "cost": 7000 }
    ],
    "foodOptions": [
        { "name": "Ahmednagar Delights", "location": "Ahmednagar", "cost": 400 },
        { "name": "Aurangabad Biryani", "location": "Aurangabad", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Ellora Caves", "cost": 500 },
        { "name": "Shirdi Sai Baba Temple", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 1500, "timings": ["08:30 AM", "01:30 PM", "06:30 PM"], "availability": "High" }
    ]
},
// Route 40
{
    "id": 40,
    "start": "Mumbai",
    "end": "Nagpur",
    "name": "Mumbai to Nagpur via Nashik",
    "distance": 850,
    "steps": [
        "Start at Mumbai",
        "Drive to Nashik",
        "Continue to Nagpur"
    ],
    "hotels": [
        { "name": "Hotel Sai Palace", "location": "Nashik", "cost": 4000 },
        { "name": "Taj Nagpur", "location": "Nagpur", "cost": 6000 }
    ],
    "foodOptions": [
        { "name": "Vihang Restaurant", "location": "Nashik", "cost": 600 },
        { "name": "Punjabi Dhaba", "location": "Nagpur", "cost": 400 }
    ],
    "placesToVisit": [
        { "name": "Sula Vineyard", "cost": 500 },
        { "name": "Deekshabhoomi", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 3500, "timings": ["10:00 AM", "03:00 PM", "08:00 PM"], "availability": "Low" }
    ]
},
// Route 41
{
    "id": 41,
    "start": "Kolhapur",
    "end": "Ratnagiri",
    "name": "Kolhapur to Ratnagiri via Kankavli",
    "distance": 200,
    "steps": [
        "Start at Kolhapur",
        "Drive to Kankavli",
        "Continue to Ratnagiri"
    ],
    "hotels": [
        { "name": "Hotel Maratha", "location": "Kolhapur", "cost": 4000 },
        { "name": "Ratnagiri Heritage", "location": "Ratnagiri", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Kolhapur Misal", "location": "Kolhapur", "cost": 200 },
        { "name": "Ratnagiri Food Corner", "location": "Ratnagiri", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Mahalaxmi Temple", "cost": 0 },
        { "name": "Ganapatipule Beach", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Bus", "fare": 800, "timings": ["07:00 AM", "12:00 PM", "05:00 PM"], "availability": "High" }
    ]
},

// Route 42
{
    "id": 42,
    "start": "Mumbai",
    "end": "Goa",
    "name": "Mumbai to Goa via Ratnagiri",
    "distance": 450,
    "steps": [
        "Start at Mumbai",
        "Drive to Ratnagiri",
        "Continue to Goa"
    ],
    "buses": [
        { "type": "Luxury", "price": 3800 },
        { "type": "Standard", "price": 2800 },
        { "type": "Sleeper", "price": 3200 },
        { "type": "Semi-Luxury", "price": 3500 }
    ],
    "hotels": [
        { "name": "Ratnagiri Beach Resort", "location": "Ratnagiri", "cost": 3500 },
        { "name": "Goa Marriott", "location": "Goa", "cost": 8000 }
    ],
    "foodOptions": [
        { "name": "Fish Curry Restaurant", "location": "Ratnagiri", "cost": 600 },
        { "name": "Goan Delights", "location": "Goa", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Ganapatipule Beach", "cost": 0 },
        { "name": "Baga Beach", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 5000 },
        { "mode": "Train", "cost": 2500 }
    ]
},
// Route 43
{
    "id": 43,
    "start": "Mumbai",
    "end": "Pune",
    "name": "Mumbai to Pune via Lonavala",
    "distance": 160,
    "steps": [
        "Start at Mumbai",
        "Drive to Lonavala",
        "Continue to Pune"
    ],
    "buses": [
        { "type": "Luxury", "price": 2000 },
        { "type": "Standard", "price": 1500 },
        { "type": "Sleeper", "price": 1800 },
        { "type": "Semi-Luxury", "price": 1700 }
    ],
    "hotels": [
        { "name": "The Orchid Hotel", "location": "Lonavala", "cost": 5000 },
        { "name": "The Leela Palace", "location": "Pune", "cost": 7000 }
    ],
    "foodOptions": [
        { "name": "Sunny Da Dhaba", "location": "Lonavala", "cost": 500 },
        { "name": "Ajeet Fast Food", "location": "Pune", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Lonavala Lake", "cost": 200 },
        { "name": "Shaniwarwada", "cost": 200 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2500 },
        { "mode": "Train", "cost": 1500 }
    ]
},
// Route 44
{
    "id": 44,
    "start": "Pune",
    "end": "Kolhapur",
    "name": "Pune to Kolhapur via Satara",
    "distance": 230,
    "steps": [
        "Start at Pune",
        "Drive to Satara",
        "Continue to Kolhapur"
    ],
    "buses": [
        { "type": "Luxury", "price": 2500 },
        { "type": "Standard", "price": 2000 },
        { "type": "Sleeper", "price": 2200 },
        { "type": "Semi-Luxury", "price": 2400 }
    ],
    "hotels": [
        { "name": "Hotel Sai International", "location": "Satara", "cost": 2500 },
        { "name": "Hotel Maratha", "location": "Kolhapur", "cost": 4000 }
    ],
},

// Route 46
{
    "id": 46,
    "start": "Mumbai",
    "end": "Aurangabad",
    "name": "Mumbai to Aurangabad via Nashik",
    "distance": 340,
    "steps": [
        "Start at Mumbai",
        "Drive to Nashik",
        "Continue to Aurangabad"
    ],
    "buses": [
        { "type": "Luxury", "price": 3200 },
        { "type": "Standard", "price": 2500 },
        { "type": "Sleeper", "price": 2700 },
        { "type": "Semi-Luxury", "price": 2900 }
    ],
    "hotels": [
        { "name": "Hotel Taj", "location": "Aurangabad", "cost": 7000 },
        { "name": "Hotel Sagar", "location": "Nashik", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Hotel Ruchira", "location": "Aurangabad", "cost": 500 },
        { "name": "Nashik Food Court", "location": "Nashik", "cost": 400 }
    ],
    "placesToVisit": [
        { "name": "Ajanta Caves", "cost": 500 },
        { "name": "Ellora Caves", "cost": 500 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 3000 },
        { "mode": "Train", "cost": 1500 }
    ]
},
// Route 47
{
    "id": 47,
    "start": "Nagpur",
    "end": "Jabalpur",
    "name": "Nagpur to Jabalpur via Seoni",
    "distance": 260,
    "steps": [
        "Start at Nagpur",
        "Drive to Seoni",
        "Continue to Jabalpur"
    ],
    "buses": [
        { "type": "Luxury", "price": 2800 },
        { "type": "Standard", "price": 2000 },
        { "type": "Sleeper", "price": 2400 },
        { "type": "Semi-Luxury", "price": 2600 }
    ],
    "hotels": [
        { "name": "Hotel Nagpur", "location": "Nagpur", "cost": 4000 },
        { "name": "Hotel Narmada", "location": "Jabalpur", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Nagpur Dhaba", "location": "Nagpur", "cost": 400 },
        { "name": "Jabalpur Eats", "location": "Jabalpur", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Pench National Park", "cost": 500 },
        { "name": "Rani Durgavati Museum", "cost": 100 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Train", "cost": 1000 }
    ]
},
// Route 48
{
    "id": 48,
    "start": "Pune",
    "end": "Nashik",
    "name": "Pune to Nashik via Kalyan",
    "distance": 220,
    "steps": [
        "Start at Pune",
        "Drive to Kalyan",
        "Continue to Nashik"
    ],
    "buses": [
        { "type": "Luxury", "price": 3000 },
        { "type": "Standard", "price": 2200 },
        { "type": "Sleeper", "price": 2500 },
        { "type": "Semi-Luxury", "price": 2700 }
    ],
    "hotels": [
        { "name": "Hotel Kailash", "location": "Nashik", "cost": 3500 },
        { "name": "Hotel Prince", "location": "Kalyan", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Nashik Fast Food", "location": "Nashik", "cost": 400 },
        { "name": "Kalyan Diner", "location": "Kalyan", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Sula Vineyard", "cost": 500 },
        { "name": "Kalyan Caves", "cost": 200 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Train", "cost": 1200 }
    ]
},
// Route 49
{
    "id": 49,
    "start": "Mumbai",
    "end": "Shirdi",
    "name": "Mumbai to Shirdi via Nashik",
    "distance": 300,
    "steps": [
        "Start at Mumbai",
        "Drive to Nashik",
        "Continue to Shirdi"
    ],
    "buses": [
        { "type": "Luxury", "price": 3200 },
        { "type": "Standard", "price": 2400 },
        { "type": "Sleeper", "price": 2700 },
        { "type": "Semi-Luxury", "price": 2900 }
    ],
    "hotels": [
        { "name": "Hotel Sai Leela", "location": "Shirdi", "cost": 4000 },
        { "name": "Hotel Panchavati", "location": "Nashik", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Shirdi Prasad", "location": "Shirdi", "cost": 200 },
        { "name": "Nashik Dining", "location": "Nashik", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Sai Baba Temple", "cost": 0 },
        { "name": "Kalaram Temple", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2500 },
        { "mode": "Train", "cost": 1500 }
    ]
},
// Route 50
{
    "id": 50,
    "start": "Mumbai",
    "end": "Latur",
    "name": "Mumbai to Latur via Solapur",
    "distance": 460,
    "steps": [
        "Start at Mumbai",
        "Drive to Solapur",
        "Continue to Latur"
    ],
    "buses": [
        { "type": "Luxury", "price": 3800 },
        { "type": "Standard", "price": 3000 },
        { "type": "Sleeper", "price": 3300 },
        { "type": "Semi-Luxury", "price": 3500 }
    ],
    "hotels": [
        { "name": "Hotel Maitreyee", "location": "Solapur", "cost": 3500 },
        { "name": "Hotel Latur Residency", "location": "Latur", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Solapur Snacks", "location": "Solapur", "cost": 300 },
        { "name": "Latur Diner", "location": "Latur", "cost": 250 }
    ],
    "placesToVisit": [
        { "name": "Pandharpur Temple", "cost": 0 },
        { "name": "Latur Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 4000 },
        { "mode": "Train", "cost": 2000 }
    ]
},
// Route 51
{
    "id": 51,
    "start": "Pune",
    "end": "Ratnagiri",
    "name": "Pune to Ratnagiri via Chiplun",
    "distance": 300,
    "steps": [
        "Start at Pune",
        "Drive to Chiplun",
        "Continue to Ratnagiri"
    ],
    "buses": [
        { "type": "Luxury", "price": 3500 },
        { "type": "Standard", "price": 2800 },
        { "type": "Sleeper", "price": 3100 },
        { "type": "Semi-Luxury", "price": 3300 }
    ],
    "hotels": [
        { "name": "Hotel Pearl", "location": "Chiplun", "cost": 3000 },
        { "name": "Hotel Sea View", "location": "Ratnagiri", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Chiplun Veg", "location": "Chiplun", "cost": 250 },
        { "name": "Ratnagiri Seafood", "location": "Ratnagiri", "cost": 500 }
    ],
    "placesToVisit": [],
},
       


// Route 52
{
    "id": 52,
    "start": "Aurangabad",
    "end": "Jalgaon",
    "name": "Aurangabad to Jalgaon via Bhusawal",
    "distance": 180,
    "steps": [
        "Start at Aurangabad",
        "Drive to Bhusawal",
        "Continue to Jalgaon"
    ],
    "buses": [
        { "type": "Luxury", "price": 2200 },
        { "type": "Standard", "price": 1500 },
        { "type": "Sleeper", "price": 1800 },
        { "type": "Semi-Luxury", "price": 2000 }
    ],
    "hotels": [
        { "name": "Hotel Royal", "location": "Bhusawal", "cost": 2500 },
        { "name": "Hotel Landmark", "location": "Jalgaon", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Bhusawal Kitchen", "location": "Bhusawal", "cost": 300 },
        { "name": "Jalgaon Fast Food", "location": "Jalgaon", "cost": 200 }
    ],
    "placesToVisit": [
        { "name": "Ajanta Caves", "cost": 500 },
        { "name": "Saptashrungi", "cost": 100 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Train", "cost": 1000 }
    ]
},

// Route 53
{
    "id": 53,
    "start": "Nagpur",
    "end": "Raipur",
    "name": "Nagpur to Raipur via Durg",
    "distance": 300,
    "steps": [
        "Start at Nagpur",
        "Drive to Durg",
        "Continue to Raipur"
    ],
    "buses": [
        { "type": "Luxury", "price": 2700 },
        { "type": "Standard", "price": 2000 },
        { "type": "Sleeper", "price": 2300 },
        { "type": "Semi-Luxury", "price": 2500 }
    ],
    "hotels": [
        { "name": "Hotel Durg Residency", "location": "Durg", "cost": 3000 },
        { "name": "Hotel Raipur", "location": "Raipur", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Durg Dining", "location": "Durg", "cost": 300 },
        { "name": "Raipur Biryani", "location": "Raipur", "cost": 400 }
    ],
    "placesToVisit": [
        { "name": "Nagzira Wildlife Sanctuary", "cost": 300 },
        { "name": "Buddhist Monuments", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2500 },
        { "mode": "Train", "cost": 1500 }
    ]
},

// Route 54
{
    "id": 54,
    "start": "Pune",
    "end": "Khandala",
    "name": "Pune to Khandala via Lonavala",
    "distance": 90,
    "steps": [
        "Start at Pune",
        "Drive to Lonavala",
        "Continue to Khandala"
    ],
    "buses": [
        { "type": "Luxury", "price": 1800 },
        { "type": "Standard", "price": 1200 },
        { "type": "Sleeper", "price": 1500 },
        { "type": "Semi-Luxury", "price": 1600 }
    ],
    "hotels": [
        { "name": "Hotel Chandralok", "location": "Lonavala", "cost": 4000 },
        { "name": "Hotel Khandala", "location": "Khandala", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Lonavala Eats", "location": "Lonavala", "cost": 300 },
        { "name": "Khandala Cafe", "location": "Khandala", "cost": 200 }
    ],
    "placesToVisit": [
        { "name": "Khandala Lake", "cost": 100 },
        { "name": "Lonavala Tiger's Leap", "cost": 200 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1200 },
        { "mode": "Train", "cost": 800 }
    ]
},

// Route 55
{
    "id": 55,
    "start": "Mumbai",
    "end": "Sangli",
    "name": "Mumbai to Sangli via Satara",
    "distance": 400,
    "steps": [
        "Start at Mumbai",
        "Drive to Satara",
        "Continue to Sangli"
    ],
    "buses": [
        { "type": "Luxury", "price": 3200 },
        { "type": "Standard", "price": 2500 },
        { "type": "Sleeper", "price": 2800 },
        { "type": "Semi-Luxury", "price": 3000 }
    ],
    "hotels": [
        { "name": "Hotel Kuber", "location": "Satara", "cost": 3000 },
        { "name": "Hotel Sangli", "location": "Sangli", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Satara Tiffin", "location": "Satara", "cost": 250 },
        { "name": "Sangli Restaurant", "location": "Sangli", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Kaas Plateau", "cost": 100 },
        { "name": "Sangli Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 3000 },
        { "mode": "Train", "cost": 1800 }
    ]
},

// Route 56
{
    "id": 56,
    "start": "Mumbai",
    "end": "Khandala",
    "name": "Mumbai to Khandala via Lonavala",
    "distance": 110,
    "steps": [
        "Start at Mumbai",
        "Drive to Lonavala",
        "Continue to Khandala"
    ],
    "buses": [
        { "type": "Luxury", "price": 1800 },
        { "type": "Standard", "price": 1200 },
        { "type": "Sleeper", "price": 1500 },
        { "type": "Semi-Luxury", "price": 1600 }
    ],
    "hotels": [
        { "name": "Hotel Lonavala", "location": "Lonavala", "cost": 4000 },
        { "name": "Hotel Khandala Hill", "location": "Khandala", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Lonavala Local", "location": "Lonavala", "cost": 250 },
        { "name": "Khandala Specialties", "location": "Khandala", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Khandala Sunset Point", "cost": 0 },
        { "name": "Lonavala Wax Museum", "cost": 200 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1500 },
        { "mode": "Train", "cost": 1000 }
    ]
},
// Route 57
{
    "id": 57,
    "start": "Aurangabad",
    "end": "Jalna",
    "name": "Aurangabad to Jalna via Partur",
    "distance": 120,
    "steps": [
        "Start at Aurangabad",
        "Drive to Partur",
        "Continue to Jalna"
    ],
    "buses": [
        { "type": "Luxury", "price": 2000 },
        { "type": "Standard", "price": 1400 },
        { "type": "Sleeper", "price": 1700 },
        { "type": "Semi-Luxury", "price": 1800 }
    ],
    "hotels": [
        { "name": "Hotel Aurangabad Inn", "location": "Aurangabad", "cost": 3500 },
        { "name": "Hotel Jalna Residency", "location": "Jalna", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Aurangabad Special", "location": "Aurangabad", "cost": 250 },
        { "name": "Jalna Delights", "location": "Jalna", "cost": 200 }
    ],
    "placesToVisit": [
        { "name": "Bibi Ka Maqbara", "cost": 100 },
        { "name": "Jalna Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1500 },
        { "mode": "Train", "cost": 800 }
    ]
},
// Route 58
{
    "id": 58,
    "start": "Mumbai",
    "end": "Nashik",
    "name": "Mumbai to Nashik via Thane",
    "distance": 200,
    "steps": [
        "Start at Mumbai",
        "Drive to Thane",
        "Continue to Nashik"
    ],
    "buses": [
        { "type": "Luxury", "price": 2500 },
        { "type": "Standard", "price": 1800 },
        { "type": "Sleeper", "price": 2100 },
        { "type": "Semi-Luxury", "price": 2200 }
    ],
    "hotels": [
        { "name": "Hotel Vihang", "location": "Thane", "cost": 3000 },
        { "name": "Hotel Grandeur", "location": "Nashik", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Thane Cafe", "location": "Thane", "cost": 250 },
        { "name": "Nashik Meals", "location": "Nashik", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Yeoor Hills", "cost": 0 },
        { "name": "Sula Vineyard", "cost": 500 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Train", "cost": 1200 }
    ]
},
// Route 59
{
    "id": 59,
    "start": "Pune",
    "end": "Satara",
    "name": "Pune to Satara via Khed",
    "distance": 160,
    "steps": [
        "Start at Pune",
        "Drive to Khed",
        "Continue to Satara"
    ],
    "buses": [
        { "type": "Luxury", "price": 2200 },
        { "type": "Standard", "price": 1600 },
        { "type": "Sleeper", "price": 1900 },
        { "type": "Semi-Luxury", "price": 2000 }
    ],
    "hotels": [
        { "name": "Hotel Lotus", "location": "Khed", "cost": 3000 },
        { "name": "Hotel Yash", "location": "Satara", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Khed Restaurant", "location": "Khed", "cost": 250 },
        { "name": "Satara Biryani", "location": "Satara", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Kaas Plateau", "cost": 100 },
        { "name": "Satara Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1500 },
        { "mode": "Train", "cost": 1000 }
    ]
},
// Route 60
{
    "id": 60,
    "start": "Nagpur",
    "end": "Chandrapur",
    "name": "Nagpur to Chandrapur via Ballarshah",
    "distance": 220,
    "steps": [
        "Start at Nagpur",
        "Drive to Ballarshah",
        "Continue to Chandrapur"
    ],
    "buses": [
        { "type": "Luxury", "price": 2700 },
        { "type": "Standard", "price": 2000 },
        { "type": "Sleeper", "price": 2300 },
        { "type": "Semi-Luxury", "price": 2400 }
    ],
    "hotels": [
        { "name": "Hotel Ballarshah", "location": "Ballarshah", "cost": 3000 },
        { "name": "Hotel Chandrapur Inn", "location": "Chandrapur", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Ballarshah Dining", "location": "Ballarshah", "cost": 250 },
        { "name": "Chandrapur Local", "location": "Chandrapur", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Tadoba National Park", "cost": 500 },
        { "name": "Chandrapur Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Train", "cost": 1200 }
    ]
},
// Route 61
{
    "id": 61,
    "start": "Aurangabad",
    "end": "Beed",
    "name": "Aurangabad to Beed via Jalna",
    "distance": 150,
    "steps": [
        "Start at Aurangabad",
        "Drive to Jalna",
        "Continue to Beed"
    ],
    "hotels": [
        { "name": "Hotel Prakash", "location": "Jalna", "cost": 2500 },
        { "name": "Hotel Beed Palace", "location": "Beed", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Jalna Eats", "location": "Jalna", "cost": 200 },
        { "name": "Beed Delicacies", "location": "Beed", "cost": 250 }
    ],
    "placesToVisit": [
        { "name": "Bibi Ka Maqbara", "cost": 100 },
        { "name": "Beed Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1500 },
        { "mode": "Train", "cost": 1000 }
    ],
    "buses": [
        { "type": "Standard", "price": 800 },
        { "type": "Semi-Luxury", "price": 1000 }
    ]
},
// Route 62
{
    "id": 62,
    "start": "Mumbai",
    "end": "Alibaug",
    "name": "Mumbai to Alibaug via Panvel",
    "distance": 150,
    "steps": [
        "Start at Mumbai",
        "Drive to Panvel",
        "Continue to Alibaug"
    ],
    "hotels": [
        { "name": "Hotel Panvel Garden", "location": "Panvel", "cost": 3000 },
        { "name": "Hotel Alibaug", "location": "Alibaug", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Panvel Cafe", "location": "Panvel", "cost": 250 },
        { "name": "Alibaug Seafood", "location": "Alibaug", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Alibaug Beach", "cost": 0 },
        { "name": "Kihim Beach", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Ferry", "cost": 1000 }
    ],
    "buses": [
        { "type": "Standard", "price": 700 },
        { "type": "Luxury", "price": 1500 }
    ]
},
// Route 63
{
    "id": 63,
    "start": "Pune",
    "end": "Mahabaleshwar",
    "name": "Pune to Mahabaleshwar via Wai",
    "distance": 120,
    "steps": [
        "Start at Pune",
        "Drive to Wai",
        "Continue to Mahabaleshwar"
    ],
    "hotels": [
        { "name": "Hotel Wai", "location": "Wai", "cost": 3000 },
        { "name": "Hotel Mahabaleshwar", "location": "Mahabaleshwar", "cost": 5000 }
    ],
    "foodOptions": [
        { "name": "Wai Snacks", "location": "Wai", "cost": 250 },
        { "name": "Mahabaleshwar Cafe", "location": "Mahabaleshwar", "cost": 350 }
    ],
    "placesToVisit": [
        { "name": "Venna Lake", "cost": 0 },
        { "name": "Arthur's Seat", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1500 },
        { "mode": "Bus", "cost": 800 }
    ],
    "buses": [
        { "type": "Standard", "price": 600 },
        { "type": "Semi-Luxury", "price": 1000 }
    ]
},
// Route 64
{
    "id": 64,
    "start": "Nagpur",
    "end": "Wardha",
    "name": "Nagpur to Wardha via Hinganghat",
    "distance": 130,
    "steps": [
        "Start at Nagpur",
        "Drive to Hinganghat",
        "Continue to Wardha"
    ],
    "hotels": [
        { "name": "Hotel Hinganghat", "location": "Hinganghat", "cost": 2500 },
        { "name": "Hotel Wardha Palace", "location": "Wardha", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Hinganghat Tiffin", "location": "Hinganghat", "cost": 200 },
        { "name": "Wardha Biryani", "location": "Wardha", "cost": 250 }
    ],
    "placesToVisit": [
        { "name": "Gandhi Ashram", "cost": 0 },
        { "name": "Wardha Museum", "cost": 100 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 1200 },
        { "mode": "Train", "cost": 800 }
    ],
    "buses": [
        { "type": "Standard", "price": 500 },
        { "type": "Semi-Luxury", "price": 800 }
    ]
},
// Route 65
{
    "id": 65,
    "start": "Aurangabad",
    "end": "Osmanabad",
    "name": "Aurangabad to Osmanabad via Parbhani",
    "distance": 250,
    "steps": [
        "Start at Aurangabad",
        "Drive to Parbhani",
        "Continue to Osmanabad"
    ],
    "hotels": [
        { "name": "Hotel Aurangabad Residency", "location": "Aurangabad", "cost": 3500 },
        { "name": "Hotel Osmanabad", "location": "Osmanabad", "cost": 3000 }
    ],
    "foodOptions": [
        { "name": "Aurangabad Eats", "location": "Aurangabad", "cost": 250 },
        { "name": "Osmanabad Local", "location": "Osmanabad", "cost": 200 }
    ],
    "placesToVisit": [
        { "name": "Bibi Ka Maqbara", "cost": 100 },
        { "name": "Osmanabad Fort", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 2000 },
        { "mode": "Train", "cost": 1200 }
    ],
    "buses": [
        { "type": "Standard", "price": 900 },
        { "type": "Luxury", "price": 1500 }
    ]
},



// Route 66
{
    "id": 66,
    "start": "Mumbai",
    "end": "Goa",
    "name": "Mumbai to Goa via Ratnagiri",
    "distance": 460,
    "steps": [
        "Start at Mumbai",
        "Drive to Ratnagiri",
        "Continue to Goa"
    ],
    "buses": [
        { "type": "Luxury", "price": 3000 },
        { "type": "Standard", "price": 2200 },
        { "type": "Sleeper", "price": 2500 },
        { "type": "Semi-Luxury", "price": 2700 }
    ],
    "hotels": [
        { "name": "Hotel Ratnagiri Beach", "location": "Ratnagiri", "cost": 4000 },
        { "name": "Hotel Beachfront", "location": "Goa", "cost": 5000 }
    ],
    "foodOptions": [
        { "name": "Ratnagiri Seafood", "location": "Ratnagiri", "cost": 400 },
        { "name": "Goa Beach Shack", "location": "Goa", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Ganapatipule", "cost": 200 },
        { "name": "Calangute Beach", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 4000 },
        { "mode": "Bus", "cost": 2500 }
    ]
},

// Route 67
{
    "id": 67,
    "start": "Pune",
    "end": "Hyderabad",
    "name": "Pune to Hyderabad via Solapur",
    "distance": 650,
    "steps": [
        "Start at Pune",
        "Drive to Solapur",
        "Continue to Hyderabad"
    ],
    "buses": [
        { "type": "Luxury", "price": 3500 },
        { "type": "Standard", "price": 2500 },
        { "type": "Sleeper", "price": 2800 },
        { "type": "Semi-Luxury", "price": 3000 }
    ],
    "hotels": [
        { "name": "Hotel Solapur Plaza", "location": "Solapur", "cost": 3500 },
        { "name": "Hotel Hyderabad International", "location": "Hyderabad", "cost": 5000 }
    ],
    "foodOptions": [
        { "name": "Solapur Delights", "location": "Solapur", "cost": 300 },
        { "name": "Hyderabad Biryani", "location": "Hyderabad", "cost": 500 }
    ],
    "placesToVisit": [
        { "name": "Golconda Fort", "cost": 200 },
        { "name": "Charminar", "cost": 100 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 5000 },
        { "mode": "Train", "cost": 2500 }
    ]
},

// Route 68
{
    "id": 68,
    "start": "Nagpur",
    "end": "Bhopal",
    "name": "Nagpur to Bhopal via Sagar",
    "distance": 500,
    "steps": [
        "Start at Nagpur",
        "Drive to Sagar",
        "Continue to Bhopal"
    ],
    "buses": [
        { "type": "Luxury", "price": 3200 },
        { "type": "Standard", "price": 2300 },
        { "type": "Sleeper", "price": 2600 },
        { "type": "Semi-Luxury", "price": 2800 }
    ],
    "hotels": [
        { "name": "Hotel Sagar Residency", "location": "Sagar", "cost": 3000 },
        { "name": "Hotel Bhopal Palace", "location": "Bhopal", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Sagar Snacks", "location": "Sagar", "cost": 250 },
        { "name": "Bhopal Dining", "location": "Bhopal", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Sanchi Stupa", "cost": 200 },
        { "name": "Bhopal Lake", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 3500 },
        { "mode": "Train", "cost": 2000 }
    ]
},

// Route 69
{
    "id": 69,
    "start": "Aurangabad",
    "end": "Indore",
    "name": "Aurangabad to Indore via Dhule",
    "distance": 550,
    "steps": [
        "Start at Aurangabad",
        "Drive to Dhule",
        "Continue to Indore"
    ],
    "buses": [
        { "type": "Luxury", "price": 3300 },
        { "type": "Standard", "price": 2400 },
        { "type": "Sleeper", "price": 2700 },
        { "type": "Semi-Luxury", "price": 2900 }
    ],
    "hotels": [
        { "name": "Hotel Dhule Inn", "location": "Dhule", "cost": 3000 },
        { "name": "Hotel Indore Grand", "location": "Indore", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Dhule Diner", "location": "Dhule", "cost": 250 },
        { "name": "Indore Special", "location": "Indore", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Rani Roopmati Pavilion", "cost": 100 },
        { "name": "Lal Baag Palace", "cost": 0 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 4000 },
        { "mode": "Train", "cost": 2500 }
    ]
},

// Route 70
{
    "id": 70,
    "start": "Mumbai",
    "end": "Ahmedabad",
    "name": "Mumbai to Ahmedabad via Vadodara",
    "distance": 550,
    "steps": [
        "Start at Mumbai",
        "Drive to Vadodara",
        "Continue to Ahmedabad"
    ],
    "buses": [
        { "type": "Luxury", "price": 3400 },
        { "type": "Standard", "price": 2500 },
        { "type": "Sleeper", "price": 2700 },
        { "type": "Semi-Luxury", "price": 2900 }
    ],
    "hotels": [
        { "name": "Hotel Vadodara Inn", "location": "Vadodara", "cost": 3500 },
        { "name": "Hotel Ahmedabad Residency", "location": "Ahmedabad", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Vadodara Eats", "location": "Vadodara", "cost": 300 },
        { "name": "Ahmedabad Delights", "location": "Ahmedabad", "cost": 350 }
    ],
    "placesToVisit": [
        { "name": "Laxmi Vilas Palace", "cost": 0 },
        { "name": "Sabarmati Ashram", "cost": 100 }
    ],
    "transportation": [
        { "mode": "Car", "cost": 4000 },
        { "mode": "Train", "cost": 2000 }
    ]
},
// Route 71
{
    "id": 71,
    "start": "Pune",
    "end": "Rajkot",
    "name": "Pune to Rajkot via Surat",
    "distance": 600,
    "steps": [
        "Start at Pune",
        "Drive to Surat",
        "Continue to Rajkot"
    ],
    "buses": [
        { "type": "Luxury", "price": 4000 },
        { "type": "Standard", "price": 3000 },
        { "type": "Sleeper", "price": 3500 },
        { "type": "Semi-Luxury", "price": 3700 }
    ],
    "hotels": [
        { "name": "Hotel Surat Palace", "location": "Surat", "cost": 3500 },
        { "name": "Hotel Rajkot Residency", "location": "Rajkot", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Surat Specialties", "location": "Surat", "cost": 300 },
        { "name": "Rajkot Cuisine", "location": "Rajkot", "cost": 350 }
    ],
    "placesToVisit": [
        { "name": "Sur Sagar Lake", "cost": 0 },
        { "name": "Rajkot Museum", "cost": 100 }
    ]
},
// Route 72
{
    "id": 72,
    "start": "Nagpur",
    "end": "Raipur",
    "name": "Nagpur to Raipur via Durg",
    "distance": 300,
    "steps": [
        "Start at Nagpur",
        "Drive to Durg",
        "Continue to Raipur"
    ],
    "buses": [
        { "type": "Luxury", "price": 3500 },
        { "type": "Standard", "price": 2500 },
        { "type": "Sleeper", "price": 3000 },
        { "type": "Semi-Luxury", "price": 3200 }
    ],
    "hotels": [
        { "name": "Hotel Durg Plaza", "location": "Durg", "cost": 3000 },
        { "name": "Hotel Raipur Residency", "location": "Raipur", "cost": 3500 }
    ],
    "foodOptions": [
        { "name": "Durg Dining", "location": "Durg", "cost": 250 },
        { "name": "Raipur Fast Food", "location": "Raipur", "cost": 300 }
    ],
    "placesToVisit": [
        { "name": "Nagzira Wildlife Sanctuary", "cost": 300 },
        { "name": "Buddhist Monuments", "cost": 0 }
    ]
},
// Route 73
{
    "id": 73,
    "start": "Aurangabad",
    "end": "Kolhapur",
    "name": "Aurangabad to Kolhapur via Pune",
    "distance": 300,
    "steps": [
        "Start at Aurangabad",
        "Drive to Pune",
        "Continue to Kolhapur"
    ],
    "buses": [
        { "type": "Luxury", "price": 3700 },
        { "type": "Standard", "price": 2700 },
        { "type": "Sleeper", "price": 3200 },
        { "type": "Semi-Luxury", "price": 3400 }
    ],
    "hotels": [
        { "name": "Hotel Pune Heights", "location": "Pune", "cost": 3500 },
        { "name": "Hotel Kolhapur", "location": "Kolhapur", "cost": 4000 }
    ],
    "foodOptions": [
        { "name": "Pune Delights", "location": "Pune", "cost": 300 },
        { "name": "Kolhapur Spice", "location": "Kolhapur", "cost": 350 }
    ],
    "placesToVisit": [
        { "name": "Pune Shaniwarwada", "cost": 100 },
        { "name": "Kolhapur Mahalaxmi Temple", "cost": 0 }
    ]
},






    {
        "id": 91,
        "start": "Mumbai",
        "end": "Goa",
        "name": "Mumbai to Goa",
        "distance": 450,
        "steps": [
            "Start at Mumbai",
            "Drive to Goa"
        ],
        "buses": [
            { "type": "Luxury", "price": 1500 },
            { "type": "Standard", "price": 1000 },
            { "type": "Sleeper", "price": 1200 },
            { "type": "Semi-Luxury", "price": 1300 }
        ],
        "hotels": [
            { "name": "Goa Beach Resort", "location": "Goa", "cost": 3500 }
        ],
        "foodOptions": [
            { "name": "Goan Seafood", "location": "Goa", "cost": 500 }
        ],
        "placesToVisit": [
            { "name": "Baga Beach", "cost": 0 }
        ],
        "transportation": [
            { "mode": "Bus", "cost": 1200 }
        ]
    },
    {
        "id": 92,
        "start": "Delhi",
        "end": "Shimla",
        "name": "Delhi to Shimla",
        "distance": 350,
        "steps": [
            "Start at Delhi",
            "Drive to Shimla"
        ],
        "buses": [
            { "type": "Luxury", "price": 1800 },
            { "type": "Standard", "price": 1200 },
            { "type": "Sleeper", "price": 1400 },
            { "type": "Semi-Luxury", "price": 1600 }
        ],
        "hotels": [
            { "name": "Shimla Grand", "location": "Shimla", "cost": 3000 }
        ],
        "foodOptions": [
            { "name": "Shimla Local Cuisine", "location": "Shimla", "cost": 400 }
        ],
        "placesToVisit": [
            { "name": "Mall Road", "cost": 0 }
        ],
        "transportation": [
            { "mode": "Bus", "cost": 1200 }
        ]
    },
    {
        "id": 93,
        "start": "Kolkata",
        "end": "Darjeeling",
        "name": "Kolkata to Darjeeling",
        "distance": 620,
        "steps": [
            "Start at Kolkata",
            "Drive to Darjeeling"
        ],
        "buses": [
            { "type": "Luxury", "price": 2500 },
            { "type": "Standard", "price": 1800 },
            { "type": "Sleeper", "price": 2000 },
            { "type": "Semi-Luxury", "price": 2200 }
        ],
        "hotels": [
            { "name": "Darjeeling View", "location": "Darjeeling", "cost": 3500 }
        ],
        "foodOptions": [
            { "name": "Tibetan Cuisine", "location": "Darjeeling", "cost": 450 }
        ],
        "placesToVisit": [
            { "name": "Tiger Hill", "cost": 200 }
        ],
        "transportation": [
            { "mode": "Bus", "cost": 1800 }
        ]
    },

    
];

document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('routeForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

      
        const start = document.getElementById('start').value.trim();
        const end = document.getElementById('end').value.trim();
        const date = document.getElementById('date').value;

       
        document.getElementById('result').innerHTML = '';

        
        const matchingRoutes = routes.filter(route =>
            route.start.toLowerCase() === start.toLowerCase() &&
            route.end.toLowerCase() === end.toLowerCase()
        );

        if (matchingRoutes.length > 0) {
            matchingRoutes.forEach(route => {
                const routeDiv = document.createElement('div');
                routeDiv.classList.add('route-info');
                routeDiv.innerHTML = `
                    <h3>${route.name}</h3>
                    <p><strong>Distance:</strong> ${route.distance} km</p>
                    <p><strong>Steps:</strong></p>
                    <ul>${route.steps.map(step => `<li>${step}</li>`).join('')}</ul>
                    <p><strong>Buses:</strong></p>
                    <ul>${route.buses.map(bus => `<li>${bus.type} - ₹${bus.price}</li>`).join('')}</ul>
                    <form class="booking-form">
                        <h4>Book a Bus</h4>
                        <label for="busType">Bus Type:</label>
                        <select id="busType">
                            ${route.buses.map(bus => `<option value="${bus.type}" data-price="${bus.price}">${bus.type} - ₹${bus.price}</option>`).join('')}
                        </select><br><br>
                        <label for="adults">Number of Adults:</label>
                        <input type="number" id="adults" name="adults" min="0" required><br><br>
                        <label for="children">Number of Children:</label>
                        <input type="number" id="children" name="children" min="0" required><br><br>
                        <button type="button" onclick="bookBus('${route.id}')">Book Now</button>
                    </form>
                `;
                document.getElementById('result').appendChild(routeDiv);
            });
        } else {
            document.getElementById('result').innerHTML = '<p>No routes found for the selected cities.</p>';
        }
    });
});

function bookBus(routeId) {
    
    const busType = document.querySelector('#busType').value;
    const adults = document.querySelector('#adults').value;
    const children = document.querySelector('#children').value;
    
    
    const busPrice = document.querySelector('#busType option:checked').dataset.price;
    
    
    const totalCost = (parseInt(adults) + parseInt(children)) * parseInt(busPrice);

    
    alert(`Booking details:
    Route ID: ${routeId}
    Bus Type: ${busType}
    Number of Adults: ${adults}
    Number of Children: ${children}
    Total Cost: ₹${totalCost}`);
    
  
    window.location.href = `pay123.html?cost=${totalCost}`;
}