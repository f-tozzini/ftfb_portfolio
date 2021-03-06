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
// 
// Lightbox
// var lightbox = document.querySelector('.lightbox');
// var lightboxTrigger = document.querySelectorAll('.trigger');
// var lightboxClose = document.querySelector('.close-lightbox');
// var closeAll = document.querySelector('body');
//
// function showLightbox(currentIndex, currentObject) {
//   console.log('showLightbox');
//
//   var projectId = currentIndex.currentTarget.id.replace("project", "");
//   GetProjectDetails(projectId);
//
//   relpos = getPosition(document.querySelector('body'));
//
//   lightbox.style.overflow = "scroll";
//   lightbox.style.display = 'inline';
//   lightbox.style.top = (relpos.y + 15) + 'px';
//
//   }

  // for (let i = 0; i < lightboxTrigger.length; i++) {
  //   lightboxTrigger[i].addEventListener('click', showLightbox, false);
//   // }
//
// function closeLightbox() {
//   console.log('close lightbox');
//   lightbox.style.display = 'none';
//   document.body.style.overflow = "scroll";
// }
//
// lightboxClose.addEventListener('click', closeLightbox, false);

// Lightbox position target to thumb

// function getPosition(el) {
// var xPos = 0;
// var yPos = 0;
// var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
// var yScroll = el.scrollTop || document.documentElement.scrollTop;
//
// while (el) {
//   if (el.tagName == "BODY") {
//     xPos += (el.offsetLeft - xScroll + el.clientLeft);
//     yPos += (el.offsetTop - yScroll + el.clientTop);
//
//   } else {
//     xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//     yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//   }
//   el = el.offsetParent;
// }
// return {
//   x: Math.abs(xPos),
//   y: Math.abs(yPos)
// };
// }
//
// function updatePosition() {
// relpos = getPosition(document.querySelector('body'));
// lightbox.style.top = (relpos.y + 5) + 'px';
// }
// window.addEventListener("scroll", updatePosition, false);
//
// fetch content from database
// FetchProjectThumb();
//
//  function FetchProjectThumb(){
//      var url = './includes/functions.php?getAllContent';
//
//      fetch(url)
//              .then(resp => resp.json())
//               .then(function(data){  LoadProjectDesc(data); } )
//                 .catch(function(error) {
//        console.log(error);
//
//      });
//
//  };
//
//  function LoadProjectDesc(data)
//  {
//      var html = "";
//
//      for(var i = 0; i < data.length; i++)
//      {
//          var projectId = data[i].projects_id;
//          var projectTitle = data[i].projects_title;
//          var projectThumb = data[i].projects_thumb;
//
//          html += "<div class='projects small-10 medium-4 large-4 columns'>";
//          html += "<img id='project" + projectId + "' src='images/" + projectThumb + "' alt='Project " + projectId + "Image and Link' class='trigger thumbs'>";
//          html += "<h3>" + projectTitle + "</h3>"
//          html += "</div>";
//
//      }
//
//      document.querySelector('#projectTiles').innerHTML = html;
//
//      // AddLightboxTriggers();
//  }
//
// //  function AddLightboxTriggers(){
// //
// //     var lightboxTrigger = document.querySelectorAll('.trigger');
// //     for (var i = 0; i < lightboxTrigger.length; i++) {
// //       lightboxTrigger[i].addEventListener('click', showLightbox, false);
// //     }
// // }
// //
// function GetProjectDetails(projectId){
//
//     var url = './includes/functions.php?projectId='+projectId;
//
//      fetch(url)
//              .then(
//                  resp => resp.json()
//                  )
//              .then(function(data){  LoadProject(data); } )
//              .catch(function(error) {
//        console.log(error);
//
//      });
// }
//
// function LoadProject(data)
// {
//      var projectDesc = data.projects_desc;
//      var projectTitle = data.projects_title;
//      var projectLb = data.project_lb;
//      // var projectLink = data.project_link
//
//      document.querySelector(".lightbox-img").src = "images/" + projectLb;
//      document.querySelector(".lightbox-title").innerText = projectTitle;
//      document.querySelector(".lightbox-text").innerText = projectDesc;
//      // document.querySelector(".lightbox-button").innerText = projectLink;
//
//      lightbox.style.overflow = "scroll";
//      lightbox.style.display = 'inline';
//      lightbox.style.top = (relpos.y + 5) + 'px';
// }
//


})();
