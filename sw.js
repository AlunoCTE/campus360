const cacheName = 'campus360-v1';
const assets = [
  './',
  './index.html',
  './assets/icon.png'
];

// Instalar o Service Worker e guardar ficheiros na cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder mesmo quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
