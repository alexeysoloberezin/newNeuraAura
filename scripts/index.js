document.querySelectorAll('.goTo').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});