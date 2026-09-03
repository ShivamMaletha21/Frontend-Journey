/**
 * SHIVAM MALETHA — PORTFOLIO JAVASCRIPT
 * Advanced interactive animations: Custom Cursor, 3D Tilt Physics, Typewriter Headline,
 * Stat Counters, Technical Focus SVG Previews, FAQ Accordion, and Form Validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initTypewriter();
  init3DTilt();
  initMagneticButtons();
  initAnimatedCounters();
  initNavbar();
  initMobileDrawer();
  initTechnicalFocusAccordion();
  initFaqAccordion();
  initProjectFilter();
  initProjectDeepDiveModal();
  initContactForms();
  initEmailCopyButtons();
  initScrollAnimations();
  initCurrentYear();
});

/* ==========================================================================
   1. CUSTOM INTERACTIVE CURSOR WITH LERP SMOOTHING
   ========================================================================== */

function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (!dot || !ring || window.matchMedia('(hover: none)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    // Lerp smooth follow for the outer ring
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover expansion on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .tech-badge, .tilt-card, .faq-header, .social-pill, .filter-tab');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => ring.classList.add('active'));
    target.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });
}

/* ==========================================================================
   2. DYNAMIC TYPEWRITER SUBTITLE IN HERO
   ========================================================================== */

function initTypewriter() {
  const textEl = document.getElementById('typing-text');
  if (!textEl) return;

  const phrases = [
    'Modern Web Interfaces',
    'Data Structures & Algorithms (DSA)',
    'Responsive & Fast UI Experiences',
    'Backend & REST API Foundations',
    'Clean Semantic Code & Logic'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseEnd = 2000;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      charIdx--;
      textEl.textContent = currentPhrase.substring(0, charIdx);
    } else {
      charIdx++;
      textEl.textContent = currentPhrase.substring(0, charIdx);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentPhrase.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
}

/* ==========================================================================
   3. 3D TILT PHYSICS ON CARDS
   ========================================================================== */

function init3DTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   4. MAGNETIC BUTTONS ATTRACTION
   ========================================================================== */

function initMagneticButtons() {
  if (window.matchMedia('(hover: none)').matches) return;

  const magneticBtns = document.querySelectorAll('.magnetic-btn, .magnetic-item');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

/* ==========================================================================
   5. ANIMATED STAT NUMBER COUNTERS
   ========================================================================== */

function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target, 10);
          const duration = 1800;
          const startTime = performance.now();
          const startVal = target > 2000 ? target - 20 : 0;

          function updateCounter(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (target - startVal) * easeOut);
            counter.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }
          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-bar-section');
  if (metricsSection) observer.observe(metricsSection);
}

/* ==========================================================================
   6. NAVBAR & SCROLLSPY
   ========================================================================== */

function initNavbar() {
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   7. MOBILE DRAWER MENU
   ========================================================================== */

function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .open-contact-btn');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(isOpen) {
    const currentState = toggleBtn.getAttribute('aria-expanded') === 'true';
    const newState = isOpen !== undefined ? isOpen : !currentState;

    toggleBtn.setAttribute('aria-expanded', String(newState));
    drawer.classList.toggle('open', newState);
    drawer.setAttribute('aria-hidden', String(!newState));
    document.body.style.overflow = newState ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* ==========================================================================
   8. TECHNICAL FOCUS ACCORDION & LIVE PREVIEW SWITCHER
   ========================================================================== */

function initTechnicalFocusAccordion() {
  const accordion = document.getElementById('focus-accordion');
  if (!accordion) return;

  const items = accordion.querySelectorAll('.accordion-item');
  const previewImg = document.getElementById('preview-image');
  const previewCaption = document.getElementById('preview-caption');
  const previewMeta = document.getElementById('preview-meta');

  const previewData = {
    frontend: {
      src: 'assets/images/preview-frontend.svg',
      caption: 'Live IDE & Code Pipeline: Frontend & Responsive Design',
      meta: '⚡ Core Web Vitals: 100/100 Perf Score'
    },
    dsa: {
      src: 'assets/images/preview-dsa.svg',
      caption: 'Algorithm Lab: Data Structures & Problem Solving',
      meta: '⚡ Time: O(N) | Space: O(1) • LeetCode & Logic'
    },
    backend: {
      src: 'assets/images/preview-backend.svg',
      caption: 'Live API Architecture: Full-Stack & Python REST Endpoints',
      meta: '⚡ 0 Downtime • 6.4ms Avg Latency'
    },
    ai: {
      src: 'assets/images/preview-ai.svg',
      caption: 'Graphic Era AI Track: Neural Graph & Data Science Matrix',
      meta: '⚡ 98.4% Accuracy • Python NumPy / Pandas'
    },
    framer: {
      src: 'assets/images/preview-dsa.svg',
      caption: 'Algorithm Lab: Data Structures & Problem Solving',
      meta: '⚡ Time: O(N) | Space: O(1) • LeetCode & Logic'
    }
  };

  function updatePreview(key) {
    const data = previewData[key];
    if (!data || !previewImg) return;

    previewImg.classList.add('fade-out');

    setTimeout(() => {
      previewImg.src = data.src;
      if (previewCaption) previewCaption.textContent = data.caption;
      if (previewMeta) previewMeta.textContent = data.meta;
      previewImg.classList.remove('fade-out');
    }, 200);
  }

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const previewKey = item.dataset.preview;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        updatePreview(previewKey);
      }
    });

    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 1024) {
        updatePreview(previewKey);
      }
    });
  });
}

