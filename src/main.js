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
Vue.component('apexchart', apexcharts);
window.Apex.colors = ['#43a047', '#1e88e5', '#fbc02d', '#d32f2f', '#8e24aa', '#f4511e', '#fb8c00'];
window.Apex.chart = {
  fontFamily: '"Nunito", sans-serif',
  toolbar: {
    show: false,
  },
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
