document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  hamburger?.addEventListener('click', () => {
    navbar.classList.toggle('mobile-open');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('mobile-open'));
  });

  /* ---------- Scroll spy ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => spyObserver.observe(s));

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.about-content, .infra-item, .experience-card, .edu-card, .language-card, .project-card, .spec-card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), reduceMotion ? 0 : (i % 4) * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------- Skill bars + language bars fill on view ---------- */
  const fillBars = (selector, attr) => {
    document.querySelectorAll(selector).forEach(bar => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const val = entry.target.dataset[attr];
            entry.target.style.width = val;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      observer.observe(bar);
    });
  };
  fillBars('.skill-progress span', 'progress');
  fillBars('.level-progress', 'width');

  /* ---------- Terminal typing effect ---------- */
  const typeLines = document.querySelectorAll('.type-line');
  let delay = 300;
  typeLines.forEach((el) => {
    const text = el.dataset.text || '';
    if (reduceMotion) { el.textContent = text; return; }
    setTimeout(() => {
      let i = 0;
      const typer = setInterval(() => {
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) clearInterval(typer);
      }, 32);
    }, delay);
    delay += text.length * 32 + 500;
  });

  /* ---------- Project filters ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const cats = card.dataset.category.split(' ');
        const show = filter === 'all' || cats.includes(filter);
        card.classList.toggle('hidden', !show);
      });
    });
  });

  /* ---------- GitHub dropdown ---------- */
  const githubBtn = document.getElementById('githubDropdownBtn');
  const githubWrap = githubBtn?.closest('.github-dropdown');
  githubBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    githubWrap.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (githubWrap && !githubWrap.contains(e.target)) githubWrap.classList.remove('open');
  });

  /* ---------- Scroll to top ---------- */
  document.getElementById('scrollTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});
