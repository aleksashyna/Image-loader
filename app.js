 var Loader = (function() {
   'use strict';
   return {
      init: function() {
         this.loader = document.getElementById('loader');
         this.preogressBar = document.getElementById('loaderProgressBar');
         this.loaderPercent = document.getElementById('loaderPercent');
         this.images = document.getElementsByTagName('img');

         this.progress = 0;
         this.percentOfOneImage = (100/this.images.length);
         this.events();
      },

      events: function() {
         Array.prototype.forEach.call(this.images, img => {
            img.onload = () => this.loadImage(img);
            img.onerror = () => this.loadImage(img);
         });

      },

      loadImage: function(img) {
         this.increaseProgressBar();
      },

      increaseProgressBar: function() {
         this.progress += this.percentOfOneImage;
         console.log(this.progress);
         this.preogressBar.style.width = (this.progress).toFixed(1) + '%';
         this.loaderPercent.innerHTML = (this.progress).toFixed(1) + '%';
         if (this.progress == 100) this.loadedCallback();
      },

      loadedCallback: function() {
         this.loader.style.display = 'none';
      }
   };
})();

Loader.init();

