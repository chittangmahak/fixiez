
    // ---------------- Timers (FedEx & UPS cutoffs) ----------------
    const fedexCutoffHour = 17; // 17:00 local
    const upsCutoffHour = 18; // 18:00 local

    function startCountdown(cutoffHour, elemId) {
      const el = document.getElementById(elemId);
      if (!el) return;

      function update() {
        const now = new Date();
        const cutoff = new Date(now);
        cutoff.setHours(cutoffHour, 0, 0, 0);
        if (now >= cutoff) cutoff.setDate(cutoff.getDate() + 1); // next day if passed

        let diff = cutoff - now;
        const hrs = Math.floor(diff / (1000 * 60 * 60));
        diff -= hrs * (1000 * 60 * 60);
        const mins = Math.floor(diff / (1000 * 60));
        diff -= mins * (1000 * 60);
        const secs = Math.floor(diff / 1000);

        el.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }

      update();
      return setInterval(update, 1000);
    }

    const fedexInterval = startCountdown(fedexCutoffHour, 'fedexTimer');
    const upsInterval = startCountdown(upsCutoffHour, 'upsTimer');

    // ---------------- Hero Slider ----------------
    (function initHeroSlider() {
      const slider = document.getElementById('heroSlider');
      const slides = Array.from(slider.querySelectorAll('.slide'));
      const dotsContainer = document.getElementById('heroDots');
      let current = 0;
      let autoInterval = null;
      const INTERVAL_MS = 5000;

      // build dots
      slides.forEach((s, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', (e) => {
          stopAuto();
          goTo(parseInt(e.currentTarget.dataset.index, 10));
          startAuto();
        });
        dotsContainer.appendChild(dot);
      });

      const dots = Array.from(dotsContainer.children);

      function goTo(index) {
        slides.forEach((s) => s.classList.remove('active'));
        dots.forEach((d) => d.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        current = index;
      }

      function next() {
        goTo((current + 1) % slides.length);
      }

      function startAuto() {
        stopAuto();
        autoInterval = setInterval(next, INTERVAL_MS);
      }

      function stopAuto() {
        if (autoInterval) clearInterval(autoInterval);
        autoInterval = null;
      }

      // Pause autoplay on hover
      slider.addEventListener('mouseenter', stopAuto);
      slider.addEventListener('mouseleave', startAuto);

      // start autoplay initially
      startAuto();

      // expose controls if needed
      window.heroSlider = { goTo, next, startAuto, stopAuto };
    })();

    // ---------------- Search functionality ----------------
    document.getElementById('searchBtn')?.addEventListener('click', () => {
      const q = document.getElementById('mainSearch')?.value || '';
      if (!q.trim()) {
        alert('Please enter a search term.');
        return;
      }
      // In a real site you'd send user to search results page
      console.log('Searching for:', q);
    });

    document.getElementById('mainSearch')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
      }
    });

    // ---------------- Scroll animations ----------------
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }

    function handleScroll() {
      const elements = document.querySelectorAll('.card, .vividfx-inner, .training-inner');
      
      elements.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('slide-up');
        }
      });
    }

    // Initial check on page load
    window.addEventListener('load', handleScroll);
    // Check on scroll
    window.addEventListener('scroll', handleScroll);
  