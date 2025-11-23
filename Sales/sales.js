// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Observe section elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Observe category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
    });

    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartCountEl = document.getElementById('cartCount');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {

        const productCard = this.closest('.product-card');
        if (!productCard) return;

        const productName = productCard.querySelector('.product-name')?.textContent || 'Product';
        const productPrice = productCard.querySelector('.current-price')?.textContent || '₹0';

        // Visual feedback animation
        this.disabled = true;
        this.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
        this.style.background = '#28a745';

        // Update cart count
        if (cartCountEl) {
            const current = parseInt(cartCountEl.textContent || '0', 10);
            cartCountEl.textContent = current + 1;
        }

        // Reset after animation end
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            this.style.background = '#7d2ae8';  // your purple color
            this.disabled = false;
        }, 1500);
    });
});
