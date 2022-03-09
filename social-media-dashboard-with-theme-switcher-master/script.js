function darkModeToggle() {
  let darkModeToggle = document.getElementById("dark-mode-toggle");
  let darkModeBackground = document.body;

  let darkModeCardBackground = document.getElementsByClassName("card");

  if (darkModeToggle.checked == false) {
    darkModeBackground.classList.toggle("dark-mode-body");

    darkModeCardBackground.classList.toggle("dark-mode-text");
  }
}
