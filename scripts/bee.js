const bee = document.querySelectorAll('.image-container img');
const trigger = document.getElementById('triggerWord');
const textabouthelp = document.getElementById('TextAboutHelp');
const video = document.getElementById('videoContainer');
const message = document.getElementById('message');

function checkAllImagesHidden() {
  const allHidden = Array.from(bee).every((img) => img.style.display === 'none');
  if (allHidden) {
    message.style.display = 'block';
  }
}

bee.forEach((image) => {
  image.addEventListener('click', () => {
    this.style.display = 'none';
    checkAllImagesHidden();
  });
});

trigger.addEventListener('click', () => {
  video.style.display = 'block';
  textabouthelp.style.display = 'none';
  message.style.display = 'none';
  document.querySelectorAll('.image-container img').forEach((img) => {
    img.style.display = 'none';
  });
});
