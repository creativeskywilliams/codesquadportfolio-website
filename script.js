const button = document.getElementById("welcomeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Thanks for visiting my portfolio!";
});
