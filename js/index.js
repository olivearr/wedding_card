const body = document.querySelector('body');
const gpzs = document.querySelectorAll('.gallery-photo-zone');
const imageView = document.querySelector('.image-view');
const imageBox = document.querySelector('.image-box');
const imageContent = document.querySelector('.image-content');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const groomAccountBtn = document.getElementById('groom-account-btn');
const brideAccountBtn = document.getElementById('bride-account-btn');
const groomAccountModal = document.querySelector('.groom-account-modal');
const brideAccountModal = document.querySelector('.bride-account-modal');
const groomModalAccountClose = document.getElementById('groom-modal-account-close');
const brideModalAccountClose = document.getElementById('bride-modal-account-close');
const accountCopyBtn = document.querySelectorAll('.modal-account-copy-btn');
const shareLinkCopy = document.getElementById('share-link-copy');

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
  imageContent.src = `img/pictures/org/gallery_0${currentImageIdx}.jpg`;
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
        try {
          const tempAccountText = document.createElement("textarea");
          tempAccountText.value = accountCopyBtn[index].previousElementSibling.children[1].textContent.replaceAll('-', '');
          tempAccountText.style.cssText = "position:absolute;left:-9999px;top:-9999px";
          document.body.appendChild(tempAccountText);
          tempAccountText.select();
          document.execCommand("copy");
          alert(`${accountCopyBtn[index].previousElementSibling.children[0].textContent} 계좌 복사 완료!`);
        } catch(err) {
          alert(`계좌 복사 실패 (${err})! 아래 연락처로 문의 부탁드립니다!`);
        }

        document.body.removeChild(tempAccountText);
      }
    );
  });
});

shareLinkCopy.addEventListener('click', () => {
  window.navigator.clipboard.writeText(document.location.href).then(
    () => {
      alert('주소 복사 완료!');
    },
    () => {
      try {
        const tempShareLink = document.createElement("textarea");
        tempShareLink.value = document.location.href;
        tempShareLink.style.cssText = "position:absolute;left:-9999px;top:-9999px";
        document.body.appendChild(tempShareLink);
        tempShareLink.select();
        document.execCommand("copy");
        alert('주소 복사 완료!');
      } catch(err) {
        alert(`주소 복사 실패 (${err})! 아래 연락처로 문의 부탁드립니다!`);
      }

      document.body.removeChild(tempShareLink);
    }
  );
});

Kakao.init('d529712395e6de6eec8b3ff362c26908');

Kakao.Share.createCustomButton({
  container: '#kakaotalk-sharing-btn',
  templateId: 97955,
});