/* ==========================================================================
   9. FAQ ACCORDION
   ========================================================================== */

function initFaqAccordion() {
  const faqList = document.getElementById('faq-accordion');
  if (!faqList) return;

  const faqItems = faqList.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-header')?.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('active', !isActive);
      header.setAttribute('aria-expanded', String(!isActive));
    });
  });
}

/* ==========================================================================
   10. PROJECT FILTER TABS
   ========================================================================== */

function initProjectFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterTabs.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      projectCards.forEach(card => {
        const category = card.dataset.category;
        const matches = filter === 'all' || category === filter;

        if (matches) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   11. PROJECT DEEP DIVE MODAL
   ========================================================================== */

function initProjectDeepDiveModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close-btn');
  const triggerBtns = document.querySelectorAll('.open-project-modal-btn');

  if (!modal) return;

  const projectData = {
    'trip-planner': {
      tag: 'JAVASCRIPT OBJECTS & CRUD ARCHITECTURE',
      title: '01 // JavaScript Travel Trip Planner',
      img: 'assets/images/project-trip-planner.png',
      desc: "Finally wrapped up my JavaScript Travel Trip Planner project! I built this project to get hands-on practice with JavaScript Objects and understand how they can be used to represent real-world data instead of just learning the theory. It manages destinations, travelers, budgets, accommodation, transportation, and activities dynamically.",
      features: [
        'Save trip details, destination, traveler name & date scheduling',
        'Add accommodation and transportation logistics to trip state',
        'Full CRUD Operations: Add, edit, and delete activities on the fly',
        'Search and filter activities in real-time without page reload',
        'Calculate and update total trip cost dynamically as data changes',
        'Seamless dynamic UI updates driven by object state changes'
      ],
      practiced: [
        'Objects & Nested Objects',
        'Arrays of Objects',
        'Object References & Mutability',
        'ES6 Object Shorthand',
        'DOM Manipulation',
        'Event Handling',
        'Form Validation',
        'CRUD Operations'
      ],
      learned: "The biggest takeaway from this project wasn't building the UI—it was learning how to think in terms of objects. While building it, I understood how objects help organize related data, how multiple objects can work together, and how updating object data can automatically update what's shown on the screen. I also got much more comfortable with handling form data and CRUD operations in JavaScript.",
      demo: 'https://trip-planner-chi-fawn.vercel.app/',
      github: 'https://github.com/ShivamMaletha21/Frontend-Journey/tree/main/JavaScript%20Projects'
    },
    'spotify-manager': {
      tag: 'ALGORITHMS & REAL-TIME STATE SYNC',
      title: '02 // Spotify Playlist Manager 🎵',
      img: 'assets/images/project-spotify-manager.png',
      desc: "Day 3 – Spotify Playlist Manager 🎵 is now complete. Turned the UI into a fully functional application using JavaScript to take core programming concepts and build a working music manager from scratch.",
      features: [
        'Add new songs with duplicate detection & prevention',
        'Real-time song search filtering and starred favorites system',
        'A–Z Alphabetical sorting and reverse playlist order',
        'True randomization shuffle using the Fisher-Yates Algorithm',
        'Pick random song feature & complete playlist state reset',
        'Dynamic statistics bar: total tracks, first/last/recent song, and live preview'
      ],
      practiced: [
        'Fisher-Yates Shuffle Algorithm',
        'Math.random() Array Indexing',
        'UI & Data Synchronization',
        'Array Methods & Mutations',
        'DOM Manipulation',
        'Dynamic HTML Generation',
        'Reusable Function Architecture'
      ],
      learned: "One of the main challenges I faced was keeping the playlist data and UI synchronized. Whenever I sorted, reversed, shuffled, or cleared the playlist, I had to ensure the changes were reflected correctly across the entire interface. The biggest takeaway was that knowing individual JavaScript methods is one thing, but understanding how to combine them to build a working application is where the real learning happens.",
      demo: 'https://your-music-qbb0yjcxc-sh-ivam1.vercel.app/',
      github: 'https://github.com/ShivamMaletha21/Frontend-Journey/tree/main/JavaScript%20Projects'
    },
    'shopping-cart': {
      tag: 'ARRAY METHODS & E-COMMERCE LOGIC',
      title: '03 // Shopping Cart System',
      img: 'assets/images/project-shopping-cart.png',
      desc: "Finished My Shopping Cart System Project! Built to improve core JavaScript skills, array transformations, price calculation engines, discount coupons, and persistent LocalStorage syncing.",
      features: [
        'Add & remove items with real-time quantity increments and decrements',
        'Live product search and inventory catalogue display',
        'Dynamic price engine: subtotal, taxes, shipping, and promo discounts',
        'Persistent cart state stored and restored from Browser Local Storage',
        'Zero UI distraction: laser-focused on programming logic and clean code'
      ],
      practiced: [
        'Array methods: push(), pop(), splice(), slice()',
        'Array searches: find(), findIndex(), includes()',
        'Array iterations: forEach(), map(), filter(), reduce()',
        'LocalStorage API Serialization',
        'Event Delegation & Bubbling',
        'Business Logic & Math Algorithms'
      ],
      learned: "During this project, I realized I was spending far too much time trying to build a polished e-commerce UI. Eventually, I decided to keep the interface simple because my main goal right now is to become better at JavaScript and programming logic. That shift in mindset made me enjoy the learning process much more. Every project teaches something beyond code, and this one taught me to prioritize learning over perfection.",
      demo: 'https://shopping-cart-javas.netlify.app/',
      github: 'https://github.com/ShivamMaletha21/Frontend-Journey/tree/main/JavaScript%20Projects'
    },
    'portfolio-site': {
      tag: 'EDITORIAL UI & MOTION DESIGN',
      title: '04 // Modern Personal Portfolio',
      img: 'assets/images/project-portfolio.png',
      desc: "The very portfolio website you are viewing! Engineered to showcase my development journey, projects, and skills with a unique identity combining blueprint graph paper textures, radiant sunset gradients, 3D tilt physics, and zero framework overhead.",
      features: [
        'Interactive spring-interpolated magnetic custom cursor with hover expansion',
        'Real-time 3D card tilt physics driven by mouse coordinates',
        'Dynamic typewriter headline cycling through developer specializations',
        'Technical Focus accordion with dynamic SVG preview pipelines',
        'Numbered FAQ accordion, 4-column metric counter animations, and contact modal',
        '100% dependency-free vanilla JavaScript with optimized Core Web Vitals'
      ],
      practiced: [
        'Advanced CSS Grid & Modern Flexbox',
        'Vanilla ES6+ JavaScript',
        'IntersectionObserver Scrollspy & Animations',
        'RequestAnimationFrame Cursor Lerp',
        '3D CSS Perspective Physics',
        'Responsive Mobile Ergonomics'
      ],
      learned: "Engineered from scratch to be completely unique, avoiding generic templates. It taught me how to create bespoke design systems, micro-interactions, and accessible web standards that deliver a memorable user experience without relying on heavy frontend frameworks.",
      demo: '#hero',
      github: 'https://github.com/ShivamMaletha21'
    }
  };

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('project-modal-tag').textContent = data.tag;
    document.getElementById('project-modal-title').textContent = data.title;
    document.getElementById('project-modal-img').src = data.img;
    document.getElementById('project-modal-desc').textContent = data.desc;
    document.getElementById('project-modal-learned').textContent = `"${data.learned}"`;

    const featuresList = document.getElementById('project-modal-features');
    featuresList.innerHTML = data.features.map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('');

    const practicedGrid = document.getElementById('project-modal-practiced');
    practicedGrid.innerHTML = data.practiced.map(p => `<span class="tech-tag">${p}</span>`).join('');

    const demoBtn = document.getElementById('project-modal-demo-btn');
    const githubBtn = document.getElementById('project-modal-github-btn');

    demoBtn.href = data.demo;
    githubBtn.href = data.github;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.dataset.projectId;
      openProjectModal(projectId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeProjectModal(); });
}

