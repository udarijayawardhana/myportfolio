/**
 * Nav scroll class, burger toggle, mobile-menu links, active-link highlighting.
 */
export function initNav() {
  // === Nav Scroll ===
  const nav = document.getElementById('nav');
  const burger = document.querySelector('.nav-burger');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // === Burger Toggle ===
  burger?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  // === Mobile Menu Link Click ===
  document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu-open', 'no-scroll');
    burger.setAttribute('aria-expanded', 'false');
  }));

  // === Active Nav Link ===
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const sectMap = new Map();
  links.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    const s = document.getElementById(id);
    if (s) sectMap.set(s, a);
  });
  const navIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        sectMap.get(e.target)?.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sectMap.forEach((_, s) => navIO.observe(s));
}
