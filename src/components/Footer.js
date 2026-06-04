import { data } from '../data.js';

export function Footer() {
  const { footer } = data;

  const linksHtml = footer.links.map(l =>
    `<a href="${l.href}" data-hover>${l.text}</a>`
  ).join('\n      ');

  return `<footer>
  <div class="container foot">
    <div>© <span id="yr"></span> ${footer.name} — built from scratch.</div>
    <div class="foot-links">
      ${linksHtml}
    </div>
    <a class="resume" href="${footer.resumeHref}" download data-hover>Download résumé ↓</a>
  </div>
</footer>`;
}
