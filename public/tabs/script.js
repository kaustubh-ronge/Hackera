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
            id: 260,
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
    {
        id: 26,
        start: "Mumbai",
        end: "Nagpur",
        name: "Mumbai to Nagpur via Nashik",
        distance: 850,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Nagpur"
        ],
        hotels: [
            { name: "Hotel Sai Palace", location: "Nashik", cost: 4000 },
            { name: "Taj Nagpur", location: "Nagpur", cost: 6000 }
        ],
        foodOptions: [
            { name: "Vihang Restaurant", location: "Nashik", cost: 600 },
            { name: "Punjabi Dhaba", location: "Nagpur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Sula Vineyard", cost: 500 },
            { name: "Deekshabhoomi", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 3500 }
        ]
    },
    // Route 27
    {
        id: 27,
        start: "Mumbai",
        end: "Aurangabad",
        name: "Mumbai to Aurangabad via Nashik",
        distance: 340,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Aurangabad"
        ],
        hotels: [
            { name: "Hotel Taj", location: "Aurangabad", cost: 7000 },
            { name: "Hotel Sagar", location: "Nashik", cost: 3000 }
        ],
        foodOptions: [
            { name: "Hotel Ruchira", location: "Aurangabad", cost: 500 },
            { name: "Nashik Food Court", location: "Nashik", cost: 400 }
        ],
        placesToVisit: [
            { name: "Ajanta Caves", cost: 500 },
            { name: "Ellora Caves", cost: 500 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 28
    {
        id: 28,
        start: "Mumbai",
        end: "Goa",
        name: "Mumbai to Goa via Ratnagiri",
        distance: 450,
        steps: [
            "Start at Mumbai",
            "Drive to Ratnagiri",
            "Continue to Goa"
        ],
        hotels: [
            { name: "Ratnagiri Beach Resort", location: "Ratnagiri", cost: 3500 },
            { name: "Goa Marriott", location: "Goa", cost: 8000 }
        ],
        foodOptions: [
            { name: "Fish Curry Restaurant", location: "Ratnagiri", cost: 600 },
            { name: "Goan Delights", location: "Goa", cost: 500 }
        ],
        placesToVisit: [
            { name: "Ganapatipule Beach", cost: 0 },
            { name: "Baga Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 29
    {
        id: 29,
        start: "Pune",
        end: "Kolhapur",
        name: "Pune to Kolhapur via Satara",
        distance: 230,
        steps: [
            "Start at Pune",
            "Drive to Satara",
            "Continue to Kolhapur"
        ],
        hotels: [
            { name: "Hotel Sai International", location: "Satara", cost: 2500 },
            { name: "Hotel Maratha", location: "Kolhapur", cost: 4000 }
        ],
        foodOptions: [
            { name: "Hotel Shree Shakti", location: "Satara", cost: 300 },
            { name: "Kolhapur Misal", location: "Kolhapur", cost: 200 }
        ],
        placesToVisit: [
            { name: "Kaas Plateau", cost: 100 },
            { name: "Mahalaxmi Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1200 }
        ]
    },
    // Route 30
    {
        id: 30,
        start: "Nagpur",
        end: "Jabalpur",
        name: "Nagpur to Jabalpur via Seoni",
        distance: 260,
        steps: [
            "Start at Nagpur",
            "Drive to Seoni",
            "Continue to Jabalpur"
        ],
        hotels: [
            { name: "Hotel Nagpur", location: "Nagpur", cost: 4000 },
            { name: "Hotel Narmada", location: "Jabalpur", cost: 3500 }
        ],
        foodOptions: [
            { name: "Nagpur Dhaba", location: "Nagpur", cost: 400 },
            { name: "Jabalpur Eats", location: "Jabalpur", cost: 300 }
        ],
        placesToVisit: [
            { name: "Pench National Park", cost: 500 },
            { name: "Rani Durgavati Museum", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1000 }
        ]
    },
    // Route 31
    {
        id: 31,
        start: "Mumbai",
        end: "Ratnagiri",
        name: "Mumbai to Ratnagiri via Alibaug",
        distance: 340,
        steps: [
            "Start at Mumbai",
            "Drive to Alibaug",
            "Continue to Ratnagiri"
        ],
        hotels: [
            { name: "Alibaug Beach Resort", location: "Alibaug", cost: 4500 },
            { name: "Ratnagiri Heritage", location: "Ratnagiri", cost: 4000 }
        ],
        foodOptions: [
            { name: "Coastal Restaurant", location: "Alibaug", cost: 600 },
            { name: "Ratnagiri Food Corner", location: "Ratnagiri", cost: 500 }
        ],
        placesToVisit: [
            { name: "Alibaug Beach", cost: 0 },
            { name: "Ganapatipule Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 4000 },
            { mode: "Train", cost: 2000 }
        ]
    },
    // Route 32
    {
        id: 32,
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
            { name: "The Leela Palace", location: "Mumbai", cost: 7000 }
        ],
        foodOptions: [
            { name: "Sunny Da Dhaba", location: "Lonavala", cost: 500 },
            { name: "Ajeet Fast Food", location: "Mumbai", cost: 300 }
        ],
        placesToVisit: [
            { name: "Lonavala Lake", cost: 200 },
            { name: "Gateway of India", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2500 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 33
    {
        id: 33,
        start: "Nagpur",
        end: "Pune",
        name: "Nagpur to Pune via Aurangabad",
        distance: 550,
        steps: [
            "Start at Nagpur",
            "Drive to Aurangabad",
            "Continue to Pune"
        ],
        hotels: [
            { name: "Aurangabad Hotel", location: "Aurangabad", cost: 5000 },
            { name: "Hotel Park Central", location: "Pune", cost: 6000 }
        ],
        foodOptions: [
            { name: "Aurangabad Biryani", location: "Aurangabad", cost: 600 },
            { name: "Pune Café", location: "Pune", cost: 400 }
        ],
        placesToVisit: [
            { name: "Ellora Caves", cost: 500 },
            { name: "Sinhagad Fort", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 4000 },
            { mode: "Train", cost: 2000 }
        ]
    },
    // Route 34
    {
        id: 34,
        start: "Mumbai",
        end: "Shirdi",
        name: "Mumbai to Shirdi via Nashik",
        distance: 300,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Shirdi"
        ],
        hotels: [
            { name: "Hotel Sai Leela", location: "Shirdi", cost: 4000 },
            { name: "Hotel Panchavati", location: "Nashik", cost: 3500 }
        ],
        foodOptions: [
            { name: "Shirdi Prasad", location: "Shirdi", cost: 200 },
            { name: "Nashik Dining", location: "Nashik", cost: 500 }
        ],
        placesToVisit: [
            { name: "Sai Baba Temple", cost: 0 },
            { name: "Kalaram Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2500 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 35
    {
        id: 35,
        start: "Mumbai",
        end: "Alibaug",
        name: "Mumbai to Alibaug via Panvel",
        distance: 100,
        steps: [
            "Start at Mumbai",
            "Drive to Panvel",
            "Continue to Alibaug"
        ],
        hotels: [
            { name: "U Tropicana Alibaug", location: "Alibaug", cost: 6000 },
            { name: "Hotel Panvel", location: "Panvel", cost: 3500 }
        ],
        foodOptions: [
            { name: "The Fish Grill", location: "Alibaug", cost: 700 },
            { name: "Panvel Veg Restaurant", location: "Panvel", cost: 400 }
        ],
        placesToVisit: [
            { name: "Alibaug Beach", cost: 0 },
            { name: "Kihim Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 1500 },
            { mode: "Ferry", cost: 800 }
        ]
    },
    // Route 36
    {
        id: 36,
        start: "Pune",
        end: "Nashik",
        name: "Pune to Nashik via Kalyan",
        distance: 220,
        steps: [
            "Start at Pune",
            "Drive to Kalyan",
            "Continue to Nashik"
        ],
        hotels: [
            { name: "Hotel Kailash", location: "Nashik", cost: 3500 },
            { name: "Hotel Prince", location: "Kalyan", cost: 3000 }
        ],
        foodOptions: [
            { name: "Nashik Fast Food", location: "Nashik", cost: 400 },
            { name: "Kalyan Diner", location: "Kalyan", cost: 300 }
        ],
        placesToVisit: [
            { name: "Sula Vineyard", cost: 500 },
            { name: "Kalyan Caves", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1200 }
        ]
    },
    // Route 37
    {
        id: 37,
        start: "Nagpur",
        end: "Bhopal",
        name: "Nagpur to Bhopal via Seoni",
        distance: 380,
        steps: [
            "Start at Nagpur",
            "Drive to Seoni",
            "Continue to Bhopal"
        ],
        hotels: [
            { name: "Hotel Nagpur", location: "Nagpur", cost: 4000 },
            { name: "Hotel Lake View", location: "Bhopal", cost: 4500 }
        ],
        foodOptions: [
            { name: "Nagpur Cuisine", location: "Nagpur", cost: 500 },
            { name: "Bhopal Biryani", location: "Bhopal", cost: 400 }
        ],
        placesToVisit: [
            { name: "Pench National Park", cost: 500 },
            { name: "Taj-ul-Masajid", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Train", cost: 1800 }
        ]
    },
    // Route 38
    {
        id: 38,
        start: "Mumbai",
        end: "Panjim",
        name: "Mumbai to Panjim via Goa",
        distance: 450,
        steps: [
            "Start at Mumbai",
            "Drive to Goa",
            "Continue to Panjim"
        ],
        hotels: [
            { name: "Hotel Goan Heritage", location: "Goa", cost: 5000 },
            { name: "Panaji Residency", location: "Panjim", cost: 4000 }
        ],
        foodOptions: [
            { name: "Goa Seafood", location: "Goa", cost: 600 },
            { name: "Panjim Café", location: "Panjim", cost: 500 }
        ],
        placesToVisit: [
            { name: "Baga Beach", cost: 0 },
            { name: "Dudhsagar Falls", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 39
    {
        id: 39,
        start: "Pune",
        end: "Aurangabad",
        name: "Pune to Aurangabad via Ahmednagar",
        distance: 270,
        steps: [
            "Start at Pune",
            "Drive to Ahmednagar",
            "Continue to Aurangabad"
        ],
        hotels: [
            { name: "Hotel Panchavati", location: "Ahmednagar", cost: 3000 },
            { name: "Hotel Taj", location: "Aurangabad", cost: 7000 }
        ],
        foodOptions: [
            { name: "Ahmednagar Delights", location: "Ahmednagar", cost: 400 },
            { name: "Aurangabad Biryani", location: "Aurangabad", cost: 500 }
        ],
        placesToVisit: [
            { name: "Ellora Caves", cost: 500 },
            { name: "Shirdi Sai Baba Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 40
    {
        id: 40,
        start: "Mumbai",
        end: "Nagpur",
        name: "Mumbai to Nagpur via Nashik",
        distance: 850,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Nagpur"
        ],
        hotels: [
            { name: "Hotel Sai Palace", location: "Nashik", cost: 4000 },
            { name: "Taj Nagpur", location: "Nagpur", cost: 6000 }
        ],
        foodOptions: [
            { name: "Vihang Restaurant", location: "Nashik", cost: 600 },
            { name: "Punjabi Dhaba", location: "Nagpur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Sula Vineyard", cost: 500 },
            { name: "Deekshabhoomi", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 3500 }
        ]
    },
    // Route 41
    {
        id: 41,
        start: "Kolhapur",
        end: "Ratnagiri",
        name: "Kolhapur to Ratnagiri via Kankavli",
        distance: 200,
        steps: [
            "Start at Kolhapur",
            "Drive to Kankavli",
            "Continue to Ratnagiri"
        ],
        hotels: [
            { name: "Hotel Maratha", location: "Kolhapur", cost: 4000 },
            { name: "Ratnagiri Heritage", location: "Ratnagiri", cost: 3500 }
        ],
        foodOptions: [
            { name: "Kolhapur Misal", location: "Kolhapur", cost: 200 },
            { name: "Ratnagiri Food Corner", location: "Ratnagiri", cost: 500 }
        ],
        placesToVisit: [
            { name: "Mahalaxmi Temple", cost: 0 },
            { name: "Ganapatipule Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1200 }
        ]
    },
    // Route 42
    {
        id: 42,
        start: "Mumbai",
        end: "Goa",
        name: "Mumbai to Goa via Ratnagiri",
        distance: 450,
        steps: [
            "Start at Mumbai",
            "Drive to Ratnagiri",
            "Continue to Goa"
        ],
        hotels: [
            { name: "Ratnagiri Beach Resort", location: "Ratnagiri", cost: 3500 },
            { name: "Goa Marriott", location: "Goa", cost: 8000 }
        ],
        foodOptions: [
            { name: "Fish Curry Restaurant", location: "Ratnagiri", cost: 600 },
            { name: "Goan Delights", location: "Goa", cost: 500 }
        ],
        placesToVisit: [
            { name: "Ganapatipule Beach", cost: 0 },
            { name: "Baga Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 43
    {
        id: 43,
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
    // Route 44
    {
        id: 44,
        start: "Pune",
        end: "Kolhapur",
        name: "Pune to Kolhapur via Satara",
        distance: 230,
        steps: [
            "Start at Pune",
            "Drive to Satara",
            "Continue to Kolhapur"
        ],
        hotels: [
            { name: "Hotel Sai International", location: "Satara", cost: 2500 },
            { name: "Hotel Maratha", location: "Kolhapur", cost: 4000 }
        ],
        foodOptions: [
            { name: "Hotel Shree Shakti", location: "Satara", cost: 300 },
            { name: "Kolhapur Misal", location: "Kolhapur", cost: 200 }
        ],
        placesToVisit: [
            { name: "Kaas Plateau", cost: 100 },
            { name: "Mahalaxmi Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1200 }
        ]
    },
    // Route 45
    {
        id: 45,
        start: "Mumbai",
        end: "Nagpur",
        name: "Mumbai to Nagpur via Nashik",
        distance: 850,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Nagpur"
        ],
        hotels: [
            { name: "Hotel Sai Palace", location: "Nashik", cost: 4000 },
            { name: "Taj Nagpur", location: "Nagpur", cost: 6000 }
        ],
        foodOptions: [
            { name: "Vihang Restaurant", location: "Nashik", cost: 600 },
            { name: "Punjabi Dhaba", location: "Nagpur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Sula Vineyard", cost: 500 },
            { name: "Deekshabhoomi", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 3500 }
        ]
    },
    // Route 46
    {
        id: 46,
        start: "Mumbai",
        end: "Aurangabad",
        name: "Mumbai to Aurangabad via Nashik",
        distance: 340,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Aurangabad"
        ],
        hotels: [
            { name: "Hotel Taj", location: "Aurangabad", cost: 7000 },
            { name: "Hotel Sagar", location: "Nashik", cost: 3000 }
        ],
        foodOptions: [
            { name: "Hotel Ruchira", location: "Aurangabad", cost: 500 },
            { name: "Nashik Food Court", location: "Nashik", cost: 400 }
        ],
        placesToVisit: [
            { name: "Ajanta Caves", cost: 500 },
            { name: "Ellora Caves", cost: 500 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 47
    {
        id: 47,
        start: "Nagpur",
        end: "Jabalpur",
        name: "Nagpur to Jabalpur via Seoni",
        distance: 260,
        steps: [
            "Start at Nagpur",
            "Drive to Seoni",
            "Continue to Jabalpur"
        ],
        hotels: [
            { name: "Hotel Nagpur", location: "Nagpur", cost: 4000 },
            { name: "Hotel Narmada", location: "Jabalpur", cost: 3500 }
        ],
        foodOptions: [
            { name: "Nagpur Dhaba", location: "Nagpur", cost: 400 },
            { name: "Jabalpur Eats", location: "Jabalpur", cost: 300 }
        ],
        placesToVisit: [
            { name: "Pench National Park", cost: 500 },
            { name: "Rani Durgavati Museum", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1000 }
        ]
    },
    // Route 48
    {
        id: 48,
        start: "Pune",
        end: "Nashik",
        name: "Pune to Nashik via Kalyan",
        distance: 220,
        steps: [
            "Start at Pune",
            "Drive to Kalyan",
            "Continue to Nashik"
        ],
        hotels: [
            { name: "Hotel Kailash", location: "Nashik", cost: 3500 },
            { name: "Hotel Prince", location: "Kalyan", cost: 3000 }
        ],
        foodOptions: [
            { name: "Nashik Fast Food", location: "Nashik", cost: 400 },
            { name: "Kalyan Diner", location: "Kalyan", cost: 300 }
        ],
        placesToVisit: [
            { name: "Sula Vineyard", cost: 500 },
            { name: "Kalyan Caves", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1200 }
        ]
    },
    // Route 49
    {
        id: 49,
        start: "Mumbai",
        end: "Shirdi",
        name: "Mumbai to Shirdi via Nashik",
        distance: 300,
        steps: [
            "Start at Mumbai",
            "Drive to Nashik",
            "Continue to Shirdi"
        ],
        hotels: [
            { name: "Hotel Sai Leela", location: "Shirdi", cost: 4000 },
            { name: "Hotel Panchavati", location: "Nashik", cost: 3500 }
        ],
        foodOptions: [
            { name: "Shirdi Prasad", location: "Shirdi", cost: 200 },
            { name: "Nashik Dining", location: "Nashik", cost: 500 }
        ],
        placesToVisit: [
            { name: "Sai Baba Temple", cost: 0 },
            { name: "Kalaram Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2500 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 50
    {
        id: 50,
        start: "Mumbai",
        end: "Latur",
        name: "Mumbai to Latur via Solapur",
        distance: 460,
        steps: [
            "Start at Mumbai",
            "Drive to Solapur",
            "Continue to Latur"
        ],
        hotels: [
            { name: "Hotel Maitreyee", location: "Solapur", cost: 3500 },
            { name: "Hotel Latur Residency", location: "Latur", cost: 3000 }
        ],
        foodOptions: [
            { name: "Solapur Snacks", location: "Solapur", cost: 300 },
            { name: "Latur Diner", location: "Latur", cost: 250 }
        ],
        placesToVisit: [
            { name: "Pandharpur Temple", cost: 0 },
            { name: "Latur Fort", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 4000 },
            { mode: "Train", cost: 2000 }
        ]
    },
    // Route 51
    {
        id: 51,
        start: "Pune",
        end: "Ratnagiri",
        name: "Pune to Ratnagiri via Chiplun",
        distance: 300,
        steps: [
            "Start at Pune",
            "Drive to Chiplun",
            "Continue to Ratnagiri"
        ],
        hotels: [
            { name: "Hotel Pearl", location: "Chiplun", cost: 3000 },
            { name: "Hotel Sea View", location: "Ratnagiri", cost: 4000 }
        ],
        foodOptions: [
            { name: "Chiplun Veg", location: "Chiplun", cost: 250 },
            { name: "Ratnagiri Seafood", location: "Ratnagiri", cost: 500 }
        ],
        placesToVisit: [
            { name: "Vashishti River", cost: 0 },
            { name: "Ganapatipule Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2500 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 52
    {
        id: 52,
        start: "Aurangabad",
        end: "Jalgaon",
        name: "Aurangabad to Jalgaon via Bhusawal",
        distance: 180,
        steps: [
            "Start at Aurangabad",
            "Drive to Bhusawal",
            "Continue to Jalgaon"
        ],
        hotels: [
            { name: "Hotel Royal", location: "Bhusawal", cost: 2500 },
            { name: "Hotel Landmark", location: "Jalgaon", cost: 3000 }
        ],
        foodOptions: [
            { name: "Bhusawal Kitchen", location: "Bhusawal", cost: 300 },
            { name: "Jalgaon Fast Food", location: "Jalgaon", cost: 200 }
        ],
        placesToVisit: [
            { name: "Ajanta Caves", cost: 500 },
            { name: "Saptashrungi", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 2000 },
            { mode: "Train", cost: 1000 }
        ]
    },
    // Route 53
    {
        id: 53,
        start: "Nagpur",
        end: "Raipur",
        name: "Nagpur to Raipur via Durg",
        distance: 300,
        steps: [
            "Start at Nagpur",
            "Drive to Durg",
            "Continue to Raipur"
        ],
        hotels: [
            { name: "Hotel Durg Residency", location: "Durg", cost: 3000 },
            { name: "Hotel Raipur", location: "Raipur", cost: 3500 }
        ],
        foodOptions: [
            { name: "Durg Dining", location: "Durg", cost: 300 },
            { name: "Raipur Biryani", location: "Raipur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Nagzira Wildlife Sanctuary", cost: 300 },
            { name: "Buddhist Monuments", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2500 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 54
    {
        id: 54,
        start: "Pune",
        end: "Khandala",
        name: "Pune to Khandala via Lonavala",
        distance: 90,
        steps: [
            "Start at Pune",
            "Drive to Lonavala",
            "Continue to Khandala"
        ],
        hotels: [
            { name: "Hotel Chandralok", location: "Lonavala", cost: 4000 },
            { name: "Hotel Khandala", location: "Khandala", cost: 3500 }
        ],
        foodOptions: [
            { name: "Lonavala Eats", location: "Lonavala", cost: 300 },
            { name: "Khandala Cafe", location: "Khandala", cost: 200 }
        ],
        placesToVisit: [
            { name: "Khandala Lake", cost: 100 },
            { name: "Lonavala Tiger's Leap", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 1200 },
            { mode: "Train", cost: 800 }
        ]
    },
    // Route 55
    {
        id: 55,
        start: "Mumbai",
        end: "Sangli",
        name: "Mumbai to Sangli via Satara",
        distance: 400,
        steps: [
            "Start at Mumbai",
            "Drive to Satara",
            "Continue to Sangli"
        ],
        hotels: [
            { name: "Hotel Kuber", location: "Satara", cost: 3000 },
            { name: "Hotel Sangli", location: "Sangli", cost: 3500 }
        ],
        foodOptions: [
            { name: "Satara Tiffin", location: "Satara", cost: 250 },
            { name: "Sangli Restaurant", location: "Sangli", cost: 300 }
        ],
        placesToVisit: [
            { name: "Kaas Plateau", cost: 100 },
            { name: "Sangli Fort", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Train", cost: 1800 }
        ]
    },
    // Route 56
    {
        id: 56,
        start: "Mumbai",
        end: "Khandala",
        name: "Mumbai to Khandala via Lonavala",
        distance: 110,
        steps: [
            "Start at Mumbai",
            "Drive to Lonavala",
            "Continue to Khandala"
        ],
        hotels: [
            { name: "Hotel Lonavala", location: "Lonavala", cost: 4000 },
            { name: "Hotel Khandala Hill", location: "Khandala", cost: 3500 }
        ],
        foodOptions: [
            { name: "Lonavala Local", location: "Lonavala", cost: 250 },
            { name: "Khandala Specialties", location: "Khandala", cost: 300 }
        ],
        placesToVisit: [
            { name: "Khandala Sunset Point", cost: 0 },
            { name: "Lonavala Wax Museum", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 1500 },
            { mode: "Train", cost: 1000 }
        ]
    },
    // Route 57
    {
        id: 57,
        start: "Aurangabad",
        end: "Jalna",
        name: "Aurangabad to Jalna via Partur",
        distance: 120,
        steps: [
            "Start at Aurangabad",
            "Drive to Partur",
            "Continue to Jalna"
        ],
        hotels: [
            { name: "Hotel Aurangabad Inn", location: "Aurangabad", cost: 3500 },
            { name: "Hotel Jalna Residency", location: "Jalna", cost: 3000 }
        ],
        foodOptions: [
            { name: "Aurangabad Special", location: "Aurangabad", cost: 250 },
            { name: "Jalna Delights", location: "Jalna", cost: 200 }
        ],
        placesToVisit: [
            { name: "Bibi Ka Maqbara", cost: 100 },
            { name: "Jalna Fort", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 1500 },
            { mode: "Train", cost: 800 }
        ]
    },
        // Route 58
        {
            id: 58,
            start: "Mumbai",
            end: "Nashik",
            name: "Mumbai to Nashik via Thane",
            distance: 200,
            steps: [
                "Start at Mumbai",
                "Drive to Thane",
                "Continue to Nashik"
            ],
            hotels: [
                { name: "Hotel Vihang", location: "Thane", cost: 3000 },
                { name: "Hotel Grandeur", location: "Nashik", cost: 3500 }
            ],
            foodOptions: [
                { name: "Thane Cafe", location: "Thane", cost: 250 },
                { name: "Nashik Meals", location: "Nashik", cost: 300 }
            ],
            placesToVisit: [
                { name: "Yeoor Hills", cost: 0 },
                { name: "Sula Vineyard", cost: 500 }
            ],
            transportation: [
                { mode: "Car", cost: 2000 },
                { mode: "Train", cost: 1200 }
            ]
        },
        // Route 59
        {
            id: 59,
            start: "Pune",
            end: "Satara",
            name: "Pune to Satara via Khed",
            distance: 160,
            steps: [
                "Start at Pune",
                "Drive to Khed",
                "Continue to Satara"
            ],
            hotels: [
                { name: "Hotel Lotus", location: "Khed", cost: 3000 },
                { name: "Hotel Yash", location: "Satara", cost: 3500 }
            ],
            foodOptions: [
                { name: "Khed Restaurant", location: "Khed", cost: 250 },
                { name: "Satara Biryani", location: "Satara", cost: 300 }
            ],
            placesToVisit: [
                { name: "Kaas Plateau", cost: 100 },
                { name: "Satara Fort", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 1500 },
                { mode: "Train", cost: 1000 }
            ]
        },
        // Route 60
        {
            id: 60,
            start: "Nagpur",
            end: "Chandrapur",
            name: "Nagpur to Chandrapur via Ballarshah",
            distance: 220,
            steps: [
                "Start at Nagpur",
                "Drive to Ballarshah",
                "Continue to Chandrapur"
            ],
            hotels: [
                { name: "Hotel Ballarshah", location: "Ballarshah", cost: 3000 },
                { name: "Hotel Chandrapur Inn", location: "Chandrapur", cost: 3500 }
            ],
            foodOptions: [
                { name: "Ballarshah Dining", location: "Ballarshah", cost: 250 },
                { name: "Chandrapur Local", location: "Chandrapur", cost: 300 }
            ],
            placesToVisit: [
                { name: "Tadoba National Park", cost: 500 },
                { name: "Chandrapur Fort", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 2000 },
                { mode: "Train", cost: 1200 }
            ]
        },
        // Route 61
        {
            id: 61,
            start: "Aurangabad",
            end: "Beed",
            name: "Aurangabad to Beed via Jalna",
            distance: 150,
            steps: [
                "Start at Aurangabad",
                "Drive to Jalna",
                "Continue to Beed"
            ],
            hotels: [
                { name: "Hotel Prakash", location: "Jalna", cost: 2500 },
                { name: "Hotel Beed Palace", location: "Beed", cost: 3000 }
            ],
            foodOptions: [
                { name: "Jalna Eats", location: "Jalna", cost: 200 },
                { name: "Beed Delicacies", location: "Beed", cost: 250 }
            ],
            placesToVisit: [
                { name: "Bibi Ka Maqbara", cost: 100 },
                { name: "Beed Fort", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 1500 },
                { mode: "Train", cost: 1000 }
            ]
        },
        // Route 62
        {
            id: 62,
            start: "Mumbai",
            end: "Alibaug",
            name: "Mumbai to Alibaug via Panvel",
            distance: 150,
            steps: [
                "Start at Mumbai",
                "Drive to Panvel",
                "Continue to Alibaug"
            ],
            hotels: [
                { name: "Hotel Panvel Garden", location: "Panvel", cost: 3000 },
                { name: "Hotel Alibaug", location: "Alibaug", cost: 4000 }
            ],
            foodOptions: [
                { name: "Panvel Cafe", location: "Panvel", cost: 250 },
                { name: "Alibaug Seafood", location: "Alibaug", cost: 500 }
            ],
            placesToVisit: [
                { name: "Alibaug Beach", cost: 0 },
                { name: "Kihim Beach", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 2000 },
                { mode: "Ferry", cost: 1000 }
            ]
        },
        // Route 63
        {
            id: 63,
            start: "Pune",
            end: "Mahabaleshwar",
            name: "Pune to Mahabaleshwar via Wai",
            distance: 120,
            steps: [
                "Start at Pune",
                "Drive to Wai",
                "Continue to Mahabaleshwar"
            ],
            hotels: [
                { name: "Hotel Wai", location: "Wai", cost: 3000 },
                { name: "Hotel Mahabaleshwar", location: "Mahabaleshwar", cost: 5000 }
            ],
            foodOptions: [
                { name: "Wai Snacks", location: "Wai", cost: 250 },
                { name: "Mahabaleshwar Cafe", location: "Mahabaleshwar", cost: 350 }
            ],
            placesToVisit: [
                { name: "Venna Lake", cost: 0 },
                { name: "Arthur's Seat", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 1500 },
                { mode: "Bus", cost: 800 }
            ]
        },
        // Route 64
        {
            id: 64,
            start: "Nagpur",
            end: "Wardha",
            name: "Nagpur to Wardha via Hinganghat",
            distance: 130,
            steps: [
                "Start at Nagpur",
                "Drive to Hinganghat",
                "Continue to Wardha"
            ],
            hotels: [
                { name: "Hotel Hinganghat", location: "Hinganghat", cost: 2500 },
                { name: "Hotel Wardha Palace", location: "Wardha", cost: 3000 }
            ],
            foodOptions: [
                { name: "Hinganghat Tiffin", location: "Hinganghat", cost: 200 },
                { name: "Wardha Biryani", location: "Wardha", cost: 250 }
            ],
            placesToVisit: [
                { name: "Gandhi Ashram", cost: 0 },
                { name: "Wardha Museum", cost: 100 }
            ],
            transportation: [
                { mode: "Car", cost: 1200 },
                { mode: "Train", cost: 800 }
            ]
        },
        // Route 65
        {
            id: 65,
            start: "Aurangabad",
            end: "Osmanabad",
            name: "Aurangabad to Osmanabad via Parbhani",
            distance: 250,
            steps: [
                "Start at Aurangabad",
                "Drive to Parbhani",
                "Continue to Osmanabad"
            ],
            hotels: [
                { name: "Hotel Aurangabad Residency", location: "Aurangabad", cost: 3500 },
                { name: "Hotel Osmanabad", location: "Osmanabad", cost: 3000 }
            ],
            foodOptions: [
                { name: "Aurangabad Eats", location: "Aurangabad", cost: 250 },
                { name: "Osmanabad Local", location: "Osmanabad", cost: 200 }
            ],
            placesToVisit: [
                { name: "Bibi Ka Maqbara", cost: 100 },
                { name: "Osmanabad Fort", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 2000 },
                { mode: "Train", cost: 1200 }
            ]
        },
            // Route 66
    {
        id: 66,
        start: "Mumbai",
        end: "Goa",
        name: "Mumbai to Goa via Ratnagiri",
        distance: 460,
        steps: [
            "Start at Mumbai",
            "Drive to Ratnagiri",
            "Continue to Goa"
        ],
        hotels: [
            { name: "Hotel Ratnagiri Beach", location: "Ratnagiri", cost: 4000 },
            { name: "Hotel Beachfront", location: "Goa", cost: 5000 }
        ],
        foodOptions: [
            { name: "Ratnagiri Seafood", location: "Ratnagiri", cost: 400 },
            { name: "Goa Beach Shack", location: "Goa", cost: 500 }
        ],
        placesToVisit: [
            { name: "Ganapatipule", cost: 200 },
            { name: "Calangute Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 4000 },
            { mode: "Bus", cost: 2500 }
        ]
    },
    // Route 67
    {
        id: 67,
        start: "Pune",
        end: "Hyderabad",
        name: "Pune to Hyderabad via Solapur",
        distance: 650,
        steps: [
            "Start at Pune",
            "Drive to Solapur",
            "Continue to Hyderabad"
        ],
        hotels: [
            { name: "Hotel Solapur Plaza", location: "Solapur", cost: 3500 },
            { name: "Hotel Hyderabad International", location: "Hyderabad", cost: 5000 }
        ],
        foodOptions: [
            { name: "Solapur Delights", location: "Solapur", cost: 300 },
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 500 }
        ],
        placesToVisit: [
            { name: "Golconda Fort", cost: 200 },
            { name: "Charminar", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 68
    {
        id: 68,
        start: "Nagpur",
        end: "Bhopal",
        name: "Nagpur to Bhopal via Sagar",
        distance: 500,
        steps: [
            "Start at Nagpur",
            "Drive to Sagar",
            "Continue to Bhopal"
        ],
        hotels: [
            { name: "Hotel Sagar Residency", location: "Sagar", cost: 3000 },
            { name: "Hotel Bhopal Palace", location: "Bhopal", cost: 3500 }
        ],
        foodOptions: [
            { name: "Sagar Snacks", location: "Sagar", cost: 250 },
            { name: "Bhopal Dining", location: "Bhopal", cost: 300 }
        ],
        placesToVisit: [
            { name: "Sanchi Stupa", cost: 200 },
            { name: "Bhopal Lake", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 3500 },
            { mode: "Train", cost: 2000 }
        ]
    },
    // Route 69
    {
        id: 69,
        start: "Aurangabad",
        end: "Indore",
        name: "Aurangabad to Indore via Dhule",
        distance: 550,
        steps: [
            "Start at Aurangabad",
            "Drive to Dhule",
            "Continue to Indore"
        ],
        hotels: [
            { name: "Hotel Dhule Inn", location: "Dhule", cost: 3000 },
            { name: "Hotel Indore Grand", location: "Indore", cost: 3500 }
        ],
        foodOptions: [
            { name: "Dhule Diner", location: "Dhule", cost: 250 },
            { name: "Indore Special", location: "Indore", cost: 300 }
        ],
        placesToVisit: [
            { name: "Rani Roopmati Pavilion", cost: 100 },
            { name: "Lal Baag Palace", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 4000 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 70
    {
        id: 70,
        start: "Mumbai",
        end: "Ahmedabad",
        name: "Mumbai to Ahmedabad via Vadodara",
        distance: 550,
        steps: [
            "Start at Mumbai",
            "Drive to Vadodara",
            "Continue to Ahmedabad"
        ],
        hotels: [
            { name: "Hotel Vadodara Inn", location: "Vadodara", cost: 3500 },
            { name: "Hotel Ahmedabad Residency", location: "Ahmedabad", cost: 4000 }
        ],
        foodOptions: [
            { name: "Vadodara Eats", location: "Vadodara", cost: 300 },
            { name: "Ahmedabad Delights", location: "Ahmedabad", cost: 350 }
        ],
        placesToVisit: [
            { name: "Laxmi Vilas Palace", cost: 0 },
            { name: "Sabarmati Ashram", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 4000 },
            { mode: "Train", cost: 2000 }
        ]
    },
    // Route 71
    {
        id: 71,
        start: "Pune",
        end: "Rajkot",
        name: "Pune to Rajkot via Surat",
        distance: 600,
        steps: [
            "Start at Pune",
            "Drive to Surat",
            "Continue to Rajkot"
        ],
        hotels: [
            { name: "Hotel Surat Palace", location: "Surat", cost: 3500 },
            { name: "Hotel Rajkot Residency", location: "Rajkot", cost: 4000 }
        ],
        foodOptions: [
            { name: "Surat Specialties", location: "Surat", cost: 300 },
            { name: "Rajkot Cuisine", location: "Rajkot", cost: 350 }
        ],
        placesToVisit: [
            { name: "Sur Sagar Lake", cost: 0 },
            { name: "Rajkot Museum", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 4500 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 72
    {
        id: 72,
        start: "Nagpur",
        end: "Raipur",
        name: "Nagpur to Raipur via Durg",
        distance: 300,
        steps: [
            "Start at Nagpur",
            "Drive to Durg",
            "Continue to Raipur"
        ],
        hotels: [
            { name: "Hotel Durg Plaza", location: "Durg", cost: 3000 },
            { name: "Hotel Raipur Residency", location: "Raipur", cost: 3500 }
        ],
        foodOptions: [
            { name: "Durg Dining", location: "Durg", cost: 250 },
            { name: "Raipur Fast Food", location: "Raipur", cost: 300 }
        ],
        placesToVisit: [
            { name: "Nagzira Wildlife Sanctuary", cost: 300 },
            { name: "Buddhist Monuments", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 2500 },
            { mode: "Train", cost: 1500 }
        ]
    },
    // Route 73
    {
        id: 73,
        start: "Aurangabad",
        end: "Kolhapur",
        name: "Aurangabad to Kolhapur via Pune",
        distance: 300,
        steps: [
            "Start at Aurangabad",
            "Drive to Pune",
            "Continue to Kolhapur"
        ],
        hotels: [
            { name: "Hotel Pune Heights", location: "Pune", cost: 3500 },
            { name: "Hotel Kolhapur", location: "Kolhapur", cost: 4000 }
        ],
        foodOptions: [
            { name: "Pune Delights", location: "Pune", cost: 300 },
            { name: "Kolhapur Spice", location: "Kolhapur", cost: 350 }
        ],
        placesToVisit: [
            { name: "Pune Shaniwarwada", cost: 100 },
            { name: "Kolhapur Mahalaxmi Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 3500 },
            { mode: "Train", cost: 2000 }
        ]
    },
     // Route 74
     {
        id: 74,
        start: "Mumbai",
        end: "Delhi",
        name: "Mumbai to Delhi via Surat and Udaipur",
        distance: 1500,
        steps: [
            "Start at Mumbai",
            "Drive to Surat",
            "Continue to Udaipur",
            "Drive to Delhi"
        ],
        hotels: [
            { name: "Hotel Surat Grand", location: "Surat", cost: 3500 },
            { name: "Hotel Udaipur Palace", location: "Udaipur", cost: 5000 },
            { name: "Hotel Delhi Express", location: "Delhi", cost: 6000 }
        ],
        foodOptions: [
            { name: "Surat Eats", location: "Surat", cost: 300 },
            { name: "Udaipur Delicacies", location: "Udaipur", cost: 400 },
            { name: "Delhi Street Food", location: "Delhi", cost: 500 }
        ],
        placesToVisit: [
            { name: "Surat Silk Market", cost: 0 },
            { name: "Udaipur Lake Palace", cost: 200 },
            { name: "Red Fort", cost: 250 }
        ],
        transportation: [
            { mode: "Car", cost: 8000 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 75
    {
        id: 75,
        start: "Pune",
        end: "Chennai",
        name: "Pune to Chennai via Bangalore",
        distance: 1200,
        steps: [
            "Start at Pune",
            "Drive to Bangalore",
            "Continue to Chennai"
        ],
        hotels: [
            { name: "Hotel Bangalore Heights", location: "Bangalore", cost: 4000 },
            { name: "Hotel Chennai Towers", location: "Chennai", cost: 5000 }
        ],
        foodOptions: [
            { name: "Bangalore Bites", location: "Bangalore", cost: 300 },
            { name: "Chennai Cuisine", location: "Chennai", cost: 400 }
        ],
        placesToVisit: [
            { name: "Bangalore Lalbagh Botanical Garden", cost: 100 },
            { name: "Marina Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 4000 }
        ]
    },
    // Route 76
    {
        id: 76,
        start: "Nagpur",
        end: "Kolkata",
        name: "Nagpur to Kolkata via Raipur and Varanasi",
        distance: 1300,
        steps: [
            "Start at Nagpur",
            "Drive to Raipur",
            "Continue to Varanasi",
            "Drive to Kolkata"
        ],
        hotels: [
            { name: "Hotel Raipur View", location: "Raipur", cost: 3000 },
            { name: "Hotel Varanasi Heritage", location: "Varanasi", cost: 3500 },
            { name: "Hotel Kolkata Royal", location: "Kolkata", cost: 5000 }
        ],
        foodOptions: [
            { name: "Raipur Delights", location: "Raipur", cost: 250 },
            { name: "Varanasi Food Corner", location: "Varanasi", cost: 300 },
            { name: "Kolkata Street Eats", location: "Kolkata", cost: 400 }
        ],
        placesToVisit: [
            { name: "Varanasi Ghats", cost: 0 },
            { name: "Victoria Memorial", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 7500 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 77
    {
        id: 77,
        start: "Aurangabad",
        end: "Jaipur",
        name: "Aurangabad to Jaipur via Indore and Kota",
        distance: 950,
        steps: [
            "Start at Aurangabad",
            "Drive to Indore",
            "Continue to Kota",
            "Drive to Jaipur"
        ],
        hotels: [
            { name: "Hotel Indore Comfort", location: "Indore", cost: 3500 },
            { name: "Hotel Kota Palace", location: "Kota", cost: 3000 },
            { name: "Hotel Jaipur Heritage", location: "Jaipur", cost: 4500 }
        ],
        foodOptions: [
            { name: "Indore Special", location: "Indore", cost: 300 },
            { name: "Kota Cuisine", location: "Kota", cost: 250 },
            { name: "Jaipur Delights", location: "Jaipur", cost: 350 }
        ],
        placesToVisit: [
            { name: "Indore Rajwada", cost: 100 },
            { name: "Jaipur Amber Fort", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 4000 }
        ]
    },
    // Route 78
    {
        id: 78,
        start: "Mumbai",
        end: "Bengaluru",
        name: "Mumbai to Bengaluru via Goa",
        distance: 1000,
        steps: [
            "Start at Mumbai",
            "Drive to Goa",
            "Continue to Bengaluru"
        ],
        hotels: [
            { name: "Hotel Goa Beach", location: "Goa", cost: 4000 },
            { name: "Hotel Bengaluru City", location: "Bengaluru", cost: 4500 }
        ],
        foodOptions: [
            { name: "Goa Seafood", location: "Goa", cost: 400 },
            { name: "Bengaluru Bites", location: "Bengaluru", cost: 350 }
        ],
        placesToVisit: [
            { name: "Goa Fort Aguada", cost: 200 },
            { name: "Bengaluru Cubbon Park", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 3000 }
        ]
    },
    // Route 79
    {
        id: 79,
        start: "Nagpur",
        end: "Chennai",
        name: "Nagpur to Chennai via Hyderabad",
        distance: 1100,
        steps: [
            "Start at Nagpur",
            "Drive to Hyderabad",
            "Continue to Chennai"
        ],
        hotels: [
            { name: "Hotel Hyderabad Suites", location: "Hyderabad", cost: 4000 },
            { name: "Hotel Chennai Grande", location: "Chennai", cost: 5000 }
        ],
        foodOptions: [
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
            { name: "Chennai Special", location: "Chennai", cost: 400 }
        ],
        placesToVisit: [
            { name: "Charminar", cost: 100 },
            { name: "Kapaleeshwarar Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 4000 }
        ]
    },
    // Route 80
    {
        id: 80,
        start: "Pune",
        end: "Lucknow",
        name: "Pune to Lucknow via Mumbai and Surat",
        distance: 1400,
        steps: [
            "Start at Pune",
            "Drive to Mumbai",
            "Continue to Surat",
            "Drive to Lucknow"
        ],
        hotels: [
            { name: "Hotel Mumbai Central", location: "Mumbai", cost: 5000 },
            { name: "Hotel Surat Comfort", location: "Surat", cost: 3500 },
            { name: "Hotel Lucknow Royal", location: "Lucknow", cost: 4500 }
        ],
        foodOptions: [
            { name: "Mumbai Street Food", location: "Mumbai", cost: 500 },
            { name: "Surat Snacks", location: "Surat", cost: 300 },
            { name: "Lucknow Cuisine", location: "Lucknow", cost: 400 }
        ],
        placesToVisit: [
            { name: "Gateway of India", cost: 0 },
            { name: "Lucknow Bara Imambara", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 8000 },
            { mode: "Train", cost: 5000 }
        ]
    },

        // Route 81
        {
            id: 81,
            start: "Mumbai",
            end: "Kolkata",
            name: "Mumbai to Kolkata via Ahmedabad and Varanasi",
            distance: 1700,
            steps: [
                "Start at Mumbai",
                "Drive to Ahmedabad",
                "Continue to Varanasi",
                "Drive to Kolkata"
            ],
            hotels: [
                { name: "Hotel Ahmedabad Royal", location: "Ahmedabad", cost: 4000 },
                { name: "Hotel Varanasi Delight", location: "Varanasi", cost: 3500 },
                { name: "Hotel Kolkata Grande", location: "Kolkata", cost: 6000 }
            ],
            foodOptions: [
                { name: "Ahmedabad Street Food", location: "Ahmedabad", cost: 350 },
                { name: "Varanasi Snacks", location: "Varanasi", cost: 300 },
                { name: "Kolkata Cuisine", location: "Kolkata", cost: 500 }
            ],
            placesToVisit: [
                { name: "Sabarmati Ashram", cost: 100 },
                { name: "Kolkata Howrah Bridge", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 9000 },
                { mode: "Train", cost: 6000 }
            ]
        },
        // Route 82
        {
            id: 82,
            start: "Pune",
            end: "Hyderabad",
            name: "Pune to Hyderabad via Solapur",
            distance: 700,
            steps: [
                "Start at Pune",
                "Drive to Solapur",
                "Continue to Hyderabad"
            ],
            hotels: [
                { name: "Hotel Solapur Inn", location: "Solapur", cost: 2500 },
                { name: "Hotel Hyderabad Luxury", location: "Hyderabad", cost: 4500 }
            ],
            foodOptions: [
                { name: "Solapur Eats", location: "Solapur", cost: 200 },
                { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 }
            ],
            placesToVisit: [
                { name: "Hyderabad Golconda Fort", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 4000 },
                { mode: "Train", cost: 3000 }
            ]
        },
        // Route 83
        {
            id: 83,
            start: "Nagpur",
            end: "Bengaluru",
            name: "Nagpur to Bengaluru via Raipur and Vijayawada",
            distance: 1100,
            steps: [
                "Start at Nagpur",
                "Drive to Raipur",
                "Continue to Vijayawada",
                "Drive to Bengaluru"
            ],
            hotels: [
                { name: "Hotel Raipur Comfort", location: "Raipur", cost: 3000 },
                { name: "Hotel Vijayawada Palace", location: "Vijayawada", cost: 3500 },
                { name: "Hotel Bengaluru Heights", location: "Bengaluru", cost: 4500 }
            ],
            foodOptions: [
                { name: "Raipur Delights", location: "Raipur", cost: 250 },
                { name: "Vijayawada Cuisine", location: "Vijayawada", cost: 300 },
                { name: "Bengaluru Bites", location: "Bengaluru", cost: 350 }
            ],
            placesToVisit: [
                { name: "Vijayawada Kanaka Durga Temple", cost: 100 },
                { name: "Bengaluru Lalbagh Botanical Garden", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 6500 },
                { mode: "Train", cost: 4000 }
            ]
        },
        // Route 84
        {
            id: 84,
            start: "Aurangabad",
            end: "Kolkata",
            name: "Aurangabad to Kolkata via Indore, Kanpur, and Patna",
            distance: 1300,
            steps: [
                "Start at Aurangabad",
                "Drive to Indore",
                "Continue to Kanpur",
                "Drive to Patna",
                "Drive to Kolkata"
            ],
            hotels: [
                { name: "Hotel Indore Heritage", location: "Indore", cost: 3500 },
                { name: "Hotel Kanpur Luxury", location: "Kanpur", cost: 4000 },
                { name: "Hotel Patna Comfort", location: "Patna", cost: 3000 },
                { name: "Hotel Kolkata Grande", location: "Kolkata", cost: 5500 }
            ],
            foodOptions: [
                { name: "Indore Bites", location: "Indore", cost: 300 },
                { name: "Kanpur Eats", location: "Kanpur", cost: 250 },
                { name: "Patna Delights", location: "Patna", cost: 200 },
                { name: "Kolkata Cuisine", location: "Kolkata", cost: 400 }
            ],
            placesToVisit: [
                { name: "Kanpur Jajmau", cost: 0 },
                { name: "Kolkata Victoria Memorial", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 8000 },
                { mode: "Train", cost: 5000 }
            ]
        },
        // Route 85
        {
            id: 85,
            start: "Mumbai",
            end: "Chennai",
            name: "Mumbai to Chennai via Pune and Bangalore",
            distance: 1300,
            steps: [
                "Start at Mumbai",
                "Drive to Pune",
                "Continue to Bangalore",
                "Drive to Chennai"
            ],
            hotels: [
                { name: "Hotel Pune Heights", location: "Pune", cost: 3000 },
                { name: "Hotel Bangalore City", location: "Bangalore", cost: 4000 },
                { name: "Hotel Chennai Grande", location: "Chennai", cost: 5000 }
            ],
            foodOptions: [
                { name: "Pune Delights", location: "Pune", cost: 300 },
                { name: "Bangalore Special", location: "Bangalore", cost: 350 },
                { name: "Chennai Cuisine", location: "Chennai", cost: 400 }
            ],
            placesToVisit: [
                { name: "Bangalore Cubbon Park", cost: 0 },
                { name: "Chennai Marina Beach", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 7000 },
                { mode: "Train", cost: 5000 }
            ]
        },
        // Route 86
        {
            id: 86,
            start: "Pune",
            end: "Delhi",
            name: "Pune to Delhi via Mumbai and Udaipur",
            distance: 1500,
            steps: [
                "Start at Pune",
                "Drive to Mumbai",
                "Continue to Udaipur",
                "Drive to Delhi"
            ],
            hotels: [
                { name: "Hotel Mumbai Central", location: "Mumbai", cost: 5000 },
                { name: "Hotel Udaipur Palace", location: "Udaipur", cost: 4500 },
                { name: "Hotel Delhi Express", location: "Delhi", cost: 6000 }
            ],
            foodOptions: [
                { name: "Mumbai Street Food", location: "Mumbai", cost: 500 },
                { name: "Udaipur Delicacies", location: "Udaipur", cost: 400 },
                { name: "Delhi Street Food", location: "Delhi", cost: 500 }
            ],
            placesToVisit: [
                { name: "Udaipur Lake Palace", cost: 200 },
                { name: "Delhi Qutub Minar", cost: 250 }
            ],
            transportation: [
                { mode: "Car", cost: 8000 },
                { mode: "Train", cost: 6000 }
            ]
        },
        // Route 87
    {
        id: 87,
        start: "Mumbai",
        end: "Jaipur",
        name: "Mumbai to Jaipur via Surat and Udaipur",
        distance: 1200,
        steps: [
            "Start at Mumbai",
            "Drive to Surat",
            "Continue to Udaipur",
            "Drive to Jaipur"
        ],
        hotels: [
            { name: "Hotel Surat Royal", location: "Surat", cost: 3500 },
            { name: "Hotel Udaipur Heritage", location: "Udaipur", cost: 4000 },
            { name: "Hotel Jaipur Palace", location: "Jaipur", cost: 5000 }
        ],
        foodOptions: [
            { name: "Surat Delights", location: "Surat", cost: 300 },
            { name: "Udaipur Flavors", location: "Udaipur", cost: 350 },
            { name: "Jaipur Bites", location: "Jaipur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Udaipur City Palace", cost: 200 },
            { name: "Jaipur Amber Fort", cost: 250 }
        ],
        transportation: [
            { mode: "Car", cost: 7000 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 88
    {
        id: 88,
        start: "Pune",
        end: "Lucknow",
        name: "Pune to Lucknow via Indore and Kanpur",
        distance: 1200,
        steps: [
            "Start at Pune",
            "Drive to Indore",
            "Continue to Kanpur",
            "Drive to Lucknow"
        ],
        hotels: [
            { name: "Hotel Indore Heritage", location: "Indore", cost: 3500 },
            { name: "Hotel Kanpur Central", location: "Kanpur", cost: 4000 },
            { name: "Hotel Lucknow Royal", location: "Lucknow", cost: 4500 }
        ],
        foodOptions: [
            { name: "Indore Bites", location: "Indore", cost: 250 },
            { name: "Kanpur Street Food", location: "Kanpur", cost: 300 },
            { name: "Lucknow Cuisine", location: "Lucknow", cost: 350 }
        ],
        placesToVisit: [
            { name: "Kanpur Jajmau", cost: 0 },
            { name: "Lucknow Bara Imambara", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 7500 },
            { mode: "Train", cost: 5500 }
        ]
    },
    // Route 89
    {
        id: 89,
        start: "Nagpur",
        end: "Delhi",
        name: "Nagpur to Delhi via Raipur and Kanpur",
        distance: 1300,
        steps: [
            "Start at Nagpur",
            "Drive to Raipur",
            "Continue to Kanpur",
            "Drive to Delhi"
        ],
        hotels: [
            { name: "Hotel Raipur Comfort", location: "Raipur", cost: 3000 },
            { name: "Hotel Kanpur Luxury", location: "Kanpur", cost: 4000 },
            { name: "Hotel Delhi Express", location: "Delhi", cost: 6000 }
        ],
        foodOptions: [
            { name: "Raipur Delights", location: "Raipur", cost: 250 },
            { name: "Kanpur Eats", location: "Kanpur", cost: 300 },
            { name: "Delhi Street Food", location: "Delhi", cost: 500 }
        ],
        placesToVisit: [
            { name: "Kanpur Jajmau", cost: 0 },
            { name: "Delhi Qutub Minar", cost: 250 }
        ],
        transportation: [
            { mode: "Car", cost: 8500 },
            { mode: "Train", cost: 6000 }
        ]
    },
    // Route 90
    {
        id: 90,
        start: "Aurangabad",
        end: "Bhopal",
        name: "Aurangabad to Bhopal via Indore",
        distance: 600,
        steps: [
            "Start at Aurangabad",
            "Drive to Indore",
            "Continue to Bhopal"
        ],
        hotels: [
            { name: "Hotel Indore Heritage", location: "Indore", cost: 3000 },
            { name: "Hotel Bhopal Comfort", location: "Bhopal", cost: 3500 }
        ],
        foodOptions: [
            { name: "Indore Snacks", location: "Indore", cost: 250 },
            { name: "Bhopal Bites", location: "Bhopal", cost: 300 }
        ],
        placesToVisit: [
            { name: "Bhopal Upper Lake", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 3500 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 91
    {
        id: 91,
        start: "Mumbai",
        end: "Goa",
        name: "Mumbai to Goa via Pune and Kolhapur",
        distance: 800,
        steps: [
            "Start at Mumbai",
            "Drive to Pune",
            "Continue to Kolhapur",
            "Drive to Goa"
        ],
        hotels: [
            { name: "Hotel Pune Central", location: "Pune", cost: 3000 },
            { name: "Hotel Kolhapur Grand", location: "Kolhapur", cost: 3500 },
            { name: "Hotel Goa Beachside", location: "Goa", cost: 5000 }
        ],
        foodOptions: [
            { name: "Pune Delicacies", location: "Pune", cost: 300 },
            { name: "Kolhapur Spice", location: "Kolhapur", cost: 350 },
            { name: "Goa Seafood", location: "Goa", cost: 500 }
        ],
        placesToVisit: [
            { name: "Goa Beaches", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 3500 }
        ]
    },
    // Route 92
    {
        id: 92,
        start: "Nagpur",
        end: "Chennai",
        name: "Nagpur to Chennai via Hyderabad",
        distance: 1200,
        steps: [
            "Start at Nagpur",
            "Drive to Hyderabad",
            "Continue to Chennai"
        ],
        hotels: [
            { name: "Hotel Hyderabad City", location: "Hyderabad", cost: 4000 },
            { name: "Hotel Chennai Grande", location: "Chennai", cost: 5000 }
        ],
        foodOptions: [
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
            { name: "Chennai Cuisine", location: "Chennai", cost: 400 }
        ],
        placesToVisit: [
            { name: "Hyderabad Charminar", cost: 100 },
            { name: "Chennai Marina Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 7000 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 93
    {
        id: 93,
        start: "Pune",
        end: "Kolkata",
        name: "Pune to Kolkata via Nagpur and Varanasi",
        distance: 1400,
        steps: [
            "Start at Pune",
            "Drive to Nagpur",
            "Continue to Varanasi",
            "Drive to Kolkata"
        ],
        hotels: [
            { name: "Hotel Nagpur Comfort", location: "Nagpur", cost: 3000 },
            { name: "Hotel Varanasi Delight", location: "Varanasi", cost: 3500 },
            { name: "Hotel Kolkata Royale", location: "Kolkata", cost: 6000 }
        ],
        foodOptions: [
            { name: "Nagpur Snacks", location: "Nagpur", cost: 250 },
            { name: "Varanasi Eats", location: "Varanasi", cost: 300 },
            { name: "Kolkata Delicacies", location: "Kolkata", cost: 500 }
        ],
        placesToVisit: [
            { name: "Varanasi Ghats", cost: 200 },
            { name: "Kolkata Victoria Memorial", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 8500 },
            { mode: "Train", cost: 6000 }
        ]
    },
     // Route 94
     {
        id: 94,
        start: "Mumbai",
        end: "Shillong",
        name: "Mumbai to Shillong via Kolkata",
        distance: 1900,
        steps: [
            "Start at Mumbai",
            "Fly to Kolkata",
            "Drive to Shillong"
        ],
        hotels: [
            { name: "Hotel Kolkata Central", location: "Kolkata", cost: 4000 },
            { name: "Hotel Shillong Heights", location: "Shillong", cost: 5000 }
        ],
        foodOptions: [
            { name: "Kolkata Street Food", location: "Kolkata", cost: 300 },
            { name: "Shillong Delights", location: "Shillong", cost: 350 }
        ],
        placesToVisit: [
            { name: "Shillong Elephant Falls", cost: 150 }
        ],
        transportation: [
            { mode: "Flight", cost: 8000 },
            { mode: "Car", cost: 3000 }
        ]
    },
    // Route 95
    {
        id: 95,
        start: "Pune",
        end: "Amritsar",
        name: "Pune to Amritsar via Delhi",
        distance: 1500,
        steps: [
            "Start at Pune",
            "Fly to Delhi",
            "Drive to Amritsar"
        ],
        hotels: [
            { name: "Hotel Delhi Comfort", location: "Delhi", cost: 4000 },
            { name: "Hotel Amritsar Palace", location: "Amritsar", cost: 5000 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Amritsar Cuisine", location: "Amritsar", cost: 400 }
        ],
        placesToVisit: [
            { name: "Amritsar Golden Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Flight", cost: 6000 },
            { mode: "Car", cost: 5000 }
        ]
    },
    // Route 96
    {
        id: 96,
        start: "Nagpur",
        end: "Patna",
        name: "Nagpur to Patna via Varanasi",
        distance: 1200,
        steps: [
            "Start at Nagpur",
            "Drive to Varanasi",
            "Continue to Patna"
        ],
        hotels: [
            { name: "Hotel Varanasi Delight", location: "Varanasi", cost: 3500 },
            { name: "Hotel Patna Comfort", location: "Patna", cost: 4000 }
        ],
        foodOptions: [
            { name: "Varanasi Street Food", location: "Varanasi", cost: 300 },
            { name: "Patna Delights", location: "Patna", cost: 350 }
        ],
        placesToVisit: [
            { name: "Patna Museum", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 7000 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 97
    {
        id: 97,
        start: "Aurangabad",
        end: "Chandigarh",
        name: "Aurangabad to Chandigarh via Delhi",
        distance: 1000,
        steps: [
            "Start at Aurangabad",
            "Fly to Delhi",
            "Drive to Chandigarh"
        ],
        hotels: [
            { name: "Hotel Delhi Central", location: "Delhi", cost: 4000 },
            { name: "Hotel Chandigarh Heights", location: "Chandigarh", cost: 4500 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Chandigarh Cuisine", location: "Chandigarh", cost: 300 }
        ],
        placesToVisit: [
            { name: "Chandigarh Rock Garden", cost: 200 }
        ],
        transportation: [
            { mode: "Flight", cost: 7000 },
            { mode: "Car", cost: 3500 }
        ]
    },
    // Route 98
    {
        id: 98,
        start: "Mumbai",
        end: "Bhopal",
        name: "Mumbai to Bhopal via Surat and Indore",
        distance: 800,
        steps: [
            "Start at Mumbai",
            "Drive to Surat",
            "Continue to Indore",
            "Drive to Bhopal"
        ],
        hotels: [
            { name: "Hotel Surat Grande", location: "Surat", cost: 3500 },
            { name: "Hotel Indore Luxury", location: "Indore", cost: 4000 },
            { name: "Hotel Bhopal Heritage", location: "Bhopal", cost: 3500 }
        ],
        foodOptions: [
            { name: "Surat Delights", location: "Surat", cost: 300 },
            { name: "Indore Eats", location: "Indore", cost: 350 },
            { name: "Bhopal Delicacies", location: "Bhopal", cost: 300 }
        ],
        placesToVisit: [
            { name: "Bhopal Upper Lake", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 3500 }
        ]
    },
    // Route 99
    {
        id: 99,
        start: "Pune",
        end: "Guwahati",
        name: "Pune to Guwahati via Kolkata",
        distance: 1600,
        steps: [
            "Start at Pune",
            "Fly to Kolkata",
            "Fly to Guwahati"
        ],
        hotels: [
            { name: "Hotel Kolkata Central", location: "Kolkata", cost: 4000 },
            { name: "Hotel Guwahati Resort", location: "Guwahati", cost: 4500 }
        ],
        foodOptions: [
            { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
            { name: "Guwahati Delights", location: "Guwahati", cost: 400 }
        ],
        placesToVisit: [
            { name: "Guwahati Kamakhya Temple", cost: 0 }
        ],
        transportation: [
            { mode: "Flight", cost: 10000 },
            { mode: "Car", cost: 5000 }
        ]
    },
    // Route 100
    {
        id: 100,
        start: "Nagpur",
        end: "Jodhpur",
        name: "Nagpur to Jodhpur via Udaipur",
        distance: 1000,
        steps: [
            "Start at Nagpur",
            "Drive to Udaipur",
            "Continue to Jodhpur"
        ],
        hotels: [
            { name: "Hotel Udaipur Grand", location: "Udaipur", cost: 4000 },
            { name: "Hotel Jodhpur Royal", location: "Jodhpur", cost: 4500 }
        ],
        foodOptions: [
            { name: "Udaipur Cuisine", location: "Udaipur", cost: 350 },
            { name: "Jodhpur Delights", location: "Jodhpur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Jodhpur Mehrangarh Fort", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 101
    {
        id: 101,
        start: "Aurangabad",
        end: "Bengaluru",
        name: "Aurangabad to Bengaluru via Hyderabad",
        distance: 800,
        steps: [
            "Start at Aurangabad",
            "Drive to Hyderabad",
            "Continue to Bengaluru"
        ],
        hotels: [
            { name: "Hotel Hyderabad City", location: "Hyderabad", cost: 4000 },
            { name: "Hotel Bengaluru Comfort", location: "Bengaluru", cost: 4500 }
        ],
        foodOptions: [
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
            { name: "Bengaluru Cuisine", location: "Bengaluru", cost: 400 }
        ],
        placesToVisit: [
            { name: "Bengaluru Lalbagh Botanical Garden", cost: 150 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 4000 }
        ]
    },
        
        // Route 102
        {
            id: 102,
            start: "Mumbai",
            end: "Jammu",
            name: "Mumbai to Jammu via Delhi",
            distance: 1800,
            steps: [
                "Start at Mumbai",
                "Fly to Delhi",
                "Drive to Jammu"
            ],
            hotels: [
                { name: "Hotel Delhi Comfort", location: "Delhi", cost: 4000 },
                { name: "Hotel Jammu Palace", location: "Jammu", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Jammu Delights", location: "Jammu", cost: 400 }
            ],
            placesToVisit: [
                { name: "Jammu Vaishno Devi Temple", cost: 0 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 },
                { mode: "Car", cost: 6000 }
            ]
        },
        // Route 103
        {
            id: 103,
            start: "Pune",
            end: "Raipur",
            name: "Pune to Raipur via Nagpur",
            distance: 1100,
            steps: [
                "Start at Pune",
                "Drive to Nagpur",
                "Continue to Raipur"
            ],
            hotels: [
                { name: "Hotel Nagpur Central", location: "Nagpur", cost: 3500 },
                { name: "Hotel Raipur Heights", location: "Raipur", cost: 4000 }
            ],
            foodOptions: [
                { name: "Nagpur Street Food", location: "Nagpur", cost: 300 },
                { name: "Raipur Cuisine", location: "Raipur", cost: 350 }
            ],
            placesToVisit: [
                { name: "Raipur Nandanvan Jungle Safari", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 5000 },
                { mode: "Train", cost: 4000 }
            ]
        },
        // Route 104
        {
            id: 104,
            start: "Nagpur",
            end: "Kolkata",
            name: "Nagpur to Kolkata via Varanasi",
            distance: 1400,
            steps: [
                "Start at Nagpur",
                "Drive to Varanasi",
                "Continue to Kolkata"
            ],
            hotels: [
                { name: "Hotel Varanasi Luxury", location: "Varanasi", cost: 4000 },
                { name: "Hotel Kolkata Royal", location: "Kolkata", cost: 4500 }
            ],
            foodOptions: [
                { name: "Varanasi Delights", location: "Varanasi", cost: 350 },
                { name: "Kolkata Street Food", location: "Kolkata", cost: 400 }
            ],
            placesToVisit: [
                { name: "Kolkata Victoria Memorial", cost: 200 }
            ],
            transportation: [
                { mode: "Car", cost: 7000 },
                { mode: "Train", cost: 5000 }
            ]
        },
        // Route 105
        {
            id: 105,
            start: "Aurangabad",
            end: "Chennai",
            name: "Aurangabad to Chennai via Hyderabad",
            distance: 1000,
            steps: [
                "Start at Aurangabad",
                "Drive to Hyderabad",
                "Continue to Chennai"
            ],
            hotels: [
                { name: "Hotel Hyderabad Central", location: "Hyderabad", cost: 4000 },
                { name: "Hotel Chennai Grand", location: "Chennai", cost: 4500 }
            ],
            foodOptions: [
                { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
                { name: "Chennai Cuisine", location: "Chennai", cost: 400 }
            ],
            placesToVisit: [
                { name: "Chennai Marina Beach", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 6000 },
                { mode: "Train", cost: 5000 }
            ]
        },
        // Route 106
        {
            id: 106,
            start: "Mumbai",
            end: "Kanpur",
            name: "Mumbai to Kanpur via Delhi",
            distance: 1300,
            steps: [
                "Start at Mumbai",
                "Fly to Delhi",
                "Drive to Kanpur"
            ],
            hotels: [
                { name: "Hotel Delhi Comfort", location: "Delhi", cost: 4000 },
                { name: "Hotel Kanpur Delight", location: "Kanpur", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Kanpur Cuisine", location: "Kanpur", cost: 400 }
            ],
            placesToVisit: [
                { name: "Kanpur Jain Temple", cost: 100 }
            ],
            transportation: [
                { mode: "Flight", cost: 7000 },
                { mode: "Car", cost: 5000 }
            ]
        },
        // Route 107
        {
            id: 107,
            start: "Pune",
            end: "Dehradun",
            name: "Pune to Dehradun via Delhi",
            distance: 1600,
            steps: [
                "Start at Pune",
                "Fly to Delhi",
                "Drive to Dehradun"
            ],
            hotels: [
                { name: "Hotel Delhi Central", location: "Delhi", cost: 4000 },
                { name: "Hotel Dehradun Heights", location: "Dehradun", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Dehradun Delights", location: "Dehradun", cost: 400 }
            ],
            placesToVisit: [
                { name: "Dehradun Robber's Cave", cost: 150 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 },
                { mode: "Car", cost: 6000 }
            ]
        },
        // Route 108
        {
            id: 108,
            start: "Nagpur",
            end: "Bhubaneswar",
            name: "Nagpur to Bhubaneswar via Raipur",
            distance: 1000,
            steps: [
                "Start at Nagpur",
                "Drive to Raipur",
                "Continue to Bhubaneswar"
            ],
            hotels: [
                { name: "Hotel Raipur Comfort", location: "Raipur", cost: 3500 },
                { name: "Hotel Bhubaneswar Grand", location: "Bhubaneswar", cost: 4000 }
            ],
            foodOptions: [
                { name: "Raipur Delicacies", location: "Raipur", cost: 300 },
                { name: "Bhubaneswar Cuisine", location: "Bhubaneswar", cost: 350 }
            ],
            placesToVisit: [
                { name: "Bhubaneswar Lingaraj Temple", cost: 0 }
            ],
            transportation: [
                { mode: "Car", cost: 6000 },
                { mode: "Train", cost: 4500 }
            ]
        },
        
          // Route 109
    {
        id: 109,
        start: "Mumbai",
        end: "Bhopal",
        name: "Mumbai to Bhopal via Indore",
        distance: 1000,
        steps: [
            "Start at Mumbai",
            "Drive to Indore",
            "Continue to Bhopal"
        ],
        hotels: [
            { name: "Hotel Indore Royal", location: "Indore", cost: 3500 },
            { name: "Hotel Bhopal Comfort", location: "Bhopal", cost: 4000 }
        ],
        foodOptions: [
            { name: "Indore Street Food", location: "Indore", cost: 300 },
            { name: "Bhopal Cuisine", location: "Bhopal", cost: 350 }
        ],
        placesToVisit: [
            { name: "Bhopal Upper Lake", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 4500 }
        ]
    },
    // Route 110
    {
        id: 110,
        start: "Pune",
        end: "Shimla",
        name: "Pune to Shimla via Delhi",
        distance: 1600,
        steps: [
            "Start at Pune",
            "Fly to Delhi",
            "Drive to Shimla"
        ],
        hotels: [
            { name: "Hotel Delhi Grand", location: "Delhi", cost: 4000 },
            { name: "Hotel Shimla Heights", location: "Shimla", cost: 4500 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Shimla Delights", location: "Shimla", cost: 400 }
        ],
        placesToVisit: [
            { name: "Shimla Mall Road", cost: 0 }
        ],
        transportation: [
            { mode: "Flight", cost: 8000 },
            { mode: "Car", cost: 6000 }
        ]
    },
    // Route 111
    {
        id: 111,
        start: "Nagpur",
        end: "Patna",
        name: "Nagpur to Patna via Varanasi",
        distance: 1200,
        steps: [
            "Start at Nagpur",
            "Drive to Varanasi",
            "Continue to Patna"
        ],
        hotels: [
            { name: "Hotel Varanasi Central", location: "Varanasi", cost: 3500 },
            { name: "Hotel Patna Comfort", location: "Patna", cost: 4000 }
        ],
        foodOptions: [
            { name: "Varanasi Street Food", location: "Varanasi", cost: 300 },
            { name: "Patna Delights", location: "Patna", cost: 350 }
        ],
        placesToVisit: [
            { name: "Patna Gandhi Maidan", cost: 100 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 5000 }
        ]
    },
    // Route 112
    {
        id: 112,
        start: "Aurangabad",
        end: "Chandigarh",
        name: "Aurangabad to Chandigarh via Delhi",
        distance: 1200,
        steps: [
            "Start at Aurangabad",
            "Fly to Delhi",
            "Drive to Chandigarh"
        ],
        hotels: [
            { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
            { name: "Hotel Chandigarh Heights", location: "Chandigarh", cost: 4500 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Chandigarh Cuisine", location: "Chandigarh", cost: 400 }
        ],
        placesToVisit: [
            { name: "Chandigarh Rock Garden", cost: 150 }
        ],
        transportation: [
            { mode: "Flight", cost: 8000 },
            { mode: "Car", cost: 6000 }
        ]
    },
    // Route 113
    {
        id: 113,
        start: "Mumbai",
        end: "Guwahati",
        name: "Mumbai to Guwahati via Kolkata",
        distance: 2000,
        steps: [
            "Start at Mumbai",
            "Fly to Kolkata",
            "Fly to Guwahati"
        ],
        hotels: [
            { name: "Hotel Kolkata Grand", location: "Kolkata", cost: 4000 },
            { name: "Hotel Guwahati Royal", location: "Guwahati", cost: 4500 }
        ],
        foodOptions: [
            { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
            { name: "Guwahati Delights", location: "Guwahati", cost: 400 }
        ],
        placesToVisit: [
            { name: "Guwahati Kamakhya Temple", cost: 100 }
        ],
        transportation: [
            { mode: "Flight", cost: 12000 }
        ]
    },
    // Route 114
    {
        id: 114,
        start: "Pune",
        end: "Kolkata",
        name: "Pune to Kolkata via Mumbai",
        distance: 1800,
        steps: [
            "Start at Pune",
            "Drive to Mumbai",
            "Fly to Kolkata"
        ],
        hotels: [
            { name: "Hotel Mumbai Central", location: "Mumbai", cost: 4000 },
            { name: "Hotel Kolkata Royal", location: "Kolkata", cost: 4500 }
        ],
        foodOptions: [
            { name: "Mumbai Street Food", location: "Mumbai", cost: 350 },
            { name: "Kolkata Cuisine", location: "Kolkata", cost: 400 }
        ],
        placesToVisit: [
            { name: "Kolkata Howrah Bridge", cost: 100 }
        ],
        transportation: [
            { mode: "Flight", cost: 8000 }
        ]
    },
    // Route 115
    {
        id: 115,
        start: "Nagpur",
        end: "Jaipur",
        name: "Nagpur to Jaipur via Delhi",
        distance: 1300,
        steps: [
            "Start at Nagpur",
            "Fly to Delhi",
            "Drive to Jaipur"
        ],
        hotels: [
            { name: "Hotel Delhi Grand", location: "Delhi", cost: 4000 },
            { name: "Hotel Jaipur Comfort", location: "Jaipur", cost: 4500 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Jaipur Delights", location: "Jaipur", cost: 400 }
        ],
        placesToVisit: [
            { name: "Jaipur Hawa Mahal", cost: 150 }
        ],
        transportation: [
            { mode: "Flight", cost: 7000 },
            { mode: "Car", cost: 5000 }
        ]
    },
    // Route 116
    {
        id: 116,
        start: "Aurangabad",
        end: "Chennai",
        name: "Aurangabad to Chennai via Hyderabad",
        distance: 1100,
        steps: [
            "Start at Aurangabad",
            "Drive to Hyderabad",
            "Continue to Chennai"
        ],
        hotels: [
            { name: "Hotel Hyderabad Luxury", location: "Hyderabad", cost: 4000 },
            { name: "Hotel Chennai Grand", location: "Chennai", cost: 4500 }
        ],
        foodOptions: [
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
            { name: "Chennai Cuisine", location: "Chennai", cost: 400 }
        ],
        placesToVisit: [
            { name: "Chennai Marina Beach", cost: 0 }
        ],
        transportation: [
            { mode: "Car", cost: 6000 },
            { mode: "Train", cost: 5000 }
        ]
    },
        // Route 117
        {
            id: 117,
            start: "Mumbai",
            end: "Srinagar",
            name: "Mumbai to Srinagar via Delhi",
            distance: 1900,
            steps: [
                "Start at Mumbai",
                "Fly to Delhi",
                "Fly to Srinagar"
            ],
            hotels: [
                { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
                { name: "Hotel Srinagar Paradise", location: "Srinagar", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Srinagar Cuisine", location: "Srinagar", cost: 450 }
            ],
            placesToVisit: [
                { name: "Srinagar Dal Lake", cost: 200 }
            ],
            transportation: [
                { mode: "Flight", cost: 12000 }
            ]
        },
        // Route 118
        {
            id: 118,
            start: "Pune",
            end: "Lucknow",
            name: "Pune to Lucknow via Mumbai",
            distance: 1500,
            steps: [
                "Start at Pune",
                "Drive to Mumbai",
                "Fly to Lucknow"
            ],
            hotels: [
                { name: "Hotel Mumbai Grand", location: "Mumbai", cost: 4000 },
                { name: "Hotel Lucknow Heritage", location: "Lucknow", cost: 4500 }
            ],
            foodOptions: [
                { name: "Mumbai Street Food", location: "Mumbai", cost: 350 },
                { name: "Lucknow Cuisine", location: "Lucknow", cost: 400 }
            ],
            placesToVisit: [
                { name: "Lucknow Bara Imambara", cost: 150 }
            ],
            transportation: [
                { mode: "Flight", cost: 7000 }
            ]
        },
        // Route 119
        {
            id: 119,
            start: "Nagpur",
            end: "Jaipur",
            name: "Nagpur to Jaipur via Delhi",
            distance: 1300,
            steps: [
                "Start at Nagpur",
                "Fly to Delhi",
                "Drive to Jaipur"
            ],
            hotels: [
                { name: "Hotel Delhi Lux", location: "Delhi", cost: 4000 },
                { name: "Hotel Jaipur Royal", location: "Jaipur", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Jaipur Cuisine", location: "Jaipur", cost: 400 }
            ],
            placesToVisit: [
                { name: "Jaipur Amer Fort", cost: 200 }
            ],
            transportation: [
                { mode: "Flight", cost: 7000 }
            ]
        },
        // Route 120
        {
            id: 120,
            start: "Aurangabad",
            end: "Bhubaneswar",
            name: "Aurangabad to Bhubaneswar via Hyderabad",
            distance: 1200,
            steps: [
                "Start at Aurangabad",
                "Drive to Hyderabad",
                "Fly to Bhubaneswar"
            ],
            hotels: [
                { name: "Hotel Hyderabad Grand", location: "Hyderabad", cost: 4000 },
                { name: "Hotel Bhubaneswar Comfort", location: "Bhubaneswar", cost: 4500 }
            ],
            foodOptions: [
                { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
                { name: "Bhubaneswar Delights", location: "Bhubaneswar", cost: 400 }
            ],
            placesToVisit: [
                { name: "Bhubaneswar Lingaraj Temple", cost: 100 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 }
            ]
        },
        // Route 121
        {
            id: 121,
            start: "Mumbai",
            end: "Dehradun",
            name: "Mumbai to Dehradun via Delhi",
            distance: 1700,
            steps: [
                "Start at Mumbai",
                "Fly to Delhi",
                "Drive to Dehradun"
            ],
            hotels: [
                { name: "Hotel Delhi Lux", location: "Delhi", cost: 4000 },
                { name: "Hotel Dehradun Heights", location: "Dehradun", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Dehradun Cuisine", location: "Dehradun", cost: 400 }
            ],
            placesToVisit: [
                { name: "Dehradun Robber's Cave", cost: 100 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 }
            ]
        },
        // Route 122
        {
            id: 122,
            start: "Pune",
            end: "Agra",
            name: "Pune to Agra via Delhi",
            distance: 1600,
            steps: [
                "Start at Pune",
                "Fly to Delhi",
                "Drive to Agra"
            ],
            hotels: [
                { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
                { name: "Hotel Agra Palace", location: "Agra", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Agra Delights", location: "Agra", cost: 400 }
            ],
            placesToVisit: [
                { name: "Agra Taj Mahal", cost: 250 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 }
            ]
        },
        // Route 123
        {
            id: 123,
            start: "Nagpur",
            end: "Guwahati",
            name: "Nagpur to Guwahati via Kolkata",
            distance: 1400,
            steps: [
                "Start at Nagpur",
                "Fly to Kolkata",
                "Fly to Guwahati"
            ],
            hotels: [
                { name: "Hotel Kolkata Grand", location: "Kolkata", cost: 4000 },
                { name: "Hotel Guwahati Royal", location: "Guwahati", cost: 5000 }
            ],
            foodOptions: [
                { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
                { name: "Guwahati Delights", location: "Guwahati", cost: 450 }
            ],
            placesToVisit: [
                { name: "Guwahati Umananda Temple", cost: 100 }
            ],
            transportation: [
                { mode: "Flight", cost: 10000 }
            ]
        },
        // Route 124
        {
            id: 124,
            start: "Aurangabad",
            end: "Chennai",
            name: "Aurangabad to Chennai via Bangalore",
            distance: 1100,
            steps: [
                "Start at Aurangabad",
                "Drive to Bangalore",
                "Drive to Chennai"
            ],
            hotels: [
                { name: "Hotel Bangalore Elite", location: "Bangalore", cost: 4000 },
                { name: "Hotel Chennai Comfort", location: "Chennai", cost: 4500 }
            ],
            foodOptions: [
                { name: "Bangalore Cuisine", location: "Bangalore", cost: 350 },
                { name: "Chennai Delights", location: "Chennai", cost: 400 }
            ],
            placesToVisit: [
                { name: "Chennai Kapaleeshwarar Temple", cost: 100 }
            ],
            transportation: [
                { mode: "Car", cost: 6000 },
                { mode: "Train", cost: 5000 }
            ]
        },
        // Route 125
        {
            id: 125,
            start: "Mumbai",
            end: "Kolkata",
            name: "Mumbai to Kolkata via Nagpur",
            distance: 1700,
            steps: [
                "Start at Mumbai",
                "Drive to Nagpur",
                "Fly to Kolkata"
            ],
            hotels: [
                { name: "Hotel Nagpur Royal", location: "Nagpur", cost: 3500 },
                { name: "Hotel Kolkata Palace", location: "Kolkata", cost: 4500 }
            ],
            foodOptions: [
                { name: "Nagpur Street Food", location: "Nagpur", cost: 300 },
                { name: "Kolkata Delights", location: "Kolkata", cost: 400 }
            ],
            placesToVisit: [
                { name: "Kolkata Victoria Memorial", cost: 150 }
            ],
            transportation: [
                { mode: "Flight", cost: 9000 }
            ]
        },
            // Route 126
    {
        id: 126,
        start: "Nagpur",
        end: "Bangalore",
        name: "Nagpur to Bangalore via Hyderabad",
        distance: 1200,
        steps: [
            "Start at Nagpur",
            "Drive to Hyderabad",
            "Drive to Bangalore"
        ],
        hotels: [
            { name: "Hotel Hyderabad Grand", location: "Hyderabad", cost: 4000 },
            { name: "Hotel Bangalore Bliss", location: "Bangalore", cost: 4500 }
        ],
        foodOptions: [
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 350 },
            { name: "Bangalore Delights", location: "Bangalore", cost: 400 }
        ],
        placesToVisit: [
            { name: "Bangalore Lalbagh Botanical Garden", cost: 150 }
        ],
        transportation: [
            { mode: "Car", cost: 5000 },
            { mode: "Train", cost: 3000 }
        ]
    },
    // Route 127
    {
        id: 127,
        start: "Aurangabad",
        end: "New Delhi",
        name: "Aurangabad to New Delhi via Mumbai",
        distance: 1300,
        steps: [
            "Start at Aurangabad",
            "Drive to Mumbai",
            "Fly to New Delhi"
        ],
        hotels: [
            { name: "Hotel Mumbai Elite", location: "Mumbai", cost: 4000 },
            { name: "Hotel Delhi Luxe", location: "New Delhi", cost: 5000 }
        ],
        foodOptions: [
            { name: "Mumbai Street Food", location: "Mumbai", cost: 350 },
            { name: "Delhi Delights", location: "New Delhi", cost: 400 }
        ],
        placesToVisit: [
            { name: "New Delhi Red Fort", cost: 250 }
        ],
        transportation: [
            { mode: "Flight", cost: 7000 }
        ]
    },
    // Route 128
    {
        id: 128,
        start: "Pune",
        end: "Bhubaneswar",
        name: "Pune to Bhubaneswar via Kolkata",
        distance: 1400,
        steps: [
            "Start at Pune",
            "Fly to Kolkata",
            "Fly to Bhubaneswar"
        ],
        hotels: [
            { name: "Hotel Kolkata Royal", location: "Kolkata", cost: 4000 },
            { name: "Hotel Bhubaneswar Comfort", location: "Bhubaneswar", cost: 4500 }
        ],
        foodOptions: [
            { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
            { name: "Bhubaneswar Delights", location: "Bhubaneswar", cost: 400 }
        ],
        placesToVisit: [
            { name: "Bhubaneswar Udayagiri Caves", cost: 150 }
        ],
        transportation: [
            { mode: "Flight", cost: 8000 }
        ]
    },
    // Route 129
    {
        id: 129,
        start: "Nagpur",
        end: "Chandigarh",
        name: "Nagpur to Chandigarh via Delhi",
        distance: 1400,
        steps: [
            "Start at Nagpur",
            "Fly to Delhi",
            "Fly to Chandigarh"
        ],
        hotels: [
            { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
            { name: "Hotel Chandigarh Premium", location: "Chandigarh", cost: 4500 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Chandigarh Delights", location: "Chandigarh", cost: 400 }
        ],
        placesToVisit: [
            { name: "Chandigarh Rock Garden", cost: 150 }
        ],
        transportation: [
            { mode: "Flight", cost: 9000 }
        ]
    },
    // Route 130
    {
        id: 130,
        start: "Aurangabad",
        end: "Hyderabad",
        name: "Aurangabad to Hyderabad via Pune",
        distance: 700,
        steps: [
            "Start at Aurangabad",
            "Drive to Pune",
            "Drive to Hyderabad"
        ],
        hotels: [
            { name: "Hotel Pune Royale", location: "Pune", cost: 4000 },
            { name: "Hotel Hyderabad Grand", location: "Hyderabad", cost: 4500 }
        ],
        foodOptions: [
            { name: "Pune Street Food", location: "Pune", cost: 350 },
            { name: "Hyderabad Biryani", location: "Hyderabad", cost: 400 }
        ],
        placesToVisit: [
            { name: "Hyderabad Charminar", cost: 200 }
        ],
        transportation: [
            { mode: "Car", cost: 3000 },
            { mode: "Train", cost: 2500 }
        ]
    },
    // Route 131
    {
        id: 131,
        start: "Pune",
        end: "Guwahati",
        name: "Pune to Guwahati via Kolkata",
        distance: 1600,
        steps: [
            "Start at Pune",
            "Fly to Kolkata",
            "Fly to Guwahati"
        ],
        hotels: [
            { name: "Hotel Kolkata Elite", location: "Kolkata", cost: 4000 },
            { name: "Hotel Guwahati Royal", location: "Guwahati", cost: 5000 }
        ],
        foodOptions: [
            { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
            { name: "Guwahati Delights", location: "Guwahati", cost: 450 }
        ],
        placesToVisit: [
            { name: "Guwahati Kamakhya Temple", cost: 100 }
        ],
        transportation: [
            { mode: "Flight", cost: 12000 }
        ]
    },
    // Route 132
    {
        id: 132,
        start: "Nagpur",
        end: "Agra",
        name: "Nagpur to Agra via Delhi",
        distance: 1300,
        steps: [
            "Start at Nagpur",
            "Fly to Delhi",
            "Drive to Agra"
        ],
        hotels: [
            { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
            { name: "Hotel Agra Palace", location: "Agra", cost: 4500 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Agra Delights", location: "Agra", cost: 400 }
        ],
        placesToVisit: [
            { name: "Agra Taj Mahal", cost: 250 }
        ],
        transportation: [
            { mode: "Flight", cost: 7000 }
        ]
    },
    // Route 133
    {
        id: 133,
        start: "Aurangabad",
        end: "Bangalore",
        name: "Aurangabad to Bangalore via Mumbai",
        distance: 1200,
        steps: [
            "Start at Aurangabad",
            "Drive to Mumbai",
            "Fly to Bangalore"
        ],
        hotels: [
            { name: "Hotel Mumbai Elite", location: "Mumbai", cost: 4000 },
            { name: "Hotel Bangalore Bliss", location: "Bangalore", cost: 4500 }
        ],
        foodOptions: [
            { name: "Mumbai Street Food", location: "Mumbai", cost: 350 },
            { name: "Bangalore Delights", location: "Bangalore", cost: 400 }
        ],
        placesToVisit: [
            { name: "Bangalore Lalbagh Botanical Garden", cost: 150 }
        ],
        transportation: [
            { mode: "Flight", cost: 8000 }
        ]
    },
    // Route 134
    {
        id: 134,
        start: "Pune",
        end: "Srinagar",
        name: "Pune to Srinagar via Delhi",
        distance: 1900,
        steps: [
            "Start at Pune",
            "Fly to Delhi",
            "Fly to Srinagar"
        ],
        hotels: [
            { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
            { name: "Hotel Srinagar Paradise", location: "Srinagar", cost: 5000 }
        ],
        foodOptions: [
            { name: "Delhi Street Food", location: "Delhi", cost: 350 },
            { name: "Srinagar Cuisine", location: "Srinagar", cost: 450 }
        ],
        placesToVisit: [
            { name: "Srinagar Dal Lake", cost: 200 }
        ],
        transportation: [
            { mode: "Flight", cost: 12000 }
        ]
    },

        // Route 135
        {
            id: 135,
            start: "Hyderabad",
            end: "Shillong",
            name: "Hyderabad to Shillong via Kolkata",
            distance: 1800,
            steps: [
                "Start at Hyderabad",
                "Fly to Kolkata",
                "Fly to Shillong"
            ],
            hotels: [
                { name: "Hotel Kolkata Grand", location: "Kolkata", cost: 4000 },
                { name: "Hotel Shillong Retreat", location: "Shillong", cost: 4500 }
            ],
            foodOptions: [
                { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
                { name: "Shillong Delights", location: "Shillong", cost: 400 }
            ],
            placesToVisit: [
                { name: "Shillong Elephant Falls", cost: 150 }
            ],
            transportation: [
                { mode: "Flight", cost: 14000 }
            ]
        },
        // Route 136
        {
            id: 136,
            start: "Chennai",
            end: "Jammu",
            name: "Chennai to Jammu via Delhi",
            distance: 2200,
            steps: [
                "Start at Chennai",
                "Fly to Delhi",
                "Fly to Jammu"
            ],
            hotels: [
                { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
                { name: "Hotel Jammu Heritage", location: "Jammu", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Jammu Cuisine", location: "Jammu", cost: 450 }
            ],
            placesToVisit: [
                { name: "Jammu Vaishno Devi Temple", cost: 300 }
            ],
            transportation: [
                { mode: "Flight", cost: 15000 }
            ]
        },
        // Route 137
        {
            id: 137,
            start: "Bangalore",
            end: "Dehradun",
            name: "Bangalore to Dehradun via Delhi",
            distance: 1800,
            steps: [
                "Start at Bangalore",
                "Fly to Delhi",
                "Fly to Dehradun"
            ],
            hotels: [
                { name: "Hotel Delhi Luxe", location: "Delhi", cost: 4500 },
                { name: "Hotel Dehradun Premium", location: "Dehradun", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 400 },
                { name: "Dehradun Delights", location: "Dehradun", cost: 450 }
            ],
            placesToVisit: [
                { name: "Dehradun Robber's Cave", cost: 150 }
            ],
            transportation: [
                { mode: "Flight", cost: 12000 }
            ]
        },
        // Route 138
        {
            id: 138,
            start: "Kolkata",
            end: "Jaipur",
            name: "Kolkata to Jaipur via Delhi",
            distance: 1500,
            steps: [
                "Start at Kolkata",
                "Fly to Delhi",
                "Drive to Jaipur"
            ],
            hotels: [
                { name: "Hotel Delhi Elite", location: "Delhi", cost: 4000 },
                { name: "Hotel Jaipur Grand", location: "Jaipur", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Jaipur Cuisine", location: "Jaipur", cost: 400 }
            ],
            placesToVisit: [
                { name: "Jaipur Amber Fort", cost: 200 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 }
            ]
        },
        // Route 139
        {
            id: 139,
            start: "Mumbai",
            end: "Siliguri",
            name: "Mumbai to Siliguri via Delhi",
            distance: 2200,
            steps: [
                "Start at Mumbai",
                "Fly to Delhi",
                "Fly to Siliguri"
            ],
            hotels: [
                { name: "Hotel Delhi Luxe", location: "Delhi", cost: 4500 },
                { name: "Hotel Siliguri Comfort", location: "Siliguri", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 400 },
                { name: "Siliguri Delights", location: "Siliguri", cost: 450 }
            ],
            placesToVisit: [
                { name: "Siliguri Mahananda Wildlife Sanctuary", cost: 200 }
            ],
            transportation: [
                { mode: "Flight", cost: 15000 }
            ]
        },
        // Route 140
        {
            id: 140,
            start: "Pune",
            end: "Kanpur",
            name: "Pune to Kanpur via Delhi",
            distance: 1500,
            steps: [
                "Start at Pune",
                "Fly to Delhi",
                "Fly to Kanpur"
            ],
            hotels: [
                { name: "Hotel Delhi Grand", location: "Delhi", cost: 4000 },
                { name: "Hotel Kanpur Bliss", location: "Kanpur", cost: 4500 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Kanpur Cuisine", location: "Kanpur", cost: 400 }
            ],
            placesToVisit: [
                { name: "Kanpur Allen Forest Zoo", cost: 100 }
            ],
            transportation: [
                { mode: "Flight", cost: 8000 }
            ]
        },
        // Route 141
        {
            id: 141,
            start: "Nagpur",
            end: "Ranchi",
            name: "Nagpur to Ranchi via Kolkata",
            distance: 1200,
            steps: [
                "Start at Nagpur",
                "Fly to Kolkata",
                "Fly to Ranchi"
            ],
            hotels: [
                { name: "Hotel Kolkata Royal", location: "Kolkata", cost: 4000 },
                { name: "Hotel Ranchi Elite", location: "Ranchi", cost: 4500 }
            ],
            foodOptions: [
                { name: "Kolkata Street Food", location: "Kolkata", cost: 350 },
                { name: "Ranchi Delights", location: "Ranchi", cost: 400 }
            ],
            placesToVisit: [
                { name: "Ranchi Jagannath Temple", cost: 150 }
            ],
            transportation: [
                { mode: "Flight", cost: 10000 }
            ]
        },
        // Route 142
        {
            id: 142,
            start: "Aurangabad",
            end: "Bhubaneswar",
            name: "Aurangabad to Bhubaneswar via Delhi",
            distance: 1400,
            steps: [
                "Start at Aurangabad",
                "Fly to Delhi",
                "Fly to Bhubaneswar"
            ],
            hotels: [
                { name: "Hotel Delhi Luxe", location: "Delhi", cost: 4500 },
                { name: "Hotel Bhubaneswar Comfort", location: "Bhubaneswar", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 400 },
                { name: "Bhubaneswar Delights", location: "Bhubaneswar", cost: 450 }
            ],
            placesToVisit: [
                { name: "Bhubaneswar Lingaraj Temple", cost: 200 }
            ],
            transportation: [
                { mode: "Flight", cost: 12000 }
            ]
        },
        // Route 143
        {
            id: 143,
            start: "Mumbai",
            end: "Amritsar",
            name: "Mumbai to Amritsar via Delhi",
            distance: 1900,
            steps: [
                "Start at Mumbai",
                "Fly to Delhi",
                "Fly to Amritsar"
            ],
            hotels: [
                { name: "Hotel Delhi Grand", location: "Delhi", cost: 4000 },
                { name: "Hotel Amritsar Heritage", location: "Amritsar", cost: 5000 }
            ],
            foodOptions: [
                { name: "Delhi Street Food", location: "Delhi", cost: 350 },
                { name: "Amritsar Cuisine", location: "Amritsar", cost: 450 }
            ],
            placesToVisit: [
                { name: "Amritsar Golden Temple", cost: 200 }
            ],
            transportation: [
                { mode: "Flight", cost: 15000 }
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
