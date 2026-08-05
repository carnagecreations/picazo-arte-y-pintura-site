import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const upload = multer({
  dest: 'assets/images/',
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

const DATA_FILE = join(__dirname, 'data', 'gallery.json');

function readGalleryData() {
  try {
    const data = readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading gallery data:', error);
    return { gallery: [], hero: [] };
  }
}

function writeGalleryData(data) {
  try {
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing gallery data:', error);
    return false;
  }
}

// API Routes
app.get('/api/gallery', (req, res) => {
  const data = readGalleryData();
  res.json(data.gallery);
});

app.get('/api/hero', (req, res) => {
  const data = readGalleryData();
  res.json(data.hero);
});

app.post('/api/hero', upload.single('image'), (req, res) => {
  try {
    const data = readGalleryData();
    const entry = {
      caption: req.body.caption,
      image: req.file ? req.file.filename : req.body.image
    };
    if (entry.image && entry.caption) {
      data.hero.push(entry);
      writeGalleryData(data);
    }
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/hero/:index', upload.single('image'), (req, res) => {
  try {
    const data = readGalleryData();
    const idx = parseInt(req.params.index, 10);
    if (isNaN(idx) || idx < 0 || idx >= data.hero.length) {
      return res.status(404).json({ error: 'Not found' });
    }
    data.hero[idx] = {
      ...data.hero[idx],
      caption: req.body.caption || data.hero[idx].caption,
      image: req.file ? req.file.filename : (req.body.image || data.hero[idx].image)
    };
    writeGalleryData(data);
    res.json(data.hero[idx]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/hero/:index', (req, res) => {
  try {
    const data = readGalleryData();
    const idx = parseInt(req.params.index, 10);
    if (isNaN(idx) || idx < 0 || idx >= data.hero.length) {
      return res.status(404).json({ error: 'Not found' });
    }
    const removed = data.hero.splice(idx, 1);
    writeGalleryData(data);
    res.json({ success: true, removed: removed[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const INITIAL_HOME = {
  heroEyebrow: "Yuma, AZ · Artista Visual",
  heroEyebrowEn: "Yuma, AZ · Visual Artist",
  heroHeading: "Muros que detienen el tráfico. Lienzos que llenan un cuarto.",
  heroHeadingEn: "Walls that stop traffic. Canvases that hold a room.",
  heroLede: "Picazo Arte y Pintura pinta murales a gran escala, retratos personalizados y obras en lienzo para casas, restaurantes y negocios en Yuma, Somerton y la región fronteriza — cada pieza pintada a mano, en el lugar, a todo color.",
  heroLedeEn: "Picazo Arte y Pintura paints large-scale murals, custom portraits, and canvas work for homes, restaurants, and businesses across Yuma, Somerton, and the border region — every piece hand-painted, on-site, in color.",
  heroCtaPrimary: "Ver la Galería",
  heroCtaPrimaryEn: "View the Gallery",
  heroCtaSecondary: "Solicitar un Encargo",
  heroCtaSecondaryEn: "Start a Commission",
  stat1Num: "3.3K+",
  stat1Label: "Seguidores y creciendo",
  stat1LabelEn: "Followers & growing",
  stat2Num: "2",
  stat2Label: "Ciudades pintadas — Yuma y Somerton, AZ",
  stat2LabelEn: "Cities painted — Yuma & Somerton, AZ",
  stat3Num: "100%",
  stat3Label: "Pintado a mano, en el lugar",
  stat3LabelEn: "Hand-painted, on-site",
  stat4Num: "♥",
  stat4Label: "Cada muro hecho con cariño para el cliente",
  stat4LabelEn: "Every wall done with love for the client"
};

app.get('/api/home', (req, res) => {
  const data = readGalleryData();
  res.json({ ...INITIAL_HOME, ...(data.home || {}) });
});

app.put('/api/home', (req, res) => {
  const data = readGalleryData();
  data.home = { ...INITIAL_HOME, ...(data.home || {}), ...req.body };
  writeGalleryData(data);
  res.json(data.home);
});

const INITIAL_SETTINGS = {
  phone: "(928) 502-0226",
  phoneHref: "+19285020226",
  facebookUrl: "https://www.facebook.com/PicazoArteOficial/",
  facebookLabel: "facebook.com/PicazoArteOficial",
  footerTagline: "Artista visual y muralista, pintando Yuma, Somerton y la región fronteriza a todo color.",
  footerTaglineEn: "Visual artist & muralist painting Yuma, Somerton & the border region in color.",
  contactServiceArea: "Yuma, AZ · Somerton, AZ · San Luis / región fronteriza",
  contactServiceAreaEn: "Yuma, AZ · Somerton, AZ · San Luis / border region",
  contactFastestReply: "Respuesta más rápida: llama/envía un mensaje de texto al número de arriba, o escribe por Facebook.",
  contactFastestReplyEn: "Fastest reply: call/text the number above, or message on Facebook."
};

app.get('/api/settings', (req, res) => {
  const data = readGalleryData();
  res.json({ ...INITIAL_SETTINGS, ...(data.settings || {}) });
});

app.put('/api/settings', (req, res) => {
  const data = readGalleryData();
  data.settings = { ...INITIAL_SETTINGS, ...(data.settings || {}), ...req.body };
  writeGalleryData(data);
  res.json(data.settings);
});

const INITIAL_GALLERY_PAGE = {
  headerEyebrow: "La Galería",
  headerEyebrowEn: "The Gallery",
  headerHeading: "Cada muro, cada lienzo, uno a la vez",
  headerHeadingEn: "Every wall, every canvas, one at a time",
  headerLede: "Un registro continuo de murales, retratos y encargos en lienzo por Yuma y Somerton, AZ. Toca cualquier pieza para verla de cerca.",
  headerLedeEn: "A running record of murals, portraits, and canvas commissions across Yuma and Somerton, AZ. Tap any piece for a closer look."
};

app.get('/api/gallery-page', (req, res) => {
  const data = readGalleryData();
  res.json({ ...INITIAL_GALLERY_PAGE, ...(data.galleryPage || {}) });
});

app.put('/api/gallery-page', (req, res) => {
  const data = readGalleryData();
  data.galleryPage = { ...INITIAL_GALLERY_PAGE, ...(data.galleryPage || {}), ...req.body };
  writeGalleryData(data);
  res.json(data.galleryPage);
});

const INITIAL_CONTACT = {
  headerEyebrow: "Contacto",
  headerEyebrowEn: "Contact",
  headerHeading: "Pongamos color en tu muro",
  headerHeadingEn: "Let's put color on your wall",
  headerLede: "Cuéntame algunos detalles del espacio y la idea — las fotos ayudan, pero no son necesarias para empezar.",
  headerLedeEn: "Send a few details about the space and the idea — photos help, but aren't required to start.",
  formTitle: "Contáctame directamente",
  formTitleEn: "Reach out directly",
  labelName: "Nombre",
  labelNameEn: "Name",
  labelEmail: "Correo",
  labelEmailEn: "Email",
  labelPhone: "Teléfono (opcional)",
  labelPhoneEn: "Phone (optional)",
  labelProject: "Tipo de Proyecto",
  labelProjectEn: "Project Type",
  labelMessage: "Cuéntame del espacio y la idea",
  labelMessageEn: "Tell me about the space & the idea",
  optionMural: "Mural",
  optionMuralEn: "Mural",
  optionPortrait: "Retrato de Mascota / Personaje",
  optionPortraitEn: "Pet / Character Portrait",
  optionCanvas: "Arte en Lienzo",
  optionCanvasEn: "Canvas Art",
  optionUnsure: "Aún no estoy seguro",
  optionUnsureEn: "Not sure yet",
  submitLabel: "Enviar Solicitud",
  submitLabelEn: "Send Inquiry"
};

app.get('/api/contact', (req, res) => {
  const data = readGalleryData();
  res.json({ ...INITIAL_CONTACT, ...(data.contact || {}) });
});

app.put('/api/contact', (req, res) => {
  const data = readGalleryData();
  data.contact = { ...INITIAL_CONTACT, ...(data.contact || {}), ...req.body };
  writeGalleryData(data);
  res.json(data.contact);
});

const INITIAL_ABOUT = {
  headerEyebrow: "Sobre Mí",
  headerEyebrowEn: "About",
  headerHeading: "Picazo — Artista Visual",
  headerHeadingEn: "Picazo — Visual Artist",
  headerLede: "Pintando Yuma, Somerton y la región fronteriza, un muro y un lienzo a la vez.",
  headerLedeEn: "Painting Yuma, Somerton, and the border region, one wall and one canvas at a time.",
  quote: "“Amo el arte y tengo la firme convicción de que todo lo visual que te rodea puede influir negativa y positivamente en tu interior. Debemos dar esa importancia a todos aquellos a quienes queremos expresarles amor, alegría y esperanza de manera visual.”",
  quoteEn: "“I love art, and I firmly believe that everything visual around you can influence you — for better or worse. We owe it to everyone we want to reach to express love, joy, and hope visually.”",
  quoteFollowup: "Esa convicción se nota en cada muro que Picazo toma — ya sea la fachada completa de un edificio, una escena tropical para la terraza de un restaurante, o el retrato de la mascota de alguien. Arte contemporáneo en lienzo, murales personalizados, y todo lo demás, siempre pintado a mano, siempre en el lugar.",
  quoteFollowupEn: "That belief shows up in every wall Picazo takes on — whether it's a full building exterior, a tropical scene for a restaurant patio, or a single portrait of somebody's dog. Contemporary work on canvas, customized murals, and everything in between, always hand-painted, always on-site.",
  processCaption1: "Cada pieza empieza como un dibujo de línea sobre el muro — el contorno primero, un color a la vez después.",
  processCaption1En: "Every piece starts as a line drawing on the wall — outline first, one color at a time after.",
  processCaption2: "Algunos muros toman forma más despacio — el contorno primero, luego el color poco a poco en varias sesiones.",
  processCaption2En: "Some walls take shape slower — outline first, then color piece by piece over several sessions.",
  processCaption3: "Capa por capa, el color se construye hasta que todo el muro cobra vida.",
  processCaption3En: "Layer by layer, the color builds up until the whole wall comes alive.",
  whereHeading: "Sirviendo a Yuma y la región fronteriza",
  whereHeadingEn: "Serving Yuma & the border region",
  whereText: "Murales por Yuma, AZ y Somerton, AZ, con piezas comunitarias que llegan hasta el cruce fronterizo de San Luis — además de encargos en lienzo que se envían o cuelgan en cualquier lugar.",
  whereTextEn: "Murals across Yuma, AZ and Somerton, AZ, with community pieces reaching toward the San Luis border crossing — plus canvas commissions that ship or hang anywhere.",
  ctaHeading: "¿Quieres ver el proceso de cerca?",
  ctaHeadingEn: "Want to see the process up close?",
  ctaText: "Mira cómo se arma un encargo, desde el primer boceto hasta la revelación final.",
  ctaTextEn: "Check out how a commission comes together, from first sketch to final reveal."
};

app.get('/api/about', (req, res) => {
  const data = readGalleryData();
  res.json({ ...INITIAL_ABOUT, ...(data.about || {}) });
});

app.put('/api/about', (req, res) => {
  const data = readGalleryData();
  data.about = { ...INITIAL_ABOUT, ...(data.about || {}), ...req.body };
  writeGalleryData(data);
  res.json(data.about);
});

const INITIAL_MURALS = {
  headerEyebrow: "Murales y Encargos",
  headerEyebrowEn: "Murals & Commissions",
  headerHeading: "De muro vacío a obra terminada",
  headerHeadingEn: "From bare wall to finished piece",
  headerLede: "Cada encargo empieza como una conversación y termina en un muro (o un lienzo) que nadie pasa de largo sin mirar dos veces.",
  headerLedeEn: "Every commission starts as a conversation and ends with a wall (or a canvas) nobody walks past without looking twice.",
  card1Title: "Murales a Gran Escala",
  card1TitleEn: "Large-Scale Murals",
  card1Text: "Exteriores, interiores, edificios completos. Restaurantes, fachadas, muros comunitarios — pintados en el lugar, hechos para durar a la intemperie.",
  card1TextEn: "Exteriors, interiors, full building wraps. Restaurants, storefronts, community walls — painted on-site, built to hold up outdoors.",
  card2Title: "Retratos de Mascotas y Personajes",
  card2TitleEn: "Pet & Character Portraits",
  card2Text: "Una mascota querida junto a su dueño, un personaje personalizado cobrando vida, un retrato pintado en un muro que es solo tuyo.",
  card2TextEn: "A beloved pet alongside its owner, a custom character brought to life, a portrait painted on a wall that's just yours.",
  card3Title: "Lienzo y Arte Personalizado",
  card3TitleEn: "Canvas & Custom Art",
  card3Text: "Piezas originales en lienzo para casa u oficina, del tamaño y estilo que necesita el espacio y la historia que quieres contar.",
  card3TextEn: "Original canvas pieces for a home or office, sized and styled to the space and the story you want it to tell.",
  step1Title: "Consulta",
  step1TitleEn: "Consultation",
  step1Text: "Hablamos del espacio, el presupuesto y lo que quieres que diga la obra — en persona o por teléfono.",
  step1TextEn: "We talk through the space, the budget, and what you want the piece to say — in person or over the phone.",
  step2Title: "Concepto y Boceto",
  step2TitleEn: "Concept & Sketch",
  step2Text: "Recibes un boceto o concepto de color antes de que la pintura toque el muro, para que no haya sorpresas.",
  step2TextEn: "You get a sketch or color concept before any paint touches the wall, so there are no surprises.",
  step3Title: "Preparación del Muro",
  step3TitleEn: "Wall Prep",
  step3Text: "La superficie se limpia, se prepara y se mide para que la obra encaje exactamente como se planeó.",
  step3TextEn: "Surface is cleaned, primed, and measured out so the piece fits the space exactly as planned.",
  step4Title: "Días de Pintura",
  step4TitleEn: "Painting Days",
  step4Text: "El mural se pinta por etapas — puedes pasar a ver cómo va tomando forma.",
  step4TextEn: "The mural goes up in stages — you're welcome to stop by and watch it come together.",
  step5Title: "Revelación y Fotos",
  step5TitleEn: "Reveal & Photos",
  step5Text: "Recorrido final, retoques si hacen falta, y un set completo de fotos para tu propio uso.",
  step5TextEn: "Final walkthrough, touch-ups if needed, and a full set of photos for your own use.",
  ctaHeading: "¿Listo para hablar de tu muro?",
  ctaHeadingEn: "Ready to talk about your wall?",
  ctaText: "Trae una foto del espacio y una idea aproximada — con eso es más que suficiente para empezar.",
  ctaTextEn: "Bring a photo of the space and a rough idea — that's plenty to start with."
};

app.get('/api/murals', (req, res) => {
  const data = readGalleryData();
  res.json({ ...INITIAL_MURALS, ...(data.murals || {}) });
});

app.put('/api/murals', (req, res) => {
  const data = readGalleryData();
  data.murals = { ...INITIAL_MURALS, ...(data.murals || {}), ...req.body };
  writeGalleryData(data);
  res.json(data.murals);
});

app.get('/api/gallery/:id', (req, res) => {
  const data = readGalleryData();
  const item = data.gallery.find(g => g.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.post('/api/gallery', upload.single('image'), (req, res) => {
  try {
    const data = readGalleryData();
    const { caption, captionEn, tag, tagEn, featured } = req.body;

    let newId = '1';
    if (data.gallery.length > 0) {
      const maxId = Math.max(...data.gallery.map(g => parseInt(g.id) || 0));
      newId = String(maxId + 1);
    }

    const newItem = {
      id: newId,
      image: req.file ? req.file.filename : req.body.image,
      caption,
      captionEn,
      tag,
      tagEn,
      featured: featured === 'true' || featured === true
    };

    data.gallery.push(newItem);
    writeGalleryData(data);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/gallery/:id', upload.single('image'), (req, res) => {
  try {
    const data = readGalleryData();
    const index = data.gallery.findIndex(g => g.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const { caption, captionEn, tag, tagEn, featured } = req.body;

    data.gallery[index] = {
      ...data.gallery[index],
      image: req.file ? req.file.filename : (req.body.image || data.gallery[index].image),
      caption: caption || data.gallery[index].caption,
      captionEn: captionEn || data.gallery[index].captionEn,
      tag: tag || data.gallery[index].tag,
      tagEn: tagEn || data.gallery[index].tagEn,
      featured: featured !== undefined ? (featured === 'true' || featured === true) : data.gallery[index].featured
    };

    writeGalleryData(data);
    res.json(data.gallery[index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/gallery/:id', (req, res) => {
  try {
    const data = readGalleryData();
    const index = data.gallery.findIndex(g => g.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const removed = data.gallery.splice(index, 1);
    writeGalleryData(data);
    res.json({ success: true, removed: removed[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin password check (simple security)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'picazo2024';

app.post('/api/auth', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Admin dashboard at http://localhost:${PORT}/admin`);
});
