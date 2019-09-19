import Vue from 'vue';
import App from './App.vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import firebase from "./plugins/firebase";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import store from './store/store'

Vue.config.productionTip = false;

new Vue({
  render : (h) => h(App)
}).$mount('#app');