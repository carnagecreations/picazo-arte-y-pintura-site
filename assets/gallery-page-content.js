// Populate the Gallery page's header (eyebrow/heading/lede) from the
// admin-editable /api/gallery-page content.
(function () {
  const isEn = document.documentElement.lang === 'en';
  const suffix = isEn ? 'En' : '';

  function setText(id, value) {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  async function loadGalleryPage() {
    try {
      const res = await fetch('/api/gallery-page');
      if (!res.ok) return;
      const data = await res.json();

      setText('galleryHeaderEyebrow', data['headerEyebrow' + suffix]);
      setText('galleryHeaderHeading', data['headerHeading' + suffix]);
      setText('galleryHeaderLede', data['headerLede' + suffix]);
    } catch (error) {
      console.error('Error loading gallery page header:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', loadGalleryPage);
})();
