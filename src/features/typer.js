/**
 * Typewriter effect cycling through hero roles.
 */
import { data } from '../data.js';

export function initTyper() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    const roles = data.hero.roles;
    const el = document.getElementById('role');
    let ri = 0, ci = 0, del = false;
    const tick = () => {
      const word = roles[ri];
      ci += del ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let wait = del ? 35 : 75;
      if (!del && ci === word.length) { wait = 1400; del = true; }
      else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; wait = 250; }
      setTimeout(tick, wait);
    };
    tick();
  }
}
