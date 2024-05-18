document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here
    // For simplicity, let's assume authentication is successful
    var isLoggedIn = true;

    if (isLoggedIn) {
        // Save username to session storage
        sessionStorage.setItem("username", username);

        // Redirect to quiz selection page
        window.location.href = "quiz.html";
    } else {
        alert("Invalid username or password!");
    }
});
