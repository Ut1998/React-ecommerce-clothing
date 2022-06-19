// var cacheName = "v1.0";

// var cacheAssets = ["../public/index.html", "index.js", "index.css", "App.js"];

// // installation
// // eslint-disable-next-line no-restricted-globals
// self.addEventListener("install", (e) => {
//   console.log("Service Worker: Installed");
//   e.waitUntil(
//     caches
//       .open(cacheName)
//       .then((cache) => {
//         console.log("Service Worker: Caching Files");
//         cache.addAll(cacheAssets);
//       })
//       // eslint-disable-next-line no-restricted-globals
//       .then(() => self.skipWaiting())
//   );
// });

// // activation
// // eslint-disable-next-line no-restricted-globals
// self.addEventListener("activate", (e) => {
//   console.log("Service Worker: Installed");
// });

// // fetch

// // eslint-disable-next-line no-restricted-globals
// self.addEventListener("fetch", (e) => {
//   console.log("Service Worker: Fetching");
//   e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
// });

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serivceWorkerRegister.js")
      .then((reg) => console.log("Service worker registered"))
      .catch((err) => console.log(`Service worker: Error: ${err}`));
  });
}
