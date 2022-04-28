const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');

var preLoader = document.getElementById('before-load');

function fadePreLoader(el) {
  el.style.opacity = 1;
  var interPreLoader = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interPreLoader);
      preLoader.style.display = 'none';
    }
  }, 16);
}

setTimeout(function () {
  fadePreLoader(preLoader);
}, 2500);

window.onload = function () {
  fadePreLoader(preLoader);
};
