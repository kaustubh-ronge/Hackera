document.addEventListener('DOMContentLoaded', () => {
    function getQueryParameter(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const busName = getQueryParameter('bus');
    if (busName) {
        document.getElementById('bus-name').value = decodeURIComponent(busName);
    }

    document.getElementById('bus-booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const busName = document.getElementById('bus-name').value;
        const passengerName = document.getElementById('passenger-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Redirect to confirmation page with form data as query parameters
        window.location.href = `bus-confirmation.html?bus=${encodeURIComponent(busName)}&passengerName=${encodeURIComponent(passengerName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`;
    });
});
