document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile menu on navigation link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // 2. Services Interactive Accordion (Single Active Open)
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all accordion items
        accordionItems.forEach((other) => other.classList.remove('active'));

        // If not already active, expand clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. 3D Container Scroll Perspective Animation Engine
  const heroContainer = document.querySelector('.hero-scroll-container');
  const heroCard = document.getElementById('heroScrollCard');
  const scrollHeader = document.querySelector('.scroll-header');

  const supportsScrollTimeline = CSS.supports('animation-timeline', 'view()');

  // Fallback JavaScript interpolator for browsers without CSS view-timeline
  if (heroContainer && heroCard && !supportsScrollTimeline) {
    let ticking = false;

    const handleScroll = () => {
      const rect = heroContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;

      const totalDistance = rect.height - windowHeight * 0.25;
      const progress = Math.min(
        Math.max(-rect.top / (totalDistance > 0 ? totalDistance : 1), 0),
        1
      );

      // Rotate: 20deg -> 0deg
      const rotateX = 20 * (1 - progress);

      // Scale: 1.02 -> 1.0 (Desktop) or 0.95 -> 0.98 (Mobile)
      const startScale = isMobile ? 0.95 : 1.02;
      const endScale = isMobile ? 0.98 : 1.0;
      const scale = startScale + (endScale - startScale) * progress;

      // Header translateY: 0px -> -80px
      const headerTranslateY = -80 * progress;

      heroCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      if (scrollHeader) {
        scrollHeader.style.transform = `translateY(${headerTranslateY.toFixed(1)}px)`;
      }

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial render call
    handleScroll();
  }

  // 4. Fade-in Intersection Observer
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  fadeElements.forEach((el) => fadeObserver.observe(el));

  // 5. Stats Number Counter Animation
  const counters = document.querySelectorAll('.counter');
  let animatedStats = false;

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          counters.forEach((counter) => {
            const target = parseFloat(counter.innerText);
            const isFloat = counter.innerText.includes('.');
            let current = 0;
            const increment = target / 35;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.innerText = isFloat ? target.toFixed(1) : Math.round(target);
                clearInterval(timer);
              } else {
                counter.innerText = isFloat ? current.toFixed(1) : Math.round(current);
              }
            }, 30);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    countObserver.observe(statsSection);
  }
});