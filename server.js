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
