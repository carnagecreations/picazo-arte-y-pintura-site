// Hardcoded initial gallery data
const INITIAL_GALLERY = [
  {
    id: "01",
    image: "gallery-01-mural-building-aerial.jpg",
    caption: "Repintado de edificio completo — Restaurante La Malquerida",
    captionEn: "Full building repaint — La Malquerida Restaurant",
    tag: "Murales",
    tagEn: "Murals",
    featured: true
  },
  {
    id: "02",
    image: "gallery-02-mural-wave-window.jpg",
    caption: "Mural de ojo-oceánico en ventana",
    captionEn: "Ocean eye mural in window",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "03",
    image: "gallery-03-mural-octopus-bw.jpg",
    caption: "Tortuga marina, muro de block",
    captionEn: "Sea turtle, block wall",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "04",
    image: "gallery-04-mural-fish-teal.jpg",
    caption: "Pez turquesa, interior de bodega",
    captionEn: "Teal fish, warehouse interior",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "05",
    image: "gallery-05-mural-bulldog-beyonce.jpg",
    caption: "Mural de iguana a color, contenedor",
    captionEn: "Colorful iguana mural, container",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "06",
    image: "gallery-06-mural-bulldog-jordan.jpg",
    caption: "Mural de medusa, interior de restaurante",
    captionEn: "Jellyfish mural, restaurant interior",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "07",
    image: "gallery-07-mural-madison-portrait.jpg",
    caption: "Abuela y chihuahua, retrato personalizado",
    captionEn: "Grandma and chihuahua, custom portrait",
    tag: "Retratos de Mascotas y Personajes",
    tagEn: "Pet & Character Portraits"
  },
  {
    id: "08",
    image: "gallery-08-mural-madison-text.jpg",
    caption: "Astronauta en el espacio, mural de techo",
    captionEn: "Astronaut in space, ceiling mural",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "09",
    image: "gallery-09-mural-parrot-flowers.jpg",
    caption: "Loro tropical y flores",
    captionEn: "Tropical parrot and flowers",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "10",
    image: "gallery-10-mural-toucan.jpg",
    caption: "Guacamaya y mariposa monarca, mural tropical",
    captionEn: "Macaw and monarch butterfly, tropical mural",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "11",
    image: "gallery-11-mural-vamos-mexico.jpg",
    caption: "Mural de retrato y flores — Tacos Campas, Somerton",
    captionEn: "Portrait and flowers mural — Tacos Campas, Somerton",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "14",
    image: "gallery-14-mural-jungle-interior.jpg",
    caption: "Cascada en la selva, mural interior",
    captionEn: "Jungle waterfall, interior mural",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "15",
    image: "gallery-15-mural-desert-walkway.jpg",
    caption: "Escalones pintados a mano con olas, entrada",
    captionEn: "Hand-painted steps with waves, entryway",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "16",
    image: "gallery-16-mural-bird-branch.jpg",
    caption: "Ave cantora en una rama",
    captionEn: "Songbird on a branch",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "17",
    image: "gallery-17-mural-butterfly-wings.jpg",
    caption: "Alas de mariposa monarca, mural interactivo",
    captionEn: "Monarch butterfly wings, interactive mural",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "18",
    image: "gallery-18-mural-bathroom-abstract.jpg",
    caption: "Mural abstracto de hojas, baño",
    captionEn: "Abstract leaf mural, bathroom",
    tag: "Murales",
    tagEn: "Murals"
  },
  {
    id: "19",
    image: "gallery-19-mural-fruit-stairwell.jpg",
    caption: "Arándanos, coco y limón, mural de escalera",
    captionEn: "Blueberries, coconut and lemon, stairwell mural",
    tag: "Murales",
    tagEn: "Murals",
    featured: true
  },
  {
    id: "20",
    image: "gallery-20-mural-turtles-duo-wide.jpg",
    caption: "Dos tortugas marinas, mural de block al aire libre",
    captionEn: "Two sea turtles, outdoor block mural",
    tag: "Murales",
    tagEn: "Murals",
    featured: true
  },
  {
    id: "21",
    image: "gallery-21-mural-turtle-progress.jpg",
    caption: "Tortuga marina en proceso, boceto y color",
    captionEn: "Sea turtle in progress, sketch and color",
    tag: "Murales",
    tagEn: "Murals"
  }
];

