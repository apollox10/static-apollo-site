const l = [
  "/_app/immutable/start-9d83ab7f.js",
  "/_app/immutable/pages/__layout.svelte-dcb6fcfe.js",
  "/_app/immutable/assets/__layout-ff2b5924.css",
  "/_app/immutable/pages/__error.svelte-2afc2a00.js",
  "/_app/immutable/assets/__error-21aeec0b.css",
  "/_app/immutable/pages/__layout-root.svelte-aae967f1.js",
  "/_app/immutable/pages/about/__layout@root.svelte-a7ea6536.js",
  "/_app/immutable/assets/__layout@root-ff2b5924.css",
  "/_app/immutable/pages/about/__error.svelte-5f4e5a28.js",
  "/_app/immutable/pages/games/__layout@root.svelte-22744eff.js",
  "/_app/immutable/pages/games/__error.svelte-18d2df65.js",
  "/_app/immutable/pages/news/__layout@root.svelte-b10aa6ce.js",
  "/_app/immutable/pages/news/__error.svelte-62ba80f7.js",
  "/_app/immutable/pages/tech/__layout@root.svelte-f259f34c.js",
  "/_app/immutable/pages/tech/__error.svelte-bd0b2208.js",
  "/_app/immutable/pages/about/index.svelte-07acf812.js",
  "/_app/immutable/pages/games/index.svelte-11dcd633.js",
  "/_app/immutable/pages/index.svelte-8488bfc7.js",
  "/_app/immutable/pages/news/index.svelte-5af5c7ca.js",
  "/_app/immutable/pages/tech/index.svelte-85f9c245.js",
  "/_app/immutable/chunks/index-236b007c.js",
  "/_app/immutable/chunks/footer-5721bef2.js",
  "/_app/immutable/assets/footer-7b2d0c04.css",
  "/_app/immutable/chunks/WIP-4057e960.js",
  "/_app/immutable/assets/WIP-940cdd1c.css"
], m = [
  "/Julio Morales.jpg",
  "/WIP-icon.png",
  "/editors/Julio Morales.jpg",
  "/favicon.png",
  "/head-icons/about.png",
  "/head-icons/games.png",
  "/head-icons/homepage.png",
  "/head-icons/learn.png",
  "/head-icons/news.png",
  "/head-icons/tech.png",
  "/learn/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/Cpp.svg",
  "/learn/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/VS-Code-Download.png",
  "/learn/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/vscode.png",
  "/learn/cursos/programacion-desde-cero/variables-y-tipos-de-datos/pi.svg",
  "/learn/otros-medios/fcc.svg",
  "/learn/otros-medios/udemy.svg",
  "/nav-menu.svg",
  "/style.css"
], p = "1661487461106", t = self, n = `cache${p}`, i = l.concat(m), d = new Set(i);
t.addEventListener("install", (e) => {
  e.waitUntil(caches.open(n).then((s) => s.addAll(i)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then(async (s) => {
    for (const a of s)
      a !== n && await caches.delete(a);
    t.clients.claim();
  }));
});
async function u(e) {
  const s = await caches.open(`offline${p}`);
  try {
    const a = await fetch(e);
    return s.put(e, a.clone()), a;
  } catch (a) {
    const o = await s.match(e);
    if (o)
      return o;
    throw a;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), a = s.protocol.startsWith("http"), o = s.hostname === self.location.hostname && s.port !== self.location.port, c = s.host === self.location.host && d.has(s.pathname), r = e.request.cache === "only-if-cached" && !c;
  a && !o && !r && e.respondWith((async () => c && await caches.match(e.request) || u(e.request))());
});
