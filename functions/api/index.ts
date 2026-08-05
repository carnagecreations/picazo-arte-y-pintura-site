export const onRequest = async (context) => {
  const request = context.request;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const method = request.method;

  if (pathname.includes('/auth')) {
    try {
      const body = await request.json();
      const isValid = body.password === 'picazo2024';
      return new Response(JSON.stringify({ success: isValid }), {
        status: isValid ? 200 : 401,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
  }

  if (pathname.includes('/gallery') && method === 'GET') {
    const gallery = [
      { id: "01", image: "gallery-01-mural-building-aerial.jpg", caption: "Repintado de edificio completo", captionEn: "Full building repaint" },
      { id: "02", image: "gallery-02-mural-wave-window.jpg", caption: "Mural de ojo-oceánico", captionEn: "Ocean eye mural" }
    ];
    return new Response(JSON.stringify(gallery), { headers: { 'Content-Type': 'application/json' } });
  }

  return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
};
