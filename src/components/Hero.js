import { data } from '../data.js';

export function Hero() {
  const { hero } = data;

  const ctaButtons = hero.cta.map(c =>
    c.class.includes('btn-primary')
      ? `<a href="${c.href}" class="${c.class}" data-hover>${c.text} <span class="arr">→</span></a>`
      : `<a href="${c.href}" class="${c.class}" data-hover>${c.text}</a>`
  ).join('\n        ');

  return `<section class="hero" id="home" data-hero>
  <div class="mesh" aria-hidden="true"></div>
  <div class="container hero-inner">
    <div>
      <div class="hero-eyebrow reveal"><span class="pulse-dot"></span> ${hero.eyebrow}</div>
      <h1 class="reveal" data-delay="1">${hero.name}</h1>
      <div class="role-line reveal" data-delay="2">
        <span class="prefix">$ whoami →</span>
        <span class="role" id="role">${hero.roles[0]}</span>
      </div>
      <p class="tagline reveal" data-delay="3">
        ${hero.tagline}
      </p>
      <div class="cta-row reveal" data-delay="3">
        ${ctaButtons}
      </div>
    </div>
    <div class="hero-art reveal" data-delay="2" aria-hidden="true">
      <div class="geo"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  </div>
  <div class="scroll-ind" aria-hidden="true">
    <div class="mouse"></div>
    <span>scroll</span>
  </div>
</section>`;
}
