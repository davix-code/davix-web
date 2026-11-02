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

// ---------- BOOKING FORM ----------
const bookBtn = document.getElementById("book-btn");
const formMsg = document.getElementById("form-msg");
const dateInput = document.getElementById("date");

// stop people from picking a past date
dateInput.min = new Date().toISOString().split("T")[0];

function showMsg(text, color) {
  formMsg.textContent = text;
  formMsg.style.color = color;
}

bookBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    service: document.getElementById("service").value,
    date: dateInput.value,
    time: document.getElementById("time").value,
    message: document.getElementById("message").value.trim(),
  };

  if (!data.name || !data.email || !data.service || !data.date || !data.time) {
    showMsg("Please fill in all the fields.", "red");
    return;
  }

  if (!data.email.includes("@") || !data.email.includes(".")) {
    showMsg("Please enter a valid email.", "red");
    return;
  }

  bookBtn.disabled = true;
  showMsg("Sending...", "white");

  try {
    const res = await fetch("https://formspree.io/f/myeeblaz", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      showMsg("Appointment request sent! I'll get back to you soon.", "#4cd964");
      document.querySelectorAll(".form input, .form select, .form textarea").forEach((el) => (el.value = ""));
    } else {
      showMsg("Something went wrong. Please try again.", "red");
    }
  } catch (err) {
    showMsg("Network error. Please try again.", "red");
  }

  bookBtn.disabled = false;
});