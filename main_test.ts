import { assertEquals } from "@std/assert";
import { server } from "./main.ts";

const base = `http://localhost:${server.addr.port}`;
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ x: 1, y: 2 }),
};

Deno.test("Default Endpoint", async () => {
  const request = await fetch(base, options);
  const result = await request.text();

  assertEquals(result, "Hello world");
});

Deno.test("Add Endpoint", async () => {
  const request = await fetch(`${base}/api/add`, options);
  const result = await request.text();

  assertEquals(result, "3");
});

Deno.test("Substract Endpoint", async () => {
  const request = await fetch(`${base}/api/substract`, options);
  const result = await request.text();

  assertEquals(result, "-1");
});

Deno.test("Multiply Endpoint", async () => {
  const request = await fetch(`${base}/api/multiply`, options);
  const result = await request.text();

  assertEquals(result, "2");
});

Deno.test("Divide Endpoint", async () => {
  const request = await fetch(`${base}/api/divide`, options);
  const result = await request.text();

  assertEquals(result, "0.5");
});

Deno.test("Wrong Method", async () => {
  const request = await fetch(`${base}/api/add`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  await request.body?.cancel();

  assertEquals(request.status, 405);
});

Deno.test("Missing Body", async () => {
  const request = await fetch(`${base}/api/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  await request.body?.cancel();

  assertEquals(request.status, 400);
});
