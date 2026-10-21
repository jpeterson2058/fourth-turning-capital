import assert from "node:assert/strict";
import test from "node:test";

test("renders production metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>Fourth Turning Capital/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/fourthturning\.capital\/"\s*\/?>/,
  );
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
});

test("redirects www to the canonical domain", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `redirect-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://www.fourthturning.capital/research?issue=1"),
    {},
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://fourthturning.capital/research?issue=1",
  );
});

test("renders the Insights archive with canonical and RSS metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `insights-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://fourthturning.capital/insights", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Insights \| Fourth Turning Capital<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/fourthturning\.capital\/insights"/);
  assert.match(html, /type="application\/rss\+xml"/);
  assert.match(html, /The first issue is in final editorial review\./);
  assert.doesNotMatch(html, /Editorial System Validation Fixture/);
});

test("serves a valid RSS feed without draft content", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `rss-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://fourthturning.capital/rss.xml"),
    {},
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/rss\+xml\b/i);
  const xml = await response.text();
  assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xml, /<atom:link href="https:\/\/fourthturning\.capital\/rss\.xml"/);
  assert.doesNotMatch(xml, /Editorial System Validation Fixture/);
});

test("keeps non-approved article slugs non-routable", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `draft-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://fourthturning.capital/insights/editorial-system-validation-fixture"),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 404);
});
