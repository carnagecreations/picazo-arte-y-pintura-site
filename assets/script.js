// Picazo Arte y Pintura — shared behavior

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle (full-screen editorial takeover)
  var menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    var setNav = function (open) {
      document.body.classList.toggle('nav-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuBtn.addEventListener('click', function () {
      setNav(!document.body.classList.contains('nav-open'));
    });
    document.querySelectorAll('.mobile-panel a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
  }

  // 16. Header gains a soft shadow once the page has scrolled, for depth
  var header = document.querySelector('header.site');
  // 17. Floating "back to top" button, fades in once you've scrolled a bit
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', document.documentElement.lang === 'es' ? 'Volver arriba' : 'Back to top');
  toTop.innerHTML = '&uarr;';
  document.body.appendChild(toTop);
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  function onScroll() {
    var scrolled = window.scrollY > 40;
    if (header) header.classList.toggle('is-scrolled', scrolled);
    toTop.classList.toggle('visible', window.scrollY > 600);
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 18. A small Facebook glyph in front of the footer's Facebook link
  var fbLink = document.querySelector('.footer-col a[href*="facebook.com"]');
  if (fbLink && !fbLink.querySelector('svg')) {
    fbLink.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="margin-right:7px; vertical-align:-2px;">' +
      '<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/>' +
      '</svg>' + fbLink.textContent;
  }

  // Slow, gentle fade-in on scroll for editorial sections. Never applied to
  // the CTA band — that copy is the whole point of the section and must
  // never be at risk of staying invisible if an observer misfires.
  var revealTargets = document.querySelectorAll(
    'section:not(.hero):not(.cta-band) > .wrap > *, .piece, .step, .card, .stat'
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

    // Safety net: whatever the reason, reveal content never stays hidden.
    // Anything still waiting after a few seconds is forced visible.
    setTimeout(function () {
      revealTargets.forEach(function (el) { el.classList.add('in-view'); });
    }, 2500);
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

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isEs = document.documentElement.lang === 'es';

  // Custom gallery cursor: a small "view" pill that follows the pointer
  // while it hovers a piece, instead of showing the native cursor
  var canHover = window.matchMedia && window.matchMedia('(hover:hover)').matches;
  if (canHover && !reduceMotion && document.querySelector('.piece')) {
    document.body.classList.add('has-gallery-cursor');
    var cursor = document.createElement('div');
    cursor.className = 'gallery-cursor';
    cursor.textContent = isEs ? 'Ver' : 'View';
    document.body.appendChild(cursor);
    var cx = 0, cy = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; });
    (function raf() {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      cursor.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll('.piece').forEach(function (piece) {
      piece.addEventListener('mouseenter', function () { cursor.classList.add('visible'); });
      piece.addEventListener('mouseleave', function () { cursor.classList.remove('visible'); });
    });
  }

  // Stat numbers count up from zero once they scroll into view
  document.querySelectorAll('.stat .num').forEach(function (el) {
    var raw = el.textContent.trim();
    var match = raw.match(/[\d.]+/);
    if (!match) return;
    var target = parseFloat(match[0]);
    var prefix = raw.slice(0, match.index);
    var suffix = raw.slice(match.index + match[0].length);
    var decimals = (match[0].split('.')[1] || '').length;
    if (reduceMotion) return;
    var counted = false;
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted) {
          counted = true;
          var start = null;
          var duration = 1400;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = raw;
          }
          requestAnimationFrame(step);
          io2.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io2.observe(el);
  });

  // Kill the loading shimmer on framed images once they've actually loaded
  document.querySelectorAll('.piece img, .split img').forEach(function (img) {
    if (img.complete) img.classList.add('is-loaded');
    else img.addEventListener('load', function () { img.classList.add('is-loaded'); });
  });

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
