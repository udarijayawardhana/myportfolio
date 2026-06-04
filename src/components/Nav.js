import { data } from '../data.js';

export function Nav() {
  return `<header class="nav" id="nav">
  <div class="container nav-row">
    <a href="#home" class="logo" data-logo data-hover><span class="logo-dot"></span>${data.nav.logo}</a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#about" data-hover>About</a>
      <a href="#skills" data-hover>Skills</a>
      <a href="#projects" data-hover>Projects</a>
      <a href="#experience" data-hover>Experience</a>
      <a href="#achievements" data-hover>Achievements</a>
      <a href="#contact" class="nav-cta" data-hover>Let's talk →</a>
    </nav>
    <button class="nav-burger" aria-label="Open menu" aria-expanded="false" data-hover><span></span></button>
  </div>
</header>

<nav class="menu" aria-label="Mobile">
  <a href="#about" style="--i:1" data-hover>About</a>
  <a href="#skills" style="--i:2" data-hover>Skills</a>
  <a href="#projects" style="--i:3" data-hover>Projects</a>
  <a href="#experience" style="--i:4" data-hover>Experience</a>
  <a href="#achievements" style="--i:5" data-hover>Achievements</a>
  <a href="#contact" style="--i:6" data-hover>Contact</a>
</nav>`;
}
