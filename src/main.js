import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Portfolio from './components/Portfolio/Portfolio.vue';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(solid);
//tell vue to use the router
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'Portfolio', component: Portfolio }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');
