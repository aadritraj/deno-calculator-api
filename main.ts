Deno.serve({ port: 8000 }, (req: Request) => {
  if (req.method != "POST") {
    return new Response("Wrong method! Use POST.", {
      status: 405
    })
  }
  
  return new Response("Hello world", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
});
