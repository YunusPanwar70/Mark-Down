document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can perform further validation here if needed

    // Example: Log the form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can send the form data to a server using AJAX or fetch API
    // For simplicity, let's just alert a success message
    alert("Form submitted successfully!");

    // Optionally, you can reset the form
    this.reset();
});