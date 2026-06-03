const CACHE_NAME = 'tg-material-v9';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(name => caches.delete(name)));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});