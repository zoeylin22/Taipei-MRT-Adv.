const CACHE_NAME = 'mini-adv-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// 安裝時將檔案存入手機快取
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 斷網時自動讀取快取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});