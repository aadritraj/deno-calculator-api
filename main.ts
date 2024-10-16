Deno.serve({ port: 8000 }, () => {
  return new Response("Hello world", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
});
