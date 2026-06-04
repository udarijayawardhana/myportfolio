/**
 * IntersectionObserver for '.skill' elements — animates bar width on scroll.
 */
export function initSkillBars() {
  const sIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const lvl = e.target.dataset.level || 80;
        e.target.style.setProperty('--w', lvl + '%');
        e.target.classList.add('in');
        sIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.skill').forEach(s => sIO.observe(s));
}
