import Vue from 'vue';
import App from './the-app.vue';
import router from './router';

import firebase from "./plugins/firebase";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import store from './store/store'

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render : (h) => h(App)
}).$mount('#app');