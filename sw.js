// Cache name and files to cache
const CACHE_NAME = 'v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js'
];

// Install Service Worker and Cache Files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Caching files...');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Serve Cached Files When Offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
