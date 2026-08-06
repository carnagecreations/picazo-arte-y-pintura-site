// Populate site-wide contact/social info (footer + contact page) from the
// admin-editable /api/settings content. Runs on every page.
(function () {
  const isEn = document.documentElement.lang === 'en';
  const suffix = isEn ? 'En' : '';

  function setText(id, value) {
    if (!value) return;
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  async function loadSettings() {
    try {
      const res = await fetch('/api/settings');
      if (!res.ok) return;
      const data = await res.json();

      setText('footerTagline', data['footerTagline' + suffix]);

      const fbLinks = ['footerFacebookLink', 'contactFacebookLink'];
      fbLinks.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (data.facebookUrl) el.href = data.facebookUrl;
        if (data.facebookLabel) el.textContent = data.facebookLabel;
      });

      const phoneEl = document.getElementById('contactPhoneLink');
      if (phoneEl) {
        if (data.phoneHref) phoneEl.href = 'tel:' + data.phoneHref;
        if (data.phone) phoneEl.textContent = data.phone;
      }

      setText('contactServiceArea', data['contactServiceArea' + suffix]);
      setText('contactFastestReply', data['contactFastestReply' + suffix]);

      setText('navCta', data['navCtaLabel' + suffix]);
      setText('navCtaMobile', data['navCtaLabel' + suffix]);

      setText('footerTag1', data.footerTag1);
      setText('footerTag2', data.footerTag2);
      setText('footerTag3', data.footerTag3);
    } catch (error) {
      console.error('Error loading site settings:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', loadSettings);
})();
