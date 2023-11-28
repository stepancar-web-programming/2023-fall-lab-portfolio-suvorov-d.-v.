const bee = document.querySelectorAll('.image-container img')
const trigger = document.getElementById('triggerWord')
const textabouthelp = document.getElementById('TextAboutHelp')
const video =    document.getElementById('videoContainer')
bee.forEach(image => {
    image.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
trigger.addEventListener('click', function() {
    video.style.display = 'block';
    textabouthelp.style.display = 'none';
    document.querySelectorAll('.image-container img').forEach(function(img) {
        img.style.display = 'none';
    });
});
