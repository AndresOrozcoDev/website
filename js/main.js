/**
 * Lumina — Main JavaScript
 * Navbar · Hero Slider · Scroll Animations · Form Validation
 */
'use strict';

/* ============================================================
   NAVBAR
   ============================================================ */
(function initNavbar() {
  const header   = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (!header) return;

  /* Scroll → glass effect */
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* Hamburger toggle */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on nav link click */
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (!header.contains(e.target) && !mobileNav.contains(e.target)) {
        closeMenu();
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  function closeMenu() {
    hamburger && hamburger.classList.remove('open');
    mobileNav && mobileNav.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* Mark active nav link */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-list a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop() || 'index.html';
    if (href === currentPage) link.classList.add('active');
  });
})();

/* ============================================================
   HERO SLIDER
   ============================================================ */
(function initSlider() {
  const slider  = document.getElementById('hero-slider');
  if (!slider) return;

  const slides  = Array.from(slider.querySelectorAll('.slide'));
  const dots    = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (!slides.length) return;

  let current = 0;
  let timer   = null;
  const INTERVAL = 5500;

  function goTo(index) {
    /* Deactivate current */
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    if (dots[current]) {
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-selected', 'false');
    }

    /* Activate next */
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    if (dots[current]) {
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-selected', 'true');
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  /* Button controls */
  prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); startTimer(); });
  nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); startTimer(); });

  /* Dot controls */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  /* Keyboard navigation (when slider is focused) */
  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(current - 1); startTimer(); }
    if (e.key === 'ArrowRight') { goTo(current + 1); startTimer(); }
  });

  /* Touch / swipe */
  let touchStartX = 0;
  slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  slider.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
      startTimer();
    }
  }, { passive: true });

  /* Pause on hover */
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', startTimer);

  startTimer();
})();

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
(function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  /* Fallback for browsers without IntersectionObserver */
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const rules = {
    name: {
      el:  form.querySelector('#field-name'),
      err: form.querySelector('#err-name'),
      validate(v) {
        if (!v.trim())         return 'El nombre es obligatorio.';
        if (v.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
        return '';
      }
    },
    email: {
      el:  form.querySelector('#field-email'),
      err: form.querySelector('#err-email'),
      validate(v) {
        if (!v.trim()) return 'El correo electrónico es obligatorio.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Ingresa un correo electrónico válido.';
        return '';
      }
    },
    message: {
      el:  form.querySelector('#field-message'),
      err: form.querySelector('#err-message'),
      validate(v) {
        if (!v.trim())          return 'El mensaje es obligatorio.';
        if (v.trim().length < 20) return 'El mensaje debe tener al menos 20 caracteres.';
        return '';
      }
    }
  };

  const successEl = document.getElementById('form-success');

  function showError(rule, msg) {
    rule.el.classList.add('error');
    if (rule.err) { rule.err.textContent = msg; rule.err.classList.add('visible'); }
  }
  function clearError(rule) {
    rule.el.classList.remove('error');
    if (rule.err) { rule.err.classList.remove('visible'); rule.err.textContent = ''; }
  }

  /* Live validation on input & blur */
  Object.values(rules).forEach(rule => {
    rule.el.addEventListener('input', () => {
      const msg = rule.validate(rule.el.value);
      msg ? showError(rule, msg) : clearError(rule);
    });
    rule.el.addEventListener('blur', () => {
      const msg = rule.validate(rule.el.value);
      msg ? showError(rule, msg) : clearError(rule);
    });
  });

  /* Submit */
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    Object.values(rules).forEach(rule => {
      const msg = rule.validate(rule.el.value);
      if (msg) { showError(rule, msg); valid = false; }
      else clearError(rule);
    });

    if (!valid) {
      const firstErr = form.querySelector('.form-input.error, .form-textarea.error');
      firstErr && firstErr.focus();
      return;
    }

    /* Simulate async send */
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Mensaje';
      if (successEl) {
        successEl.classList.add('visible');
        setTimeout(() => successEl.classList.remove('visible'), 6000);
      }
    }, 1500);
  });
})();

/* ============================================================
   SMOOTH ANCHOR SCROLLING (offset for fixed header)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80; // header height
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: 'smooth' });
  });
});
