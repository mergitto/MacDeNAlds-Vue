import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
  //render: h => setInterval(h(App), 1000)
}).$mount('#app');
