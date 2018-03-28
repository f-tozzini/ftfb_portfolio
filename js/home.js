(function() {
console.log('load home');

//Menu
var triggerMenu = document.querySelector('#open-menu');
var closeMenu = document.querySelector('#close-menu');
var mainMenu = document.querySelector('#main-menu');
var mainNav = document.querySelector('#mainNav');
var menuOpen = false;

function displayMenu() {
  console.log('Trigger menu');
     mainMenu.style.overflow = "scroll";
     mainMenu.style.display = 'block';

     if (displayMenu){
       displayMenu = true;
       triggerMenu.style.display = 'none';
       closeMenu.style.display = 'block';
     }
}
triggerMenu.addEventListener('click', displayMenu, false);

function hideMenu(){
  console.log('Hide menu');
    mainMenu.style.display = 'none';

    if (hideMenu) {
        hideMenu = true;
        closeMenu.style.display = 'none';
        triggerMenu.style.display = 'block';
      }
    }
closeMenu.addEventListener('click', hideMenu, false);



//Menu - go to Section
var menuButton = mainMenu.querySelectorAll('a');
var homeSect = document.querySelector('#mainHeader');
var servicesSect = document.querySelector('#services');
var aboutSect = document.querySelector('#about');
var projectsSect = document.querySelector('#projects');
var contactSect = document.querySelector('#contact');

function scrollSection(evt) {
  evt.preventDefault();
  console.log(evt.currentTarget.id);

  switch(evt.currentTarget.id) {
      case 'menu-home':
        homeSect.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
        break;
      case 'menu-services':
        servicesSect.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
        break;
      case 'menu-about':
        aboutSect.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
      break;
      case 'menu-projects':
        projectsSect.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
        break;
      case 'menu-contact':
        contactSect.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
        break;
        default:
        break;
  }
}

for (let i = 0; i < menuButton.length; i++) {
  menuButton[i].addEventListener('click', scrollSection, false);
}

//Menu - Click to close
var clickedNavDiv = document.querySelector('#navBox');
var clickedNavMenu = document.querySelector('#open-menu');
var menuDiv = document.querySelector('#main-menu');

    function clickToClose (evt) {
    if (!clickedNavMenu.contains(evt.target) &&
    !clickedNavDiv.contains(event.target) &&
    menuDiv.style.display == 'block') {
        console.log('Close menu with click');
        mainMenu.style.display = 'none';
        if (hideMenu) {
            hideMenu = true;
            closeMenu.style.display = 'none';
            triggerMenu.style.display = 'block';
          }
        }
};
  document.body.addEventListener('click', clickToClose, false);
  window.addEventListener('scroll', clickToClose, false);



})();
