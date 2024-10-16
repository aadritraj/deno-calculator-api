Deno.serve({ port: 8000 }, async (req: Request) => {
  if (req.method != "POST") {
    return new Response("Wrong method! Use POST.", {
      status: 405,
    });
  }

  // this isnt a scalable approach but it works!
  const validRoutes = [
    "/api/add",
    "/api/substract",
    "/api/multiply",
    "/api/divide",
  ];

  const url = new URL(req.url);
  const pathname = url.pathname;
  const inRoutes = validRoutes.includes(pathname);

  const text = await req.text();

  if (!text && inRoutes) {
    const out =
      "Add x and y in JSON to the Body when sending requests to Arithmetic Operation APIs.";

    return new Response(out, {
      status: 400,
    });
  }

  return new Response("Hello world", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
});
