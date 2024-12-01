// Scroll watcher animation
window.addEventListener("scroll", () => {
    const scrollWatcher = document.querySelector(".scroll-watcher");
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollWatcher.style.transform = `scaleX(${scrollPercentage / 100})`;
  });
  
  // Add fade-in animation to visible articles
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll(".fade-in").forEach((article) => {
    observer.observe(article);
  });
  