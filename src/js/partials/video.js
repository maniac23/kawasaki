var videoBtn = document.querySelector('.video__btn');
var video = document.querySelector('.video__bg iframe');
var text = document.querySelector('.video__title');

function showVideo() {
  video.classList.remove('hidden');
  video.src = 'https://www.youtube.com/embed/Mtjatz9r-Vc?autoplay=1';
  videoBtn.classList.add('hidden');
  text.classList.add('hidden');

}

videoBtn.addEventListener('click', showVideo);
