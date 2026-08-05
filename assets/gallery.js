function getImageUrl(filename) {
  if (!filename) return 'assets/images/placeholder.jpg';
  if (filename.startsWith('http')) return filename;
  if (/gallery-\d+\.\w+/.test(filename)) return 'https://pub-3de82c1349074b549aa0874178c4013f.r2.dev/' + filename; // Timestamp pattern = uploaded, serve from R2
  return 'assets/images/' + filename;
}

// Fetch and render gallery items from API
async function loadGallery() {
  try {
    const response = await fetch('/api/gallery');
    if (!response.ok) throw new Error('Failed to load gallery');
    const items = await response.json();

    const gallery = document.getElementById('galleryGrid');
    if (!gallery) return;

    gallery.innerHTML = items
      .slice(0, 6) // First 6 items for featured section
      .map(item => `
        <figure class="piece" data-lightbox data-caption="${item.caption}">
          <span class="tape">${item.tag}</span>
          <img src="${getImageUrl(item.image)}" alt="${item.caption}" loading="lazy">
          <figcaption>${item.caption}</figcaption>
        </figure>
      `).join('');

    initLightbox();
  } catch (error) {
    console.error('Error loading gallery:', error);
  }
}

// Load gallery items for the gallery page
async function loadFullGallery() {
  try {
    const response = await fetch('/api/gallery');
    if (!response.ok) throw new Error('Failed to load gallery');
    const items = await response.json();

    const gallery = document.getElementById('galleryGrid');
    if (!gallery) return;

    // First section - 7 items
    const section1 = items.slice(0, 7);
    gallery.innerHTML = section1
      .map(item => `
        <figure class="piece" data-lightbox data-caption="${item.caption}">
          <span class="tape">${item.tag}</span>
          <img src="${getImageUrl(item.image)}" alt="${item.caption}" loading="lazy">
          <figcaption>${item.caption}</figcaption>
        </figure>
      `).join('');

    // Feature break (item 19 - Fruit stairwell)
    const featureItem = items.find(i => i.id === '19');
    const featureBreak = document.querySelector('.feature-break');
    if (featureBreak && featureItem) {
      featureBreak.innerHTML = `
        <img src="${getImageUrl(featureItem.image)}" alt="${featureItem.caption}">
        <div class="feature-break-cap">
          <span class="tape">${featureItem.tag}</span>
          <p>${featureItem.caption}</p>
        </div>
      `;
      featureBreak.setAttribute('data-lightbox', '');
      featureBreak.setAttribute('data-caption', featureItem.caption);
    }

    // Second section - remaining items
    const section2Grid = document.getElementById('galleryGrid2');
    if (section2Grid) {
      const section2 = items.slice(7);
      section2Grid.innerHTML = section2
        .map(item => `
          <figure class="piece" data-lightbox data-caption="${item.caption}">
            <span class="tape">${item.tag}</span>
            <img src="${getImageUrl(item.image)}" alt="${item.caption}" loading="lazy">
            <figcaption>${item.caption}</figcaption>
          </figure>
        `).join('');
    }

    // Feature break 2 (item 20 - Two turtles)
    const featureItem2 = items.find(i => i.id === '20');
    const featureBreak2 = document.querySelector('.feature-break:nth-of-type(2)');
    if (featureBreak2 && featureItem2) {
      featureBreak2.innerHTML = `
        <img src="${getImageUrl(featureItem2.image)}" alt="${featureItem2.caption}">
        <div class="feature-break-cap">
          <span class="tape">${featureItem2.tag}</span>
          <p>${featureItem2.caption}</p>
        </div>
      `;
      featureBreak2.setAttribute('data-lightbox', '');
      featureBreak2.setAttribute('data-caption', featureItem2.caption);
    }

    initLightbox();
  } catch (error) {
    console.error('Error loading full gallery:', error);
  }
}

// Load hero images from API
async function loadHeroImages() {
  try {
    const response = await fetch('/api/hero');
    if (!response.ok) throw new Error('Failed to load hero images');
    const items = await response.json();

    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    heroBg.innerHTML = items
      .map(item => `<div class="slide" style="background-image:url('${getImageUrl(item.image)}')"></div>`)
      .join('');
  } catch (error) {
    console.error('Error loading hero images:', error);
  }
}

// Initialize lightbox (reuse existing functionality)
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('img');
      const caption = el.getAttribute('data-caption');
      if (img) {
        lightbox.querySelector('img').src = img.src;
        lightbox.querySelector('.cap').textContent = caption;
        lightbox.classList.add('active');
      }
    });
  });
}

// Load on page load
document.addEventListener('DOMContentLoaded', () => {
  loadHeroImages();
  if (document.getElementById('galleryGrid')) {
    if (document.getElementById('galleryGrid2')) {
      loadFullGallery();
    } else {
      loadGallery();
    }
  }
});
