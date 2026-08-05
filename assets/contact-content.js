// Populate the Contact page's header and form labels from the
// admin-editable /api/contact content.
(function () {
  const isEn = document.documentElement.lang === 'en';
  const suffix = isEn ? 'En' : '';

  function setText(id, value) {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  async function loadContact() {
    try {
      const res = await fetch('/api/contact');
      if (!res.ok) return;
      const data = await res.json();

      setText('contactHeaderEyebrow', data['headerEyebrow' + suffix]);
      setText('contactHeaderHeading', data['headerHeading' + suffix]);
      setText('contactHeaderLede', data['headerLede' + suffix]);
      setText('contactFormTitle', data['formTitle' + suffix]);
      setText('contactLabelName', data['labelName' + suffix]);
      setText('contactLabelEmail', data['labelEmail' + suffix]);
      setText('contactLabelPhone', data['labelPhone' + suffix]);
      setText('contactLabelProject', data['labelProject' + suffix]);
      setText('contactLabelMessage', data['labelMessage' + suffix]);
      setText('contactOptionMural', data['optionMural' + suffix]);
      setText('contactOptionPortrait', data['optionPortrait' + suffix]);
      setText('contactOptionCanvas', data['optionCanvas' + suffix]);
      setText('contactOptionUnsure', data['optionUnsure' + suffix]);
      setText('contactSubmitLabel', data['submitLabel' + suffix]);
    } catch (error) {
      console.error('Error loading contact page content:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', loadContact);
})();
