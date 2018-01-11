// (() => {
//   var projectsDesc = document.querySelector('.lightbox-text'),
//       projectsImage = document.querySelector('.lightbox-img'),
//       projectsTitle = document.querySelector('.lightbox-title');
//       projectsThumb = document.querySelector('.thumbs');
//
//   function fetchProjectThumb(){
//     const url = './includes/functions.php?getImages';
//
//     fetch(url)
//     .then((resp) => resp.json()) //convert result to json_encode
//     .then((data) => { loadProjectDesc(data); })
//     .catch(function(error) {
//       console.log(error);
//
//     });
//
//   };
//
//   function loadProjectDesc(data){
//
//     console.log(data);
//     // debugger;
//     //
//     // let thumbHolder = document.querySelector('.video-thumbs');
//     //
//     // data.forEach(thumb => {
//     //   let docFrag = `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
//     //       <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
//     //     </li>`;
//     //     thumbHolder.innerHTML += docFrag;
//     // });
//     //
//     // thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));
//   }
//   //
//   // debugger;
//
//   fetchProjectDesc();
//
// })();
//
// // fetchProjectDesc() {
// //   const url = './includes/functions.php?getImages=true';
// //
// //   fetch(url)
// //   .then((resp) => resp.json()) //convert result to json_encode
// //   .then((data) => { video.loadVideoThumbs(data); })
// //   .catch(function(error) {
// //   console.log(error);
// //   });
// // },
//   // var projectsImage = document.querySelector('lightbox-img'),
//   //
//   //
//   //   fetchVideoThumbs() {
//   //     const url = './includes/functions.php?getImages=true';
//   //
//   //     fetch(url)
//   //     .then((resp) => resp.json()) //convert result to json_encode
//   //     .then((data) => { video.loadVideoThumbs(data); })
//   //     .catch(function(error) {
//   //     console.log(error);
//   //     });
//   //   },
