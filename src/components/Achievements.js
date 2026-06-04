import { data } from '../data.js';

export function Achievements() {
  const { achievements } = data;

  const highlightsHtml = achievements.highlights.map((h, i) => {
    const delayAttr = i > 0 ? ` data-delay="${i}"` : '';
    return `      <div class="hi-card reveal"${delayAttr} data-hover>
        <div class="hi-num">${h.num}</div>
        <div class="hi-cap">${h.caption}</div>
        <p class="hi-sub">${h.sub}</p>
        <a href="${h.link.href}" class="hi-link" data-hover>${h.link.text}</a>
      </div>`;
  }).join('\n');

  const certsHtml = achievements.certs.map((c, i) => {
    const delayAttr = i > 0 ? ` data-delay="${i}"` : '';
    return `      <div class="cert reveal"${delayAttr} data-hover><div class="ico">${c.icon}</div><h4>${c.name}</h4><p>${c.issuer}</p></div>`;
  }).join('\n');

  return `<section class="section" id="achievements" data-achievements>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${achievements.eyebrow}</div>
        <h2 class="section-title">${achievements.title}</h2>
      </div>
    </div>

    <div class="hi-grid">
${highlightsHtml}
    </div>

    <div class="cert-grid">
${certsHtml}
    </div>
  </div>
</section>`;
}
