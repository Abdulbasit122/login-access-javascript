document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Define hardcoded username and password (for demonstration purposes)
    const hardcodedUsername = "user";
    const hardcodedPassword = "password";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      message.style.color = "green";
      message.textContent = "Login successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password!";
    }
  });
