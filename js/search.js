// Manually define the cities and their attractions
let cities = [
    {
        "name": "Pristina",
        "attractions": [
            "Newborn Monument",
            "Germia Park",
            "Imperial Mosque"
        ]
    },
    {
        "name": "Mitrovica",
        "attractions": [
            "Mitrovica Bridge",
            "Gazi Mehmet Pasha Mosque",
            "The Kosovo Museum"
        ]
    },
    {
        "name": "Gjakova",
        "attractions": [
            "Gjakova Bazaar",
            "Hadum Mosque",
            "The Ethnographic Museum"
        ]
    },
    {
        "name": "Peja",
        "attractions": [
            "Visoki Decani Monastery",
            "Rugova Canyon",
            "The Old Bazaar"
        ]
    },
    {
        "name": "Ferizaj",
        "attractions": [
            "The Memorial Complex",
            "The City Park",
            "The Ferizaj Castle"
        ]
    }
];

// Function to search for cities and attractions
function searchAttractions() {
    const input = document.getElementById('searchInput').value.toLowerCase(); // Get the input value
    const results = document.getElementById('searchResults'); // Get the results div
    results.innerHTML = ''; // Clear previous results

    if (input) {
        // Filter cities based on the input
        const filteredCities = cities.filter(city => 
            city.name.toLowerCase().includes(input) || 
            city.attractions.some(attraction => attraction.toLowerCase().includes(input))
        );

        // Display the filtered results
        filteredCities.forEach(city => {
            const cityDiv = document.createElement('div'); // Create a new div for each city
            cityDiv.classList.add('result-item'); // Add a class for styling
            cityDiv.innerHTML = `<strong>${city.name}</strong>: ${city.attractions.join(', ')}`; // Set the inner HTML
            results.appendChild(cityDiv); // Append the city div to the results
        });

        // If no results found, display a message
        if (filteredCities.length === 0) {
            results.innerHTML = '<p>No results found.</p>';
        }
    }
}

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', searchAttractions);

// Add event listener to the input field for "Enter" key
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchAttractions();
    }
});