/* ==========================================================================
   12. CONTACT FORMS
   ========================================================================== */

function initContactForms() {
  const pageForm = document.getElementById('page-contact-form');
  if (pageForm) {
    pageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('p-name');
      const email = document.getElementById('p-email');
      const message = document.getElementById('p-message');
      const nameErr = document.getElementById('p-name-error');
      const emailErr = document.getElementById('p-email-error');
      const msgErr = document.getElementById('p-message-error');
      const submitBtn = document.getElementById('p-submit-btn');
      const successBanner = document.getElementById('p-success-banner');

      let valid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim()) {
        name.classList.add('error');
        nameErr?.classList.add('visible');
        valid = false;
      } else {
        name.classList.remove('error');
        nameErr?.classList.remove('visible');
      }

      if (!emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        emailErr?.classList.add('visible');
        valid = false;
      } else {
        email.classList.remove('error');
        emailErr?.classList.remove('visible');
      }

      if (!message.value.trim()) {
        message.classList.add('error');
        msgErr?.classList.add('visible');
        valid = false;
      } else {
        message.classList.remove('error');
        msgErr?.classList.remove('visible');
      }

      if (valid) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;

        setTimeout(() => {
          submitBtn.style.display = 'none';
          if (successBanner) successBanner.style.display = 'flex';
          pageForm.reset();

          setTimeout(() => {
            submitBtn.style.display = 'inline-flex';
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Send Message</span><svg class="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
            if (successBanner) successBanner.style.display = 'none';
          }, 4000);
        }, 700);
      }
    });
  }

  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const openButtons = document.querySelectorAll('.open-contact-btn');
  const modalForm = document.getElementById('contact-form');

  if (!modal) return;

  function openModal(triggerElement) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const messageInput = modal.querySelector('textarea');
    if (triggerElement && triggerElement.dataset.project && messageInput) {
      messageInput.value = `Hi Shivam, I would like to inquire about your project: ${triggerElement.dataset.project}.`;
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.getAttribute('href') === '#contact' && !btn.classList.contains('project-cta')) {
        return;
      }
      e.preventDefault();
      openModal(btn);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successBanner = document.getElementById('form-success');
      const submitBtn = document.getElementById('form-submit-btn');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      setTimeout(() => {
        if (submitBtn) submitBtn.style.display = 'none';
        if (successBanner) successBanner.style.display = 'flex';
        modalForm.reset();

        setTimeout(() => {
          closeModal();
          if (submitBtn) {
            submitBtn.style.display = 'inline-flex';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
          }
          if (successBanner) successBanner.style.display = 'none';
        }, 3000);
      }, 700);
    });
  }
}

