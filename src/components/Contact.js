import { data } from '../data.js';

export function Contact() {
  const { contact } = data;

  const rowsHtml = contact.rows.map(r =>
    `        <a class="c-row" href="${r.href}" data-hover><span class="lbl">${r.label}</span><span class="val">${r.value}</span></a>`
  ).join('\n');

  const socialsHtml = contact.socials.map(s =>
    `          <a class="social" href="${s.href}" target="_blank" rel="noopener" data-hover>
            <div><div class="name">${s.name}</div><div class="sub">${s.sub}</div></div><span class="arr">→</span>
          </a>`
  ).join('\n');

  return `<section class="section" id="contact" data-contact>
  <div class="container">
    <div class="section-head reveal">
      <div>
        <div class="section-eyebrow">${contact.eyebrow}</div>
        <h2 class="section-title">${contact.title}</h2>
      </div>
    </div>

    <div class="contact-grid">
      <div class="reveal">
${rowsHtml}

        <div class="social-row">
${socialsHtml}
        </div>
      </div>

      <form class="form reveal" data-delay="1" id="contact-form" action="${contact.formAction}" method="POST">
        <div class="form-row">
          <div class="field"><input id="f-name" name="name" type="text" placeholder=" " required maxlength="100" /><label for="f-name">Name</label></div>
          <div class="field"><input id="f-email" name="email" type="email" placeholder=" " required maxlength="255" /><label for="f-email">Email</label></div>
        </div>
        <div class="field"><input id="f-subj" name="subject" type="text" placeholder=" " maxlength="120" /><label for="f-subj">Subject</label></div>
        <div class="field"><textarea id="f-msg" name="message" placeholder=" " required maxlength="2000"></textarea><label for="f-msg">Message</label></div>
        <button class="submit" type="submit" data-hover>Send message <span class="arr">→</span></button>
        <div class="form-msg" id="form-msg" role="status" aria-live="polite"></div>
      </form>
    </div>
  </div>
</section>`;
}
