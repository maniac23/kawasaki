var videoBtn = document.querySelector('.video__btn');
var video = document.querySelector('.video__bg iframe');

function showVideo() {
  video.classList.remove('hidden');
  videoBtn.classList.add('hidden');
  video.src = 'https://www.youtube.com/embed/Mtjatz9r-Vc?autoplay=1';
}

videoBtn.addEventListener('click', showVideo);
