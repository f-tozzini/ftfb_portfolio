  (function() {
  console.log('load');

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

  //Lightbox
  var lightbox = document.querySelector('.lightbox');
  var lightboxTrigger = document.querySelectorAll('.trigger');
  var lightboxClose = document.querySelector('.close-lightbox');

  function showLightbox(currentIndex, currentObject) {
    console.log('showLightbox');

    lightbox.style.overflow = "scroll";
    lightbox.style.display = 'inline';
    }

    for (let i = 0; i < lightboxTrigger.length; i++) {
      lightboxTrigger[i].addEventListener('click', showLightbox, false);
    }

  function closeLightbox() {
    console.log('close lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = "scroll";
  }

  lightboxClose.addEventListener('click', closeLightbox, false);

  })();
