// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate sending the form data
        document.getElementById('formStatus').textContent = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formStatus').textContent = "Please fill in all fields.";
    }
});
