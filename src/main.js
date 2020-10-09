import Vue from 'vue';
// import VueParticles from 'vue-particles';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

// library.add(faFontAwesome);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
// Vue.use(VueParticles);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
