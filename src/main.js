import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './style.css'
import './filters/truncate'


Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCwMVp8hBPL5w4UxpPWHWvv_Kja2f7HEbI",
    libraries: "places"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
