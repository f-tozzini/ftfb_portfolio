var projectsDesc = document.querySelector('.lightbox-text');
var projectsImage = document.querySelector('.lightbox-img');
var projectsDesc = document.querySelector('.lightbox-text');

function fetchProjectDesc(){
  const url = './includes/functions.php?getImages=true';

  fetch(url)
  .then((resp) => resp.json()) //convert result to json_encode
  .then((data) => { projectsDesc.loadProjectDesc(data); })
  .catch(function(error) {
  console.log(error);
  });
};

function loadProjectDesc(){
  let thumbHolder = document.querySelector('.video-thumbs');
  data.forEach(thumb => {
    let docFrag = `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
        <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
      </li>`;
      thumbHolder.innerHTML += docFrag;
  });

  thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));
},
}


// fetchProjectDesc() {
//   const url = './includes/functions.php?getImages=true';
//
//   fetch(url)
//   .then((resp) => resp.json()) //convert result to json_encode
//   .then((data) => { video.loadVideoThumbs(data); })
//   .catch(function(error) {
//   console.log(error);
//   });
// },
  // var projectsImage = document.querySelector('lightbox-img'),
  //
  //
  //   fetchVideoThumbs() {
  //     const url = './includes/functions.php?getImages=true';
  //
  //     fetch(url)
  //     .then((resp) => resp.json()) //convert result to json_encode
  //     .then((data) => { video.loadVideoThumbs(data); })
  //     .catch(function(error) {
  //     console.log(error);
  //     });
  //   },
