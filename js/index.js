new PureFullPage();

// const img_modal = document.getElementById('gallery-modal');
// const gpzs = document.getElementsByClassName('gallery-photo-zone');
// const modal_img = document.getElementById("gallery-modal-img");

// for(var i = 0; i < gpzs.length; i++) {
//   gpzs[i].getElementsByTagName('img')[0].addEventListener('click', (e) => {
//     img_modal.style.display = 'block';

//     var pos = e.target.src.lastIndexOf('/');
//     modal_img.src = e.target.src.slice(0, pos) + "/org" + e.target.src.slice(pos);
//   });
// }

// img_modal.addEventListener('click', () => {
//   img_modal.style.display = 'none';
// });

const gpzs = document.querySelectorAll('.gallery-photo-zone');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})


gpzs.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imageBox.style.background = `url(img/pictures/org/gallery_0${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
    if(currentImageIdx === 0){
        currentImageIdx = gpzs.length - 1;
    } else {
      currentImageIdx--;
    }

    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
    if(currentImageIdx === gpzs.length - 1){
        currentImageIdx = 0;
    } else {
      currentImageIdx++;
    }

    currentImageDisplay(currentImageIdx);
})