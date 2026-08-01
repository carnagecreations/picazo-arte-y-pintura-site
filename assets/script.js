// Picazo Arte y Pintura — shared behavior

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
      var open = document.body.classList.contains('nav-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Slow, gentle fade-in on scroll for editorial sections
  var revealTargets = document.querySelectorAll(
    'section:not(.hero) > .wrap > *, .piece, .step, .card, .stat'
  );
  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  // Gallery lightbox
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCap = lightbox.querySelector('.cap');
    var closeBtn = lightbox.querySelector('.close');

    document.querySelectorAll('[data-lightbox]').forEach(function (piece) {
      piece.addEventListener('click', function (e) {
        e.preventDefault();
        var img = piece.querySelector('img');
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCap.textContent = piece.getAttribute('data-caption') || '';
        lightbox.classList.add('open');
      });
    });

    function closeLb() { lightbox.classList.remove('open'); }
    closeBtn.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLb();
    });
  }

  // Contact form -> SMS handoff (static-site friendly; swap for a
  // real form endpoint once one is wired up)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var phone = form.querySelector('[name="phone"]') ? form.querySelector('[name="phone"]').value.trim() : '';
      var project = form.querySelector('[name="project"]') ? form.querySelector('[name="project"]').value : '';
      var message = form.querySelector('[name="message"]').value.trim();

      var bodyLines = [
        'New project inquiry — ' + name,
        'Email: ' + email,
        phone ? 'Phone: ' + phone : null,
        project ? 'Project type: ' + project : null,
        '',
        message
      ].filter(Boolean);
      var body = encodeURIComponent(bodyLines.join('\n'));

      window.location.href = 'sms:+19285020226?body=' + body;
    });
  }
});
