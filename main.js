(function () {
  'use strict';

  // Register the service worker
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported');
    return;
  }
  navigator.serviceWorker.register('service-worker.js')
    .then(function (registration) {
      console.log('Registered', registration.scope);
    })
    .catch(function (error) {
      console.log('Registration failed:', error)
    })

})();