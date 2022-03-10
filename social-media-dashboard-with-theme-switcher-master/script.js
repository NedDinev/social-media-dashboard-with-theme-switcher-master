function darkModeToggle() {
  let darkModeToggle = document.getElementById("dark-mode-toggle");
  let darkModeBackground = document.body; // gets the body
  let cards = document.getElementsByClassName("card"); // get all cards without the instagram card
  let grayText = document.getElementsByClassName("gray-to-white"); // get some of the gray text heading  
  if (darkModeToggle.checked == false) {
    darkModeBackground.classList.add("dark-mode-body");

    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#252a41";
    }
    for (let i = 0; i < grayText.length; i++) {
      grayText[i].style.color = "#ffffff";
    }
  } else if (darkModeToggle.checked == true) {
    darkModeBackground.classList.remove("dark-mode-body");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "#f0f2fa";
    }
    for (let i = 0; i < grayText.length; i++) {
      grayText[i].style.color = "#63687e";
    }
  }
}
