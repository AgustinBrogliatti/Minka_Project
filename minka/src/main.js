import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Login from "./components/Login/Login";
import LoginArq from "./components/Login/LoginArq";
import Register from "./components/Login/Register";

import Home from "./components/Client/Home";
import HomeArq from "./components/Architect/HomeArq";

import MisArchivos from "./components/MiEstudio/MisArchivos";
import MiPerfil from "./components/Client/MiPerfil";
import Contacto from "./components/Client/Contacto";
import Anteproyecto from "./components/MiEstudio/Anteproyecto";
import ErrorPage from "./components/ErrorPage";
import QuienesSomos from "./components/QuienesSomos";
import ContactoArqui from "./components/Architect/ContactoArq";
import MiPerfilArq from "./components/Architect/MiPerfilArq";

import Ideas from "./components/MiEstudio/Ideas";
import Documentacion from "./components/MiEstudio/Documentacion";
import Avances from "./components/MiEstudio/Avances";
import Legajo from "./components/MiEstudio/Legajo";
import Obra from "./components/MiEstudio/Obra";

//npm install --save @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all'
import AddClient from "@/components/Architect/AddClientView";
import AddProject from "@/components/Architect/AddProjectView";


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', name: "login", component: Login},
  {path:'/admin/login', name: "loginArq", component: LoginArq},
  {path:'/admin/register', name: "register", component: Register},

  {path:'/home/:id', name: "home", component: Home},
  {path:'/admin/home/:id', name: "homeArq", component: HomeArq},
  {path: '/admin/home/:id/addclient', name:"addClient", component: AddClient},
  {path: '/admin/home/:id/addproyect', name:"addProyect", component: AddProject},



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