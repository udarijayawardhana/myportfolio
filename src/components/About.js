import { data } from '../data.js';

export function About() {
  const { about } = data;

  const bioHtml = about.bio.map(p => `        <p>${p}</p>`).join('\n');

  const statsHtml = about.stats.map(s => {
    const smallPart = s.small ? `<small>${s.small}</small>` : '';
    return `          <div class="stat"><div class="num">${s.num}${smallPart}</div><div class="lbl">${s.label}</div></div>`;
  }).join('\n');

  return `<section class="section" id="about" data-about>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${about.eyebrow}</div>
        <h2 class="section-title">${about.title}</h2>
      </div>
    </div>
    <div class="about-grid">
      <div class="bio reveal">
${bioHtml}
      </div>
      <div class="reveal" data-delay="1">
        <div class="stats">
${statsHtml}
        </div>
        <div class="avail"><span class="pulse-dot"></span> ${about.availability}</div>
      </div>
    </div>
  </div>
</section>`;
}
