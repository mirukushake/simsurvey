import Vue from 'vue';
import Buefy from 'buefy';
import scrollto from 'vue-scrollto';
import vueScrollActive from 'vue-scrollactive';
import apexcharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Buefy);
Vue.use(scrollto);
Vue.use(vueScrollActive);
Vue.use(apexcharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
