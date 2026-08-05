export const onRequest = async (context) => {
  return new Response(JSON.stringify({ test: true, message: "API working" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
const INITIAL_HERO = [
  { image: "hero-banner.jpg", caption: "Muros que detienen el tráfico" },
  { image: "gallery-06-mural-bulldog-jordan.jpg", caption: "Lienzos que llenan un cuarto" },
  { image: "gallery-05-mural-bulldog-beyonce.jpg", caption: "Cada pieza, pintada a mano" },
  { image: "gallery-11-mural-vamos-mexico.jpg", caption: "En el lugar, a todo color" }
];

export const onRequest = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const method = request.method;
  const headers = { 'Content-Type': 'application/json' };

  try {
    if (pathname.includes('auth')) {
      const body = await request.json();
      return new Response(JSON.stringify({ success: body.password === 'picazo2024' }), {
        status: body.password === 'picazo2024' ? 200 : 401,
        headers
      });
    }

    if (pathname.includes('gallery') && method === 'GET') {
      const stored = await env.GALLERY.get('gallery');
      const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
      const parts = pathname.split('/');
      if (parts.length === 4) {
        const id = parts[3];
        const item = gallery.find(g => g.id === id);
        return new Response(JSON.stringify(item || { error: 'Not found' }), { status: item ? 200 : 404, headers });
      }
      return new Response(JSON.stringify(gallery), { headers });
    }

    if (pathname.includes('gallery') && method === 'POST') {
      const stored = await env.GALLERY.get('gallery');
      const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
      const body = await request.json();
      const newId = String(Math.max(...gallery.map(g => parseInt(g.id) || 0)) + 1);
      gallery.push({ id: newId, ...body });
      await env.GALLERY.put('gallery', JSON.stringify(gallery));
      return new Response(JSON.stringify({ id: newId, ...body }), { status: 201, headers });
    }

    if (pathname.includes('gallery') && method === 'PUT') {
      const id = pathname.split('/')[3];
      const stored = await env.GALLERY.get('gallery');
      const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
      const index = gallery.findIndex(g => g.id === id);
      if (index === -1) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
      const body = await request.json();
      gallery[index] = { ...gallery[index], ...body };
      await env.GALLERY.put('gallery', JSON.stringify(gallery));
      return new Response(JSON.stringify(gallery[index]), { headers });
    }

    if (pathname.includes('gallery') && method === 'DELETE') {
      const id = pathname.split('/')[3];
      const stored = await env.GALLERY.get('gallery');
      const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
      const index = gallery.findIndex(g => g.id === id);
      if (index === -1) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
      gallery.splice(index, 1);
      await env.GALLERY.put('gallery', JSON.stringify(gallery));
      return new Response(JSON.stringify({ success: true }), { headers });
    }

    if (pathname.includes('hero') && method === 'GET') {
      const stored = await env.GALLERY.get('hero');
      return new Response(JSON.stringify(stored ? JSON.parse(stored) : INITIAL_HERO), { headers });
    }

    if (pathname.includes('hero') && method === 'POST') {
      const stored = await env.GALLERY.get('hero');
      const hero = stored ? JSON.parse(stored) : INITIAL_HERO;
      const body = await request.json();
      if (body.image && body.caption) {
        hero.push(body);
        await env.GALLERY.put('hero', JSON.stringify(hero));
      }
      return new Response(JSON.stringify({ success: true }), { status: 201, headers });
    }

    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || 'Server error' }), { status: 500, headers });
  }
};
