(function() {
  let allowMovementAndJumping = true; // Флаг теперь изолирован внутри IIFE

  const dog = document.getElementById('dog');
  const meat = document.getElementById('meat');
  const hungryText = document.getElementById('hungryText');
  const thankYouText = document.getElementById('thankYouText');

  dog.addEventListener('mouseenter', function () {
  const dog = document.getElementById('dog');
  const meat = document.getElementById('meat');
  const hungryText = document.getElementById('hungryText');
  const thankYouText = document.getElementById('thankYouText');
  if (allowMovementAndJumping) {
    const screenWidth = window.innerWidth - this.clientWidth;
    const screenHeight = window.innerHeight - this.clientHeight;

    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    hungryText.style.left = `${randomX}px`;
    hungryText.style.top = `${randomY - hungryText.offsetHeight}px`;

    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
    this.style.right = '';
    this.style.bottom = '';
    if (!this.classList.contains('jumping')) {
      this.classList.add('jumping');
    }
    meat.style.display = 'block';
    hungryText.style.display = 'block';
  }
});

meat.addEventListener('mouseenter', () => {
  allowMovementAndJumping = false;
  meat.style.display = 'none';
  hungryText.style.display = 'none';
  thankYouText.style.display = 'block';
  thankYouText.style.right = '10px';
  thankYouText.style.bottom = '100px';
  dog.classList.remove('jumping');
  dog.style.left = '';
  dog.style.top = '';
  dog.style.right = '10px';
  dog.style.bottom = '10px';
})
})();
