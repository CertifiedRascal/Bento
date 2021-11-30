// Store the theme
let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');
const bodyBackground = document.getElementById('#body');

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add('darktheme');
  localStorage.setItem('darkTheme', 'enabled');
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="sun"></i>`;
  feather.replace();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove('darktheme');
  localStorage.setItem('darkTheme', null);
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="moon"></i>`;
  feather.replace();
};

//Toggle theme
if (darkTheme === 'enabled') {
  enableDark();
} else {
  disableDark();
}

themeToggle.addEventListener('click', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enableDark();
  } else {
    disableDark();
  }
});

if(CONFIG.imageBackground) {
  document.body.classList.add('withImageBackground');
}


//Theme switcher based on system dark or light theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDark();
} else {
  disableDark();
}

//Theme Switcher based on time
/*
var d = new Date();

var hours = d.getHours();

if (hours >= 18 || hours <= 5) {
  enableDark();
} else {
  disableDark();
}
*/
