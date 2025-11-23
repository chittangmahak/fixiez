// Simple interactivity for demo: cart, qty, sort and show
document.addEventListener('DOMContentLoaded', () => {
  const cartCountEl = document.getElementById('cartCount');
  let cartCount = 0;

  // Add to cart
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.card');
      const qtyInput = card.querySelector('.qty');
      const qty = parseInt(qtyInput.value) || 1;
      cartCount += qty;
      cartCountEl.textContent = cartCount;
      // micro animation
      btn.textContent = 'Added ✓';
      btn.style.opacity = '0.95';
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
      }, 900);
    });
  });

  // Quantity buttons
  document.querySelectorAll('.qty-row').forEach(row => {
    const decrease = row.querySelector('[data-action="decrease"]');
    const increase = row.querySelector('[data-action="increase"]');
    const input = row.querySelector('.qty');

    decrease && decrease.addEventListener('click', () => {
      let val = parseInt(input.value)||1;
      if (val>1) input.value = val-1;
    });
    increase && increase.addEventListener('click', () => {
      let val = parseInt(input.value)||1;
      input.value = val+1;
    });
  });

  // Notify buttons
  document.querySelectorAll('.notify').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('notified')) {
        btn.classList.remove('notified');
        btn.textContent = 'Notify';
        btn.style.background = '';
        btn.style.color = 'var(--purple)';
      } else {
        btn.classList.add('notified');
        btn.textContent = 'Notified ✓';
        btn.style.background = 'var(--purple)';
        btn.style.color = '#fff';
      }
    });
  });

  // Sort select (dummy)
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    // visual feedback
    e.target.style.opacity = 0.8;
    setTimeout(()=> e.target.style.opacity = 1, 250);
  });

  // Show select (dummy)
  document.getElementById('showSelect').addEventListener('change', (e) => {
    const num = parseInt(e.target.value, 10);
    // simple demonstration: hide extra cards if show smaller than available
    const cards = Array.from(document.querySelectorAll('.products-grid .card'));
    cards.forEach((c, i) => {
      c.style.display = i < num ? '' : 'none';
    });
  });

  // Initialize show select effect
  document.getElementById('showSelect').dispatchEvent(new Event('change'));
});



