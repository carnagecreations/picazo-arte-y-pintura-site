import { readFileSync } from 'fs';
import { join } from 'path';

let galleryData: any = null;

function loadGalleryData() {
  if (!galleryData) {
    try {
      const data = readFileSync(join(process.cwd(), 'data/gallery.json'), 'utf-8');
      galleryData = JSON.parse(data);
    } catch (error) {
      galleryData = { gallery: [], hero: [] };
    }
  }
  return galleryData;
}

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const method = request.method;

  // GET /api/gallery
  if (method === 'GET' && url.pathname === '/api/gallery') {
    const data = loadGalleryData();
    return new Response(JSON.stringify(data.gallery), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // GET /api/gallery/:id
  if (method === 'GET' && url.pathname.match(/^\/api\/gallery\/\d+$/)) {
    const id = url.pathname.split('/').pop();
    const data = loadGalleryData();
    const item = data.gallery.find((g: any) => g.id === id);
    if (item) {
      return new Response(JSON.stringify(item), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ error: 'Item not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // POST /api/gallery
  if (method === 'POST' && url.pathname === '/api/gallery') {
    const data = loadGalleryData();
    const body = await request.json();
    const { caption, captionEn, tag, tagEn, featured } = body;

    let newId = '1';
    if (data.gallery.length > 0) {
      const maxId = Math.max(...data.gallery.map((g: any) => parseInt(g.id) || 0));
      newId = String(maxId + 1);
    }

    const newItem = {
      id: newId,
      image: body.image,
      caption,
      captionEn,
      tag,
      tagEn,
      featured: featured === true
    };

    data.gallery.push(newItem);
    return new Response(JSON.stringify(newItem), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // PUT /api/gallery/:id
  if (method === 'PUT' && url.pathname.match(/^\/api\/gallery\/\d+$/)) {
    const id = url.pathname.split('/').pop();
    const data = loadGalleryData();
    const index = data.gallery.findIndex((g: any) => g.id === id);

    if (index === -1) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json();
    const { caption, captionEn, tag, tagEn, featured } = body;

    data.gallery[index] = {
      ...data.gallery[index],
      caption: caption || data.gallery[index].caption,
      captionEn: captionEn || data.gallery[index].captionEn,
      tag: tag || data.gallery[index].tag,
      tagEn: tagEn || data.gallery[index].tagEn,
      featured: featured !== undefined ? featured : data.gallery[index].featured
    };

    return new Response(JSON.stringify(data.gallery[index]), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // DELETE /api/gallery/:id
  if (method === 'DELETE' && url.pathname.match(/^\/api\/gallery\/\d+$/)) {
    const id = url.pathname.split('/').pop();
    const data = loadGalleryData();
    const index = data.gallery.findIndex((g: any) => g.id === id);

    if (index === -1) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const removed = data.gallery.splice(index, 1);
    return new Response(JSON.stringify({ success: true, removed: removed[0] }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
};
