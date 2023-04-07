const button = document.getElementById('change-color-button');
let isDarkMode = false;

button.addEventListener('click', () => {
  if (!isDarkMode) {
    document.body.style.backgroundColor = '#222';
    isDarkMode = true;
  } else {
    document.body.style.backgroundColor = '#fff';
    isDarkMode = false;
  }
});
