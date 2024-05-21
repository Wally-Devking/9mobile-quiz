document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    
    // Create welcome message
    var welcomeMessage = "Welcome, " + username + "! Thank you for registering with email: " + email;

    // Display welcome message
    alert(welcomeMessage);

    // Redirect to welcome page after 2 seconds
    setTimeout(function() {
        window.location.href = "welcomepage.html";
    }, 2000); // 2000 milliseconds = 2 seconds
});



