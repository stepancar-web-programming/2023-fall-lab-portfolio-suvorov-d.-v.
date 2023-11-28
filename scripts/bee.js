const bee = document.querySelectorAll('.image-container img')
const trigger = document.getElementById('triggerWord')
const textabouthelp = document.getElementById('TextAboutHelp')
const video =    document.getElementById('videoContainer')
const message = document.getElementById('message');

bee.forEach(image => {
    image.addEventListener('click', function() {
        this.style.display = 'none';
        checkAllImagesHidden();
    });
});
function checkAllImagesHidden() {
    const allHidden = Array.from(bee).every(img => img.style.display === 'none');
    if (allHidden) {
        message.style.display = 'block';
    }
}
trigger.addEventListener('click', function() {
    video.style.display = 'block';
    textabouthelp.style.display = 'none';
    message.style.display = 'none';
    document.querySelectorAll('.image-container img').forEach(function(img) {
        img.style.display = 'none';
    });
});
