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
  contactFastestReplyEn: "Fastest reply: call/text the number above, or message on Facebook.",
  navCtaLabel: "Cotizar",
  navCtaLabelEn: "Get a Quote",
  footerTag1: "Yuma, AZ",
  footerTag2: "Somerton, AZ",
  footerTag3: "San Luis / Border Region"
};

const INITIAL_GALLERY_PAGE = {
  headerEyebrow: "La Galería",
  headerEyebrowEn: "The Gallery",
  headerHeading: "Cada muro, cada lienzo, uno a la vez",
  headerHeadingEn: "Every wall, every canvas, one at a time",
  headerLede: "Un registro continuo de murales, retratos y encargos en lienzo por Yuma y Somerton, AZ. Toca cualquier pieza para verla de cerca.",
  headerLedeEn: "A running record of murals, portraits, and canvas commissions across Yuma and Somerton, AZ. Tap any piece for a closer look."
};

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
        const adminPassword = env.ADMIN_PASSWORD || 'picazo2024';
        const isValid = body.password === adminPassword;
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

      if (pathname.includes('/gallery-page') && method === 'GET') {
        const stored = await env.GALLERY.get('galleryPage');
        const galleryPage = stored ? { ...INITIAL_GALLERY_PAGE, ...JSON.parse(stored) } : INITIAL_GALLERY_PAGE;
        return new Response(JSON.stringify(galleryPage), { headers });
      }

      if (pathname.includes('/gallery-page') && method === 'PUT') {
        const stored = await env.GALLERY.get('galleryPage');
        const galleryPage = stored ? { ...INITIAL_GALLERY_PAGE, ...JSON.parse(stored) } : INITIAL_GALLERY_PAGE;
        const body = await request.json();
        const updated = { ...galleryPage, ...body };
        await env.GALLERY.put('galleryPage', JSON.stringify(updated));
        return new Response(JSON.stringify(updated), { headers });
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

        const contentType = request.headers.get('content-type') || '';
        let entry: any = {};

        if (contentType.includes('multipart/form-data')) {
          const formData = await request.formData();
          entry.caption = formData.get('caption');
          const imageFile = formData.get('image');
          if (imageFile && imageFile instanceof File && imageFile.size > 0) {
            const ext = imageFile.name.split('.').pop();
            const filename = `gallery-${Date.now()}.${ext}`;
            const buffer = await imageFile.arrayBuffer();
            await env.IMAGES.put(filename, buffer);
            entry.image = filename;
          }
        } else {
          entry = await request.json();
        }

        if (entry.image && entry.caption) {
          hero.push(entry);
          await env.GALLERY.put('hero', JSON.stringify(hero));
        }
        return new Response(JSON.stringify({ success: true }), { status: 201, headers });
      }

      if (pathname.includes('/hero') && method === 'PUT') {
        const idx = parseInt(pathname.split('/')[3], 10);
        const stored = await env.GALLERY.get('hero');
        const hero = stored ? JSON.parse(stored) : INITIAL_HERO;
        if (isNaN(idx) || idx < 0 || idx >= hero.length) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });

        const contentType = request.headers.get('content-type') || '';
        let updates: any = {};

        if (contentType.includes('multipart/form-data')) {
          const formData = await request.formData();
          if (formData.get('caption')) updates.caption = formData.get('caption');
          const imageFile = formData.get('image');
          if (imageFile && imageFile instanceof File && imageFile.size > 0) {
            const ext = imageFile.name.split('.').pop();
            const filename = `gallery-${Date.now()}.${ext}`;
            const buffer = await imageFile.arrayBuffer();
            await env.IMAGES.put(filename, buffer);
            updates.image = filename;
          }
        } else {
          updates = await request.json();
        }

        hero[idx] = { ...hero[idx], ...updates };
        await env.GALLERY.put('hero', JSON.stringify(hero));
        return new Response(JSON.stringify(hero[idx]), { headers });
      }

      if (pathname.includes('/hero') && method === 'DELETE') {
        const idx = parseInt(pathname.split('/')[3], 10);
        const stored = await env.GALLERY.get('hero');
        const hero = stored ? JSON.parse(stored) : INITIAL_HERO;
        if (isNaN(idx) || idx < 0 || idx >= hero.length) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
        hero.splice(idx, 1);
        await env.GALLERY.put('hero', JSON.stringify(hero));
        return new Response(JSON.stringify({ success: true }), { headers });
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

      if (pathname.includes('/settings') && method === 'GET') {
        const stored = await env.GALLERY.get('settings');
        const settings = stored ? { ...INITIAL_SETTINGS, ...JSON.parse(stored) } : INITIAL_SETTINGS;
        return new Response(JSON.stringify(settings), { headers });
      }

      if (pathname.includes('/settings') && method === 'PUT') {
        const stored = await env.GALLERY.get('settings');
        const settings = stored ? { ...INITIAL_SETTINGS, ...JSON.parse(stored) } : INITIAL_SETTINGS;
        const body = await request.json();
        const updated = { ...settings, ...body };
        await env.GALLERY.put('settings', JSON.stringify(updated));
        return new Response(JSON.stringify(updated), { headers });
      }

      if (pathname.includes('/about') && method === 'GET') {
        const stored = await env.GALLERY.get('about');
        const about = stored ? { ...INITIAL_ABOUT, ...JSON.parse(stored) } : INITIAL_ABOUT;
        return new Response(JSON.stringify(about), { headers });
      }

      if (pathname.includes('/about') && method === 'PUT') {
        const stored = await env.GALLERY.get('about');
        const about = stored ? { ...INITIAL_ABOUT, ...JSON.parse(stored) } : INITIAL_ABOUT;
        const body = await request.json();
        const updated = { ...about, ...body };
        await env.GALLERY.put('about', JSON.stringify(updated));
        return new Response(JSON.stringify(updated), { headers });
      }

      if (pathname.includes('/murals') && method === 'GET') {
        const stored = await env.GALLERY.get('murals');
        const murals = stored ? { ...INITIAL_MURALS, ...JSON.parse(stored) } : INITIAL_MURALS;
        return new Response(JSON.stringify(murals), { headers });
      }

      if (pathname.includes('/murals') && method === 'PUT') {
        const stored = await env.GALLERY.get('murals');
        const murals = stored ? { ...INITIAL_MURALS, ...JSON.parse(stored) } : INITIAL_MURALS;
        const body = await request.json();
        const updated = { ...murals, ...body };
        await env.GALLERY.put('murals', JSON.stringify(updated));
        return new Response(JSON.stringify(updated), { headers });
      }

      if (pathname.includes('/contact') && method === 'GET') {
        const stored = await env.GALLERY.get('contact');
        const contact = stored ? { ...INITIAL_CONTACT, ...JSON.parse(stored) } : INITIAL_CONTACT;
        return new Response(JSON.stringify(contact), { headers });
      }

      if (pathname.includes('/contact') && method === 'PUT') {
        const stored = await env.GALLERY.get('contact');
        const contact = stored ? { ...INITIAL_CONTACT, ...JSON.parse(stored) } : INITIAL_CONTACT;
        const body = await request.json();
        const updated = { ...contact, ...body };
        await env.GALLERY.put('contact', JSON.stringify(updated));
        return new Response(JSON.stringify(updated), { headers });
      }

      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message || 'Server error' }), { status: 500, headers });
    }
  }
};
