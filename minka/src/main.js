import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Login from "./components/Login/Login";
import LoginArq from "./components/Login/LoginArq";
import Register from "./components/Login/Register";

import Home from "./components/Client/Home";
import MiPerfil from "./components/Client/MiPerfil";
import Contacto from "./components/Client/Contacto";

import HomeArq from "./components/Architect/HomeArq";
import AddClient from "@/components/Architect/AddClientView";
import AddProject from "@/components/Architect/AddProjectView";
import ProfileArq from "./components/Architect/ProfileArqView";
import ContactArq from "./components/Architect/ContactArqView";

import MisArchivos from "./components/MiEstudio/MisArchivos";
import Ideas from "./components/MiEstudio/Ideas";
import Documentacion from "./components/MiEstudio/Documentacion";
import Anteproyecto from "./components/MiEstudio/Anteproyecto";
import Avances from "./components/MiEstudio/Avances";
import Legajo from "./components/MiEstudio/Legajo";
import Obra from "./components/MiEstudio/Obra";

import QuienesSomos from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";

//npm install --save @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all'



Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', name: "login", component: Login},
  {path: '/admin/login', name: "loginArq", component: LoginArq},
  {path: '/admin/register', name: "register", component: Register},


  {path: '/:id/home', name: "home", component: Home},
  {path: '/profile', name:"MiPerfil", component: MiPerfil},
  {path: '/contact', name:"Contacto", component: Contacto},
  {path: '/quienessomos', name:"QuienesSomos", component: QuienesSomos},

  {path:'/miestudio/inicio', name:"MiEstudio", component: MisArchivos},
  {path: '/miestudio/ideas', name:"Ideas", component: Ideas},
  {path: '/miestudio/documentacion', name:"Documentacion", component: Documentacion},
  {path: '/miestudio/anteproyecto', name:"Anteproyecto", component: Anteproyecto},
  {path: '/miestudio/avances', name:"Avances", component: Avances},
  {path: '/miestudio/legajo', name:"Legajo", component: Legajo},
  {path: '/miestudio/obra', name:"Obra", component: Obra},


  {path: '/admin/:id/home', name: "homeArq", component: HomeArq},
  {path:'/admin/:id/miestudio/:proyect/misarchivos', name: "misArchivos", component: MisArchivos},
  {path: '/admin/:id/addclient', name:"addClient", component: AddClient},
  {path: '/admin/:id/addproyect', name:"addProyect", component: AddProject},
  {path: '/admin/:id/profile', name:"profileArq", component: ProfileArq},
  {path: '/admin/:id/contact', name:"contact", component: ContactArq},
  {path: '/admin/quienessomos', name:"QuienesSomos", component: QuienesSomos},

  {path: '/admin/:id/miestudio/:proyect/ideas', name:"Ideas", component: Ideas},
  {path: '/admin/:id/miestudio/:proyect/documentacion', name:"Documentacion", component: Documentacion},
  {path: '/admin/:id/miestudio/:proyect/anteproyecto', name:"Anteproyecto", component: Anteproyecto},
  {path: '/admin/:id/miestudio/:proyect/avances', name:"Avances", component: Avances},
  {path: '/admin/:id/miestudio/:proyect/legajo', name:"Legajo", component: Legajo},
  {path: '/admin/:id/miestudio/:proyect/obra', name:"Obra", component: Obra},

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