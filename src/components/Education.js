import { data } from '../data.js';

export function Education() {
  const { education } = data;

  const itemsHtml = education.items.map((item, i) => {
    const delayAttr = i > 0 ? ` data-delay="${i}"` : '';
    return `      <div class="edu reveal"${delayAttr}>
        <div class="meta">${item.dates}</div>
        <div class="deg">${item.degree}</div>
        <div class="inst">${item.institution}</div>
        <p class="extra">${item.details}</p>
      </div>`;
  }).join('\n');

  return `<section class="section" id="education" data-education>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${education.eyebrow}</div>
        <h2 class="section-title">${education.title}</h2>
      </div>
    </div>
    <div class="edu-grid">
${itemsHtml}
    </div>
  </div>
</section>`;
}
