import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import ClientView from "./components/ClientView";
import MiEstudio from "./components/MiEstudio";
import Registro from "./components/Registro";
import PortadaInicio from "./components/PortadaInicio";
import ProjectInfo from "./components/ProjectInfo"

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/home', name:"HomePage", component:HomePage},
  {path:'/login', name:"Login", component:Login},
  {path:'/clientview', name:"ClientView", component: ClientView},
  {path:'/miestudio', name:"MiEstudio", component: MiEstudio},
  {path:'/registro', name:"Registro", component: Registro},
  {path: '/portadainicio', name:"PortadaInicio", component: PortadaInicio},
  {path: '/projectinfo', name:"ProjectInfo", component: ProjectInfo}
]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
