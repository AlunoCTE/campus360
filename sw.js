const cacheName = 'esdica360-v16';

const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './README.txt',
  './assets/icon.png',
  './assets/css/style.css', 
  './assets/js/script.js',  
  
  // Imagens da pasta assets/images
  './assets/images/esdica_home.jpg',
  './assets/images/logo.png',
  './assets/images/logo_.png',
  './assets/images/logo_Agr.png',
  './assets/images/logo_clube.png',
  './assets/images/logo_cte.png',

  // Panoramas (Pastas assets/panoramas)
  './assets/panoramas/OficinaTraco.jpg',
  './assets/panoramas/atrio.jpg',
  './assets/panoramas/auditorio.jpg',
  './assets/panoramas/bar.jpg',
  './assets/panoramas/campos.jpg',
  './assets/panoramas/cantina.jpg',
  './assets/panoramas/direcao.jpg',
  './assets/panoramas/ginasio.jpg',
  './assets/panoramas/laboratorio-cn.jpg',
  './assets/panoramas/laboratorio-fq.jpg',
  './assets/panoramas/oficina_eletricidade.jpg',
  './assets/panoramas/oficina_informatica.jpg',
  './assets/panoramas/oficina_multimedia.jpg',
  './assets/panoramas/pavilhao.jpg',
  './assets/panoramas/polidesportivo.jpg',
  './assets/panoramas/reprografia.jpg',
  './assets/panoramas/sala-desenho.jpg',
  './assets/panoramas/salas-cte.jpg',
  './assets/panoramas/salas.jpg',
  './assets/panoramas/secretaria.jpg',
  
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
