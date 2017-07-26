import Vue from 'vue'
import App from './App'
import router from './router/routers.js'
import store from './vuex'
import utilsPlugin from './plugin/vueUtilsPlugin.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(utilsPlugin);
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
import 'common/style/index.scss'
const app = new Vue({
    router,
    store,  
    template: '<App>',
    components: { App }
}).$mount('#app');

