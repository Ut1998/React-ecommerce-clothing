var cacheName = "v1.0";

var cacheAssets = ["../public/index.html", "index.js", "index.css", "App.js"];

//Call install event
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (e) => {
  console.log("Service worker installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service worker: caching files");
        cache.addAll(cacheAssets);
      })
      // eslint-disable-next-line no-restricted-globals
      .then(() => self.skipWaiting())
  );
});

//activate event
// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (e) => {
  console.log("Service worker: activated");

  //removing cache files
  e.waitUntil(
    caches.keys().then((cacheName) => {
      return Promise.all(
        cacheName.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service worker: Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (e) => {
  console.log("Service worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
