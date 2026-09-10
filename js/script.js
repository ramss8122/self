/* ============================================================
   Sweet Delight Bakery — Shared JavaScript
   ============================================================ */

// Filter Button Click Handler Example
const filterBtns = document.querySelectorAll('[data-filter]');
const cakeCards = document.querySelectorAll('.cake-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterValue = btn.getAttribute('data-filter');

    cakeCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block'; // Show card
      } else {
        card.style.display = 'none';  // Completely hide from DOM flow
      }
    });
  });
});

/* ---- Immediate Direction Setup (Prevents FOUC) ---- */
(function () {
  const initialDir = localStorage.getItem('sweet_delight_dir') || localStorage.getItem('siteDir') || 'ltr';
  document.documentElement.setAttribute('dir', initialDir);
  if (document.body) {
    document.body.setAttribute('dir', initialDir);
  }
})();

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Lucide Icon Initialization ---- */
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  /* ---- Light / Dark Theme Management ---- */
  const savedTheme = localStorage.getItem('sweet_delight_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sweet_delight_theme', theme);
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.innerHTML = theme === 'dark' 
        ? '<i data-lucide="sun"></i>' 
        : '<i data-lucide="moon"></i>';
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    });
    initIcons();
  }

  applyTheme(savedTheme);
  initIcons();

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle-btn');
    if (btn) {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    }
  });

  /* ---- LTR / RTL Direction Management ---- */
  const savedDir = localStorage.getItem('sweet_delight_dir') || localStorage.getItem('siteDir') || 'ltr';

  function applyDirection(dir) {
    const validDir = dir === 'rtl' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', validDir);
    if (document.body) {
      document.body.setAttribute('dir', validDir);
    }
    localStorage.setItem('sweet_delight_dir', validDir);
    localStorage.setItem('siteDir', validDir);

    // Brand Name-க்கு மட்டும் LTR தரப்படுகிறது (Heading பக்கங்களுக்கு இது பாதிக்காது)
    document.querySelectorAll('.brand-name, .nav-logo-text, .nav-logo .logo-text').forEach(el => {
      el.style.direction = 'ltr';
      el.style.unicodeBidi = 'isolate';
    });

    // Update all dir toggle buttons
    document.querySelectorAll('.dir-toggle-btn, #dirToggle').forEach(btn => {
      btn.setAttribute('data-dir', validDir);
      btn.setAttribute('title', validDir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
      btn.setAttribute('aria-label', validDir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
      const label = btn.querySelector('.dir-label');
      if (label) {
        label.textContent = validDir.toUpperCase();
      } else {
        btn.innerHTML = '<span class="dir-label" style="font-size: 10px !important;">' + validDir.toUpperCase() + '</span>';
      }
    });

    initIcons();
  }

  applyDirection(savedDir);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.dir-toggle-btn, #dirToggle');
    if (btn) {
      e.preventDefault();
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const nextDir = current === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir);
    }
  });

  /* ---- Desktop Dropdowns ---- */
  const desktopDropdowns = document.querySelectorAll('.nav-dropdown');

  desktopDropdowns.forEach(dropdown => {
    const toggleLink = dropdown.querySelector(':scope > a');
    if (toggleLink) {
      toggleLink.addEventListener('click', (e) => {
        const isOpen = dropdown.classList.contains('open');
        desktopDropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });

        if (isOpen) {
          dropdown.classList.remove('open');
        } else {
          e.preventDefault();
          dropdown.classList.add('open');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      desktopDropdowns.forEach(d => d.classList.remove('open'));
    }
  });

  /* ---- Mobile Accordion / Dropdowns ---- */
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown, .mobile-menu .dropdown');

  mobileDropdowns.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector('.dropdown-toggle, .mobile-dropdown-toggle, :scope > a');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        const subMenu = dropdown.querySelector('.dropdown-menu, ul, .sub-menu, .submenu');
        if (subMenu) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = dropdown.classList.contains('open') || dropdown.classList.contains('active');
          
          mobileDropdowns.forEach(d => {
            if (d !== dropdown) {
              d.classList.remove('open', 'active');
              const otherSub = d.querySelector('.dropdown-menu, ul, .sub-menu, .submenu');
              if (otherSub) otherSub.style.display = 'none';
            }
          });

          if (isOpen) {
            dropdown.classList.remove('open', 'active');
            subMenu.style.display = 'none';
          } else {
            dropdown.classList.add('open', 'active');
            subMenu.style.display = 'block';
          }
        }
      });
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
    onScroll();
  }

  /* ---- Hamburger / Mobile menu ---- */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  let backdrop = document.getElementById('mobileBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobileBackdrop';
    backdrop.className = 'mobile-backdrop';
    document.body.appendChild(backdrop);
  }

  function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  function openMenu() {
    if (hamburger) hamburger.classList.add('active');
    if (mobileMenu) mobileMenu.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    const closeBtn = document.getElementById('navClose') || mobileMenu.querySelector('.mobile-close-btn, .nav-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
      });
    }

    mobileMenu.addEventListener('click', (e) => {
      const closeTarget = e.target.closest('#navClose, .mobile-close-btn, .nav-close-btn');
      if (closeTarget) {
        e.preventDefault();
        closeMenu();
        return;
      }
      const toggle = e.target.closest('.dropdown-toggle, .mobile-dropdown-toggle, .dropdown > a');
      const hasSub = toggle && toggle.closest('.dropdown, .mobile-dropdown')?.querySelector('.dropdown-menu, ul, .sub-menu, .submenu, .dropdown-submenu');
      if (hasSub) return;

      const link = e.target.closest('a');
      if (link) {
        closeMenu();
      }
    });

    backdrop.addEventListener('click', () => {
      closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Active nav link detection ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefFile = href.split('/').pop();
    if (hrefFile === currentPath ||
       ((currentPath === '' || currentPath === 'index.html') && (hrefFile === 'index.html' || hrefFile === '../index.html'))) {
      link.classList.add('active');
    }
  });

  /* ---- Cake Modal (Products & Gallery) ---- */
  const modal = document.getElementById("cakeModal");
  if (modal) {
    const closeBtn = modal.querySelector(".close-btn");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalPrice = document.getElementById("modalPrice");
    const modalRating = document.getElementById("modalRating");

    const cakeImages = document.querySelectorAll(".cake-card-img img");
    cakeImages.forEach(img => {
      img.addEventListener("click", () => {
        const card = img.closest(".cake-card");
        if (!card) return;

        if (modalImg) modalImg.src = img.src;
        if (modalTitle) modalTitle.innerText = card.querySelector("h3")?.innerText || "";
        if (modalDesc) modalDesc.innerText = card.querySelector("p")?.innerText || "";
        if (modalPrice) modalPrice.innerHTML = card.querySelector(".cake-price")?.innerHTML || "";
        if (modalRating) modalRating.innerHTML = card.querySelector(".cake-card-rating")?.innerHTML || "";

        modal.style.display = "flex";
      });
    });

    const galleryItemsWithData = document.querySelectorAll(".gallery-item[data-title]");
    galleryItemsWithData.forEach(item => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        if (!img) return;

        const title = item.getAttribute("data-title") || "Our Creation";
        const desc = item.getAttribute("data-desc") || "Freshly baked with premium quality ingredients.";
        const price = item.getAttribute("data-price") || "₹2,000 <span>per kg</span>";
        const reviewText = item.getAttribute("data-reviews") || "(100 reviews)";

        if (modalImg) modalImg.src = img.src;
        if (modalTitle) modalTitle.innerText = title;
        if (modalDesc) modalDesc.innerText = desc;
        if (modalPrice) modalPrice.innerHTML = price;
        if (modalRating) {
          modalRating.innerHTML = `
            <i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i>
            <span class="rating-count">${reviewText}</span>
          `;
          initIcons();
        }

        modal.style.display = "flex";
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

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
      const eased = 1 - Math.pow(1 - progress, 3);
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
        if (btn) {
          const original = btn.textContent;
          btn.textContent = '✓ Sent!';
          btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            form.reset();
          }, 3000);
        }
      }
    });
  });

  /* ---- Category filter (cakes page) ---- */
  const categoryFilterBtns = document.querySelectorAll('.filter-btn');
  const categoryCakeCards  = document.querySelectorAll('.cake-card[data-category]');

  if (categoryFilterBtns.length > 0) {
    categoryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        categoryCakeCards.forEach(card => {
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

});

/* ---- Global Dropdown and Mobile Menu Controls ---- */
function toggleDropdown(element) {
  if (!element) return;
  const parentDropdown = element.closest('.mobile-dropdown, .dropdown');
  if (!parentDropdown) return;

  const allDropdowns = document.querySelectorAll('.mobile-dropdown, .mobile-menu .dropdown');
  const isOpen = parentDropdown.classList.contains('open') || parentDropdown.classList.contains('active');

  allDropdowns.forEach(item => {
    if (item !== parentDropdown) {
      item.classList.remove('open', 'active');
      const sub = item.querySelector('.dropdown-menu, ul, .sub-menu, .submenu, .dropdown-submenu');
      if (sub) sub.style.display = '';
    }
  });

  const subMenu = parentDropdown.querySelector('.dropdown-menu, ul, .sub-menu, .submenu, .dropdown-submenu');
  if (isOpen) {
    parentDropdown.classList.remove('open', 'active');
    if (subMenu) subMenu.style.display = '';
  } else {
    parentDropdown.classList.add('open', 'active');
    if (subMenu) subMenu.style.display = '';
  }
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileBackdrop');

  if (hamburger) hamburger.classList.remove('active');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

window.toggleDropdown = toggleDropdown;
window.closeMobileMenu = closeMobileMenu;

document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const profileIcon = document.getElementById("profile-icon");
  if (profileIcon) {
    profileIcon.addEventListener("click", function (e) {
      e.preventDefault();
      if (!isLoggedIn) {
        window.location.href = "../pages/login.html";
      } else {
        window.location.href = "../pages/account.html";
      }
    });
  }

  const cartIcon = document.getElementById("cart-icon");
  if (cartIcon) {
    cartIcon.addEventListener("click", function (e) {
      e.preventDefault();
      if (!isLoggedIn) {
        window.location.href = "../pages/login.html";
      } else {
        window.location.href = "../pages/cart.html";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Set default direction to LTR if not already present
  if (!document.documentElement.hasAttribute("dir")) {
    document.documentElement.setAttribute("dir", "ltr");
  }
});

// Switch function for language/direction toggle
function setPageDirection(direction) {
  document.documentElement.setAttribute("dir", direction);
}
// Ensure dir toggle button only changes HTML direction attribute
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.dir-toggle-btn, #dirToggle');
  if (btn) {
    e.preventDefault();
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const nextDir = current === 'rtl' ? 'ltr' : 'rtl';
    
    document.documentElement.setAttribute('dir', nextDir);
    localStorage.setItem('sweet_delight_dir', nextDir);
    
    const label = btn.querySelector('.dir-label');
    if (label) label.textContent = nextDir.toUpperCase();
  }
});
/* ---- LTR / RTL Direction Management ---- */
function applyDirection(dir) {
  const validDir = dir === 'rtl' ? 'rtl' : 'ltr';
  
  // HTML tag & Body tag rendilum direction set seidhal CSS smooth-a work aagum
  document.documentElement.setAttribute('dir', validDir);
  if (document.body) {
    document.body.setAttribute('dir', validDir);
  }
  
  localStorage.setItem('sweet_delight_dir', validDir);

  // Toggle button label text & attribute change
  document.querySelectorAll('.dir-toggle-btn, #dirToggle').forEach(btn => {
    btn.setAttribute('data-dir', validDir);
    const label = btn.querySelector('.dir-label');
    if (label) {
      label.textContent = validDir === 'rtl' ? 'RTL' : 'LTR';
    } else {
      btn.innerText = validDir === 'rtl' ? 'RTL' : 'LTR';
    }
  });
}

// Global Click Event for Direction Toggle Button
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#dirToggle, .dir-toggle-btn');
  if (btn) {
    e.preventDefault();
    e.stopPropagation();
    
    // Check current direction and toggle
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    
    applyDirection(newDir);
  }
});

// Load Saved Direction on Page Load
document.addEventListener('DOMContentLoaded', () => {
  const savedDir = localStorage.getItem('sweet_delight_dir') || 'ltr';
  applyDirection(savedDir);
});
