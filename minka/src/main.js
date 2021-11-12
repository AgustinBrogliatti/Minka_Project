import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import HomePage from "./components/HomePage";
import HomePageArq from "./components/Architect/HomePageArq";
import LoginArq from "./components/Architect/LoginArq";
import MisArchivos from "./components/MiEstudio/MisArchivos";
import Registro from "./components/Architect/Registro";
import Login from "./components/Login";
import NewProject from "./components/Architect/AddProject"
import MiPerfil from "./components/Client/MiPerfil";
import Contacto from "./components/Client/Contacto";
import ErrorPage from "./components/ErrorPage";
import Anteproyecto from "./components/MiEstudio/Anteproyecto";

//npm install --save @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all'
import QuienesSomos from "./components/QuienesSomos";
import ContactoArqui from "./components/Architect/ContactoArqui";
import MiPerfilArq from "./components/Architect/MiPerfilArq";
import Ideas from "./components/MiEstudio/Ideas";
import Documentacion from "./components/MiEstudio/Documentacion";
import Avances from "./components/MiEstudio/Avances";
import Legajo from "./components/MiEstudio/Legajo";
import Obra from "./components/MiEstudio/Obra";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/login', name:"login", component: Login},
  {path: '/', redirect: '/login'},



  {path:'/admin/login', name:"LoginArq", component:LoginArq},
  {path:'/home', name:"HomePage", component:HomePage},
  {path:'/admin/home', name:"HomePageArq", component:HomePageArq},
  {path:'/admin/registro', name:"Registro", component: Registro},
  {path: '/admin/addproject', name:"NewProject", component: NewProject},
  {path: '/miperfil', name:"MiPerfil", component: MiPerfil},
  {path: '/admin/miperfil', name:"MiPerfil", component: MiPerfilArq},
  {path: '/contacto', name:"Contacto", component: Contacto},
  {path: '/admin/contacto', name:"Contacto", component: ContactoArqui},
  {path: '/quienessomos', name:"QuienesSomos", component: QuienesSomos},
  {path: '/admin/quienessomos', name:"QuienesSomos", component: QuienesSomos},
  {path:'/miestudio/inicio', name:"MiEstudio", component: MisArchivos},
  {path:'/admin/miestudio/inicio', name:"MiEstudio", component: MisArchivos},
  {path: '/miestudio/ideas', name:"Ideas", component: Ideas},
  {path: '/miestudio/documentacion', name:"Documentacion", component: Documentacion},
  {path: '/miestudio/anteproyecto', name:"Anteproyecto", component: Anteproyecto},
  {path: '/miestudio/avances', name:"Avances", component: Avances},
  {path: '/miestudio/legajo', name:"Legajo", component: Legajo},
  {path: '/miestudio/obra', name:"Obra", component: Obra},
  {path: '/admin/miestudio/ideas', name:"Ideas", component: Ideas},
  {path: '/admin/miestudio/documentacion', name:"Documentacion", component: Documentacion},
  {path: '/admin/miestudio/anteproyecto', name:"Anteproyecto", component: Anteproyecto},
  {path: '/admin/miestudio/avances', name:"Avances", component: Avances},
  {path: '/admin/miestudio/legajo', name:"Legajo", component: Legajo},
  {path: '/admin/miestudio/obra', name:"Obra", component: Obra},
  {path: '/*', name:"ErrorPage", component: ErrorPage},
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
