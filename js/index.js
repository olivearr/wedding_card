new PureFullPage();

const img_modal = document.getElementById('gallery-modal');
const gpzs = document.getElementsByClassName('gallery-photo-zone');
const modal_img = document.getElementById("gallery-modal-img");

for(var i = 0; i < gpzs.length; i++) {
  gpzs[i].getElementsByTagName('img')[0].addEventListener('click', (e) => {
    img_modal.style.display = 'block';
    modal_img.src = e.target.src;
  });
}

img_modal.addEventListener('click', () => {
  img_modal.style.display = 'none';
});