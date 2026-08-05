// Populate Murals page service cards, process steps, and CTA from the
// admin-editable /api/murals content.
(function () {
  const isEn = document.documentElement.lang === 'en';
  const suffix = isEn ? 'En' : '';

  function setText(id, value) {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setCardOrStep(selectorAttr, index, prefix, data) {
    const el = document.querySelector(`[${selectorAttr}="${index}"]`);
    if (!el) return;
    const title = data[`${prefix}${index}Title${suffix}`];
    const text = data[`${prefix}${index}Text${suffix}`];
    if (title) {
      const h3 = el.querySelector('h3');
      if (h3) h3.textContent = title;
    }
    if (text) {
      const p = el.querySelector('p');
      if (p) p.textContent = text;
    }
  }

  async function loadMurals() {
    try {
      const res = await fetch('/api/murals');
      if (!res.ok) return;
      const data = await res.json();

      setText('muralsHeaderEyebrow', data['headerEyebrow' + suffix]);
      setText('muralsHeaderHeading', data['headerHeading' + suffix]);
      setText('muralsHeaderLede', data['headerLede' + suffix]);

      for (let i = 1; i <= 3; i++) setCardOrStep('data-card', i, 'card', data);
      for (let i = 1; i <= 5; i++) setCardOrStep('data-step', i, 'step', data);

      setText('muralsCtaHeading', data['ctaHeading' + suffix]);
      setText('muralsCtaText', data['ctaText' + suffix]);
    } catch (error) {
      console.error('Error loading murals page content:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', loadMurals);
})();
