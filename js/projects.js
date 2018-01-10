(() => {
  var projectsDesc = document.querySelector('.lightbox-text'),
      projectsImage = document.querySelector('.lightbox-img'),
      projectsDesc = document.querySelector('.lightbox-text');

  function fetchProjectDesc(){
    const url = './admin/scripts/functions.php?getImages=true';

    fetch(url)
    .then((resp) => resp.json()) //convert result to json_encode
    .then((data) => { loadProjectDesc(data); })
    .catch(function(error) {
      console.log(error);
    });
  };

  function loadProjectDesc(data){
    debugger;

    let thumbHolder = document.querySelector('.video-thumbs');

    data.forEach(thumb => {
      let docFrag = `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
          <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
        </li>`;
        thumbHolder.innerHTML += docFrag;
    });

    thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));
  }

  debugger;

  fetchProjectDesc();

})();