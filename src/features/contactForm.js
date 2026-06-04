/**
 * Contact form submit handler with Formspree integration.
 */
export function initContactForm() {
  const form = document.getElementById('contact-form');
  const msg  = document.getElementById('form-msg');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.submit');
    btn.disabled = true;
    msg.className = 'form-msg';
    msg.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        msg.className = 'form-msg ok';
        msg.textContent = 'Message sent — talk soon.';
      } else {
        const data = await res.json().catch(() => ({}));
        msg.className = 'form-msg err';
        msg.textContent = data?.errors?.[0]?.message || 'Something went wrong. Try email instead.';
      }
    } catch {
      msg.className = 'form-msg err';
      msg.textContent = 'Network error. Try email instead.';
    } finally {
      btn.disabled = false;
    }
  });
}

/**
 * Sets the footer year span to the current year.
 */
export function initFooterYear() {
  document.getElementById('yr').textContent = new Date().getFullYear();
}
