// ---------- JOIN US BUTTON ----------
const joinBtn = document.querySelector(".cn");
const loginBox = document.querySelector(".form");

joinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.scrollIntoView({ behavior: "smooth", block: "center" });

  loginBox.classList.add("highlight");
  setTimeout(() => loginBox.classList.remove("highlight"), 1500);

  const firstInput = loginBox.querySelector("input");
  if (firstInput) firstInput.focus();
});

// ---------- LOGIN BUTTON ----------
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    loginError.textContent = "Please fill in both fields.";
    return;
  }

  loginError.textContent = "";
  alert("Login successful!"); // placeholder for now
});