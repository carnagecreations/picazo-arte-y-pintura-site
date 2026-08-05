// Populate About page body copy from the admin-editable /api/about content.
(function () {
  const isEn = document.documentElement.lang === 'en';
  const suffix = isEn ? 'En' : '';

  function setText(id, value) {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  async function loadAbout() {
    try {
      const res = await fetch('/api/about');
      if (!res.ok) return;
      const data = await res.json();

      setText('aboutQuote', data['quote' + suffix]);
      setText('aboutQuoteFollowup', data['quoteFollowup' + suffix]);
      setText('aboutProcessCaption1', data['processCaption1' + suffix]);
      setText('aboutProcessCaption2', data['processCaption2' + suffix]);
      setText('aboutProcessCaption3', data['processCaption3' + suffix]);
      setText('aboutWhereHeading', data['whereHeading' + suffix]);
      setText('aboutWhereText', data['whereText' + suffix]);
      setText('aboutCtaHeading', data['ctaHeading' + suffix]);
      setText('aboutCtaText', data['ctaText' + suffix]);
    } catch (error) {
      console.error('Error loading about page content:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', loadAbout);
})();
