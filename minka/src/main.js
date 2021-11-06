import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from "./components/HomePage";
import LoginArq from "./components/Login/LoginArq";
import ClientView from "./components/ClientView";
import MiEstudio from "./components/MiEstudio";
import Registro from "./components/Registro";
import PortadaInicio from "./components/PortadaInicio";
import ProjectInfo from "./components/ProjectInfo"
import MiPerfil from "./components/MiPerfil";
import Contacto from "./components/Contacto";
import ErrorPage from "./components/ErrorPage";

//npm install --save @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', name:"PortadaInicio", component: PortadaInicio},
  {path:'/admin/home', name:"HomePage", component:HomePage},
  {path:'/home', name:"HomePage", component:HomePage},
  {path:'/admin/login', name:"LoginArq", component:LoginArq},
  {path:'/clientview', name:"ClientView", component: ClientView},
  {path:'/miestudio', name:"MiEstudio", component: MiEstudio},
  {path:'/admin/miestudio', name:"MiEstudio", component: MiEstudio},
  {path:'/admin/registro', name:"Registro", component: Registro},
  {path: '/admin/projectinfo', name:"ProjectInfo", component: ProjectInfo},
  {path: '/miperfil', name:"MiPerfil", component: MiPerfil},
  {path: '/admin/miperfil', name:"MiPerfil", component: MiPerfil},
  {path: '/contacto', name:"Contacto", component: Contacto},
  {path: '/admin/contacto', name:"Contacto", component: Contacto},
  {path: '/*', name:"ErrorPage", component: ErrorPage}
]


const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
