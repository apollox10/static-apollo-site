const d = [
  "/_app/immutable/start-ba3b2ddb.js",
  "/_app/immutable/pages/__layout.svelte-d0c0f925.js",
  "/_app/immutable/assets/__layout-5f8f03e1.css",
  "/_app/immutable/error.svelte-15e6bd8a.js",
  "/_app/immutable/pages/cursos-programacion/index.svelte-40127674.js",
  "/_app/immutable/assets/index-f8c877df.css",
  "/_app/immutable/pages/cursos-programacion/programacion-desde-cero/index.svelte-0c95a79d.js",
  "/_app/immutable/assets/index-940cdd1c.css",
  "/_app/immutable/pages/index.svelte-e82c2240.js",
  "/_app/immutable/assets/index-e6866f72.css",
  "/_app/immutable/chunks/index-0aa11635.js",
  "/_app/immutable/chunks/courses-list-90193601.js",
  "/_app/immutable/assets/courses-list-18bf8a01.css"
], l = [
  "/WIP-icon.png",
  "/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/Cpp.svg",
  "/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/VS-Code-Download.png",
  "/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/vscode.png",
  "/cursos/programacion-desde-cero/variables-y-tipos-de-datos/pi.svg",
  "/learn-favicon.png",
  "/nav-menu.svg",
  "/otros-medios/fcc.svg",
  "/otros-medios/udemy.svg",
  "/style.css"
], n = "1661487439887", t = self, i = `cache${n}`, r = d.concat(l), m = new Set(r);
t.addEventListener("install", (s) => {
  s.waitUntil(caches.open(i).then((e) => e.addAll(r)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (s) => {
  s.waitUntil(caches.keys().then(async (e) => {
    for (const a of e)
      a !== i && await caches.delete(a);
    t.clients.claim();
  }));
});
async function u(s) {
  const e = await caches.open(`offline${n}`);
  try {
    const a = await fetch(s);
    return e.put(s, a.clone()), a;
  } catch (a) {
    const c = await e.match(s);
    if (c)
      return c;
    throw a;
  }
}
t.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), a = e.protocol.startsWith("http"), c = e.hostname === self.location.hostname && e.port !== self.location.port, o = e.host === self.location.host && m.has(e.pathname), p = s.request.cache === "only-if-cached" && !o;
  a && !c && !p && s.respondWith((async () => o && await caches.match(s.request) || u(s.request))());
});
