var CACHE_NAME = 'YourFood';
  var urlsToCache = [
    '.',
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache open!');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  
  self.addEventListener('fetch', function(event) {
      event.respondWith(
          caches.match(event.request)
          .then(function(response) {
              // Cache hit - return response
              if (response) {
                  return response;
              }
              return fetch(event.request);
          })
      );
  });
  