import { data } from '../data.js';

export function Experience() {
  const { experience } = data;

  const itemsHtml = experience.items.map(item => {
    const bulletsHtml = item.bullets.map(b => `          <li>${b}</li>`).join('\n');

    return `      <div class="tl-item reveal">
        <div class="tl-meta">${item.dates}</div>
        <div class="tl-role">${item.role}</div>
        <div class="tl-org">${item.org}</div>
        <ul class="tl-list">
${bulletsHtml}
        </ul>
      </div>`;
  }).join('\n\n');

  return `<section class="section" id="experience" data-experience>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${experience.eyebrow}</div>
        <h2 class="section-title">${experience.title}</h2>
      </div>
    </div>

    <div class="timeline" id="timeline">
      <svg class="line" preserveAspectRatio="none" viewBox="0 0 2 1000" aria-hidden="true"><path d="M1 0 L1 1000" /></svg>

${itemsHtml}
    </div>
  </div>
</section>`;
}
