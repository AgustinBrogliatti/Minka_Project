import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from "./components/HomePage";
import Login from "./components/Login";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/', name:"HomePage", component:HomePage},
  {path:'/login', name:"Login", component:Login}
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
