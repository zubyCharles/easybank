const toggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.nav-links');
const toggleIcon = document.querySelector('#toggler');

let navIsToggled = false;


toggler.addEventListener('click', () => {
  /*
  if (window.screen.width >= 1440) {
    return; 
  }
  */
  if (!navIsToggled) {
    navMenu.style.top = '12%';
    toggleIcon.src = './images/icon-close.svg';
  } else {
    navMenu.style.top = '-100%';
    toggleIcon.src = './images/icon-hamburger.svg';
  }
  navIsToggled = navIsToggled ? false : true;
});