/* ==========================================================================
   12. EMAIL COPY BUTTONS
   ========================================================================== */

function initEmailCopyButtons() {
  const pageCopyBtn = document.getElementById('page-copy-email-btn');
  const pageCopyStatus = document.getElementById('page-copy-status');
  const pageEmailText = document.getElementById('page-email-text')?.textContent || 'malethashivam43@gmail.com';

  if (pageCopyBtn && pageCopyStatus) {
    pageCopyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pageEmailText);
        pageCopyStatus.textContent = 'Copied! ✓';
        setTimeout(() => { pageCopyStatus.textContent = 'Copy'; }, 2200);
      } catch (err) {
        pageCopyStatus.textContent = 'Copied!';
      }
    });
  }

  const modalCopyBtn = document.getElementById('copy-email-btn');
  const modalCopyStatus = document.getElementById('copy-status');
  const modalEmailText = document.getElementById('contact-email-text')?.textContent || 'malethashivam43@gmail.com';

  if (modalCopyBtn && modalCopyStatus) {
    modalCopyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(modalEmailText);
        modalCopyStatus.textContent = 'Copied! ✓';
        setTimeout(() => { modalCopyStatus.textContent = 'Copy'; }, 2200);
      } catch (err) {
        modalCopyStatus.textContent = 'Copied!';
      }
    });
  }
}

/* ==========================================================================
   13. SCROLL REVEAL ANIMATIONS
   ========================================================================== */

function initScrollAnimations() {
  const animated = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-scale');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.12 });
  animated.forEach(el => observer.observe(el));
}

/* ==========================================================================
   14. CURRENT YEAR
   ========================================================================== */

function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
