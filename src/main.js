import Vue from 'vue'
import App from './App.vue'
import Master from './master.vue'
import Detail from './detail.vue'
import VueRouter from 'vue-router'
import {store} from './index';

Vue.use(VueRouter);



const routes = [
	{path: '/', component: Master},
	{path: '/detail-id:idLink', component: Detail, props: true, name: 'idLink'}
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
