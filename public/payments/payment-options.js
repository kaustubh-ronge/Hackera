function proceedToPayment(method) {
    // Redirect to payment processing page based on selected method
    // For simplicity, this example assumes payment processing pages named after methods
    window.location.href = `payment-processing.html?method=${encodeURIComponent(method)}`;
}
