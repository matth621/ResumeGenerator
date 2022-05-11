import * as Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLightbulb, faListCheck, faBriefcase, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([faUser, faLightbulb, faListCheck, faBriefcase, faUserGraduate]);

Vue.createApp(App).use(VueCookies, {expires: '7d'}).component('font-awesome-icons', FontAwesomeIcon).mount('#app');