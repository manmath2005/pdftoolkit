/**
 * PDFToolkit Service Worker (sw.js)
 * Persistent Cache-First Strategy for 100% Offline Capability
 */

const CACHE_NAME = "pdftoolkit-v2.0";

// Local core assets to cache immediately upon install
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./robots.txt",
  "./sitemap.xml"
];

// External CDNs to pre-cache for complete offline functionality
const CDN_ASSETS = [
  "https://cdn.tailwindcss.com",
  "https://unpkg.com/lucide@latest",
  "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.9/purify.min.js",
  "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",
  "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js",
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"
];

// Install Event: Pre-cache all local and CDN resources
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log("[Service Worker] Pre-caching offline assets...");
      try {
        await cache.addAll(STATIC_ASSETS);
        for (const url of CDN_ASSETS) {
          try {
            const response = await fetch(url, { mode: "cors" });
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (e) {
            console.warn("[Service Worker] CDN asset caching skipped:", url, e);
          }
        }
      } catch (err) {
        console.warn("[Service Worker] Installation cache warning:", err);
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up outdated caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Deleting old cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First with Dynamic Network Fallback
self.addEventListener("fetch", event => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return from persistent local cache immediately
        return cachedResponse;
      }

      // Fetch from network and dynamically cache for next offline use
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // If offline and request is for navigation/HTML, return root page
        if (event.request.headers.get("accept")?.includes("text/html")) {
          return caches.match("./index.html");
        }
      });
    })
  );
});
