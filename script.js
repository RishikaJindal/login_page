document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        
    } else {
        alert("Login failed. Please check your credentials.");
    }
});