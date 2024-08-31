
var map = L.map("map").setView([20.0, 0.0], 2); 


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


function geocode(cityName, callback) {
  var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    cityName
  )}&limit=1`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        var result = data[0];
        var latLng = L.latLng(result.lat, result.lon);
        callback(latLng, result.display_name);
      } else {
        alert("City not found: " + cityName);
      }
    })
    .catch((error) => {
      console.error("Geocoding error:", error);
      alert("Failed to find the city.");
    });
}


function calculateDistance(latLng1, latLng2) {
  return latLng1.distanceTo(latLng2) / 1000; 
}


document.getElementById("find").onclick = function () {
  var city1Name = document.getElementById("city1").value;
  var city2Name = document.getElementById("city2").value;

  geocode(city1Name, function (latLng1, displayName1) {
    geocode(city2Name, function (latLng2, displayName2) {
      map.setView([latLng1.lat, latLng1.lng], 10);

      L.marker(latLng1)
        .addTo(map)
        .bindPopup(`<b>${displayName1}</b>`)
        .openPopup();
      L.marker(latLng2)
        .addTo(map)
        .bindPopup(`<b>${displayName2}</b>`)
        .openPopup();

    
      var latLngs = [latLng1, latLng2];
      L.polyline(latLngs, { color: "blue" }).addTo(map);

      
      var distance = calculateDistance(latLng1, latLng2).toFixed(2);
      alert(
        `Distance between ${displayName1} and ${displayName2}: ${distance} km`
      );
    });
  });
};
