/* ============================================================
   Sweet Delight Bakery — Shared JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Light / Dark Theme Management ---- */
  const savedTheme = localStorage.getItem('sweet_delight_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sweet_delight_theme', theme);
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
  }

  applyTheme(savedTheme);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle-btn');
    if (btn) {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    }
  });

  /* ---- Navbar scroll behaviour ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ---- Hamburger / Mobile menu ---- */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  function openMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.add('active');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on any link click inside mobile menu
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close when tapping the overlay background (not the links)
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) closeMenu();
    });
  }


  /* ---- Active nav link detection ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefFile = href.split('/').pop();
    if (hrefFile === currentPath ||
       (currentPath === '' && hrefFile === 'index.html') ||
       (currentPath === 'index.html' && hrefFile === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Intersection Observer (fade-in-up) ---- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  /* ---- Counter animation ---- */
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  /* ---- Form validation ---- */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#FF6B6B';
          field.style.boxShadow   = '0 0 0 4px rgba(255,107,107,0.15)';
          valid = false;
        } else {
          field.style.borderColor = '';
          field.style.boxShadow   = '';
        }
      });

      if (valid) {
        const btn = form.querySelector('[type="submit"]');
        const original = btn.textContent;
        btn.textContent = '✓ Sent!';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  });

  /* ---- Gallery lightbox (simple) ---- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      z-index:9999;display:none;align-items:center;justify-content:center;
      cursor:pointer;padding:20px;
    `;
    lightbox.innerHTML = '<img id="lb-img" style="max-height:90vh;max-width:90vw;border-radius:16px;object-fit:contain;"/>';
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          document.getElementById('lb-img').src = img.src;
          lightbox.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  /* ---- Category filter (cakes page) ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cakeCards  = document.querySelectorAll('.cake-card[data-category]');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        cakeCards.forEach(card => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = '';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
