document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var quizForm = document.getElementById("quizForm");

    // Attach event listener for form submission
    quizForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the selected option
        var selectedOption = document.querySelector('input[name="option"]:checked');

        // Check if an option is selected
        if (selectedOption) {
            // If an option is selected, display the appropriate popup or failure message
            if (selectedOption.value === "Worker") {
                // Display the correct popup
                var popupContainer = document.getElementById("popupContainer");
                popupContainer.style.display = "block";
            } else {
                // If incorrect, display a failure message
                var popupContainer = document.getElementById("popupContainer2");
                popupContainer.style.display = "block";
            }
        } else {
            // If no option is selected, show an alert
            alert("A button must be checked before submitting.");
        }
    });
});
