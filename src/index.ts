const INITIAL_GALLERY = [
  { id: "01", image: "gallery-01-mural-building-aerial.jpg", caption: "Repintado de edificio completo — Restaurante La Malquerida", captionEn: "Full building repaint — La Malquerida Restaurant", tag: "Murales", tagEn: "Murals", featured: true },
  { id: "02", image: "gallery-02-mural-wave-window.jpg", caption: "Mural de ojo-oceánico en ventana", captionEn: "Ocean eye mural in window", tag: "Murales", tagEn: "Murals" },
  { id: "03", image: "gallery-03-mural-octopus-bw.jpg", caption: "Tortuga marina, muro de block", captionEn: "Sea turtle, block wall", tag: "Murales", tagEn: "Murals" },
  { id: "04", image: "gallery-04-mural-fish-teal.jpg", caption: "Pez turquesa, interior de bodega", captionEn: "Teal fish, warehouse interior", tag: "Murales", tagEn: "Murals" },
  { id: "05", image: "gallery-05-mural-bulldog-beyonce.jpg", caption: "Mural de iguana a color, contenedor", captionEn: "Colorful iguana mural, container", tag: "Murales", tagEn: "Murals" },
  { id: "06", image: "gallery-06-mural-bulldog-jordan.jpg", caption: "Mural de medusa, interior de restaurante", captionEn: "Jellyfish mural, restaurant interior", tag: "Murales", tagEn: "Murals" },
  { id: "07", image: "gallery-07-mural-madison-portrait.jpg", caption: "Abuela y chihuahua, retrato personalizado", captionEn: "Grandma and chihuahua, custom portrait", tag: "Retratos de Mascotas y Personajes", tagEn: "Pet & Character Portraits" },
  { id: "08", image: "gallery-08-mural-madison-text.jpg", caption: "Astronauta en el espacio, mural de techo", captionEn: "Astronaut in space, ceiling mural", tag: "Murales", tagEn: "Murals" },
  { id: "09", image: "gallery-09-mural-parrot-flowers.jpg", caption: "Loro tropical y flores", captionEn: "Tropical parrot and flowers", tag: "Murales", tagEn: "Murals" },
  { id: "10", image: "gallery-10-mural-toucan.jpg", caption: "Guacamaya y mariposa monarca, mural tropical", captionEn: "Macaw and monarch butterfly, tropical mural", tag: "Murales", tagEn: "Murals" },
  { id: "11", image: "gallery-11-mural-vamos-mexico.jpg", caption: "Mural de retrato y flores — Tacos Campas, Somerton", captionEn: "Portrait and flowers mural — Tacos Campas, Somerton", tag: "Murales", tagEn: "Murals" },
  { id: "14", image: "gallery-14-mural-jungle-interior.jpg", caption: "Cascada en la selva, mural interior", captionEn: "Jungle waterfall, interior mural", tag: "Murales", tagEn: "Murals" },
  { id: "15", image: "gallery-15-mural-desert-walkway.jpg", caption: "Escalones pintados a mano con olas, entrada", captionEn: "Hand-painted steps with waves, entryway", tag: "Murales", tagEn: "Murals" },
  { id: "16", image: "gallery-16-mural-bird-branch.jpg", caption: "Ave cantora en una rama", captionEn: "Songbird on a branch", tag: "Murales", tagEn: "Murals" },
  { id: "17", image: "gallery-17-mural-butterfly-wings.jpg", caption: "Alas de mariposa monarca, mural interactivo", captionEn: "Monarch butterfly wings, interactive mural", tag: "Murales", tagEn: "Murals" },
  { id: "18", image: "gallery-18-mural-bathroom-abstract.jpg", caption: "Mural abstracto de hojas, baño", captionEn: "Abstract leaf mural, bathroom", tag: "Murales", tagEn: "Murals" },
  { id: "19", image: "gallery-19-mural-fruit-stairwell.jpg", caption: "Arándanos, coco y limón, mural de escalera", captionEn: "Blueberries, coconut and lemon, stairwell mural", tag: "Murales", tagEn: "Murals", featured: true },
  { id: "20", image: "gallery-20-mural-turtles-duo-wide.jpg", caption: "Dos tortugas marinas, mural de block al aire libre", captionEn: "Two sea turtles, outdoor block mural", tag: "Murales", tagEn: "Murals", featured: true },
  { id: "21", image: "gallery-21-mural-turtle-progress.jpg", caption: "Tortuga marina en proceso, boceto y color", captionEn: "Sea turtle in progress, sketch and color", tag: "Murales", tagEn: "Murals" }
];

