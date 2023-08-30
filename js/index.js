const body = document.querySelector('body');
const gpzs = document.querySelectorAll('.gallery-photo-zone');
const imageView = document.querySelector('.image-view');
const imageBox = document.querySelector('.image-box');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const groomAccountBtn = document.getElementById('groom-account-btn');
const brideAccountBtn = document.getElementById('bride-account-btn');
const groomAccountModal = document.querySelector('.groom-account-modal');
const brideAccountModal = document.querySelector('.bride-account-modal');
const groomModalAccountClose = document.getElementById('groom-modal-account-close');
const brideModalAccountClose = document.getElementById('bride-modal-account-close');
const accountCopyBtn = document.querySelectorAll('.modal-account-copy-btn');

let currentImageIdx = 0;

imageView.addEventListener('click', function() {
  this.style.display = 'none';
  imageBox.style.display = 'none';
});

gpzs.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    imageView.style.display = 'block';
    imageBox.style.display = 'flex';
    imageBox.style.flexDirection = 'column';
    imageBox.style.justifyContent = 'center';
    imageBox.style.alignItems = 'center';
    currentImageIdx = index;
    currentImageDisplay();
  })
});

function currentImageDisplay() {
  imageBox.getElementsByTagName('img')[0].src = `img/pictures/org/gallery_0${currentImageIdx}.jpg`;
}

prevBtn.addEventListener('click', () => {
  if(currentImageIdx === 0){
    currentImageIdx = gpzs.length - 1;
  } else {
    currentImageIdx--;
  }

  currentImageDisplay(currentImageIdx);
});

nextBtn.addEventListener('click', () => {
  if(currentImageIdx === gpzs.length - 1){
    currentImageIdx = 0;
  } else {
    currentImageIdx++;
  }

  currentImageDisplay(currentImageIdx);
});

groomAccountBtn.addEventListener('click', () => {
  groomAccountModal.classList.toggle('show');
});

groomAccountModal.addEventListener('click', (e) => {
  if (e.target === groomAccountModal) {
    groomAccountModal.classList.toggle('show');
  }
});

groomModalAccountClose.addEventListener('click', (e) => {
  groomAccountModal.classList.toggle('show');
});

brideAccountBtn.addEventListener('click', () => {
  brideAccountModal.classList.toggle('show');
});

brideAccountModal.addEventListener('click', (e) => {
  if (e.target === brideAccountModal) {
    brideAccountModal.classList.toggle('show');
  }
});

brideModalAccountClose.addEventListener('click', (e) => {
  brideAccountModal.classList.toggle('show');
});

accountCopyBtn.forEach((e, index) => {
  e.addEventListener('click', () => {
    window.navigator.clipboard.writeText(
      accountCopyBtn[index].previousElementSibling.children[1].textContent.replaceAll('-', '')
    ).then(
      () => {
        alert(`${accountCopyBtn[index].previousElementSibling.children[0].textContent} 계좌 복사 완료!`);
      },
      () => {
        alert('계좌 복사 실패! 아래 연락처로 문의 부탁드립니다!');
      }
    );
  });
});