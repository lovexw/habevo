(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
  });

  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && nav.classList.contains('is-open')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-open')) return;
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (nav.contains(target) || toggle.contains(target)) return;
    setOpen(false);
  });

  const mq = window.matchMedia('(min-width: 761px)');
  mq.addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
})();
