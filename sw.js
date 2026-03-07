const cacheName = 'esdica360-v1';

const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  // Ficheiros na pasta raíz
  './README.txt',
  // Ficheiros da pasta 'assets'
  './assets/icon.png',
  './assets/css/style.css', // Confirmar se o nome é este
  './assets/js/script.js',  // Confirmar se o nome é este
  // Todas as tuas páginas da pasta 'salas'
  './salas/atrio.html',
  './salas/bar.html',
  './salas/biblioteca.html',
  './salas/campo-polidesportivo.html',
  './salas/campos.html',
  './salas/cantina.html',
  './salas/ginasio.html',
  './salas/laboratorio-cn.html',
  './salas/laboratorio-fq.html',
  './salas/oficina-informatica.html',
  './salas/oficina-multimedia.html',
  './salas/reprografia.html',
  './salas/salas-cte.html',
  './salas/salas.html'
];

// Instalação e Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Interceção de pedidos (Modo Offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
