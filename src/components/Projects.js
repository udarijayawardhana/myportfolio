import { data } from '../data.js';

export function Projects() {
  const { projects } = data;

  const cardsHtml = projects.items.map((item, index) => {
    const isFeat = item.featured;
    const featClass = isFeat ? ' feat' : '';
    // delay pattern from original: featured=none, idx1=1, idx2=2, idx3=none, idx4=1
    const delays = [0, 1, 2, 0, 1];
    const delay = delays[index] || 0;
    const delayAttr = delay ? ` data-delay="${delay}"` : '';

    const featuredTag = isFeat ? `\n        <span class="featured-tag">Featured</span>` : '';

    const chipsHtml = item.chips.map(c => `<span class="chip">${c}</span>`).join('');
    const linksHtml = item.links.map(l =>
      `<a href="${l.href}" class="icon-btn" aria-label="${l.label}" data-hover>${l.icon}</a>`
    ).join('');

    return `      <article class="card${featClass} reveal"${delayAttr} data-hover>${featuredTag}
        <div>
          <div class="card-num">${item.num} →</div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc}</p>
        </div>
        <div class="card-foot">
          <div class="chips">${chipsHtml}</div>
          <div class="card-links">${linksHtml}</div>
        </div>
      </article>`;
  }).join('\n\n');

  return `<section class="section" id="projects" data-projects>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${projects.eyebrow}</div>
        <h2 class="section-title">${projects.title}</h2>
      </div>
      <a href="${projects.githubUrl}" class="btn btn-ghost" data-hover target="_blank" rel="noopener">All projects on GitHub <span class="arr">→</span></a>
    </div>

    <div class="bento">
${cardsHtml}
    </div>
  </div>
</section>`;
}
