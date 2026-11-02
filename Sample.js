    const joinBtn = document.querySelector(".join-btn");
const loginBox = document.querySelector(".form");

joinBtn.addEventListener("click", () => {
  loginBox.scrollIntoView({ behavior: "smooth", block: "center" });

  loginBox.classList.add("highlight");
  setTimeout(() => loginBox.classList.remove("highlight"), 1500);

  const firstInput = loginBox.querySelector("input");
  if (firstInput) firstInput.focus();
});