const INITIAL_HERO = [
  { image: "hero-banner.jpg", caption: "Muros que detienen el tráfico" },
  { image: "gallery-06-mural-bulldog-jordan.jpg", caption: "Lienzos que llenan un cuarto" },
  { image: "gallery-05-mural-bulldog-beyonce.jpg", caption: "Cada pieza, pintada a mano" },
  { image: "gallery-11-mural-vamos-mexico.jpg", caption: "En el lugar, a todo color" }
];

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

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    // CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    try {
      if (pathname.includes('/test')) {
        return new Response(JSON.stringify({
          hasGallery: !!env.GALLERY,
          hasImages: !!env.IMAGES,
          bindings: Object.keys(env)
        }), { headers });
      }

      if (pathname.includes('/auth')) {
        const body = await request.json();
        const isValid = body.password === 'picazo2024';
        return new Response(JSON.stringify({ success: isValid }), {
          status: isValid ? 200 : 401,
          headers
        });
      }

      if (pathname.includes('/image/')) {
        const filename = pathname.split('/image/')[1].replace(/^\//, ''); // Remove leading slash
        try {
          const object = await env.IMAGES.get(filename);
          if (!object) return new Response(JSON.stringify({ error: `Not found: ${filename}`, pathname }), { status: 404, headers });
          return new Response(object.body, {
            headers: {
              'Content-Type': 'image/jpeg',
              'Cache-Control': 'public, max-age=31536000'
            }
          });
        } catch (err: any) {
          return new Response(JSON.stringify({ error: err.message, filename }), { status: 500, headers });
        }
      }

      if (pathname.includes('/gallery') && method === 'GET') {
        const stored = await env.GALLERY.get('gallery');
        const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
        const parts = pathname.split('/');
        if (parts.length === 4) {
          const id = parts[3];
          const item = gallery.find((g: any) => g.id === id);
          return new Response(JSON.stringify(item || { error: 'Not found' }), { status: item ? 200 : 404, headers });
        }
        return new Response(JSON.stringify(gallery), { headers });
      }

      if (pathname.includes('/gallery') && method === 'POST') {
        const stored = await env.GALLERY.get('gallery');
        const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;

        const contentType = request.headers.get('content-type') || '';
        let body: any = {};

        if (contentType.includes('multipart/form-data')) {
          const formData = await request.formData();
          body = {
            caption: formData.get('caption'),
            captionEn: formData.get('captionEn'),
            tag: formData.get('tag'),
            tagEn: formData.get('tagEn'),
            featured: formData.get('featured') === 'true'
          };

          const imageFile = formData.get('image');
          if (imageFile && imageFile instanceof File && imageFile.size > 0) {
            try {
              const ext = imageFile.name.split('.').pop();
              const filename = `gallery-${Date.now()}.${ext}`;
              const buffer = await imageFile.arrayBuffer();
              await env.IMAGES.put(filename, buffer);
              body.image = filename;
              body.uploadStatus = 'success';
            } catch (uploadErr: any) {
              body.uploadStatus = 'error: ' + (uploadErr?.message || String(uploadErr));
              body.image = 'gallery-new-item.jpg';
            }
          } else {
            body.uploadStatus = 'no file selected';
            body.image = 'gallery-new-item.jpg';
          }
        } else {
          body = await request.json();
          body.image = body.image || 'gallery-new-item.jpg';
        }

        const newId = String(Math.max(...gallery.map((g: any) => parseInt(g.id) || 0)) + 1);
        gallery.push({ id: newId, ...body });
        await env.GALLERY.put('gallery', JSON.stringify(gallery));
        return new Response(JSON.stringify({ id: newId, ...body }), { status: 201, headers });
      }

      if (pathname.includes('/gallery') && method === 'PUT') {
        const id = pathname.split('/')[3];
        const stored = await env.GALLERY.get('gallery');
        const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
        const index = gallery.findIndex((g: any) => g.id === id);
        if (index === -1) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });

        const contentType = request.headers.get('content-type') || '';
        let body: any = {};

        if (contentType.includes('multipart/form-data')) {
          const formData = await request.formData();
          body = {
            caption: formData.get('caption'),
            captionEn: formData.get('captionEn'),
            tag: formData.get('tag'),
            tagEn: formData.get('tagEn'),
            featured: formData.get('featured') === 'true'
          };

          const imageFile = formData.get('image');
          if (imageFile && imageFile instanceof File && imageFile.size > 0) {
            try {
              const ext = imageFile.name.split('.').pop();
              const filename = `gallery-${Date.now()}.${ext}`;
              const buffer = await imageFile.arrayBuffer();
              await env.IMAGES.put(filename, buffer);
              body.image = filename;
            } catch (uploadErr: any) {
              console.error('R2 upload error:', uploadErr?.message || uploadErr);
            }
          }
        } else {
          body = await request.json();
        }

        gallery[index] = { ...gallery[index], ...body };
        await env.GALLERY.put('gallery', JSON.stringify(gallery));
        return new Response(JSON.stringify(gallery[index]), { headers });
      }

      if (pathname.includes('/gallery') && method === 'DELETE') {
        const id = pathname.split('/')[3];
        const stored = await env.GALLERY.get('gallery');
        const gallery = stored ? JSON.parse(stored) : INITIAL_GALLERY;
        const index = gallery.findIndex((g: any) => g.id === id);
        if (index === -1) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
        gallery.splice(index, 1);
        await env.GALLERY.put('gallery', JSON.stringify(gallery));
        return new Response(JSON.stringify({ success: true }), { headers });
      }

      if (pathname.includes('/hero') && method === 'GET') {
        const stored = await env.GALLERY.get('hero');
        return new Response(JSON.stringify(stored ? JSON.parse(stored) : INITIAL_HERO), { headers });
      }

      if (pathname.includes('/hero') && method === 'POST') {
        const stored = await env.GALLERY.get('hero');
        const hero = stored ? JSON.parse(stored) : INITIAL_HERO;
        const body = await request.json();
        if (body.image && body.caption) {
          hero.push(body);
          await env.GALLERY.put('hero', JSON.stringify(hero));
        }
        return new Response(JSON.stringify({ success: true }), { status: 201, headers });
      }

      if (pathname.includes('/home') && method === 'GET') {
        const stored = await env.GALLERY.get('home');
        const home = stored ? { ...INITIAL_HOME, ...JSON.parse(stored) } : INITIAL_HOME;
        return new Response(JSON.stringify(home), { headers });
      }

      if (pathname.includes('/home') && method === 'PUT') {
        const stored = await env.GALLERY.get('home');
        const home = stored ? { ...INITIAL_HOME, ...JSON.parse(stored) } : INITIAL_HOME;
        const body = await request.json();
        const updated = { ...home, ...body };
        await env.GALLERY.put('home', JSON.stringify(updated));
        return new Response(JSON.stringify(updated), { headers });
      }

      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message || 'Server error' }), { status: 500, headers });
    }
  }
};
