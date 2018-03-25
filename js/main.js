(function() {

console.log('load projects');

var topButton = document.querySelector('.back-to-top');
console.log(topButton);

function topPage() {
  console.log('top page');

    var bodyarea = document.querySelector('body');

    bodyarea.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
}

topButton.addEventListener('click', topPage, false);
})();
