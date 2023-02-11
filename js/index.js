const welcomeSegment = document.querySelector('.WelcomeSegment');
const navbarToggleIcon = document.querySelector('.navbar-toggler');

function moveDivDown()  {
   
    welcomeSegment.classList.toggle('navbar-active')

};

navbarToggleIcon.addEventListener('click', moveDivDown);