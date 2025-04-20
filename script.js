function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  