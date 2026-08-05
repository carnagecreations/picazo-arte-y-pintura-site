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
