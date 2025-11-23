
        // Scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Initial check
            fadeInOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', fadeInOnScroll);
            
            // Course filtering
            const tabButtons = document.querySelectorAll('.tab-btn');
            const courseCards = document.querySelectorAll('.course-card');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const category = this.getAttribute('data-category');
                    
                    // Show/hide courses based on category
                    courseCards.forEach(card => {
                        if (category === 'all' || card.getAttribute('data-category').includes(category)) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, 10);
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Testimonial slider
            const testimonialTrack = document.querySelector('.testimonials-track');
            const dots = document.querySelectorAll('.slider-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
                
                // Update dots
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                
                currentSlide = index;
            }
            
            // Auto slide
            setInterval(() => {
                currentSlide = (currentSlide + 1) % dots.length;
                showSlide(currentSlide);
            }, 5000);
            
            // Dot click events
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Add animation to course cards on hover
            const courseCardsAll = document.querySelectorAll('.course-card');
            courseCardsAll.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-10px)';
                });
            });
        });
    