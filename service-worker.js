const CACHE_NAME = 'magi-ebook-v2'; // nag v2 ako para sure na bago HAHA
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png', 
  './images/page1.jpg', // dagdag mo lahat ng images mo dito El HAHA
  './images/page2.jpg',
  './images/page3.jpg',
  './images/page4.jpg',
  './images/page5.jpg',
  './images/page6.jpg',
  './images/page7.jpg',
  './images/page8.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