interface Env {
  GALLERY: KVNamespace;
}

const INITIAL_HERO = [
  { image: "hero-banner.jpg", caption: "Muros que detienen el tráfico" },
  { image: "gallery-06-mural-bulldog-jordan.jpg", caption: "Lienzos que llenan un cuarto" },
  { image: "gallery-05-mural-bulldog-beyonce.jpg", caption: "Cada pieza, pintada a mano" },
  { image: "gallery-11-mural-vamos-mexico.jpg", caption: "En el lugar, a todo color" }
];

async function getGallery(env: Env) {
  const stored = await env.GALLERY.get('gallery');
  return stored ? JSON.parse(stored) : INITIAL_GALLERY;
}

async function saveGallery(env: Env, data: any) {
  await env.GALLERY.put('gallery', JSON.stringify(data));
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
  const url = new URL(request.url);
  const method = request.method;

  // GET /api/gallery
  if (method === 'GET' && url.pathname === '/api/gallery') {
    const gallery = await getGallery(env);
    return new Response(JSON.stringify(gallery), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // GET /api/hero
  if (method === 'GET' && url.pathname === '/api/hero') {
    const hero = await getHero(env);
    return new Response(JSON.stringify(hero), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // POST /api/hero
  if (method === 'POST' && url.pathname === '/api/hero') {
    const hero = await getHero(env);
    const body = await request.json() as any;
    const { caption, image } = body;

    if (image) {
      hero.push({ image, caption });
    } else {
      // Update caption for existing item
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
  }

  // GET /api/gallery/:id
  if (method === 'GET' && url.pathname.match(/^\/api\/gallery\/\d+$/)) {
    const id = url.pathname.split('/').pop();
    const gallery = await getGallery(env);
    const item = gallery.find((g: any) => g.id === id);
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
    const gallery = await getGallery(env);
    const body = await request.json() as any;
    const { caption, captionEn, tag, tagEn, featured, image } = body;

    let newId = '1';
    if (gallery.length > 0) {
      const maxId = Math.max(...gallery.map((g: any) => parseInt(g.id) || 0));
      newId = String(maxId + 1);
    }

    const newItem = {
      id: newId,
      image: image || `gallery-${newId}.jpg`,
      caption,
      captionEn,
      tag,
      tagEn,
      featured: featured === true
    };

    gallery.push(newItem);
    await saveGallery(env, gallery);
    return new Response(JSON.stringify(newItem), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // PUT /api/gallery/:id
  if (method === 'PUT' && url.pathname.match(/^\/api\/gallery\/\d+$/)) {
    const id = url.pathname.split('/').pop();
    const gallery = await getGallery(env);
    const index = gallery.findIndex((g: any) => g.id === id);

    if (index === -1) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json() as any;
    const { caption, captionEn, tag, tagEn, featured, image } = body;

    gallery[index] = {
      ...gallery[index],
      image: image || gallery[index].image,
      caption: caption || gallery[index].caption,
      captionEn: captionEn || gallery[index].captionEn,
      tag: tag || gallery[index].tag,
      tagEn: tagEn || gallery[index].tagEn,
      featured: featured !== undefined ? featured : gallery[index].featured
    };

    await saveGallery(env, gallery);
    return new Response(JSON.stringify(gallery[index]), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // DELETE /api/gallery/:id
  if (method === 'DELETE' && url.pathname.match(/^\/api\/gallery\/\d+$/)) {
    const id = url.pathname.split('/').pop();
    const gallery = await getGallery(env);
    const index = gallery.findIndex((g: any) => g.id === id);

    if (index === -1) {
      return new Response(JSON.stringify({ error: 'Item not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const removed = gallery.splice(index, 1);
    await saveGallery(env, gallery);
    return new Response(JSON.stringify({ success: true, removed: removed[0] }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
};
