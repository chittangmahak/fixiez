// FAQ Toggle Functionality
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current FAQ item
    item.classList.toggle('active');
  });
});

// Scroll Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-fade').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.hero');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 50) {
    header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});
