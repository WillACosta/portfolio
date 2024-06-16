const themeButton = document.getElementById("theme-switcher");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    body.classList.add(theme);
  }
});

themeButton.addEventListener("click", () => {
  if (body.classList.contains("inverse")) {
    body.classList.remove("inverse");
    localStorage.removeItem("theme");
  } else {
    body.classList.add("inverse");
    localStorage.setItem("theme", "inverse");
  }
});
