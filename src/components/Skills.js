import { data } from '../data.js';

export function Skills() {
  const { skills } = data;

  const groupsHtml = skills.groups.map(group => {
    const delayAttr = group.delay ? ` data-delay="${group.delay}"` : '';
    const skillsHtml = group.skills.map(skill =>
      `        <div class="skill" data-level="${skill.level}" style="--w:${skill.level}%"><div class="skill-row"><b>${skill.name}</b><span>${skill.level}</span></div><div class="bar"><i></i></div></div>`
    ).join('\n');

    return `      <div class="skill-group reveal"${delayAttr}>
        <h3>${group.name}</h3>
${skillsHtml}
      </div>`;
  }).join('\n');

  const marqueeSpans = skills.marqueeItems.map(item => `<span>${item}</span>`).join('');
  const marqueeTrack = `${marqueeSpans}\n        ${marqueeSpans}`;

  return `<section class="section" id="skills">
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${skills.eyebrow}</div>
        <h2 class="section-title">${skills.title}</h2>
      </div>
    </div>
    <div class="skills-grid">
${groupsHtml}
    </div>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${marqueeSpans}
        ${marqueeSpans}
      </div>
    </div>
  </div>
</section>`;
}
