function changeAboutMyText() {
  const aboutMeTexts = [
    "Learner",
    "Tech Enthusiast",
    "Full Stack Developer" 
  ];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const pauseTime = 1500;
  const aboutMeElement = document.querySelector(".about-me");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = aboutMeTexts[textIndex];
    /* Typing*/
    if (!isDeleting && charIndex < currentText.length) {
      aboutMeElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
    /* erasing*/
      aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, erasingSpeed);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length;
      }
      setTimeout(type, pauseTime);
    }
  }
  type();
}


document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click',()=>{
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode')?'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
});
changeAboutMyText();

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry => {
            if (entry.isIntersecting){
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                progressBar.style.setProperty('--progress', `${progress}%`);
                progressBar.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });
    const programmingLanguages = document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill =>{
        observer.observe(skill);
    });
});