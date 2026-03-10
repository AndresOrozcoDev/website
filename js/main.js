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

/* ============================================================
   QUOTATION WIZARD MODAL — FerroMax
   ============================================================ */
(function initQuoteWizard() {
  'use strict';

  const modal    = document.getElementById('quote-modal');
  if (!modal) return;

  const overlay  = document.getElementById('wz-overlay');
  const closeBtn = document.getElementById('wz-close');
  const doneBtn  = document.getElementById('wz-done');
  const serviceTag = document.getElementById('wz-service-tag');
  const progFill = document.getElementById('wz-prog-fill');
  const lbls     = [1,2,3,4,5].map(i => document.getElementById('wz-lbl-' + i));
  const steps    = [1,2,3,4,5].map(i => document.getElementById('wz-step-' + i));

  let currentStep = 1;
  let selections  = { material: null, tipo: null };

  // ── Open modal ──
  function openModal(serviceName) {
    selections = { material: null, tipo: null };
    currentStep = 1;
    serviceTag.textContent = serviceName || 'Servicio';
    resetAllSteps();
    showStep(1);
    modal.classList.add('open');
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  // ── Close modal ──
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Show step ──
  function showStep(n) {
    steps.forEach((s, i) => {
      s.classList.toggle('active', i + 1 === n);
    });
    lbls.forEach((l, i) => {
      l.classList.toggle('active', i + 1 === n);
    });
    const pct = Math.round((n / 5) * 100);
    progFill.style.width = pct + '%';
    currentStep = n;
  }

  // ── Reset ──
  function resetAllSteps() {
    modal.querySelectorAll('.wz-option').forEach(opt => opt.classList.remove('selected'));
    modal.querySelectorAll('.wz-error').forEach(err => { err.style.display = 'none'; });
    ['wz-ancho','wz-alto','wz-cantidad','wz-nombre','wz-email','wz-telefono','wz-notas']
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = id === 'wz-cantidad' ? '1' : '';
      });
  }

  // ── Option selection ──
  modal.addEventListener('click', e => {
    const opt = e.target.closest('.wz-option');
    if (!opt) return;
    const group = opt.dataset.group;
    // Deselect siblings in same group
    modal.querySelectorAll(`.wz-option[data-group="${group}"]`).forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    selections[group] = opt.dataset.value;
  });

  // ── Navigation ──
  function bindNav(nextId, prevId, step, validate) {
    const nextBtn = document.getElementById(nextId);
    const prevBtn = prevId ? document.getElementById(prevId) : null;
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const errEl = document.getElementById('wz-err-' + step);
        if (validate && !validate()) {
          if (errEl) errEl.style.display = 'block';
          return;
        }
        if (errEl) errEl.style.display = 'none';
        showStep(step + 1);
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => showStep(step - 1));
    }
  }

  bindNav('wz-next-1', null, 1, () => !!selections.material);
  bindNav('wz-next-2', 'wz-prev-2', 2, () => !!selections.tipo);
  bindNav('wz-next-3', 'wz-prev-3', 3, () => {
    const a = document.getElementById('wz-ancho').value.trim();
    const h = document.getElementById('wz-alto').value.trim();
    return a && h && Number(a) > 0 && Number(h) > 0;
  });

  // ── Submit step 4 ──
  const submitBtn = document.getElementById('wz-submit');
  const prevBtn4  = document.getElementById('wz-prev-4');
  if (prevBtn4) prevBtn4.addEventListener('click', () => showStep(3));
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const nombre = document.getElementById('wz-nombre').value.trim();
      const email  = document.getElementById('wz-email').value.trim();
      const errEl  = document.getElementById('wz-err-4');
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!nombre || !emailOk) {
        if (errEl) errEl.style.display = 'block';
        return;
      }
      if (errEl) errEl.style.display = 'none';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';
      // Simulate async send
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Solicitud';
        showStep(5);
      }, 1200);
    });
  }

  // ── Done button ──
  if (doneBtn) doneBtn.addEventListener('click', closeModal);

  // ── Close triggers ──
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // ── Keyboard: Escape closes ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ── Attach to service cards ──
  document.querySelectorAll('.card[data-service]').forEach(card => {
    card.addEventListener('click', e => {
      // Only open if clicking the button or the card itself (not a link inside)
      if (e.target.tagName === 'A') return;
      openModal(card.dataset.service);
    });
    // Also attach directly to quote buttons
    const btn = card.querySelector('.card-quote-btn');
    if (btn) {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        openModal(card.dataset.service);
      });
    }
  });
})();
