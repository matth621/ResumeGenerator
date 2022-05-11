import * as Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLightbulb, faListCheck, faBriefcase, faUserGraduate, faHouseChimney, faCar, faLanguage, faGears, faStar, faCircle, faQuoteLeft, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { faCircle as faEmptyCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([faUser, faLightbulb, faListCheck, faBriefcase, faUserGraduate, faHouseChimney, faCar, faLanguage, faGears, faStar, faCircle, faEmptyCircle, faQuoteLeft, faGraduationCap]);

Vue.createApp(App).use(VueCookies, {expires: '7d'}).component('font-awesome-icons', FontAwesomeIcon).mount('#app');