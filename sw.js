const cacheName = 'esdica360-v5';

const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './README.txt',
  './assets/icon.png',
  // Verificar se estes nomes abaixo estão corretos ou se falta alguma sala:
  './assets/css/style.css', 
  './assets/js/script.js',  
  // Páginas das salas
  './salas/atrio.html',
  './salas/auditorio.html',
  './salas/bar.html',
  './salas/biblioteca.html',
  './salas/campo-polidesportivo.html',
  './salas/campos.html',
  './salas/cantina.html',
  './salas/direcao.html',
  './salas/ginasio.html',
  './salas/laboratorio-cn.html',
  './salas/laboratorio-fq.html',
  './salas/oficina-eletricidade.html',
  './salas/oficina-informatica.html',
  './salas/oficina-multimedia.html',
  './salas/oficina-traco.html',
  './salas/reprografia.html',
  './salas/salas-cte.html',
  './salas/sala-desenho.html',
  './salas/secretaria.html',
  './salas/salas.html'
];

// Instalação: Guarda os ficheiros na Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('App ESDICA360: A guardar ficheiros offline...');
      return cache.addAll(assets);
    })
  );
});

// Ativação: Limpa lixo de versões antigas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch: Serve os ficheiros da Cache se estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
