import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTypedJs from 'vue-typed-js'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import {  faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import {  faKey } from '@fortawesome/free-solid-svg-icons'
import {  faHome } from '@fortawesome/free-solid-svg-icons'
import {  faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
import {  faTasks } from '@fortawesome/free-solid-svg-icons'
import {  faSearchDollar } from '@fortawesome/free-solid-svg-icons'
import {  faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {  faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import {  faRadiationAlt } from '@fortawesome/free-solid-svg-icons'
import {  faPaperclip } from '@fortawesome/free-solid-svg-icons'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import scrollAnimation from './directives/observerApi'

library.add(faUserSecret)
library.add(faBars)
library.add(faTimes)
library.add( faLockOpen)
library.add( faEnvelopeOpenText )
library.add( faKey )
library.add( faHome )
library.add( faCalendarTimes )
library.add( faTasks )
library.add( faSearchDollar )
library.add(faSignOutAlt)
library.add(faLayerGroup)
library.add(faRadiationAlt)
library.add(faPaperclip)
library.add(faArrowRight)
library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

Vue.directive('scrollanimation' , scrollAnimation)
Vue.use(VueAxios, axios);
Vue.use(VueTypedJs)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

//setting up vue default http modules for api
Vue.config.globalProperties.$http =  axios;

//load the token from localstorage
const token = localStorage.getItem("token"); 

//If there is any token we append it to the http default axios authorisation headers 
if(token){
    Vue.config.globalProperties.$http.defaults.headers.common['Authorization'] = token;
}

