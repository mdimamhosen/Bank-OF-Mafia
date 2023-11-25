document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-mail");
  const userEmail = emailField.value;

  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  if (userEmail === "imam02@gmail.com" && userPassword === "imam02") {
    window.location.href = "index.home.html";
  } else {
    alert("Invalid user mail or password");
  }
});
