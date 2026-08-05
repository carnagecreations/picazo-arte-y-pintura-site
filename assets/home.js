// Populate homepage hero text and stats from the admin-editable /api/home content.
// Falls back to whatever is already in the HTML if the fetch fails, so the
// page still reads fine even if the API is unreachable.
(function () {
  const isEn = document.documentElement.lang === 'en';
  const suffix = isEn ? 'En' : '';

  function setText(id, value) {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  async function loadHome() {
    try {
      const res = await fetch('/api/home');
      if (!res.ok) return;
      const data = await res.json();

      setText('heroEyebrow', data['heroEyebrow' + suffix]);
      setText('heroHeading', data['heroHeading' + suffix]);
      setText('heroLede', data['heroLede' + suffix]);
      setText('heroCtaPrimary', data['heroCtaPrimary' + suffix]);
      setText('heroCtaSecondary', data['heroCtaSecondary' + suffix]);

      for (let i = 1; i <= 4; i++) {
        const numEl = document.querySelector(`[data-stat="${i}num"]`);
        const labelEl = document.querySelector(`[data-stat="${i}label"]`);
        if (numEl && data[`stat${i}Num`]) numEl.textContent = data[`stat${i}Num`];
        if (labelEl && data[`stat${i}Label${suffix}`]) labelEl.textContent = data[`stat${i}Label${suffix}`];
      }
    } catch (error) {
      console.error('Error loading home content:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', loadHome);
})();
