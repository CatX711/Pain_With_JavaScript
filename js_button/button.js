const button = document.getElementById('change-color-button'); // connects to button using it's id
let isDarkMode = false; // false is the default value (means that the website is white)

button.addEventListener('click', () => {    // when button clicked
  if (!isDarkMode) { // if darkmode is false
    document.body.style.backgroundColor = '#222'; // change colour to colour of choosing (in this case dark gray)
    isDarkMode = true; // set darkmode to true
  } else {  // else if darkmode is true
    document.body.style.backgroundColor = '#fff'; // change colour back to white
    isDarkMode = false; // set darkmode to false
  }
});
