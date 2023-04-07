const button = document.getElementById('change-color-button'); // connects to button using it's id
let isDarkMode = false; // false is the default value (means that the website is white)

button.addEventListener('click', () => {    // when button clicked
  if (!isDarkMode) { // if darkmode is false
    document.body.style.backgroundColor = '#222'; // change colour to colour of choosing (in this case dark gray)
    document.body.style.color = "#fff"  // changes text colour to white so it is visible in black background
    isDarkMode = true; // set darkmode to true
  } else {  // else if darkmode is true
    document.body.style.backgroundColor = '#fff'; // change colour back to white
    document.body.style.color = "#000" // changes text colour to black so it is visible in white background
    isDarkMode = false; // set darkmode to false 
  }
});
