(function() {
  'use strict';

  // Add install and activate event listeners
  // At the end of registration, the service worker emits an install event
  self.addEventListener('install', function(event) {
    console.log('Service working installing...');
  });

  self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
  });

  // Skip the waiting period between installation and activiation
  // on future updates
  self.skipWaiting();

  // Add fetch listener
  self.addEventListener('fetch', function(event) {
    console.log('Fetching: ', event.request.url);
  });

})();