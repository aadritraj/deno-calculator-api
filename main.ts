export const server = Deno.serve({ port: 8000 }, async (req: Request) => {
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

  if (!inRoutes) {
    return new Response("Hello world", {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  if (req.method != "POST") {
    return new Response("Wrong method! Use POST.", {
      status: 405,
    });
  }

  if (!text) {
    const out =
      "Add x and y in JSON to the Body when sending requests to Arithmetic Operation APIs.";

    return new Response(out, {
      status: 400,
    });
  }

  const method = pathname.substring(pathname.lastIndexOf("/") + 1);
  const { x, y } = JSON.parse(text);

  let result: number = 0;

  switch (method) {
    case "add":
      result = x + y;
      break;
    case "substract":
      result = x - y;
      break;
    case "multiply":
      result = x * y;
      break;
    case "divide":
      result = x / y;
      break;
  }

  return new Response(`${result}`, {
    status: 200,
  });
});
