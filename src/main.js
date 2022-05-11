import * as Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue'

Vue.createApp(App).use(VueCookies, {expires: '7d'}).mount('#app');
