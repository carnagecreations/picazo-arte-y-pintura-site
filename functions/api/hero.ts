const INITIAL_HERO = [
  { image: "hero-banner.jpg", caption: "Muros que detienen el tráfico" },
  { image: "gallery-06-mural-bulldog-jordan.jpg", caption: "Lienzos que llenan un cuarto" },
  { image: "gallery-05-mural-bulldog-beyonce.jpg", caption: "Cada pieza, pintada a mano" },
  { image: "gallery-11-mural-vamos-mexico.jpg", caption: "En el lugar, a todo color" }
];

interface Env {
  GALLERY: KVNamespace;
}

async function getHero(env: Env) {
  const stored = await env.GALLERY.get('hero');
  return stored ? JSON.parse(stored) : INITIAL_HERO;
}

async function saveHero(env: Env, data: any) {
  await env.GALLERY.put('hero', JSON.stringify(data));
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const method = request.method;

  // GET /api/hero
  if (method === 'GET') {
    const hero = await getHero(env);
    return new Response(JSON.stringify(hero), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // POST /api/hero
  if (method === 'POST') {
    try {
      const hero = await getHero(env);
      const body = await request.json() as any;
      const { caption, image } = body;

      if (image) {
        hero.push({ image, caption });
      } else if (body.existingImage) {
        const item = hero.find((h: any) => h.image === body.existingImage);
        if (item) {
          item.caption = caption;
        }
      }

      await saveHero(env, hero);
      return new Response(JSON.stringify({ success: true, items: hero }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to update hero images' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
};
