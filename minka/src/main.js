import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from "./components/HomePage";
import HomePageArq from "./components/HomePageArq";
import LoginArq from "./components/Login/LoginArq";
import MiEstudio from "./components/MiEstudio";
import Registro from "./components/Registro";
import LogInClient from "./components/LogInClient";
import NewProject from "./components/AddProject"
import MiPerfil from "./components/MiPerfil";
import Contacto from "./components/Contacto";
import ErrorPage from "./components/ErrorPage";
import Anteproyecto from "./components/MiEstudio/Anteproyecto";

//npm install --save @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/js/all'
import QuienesSomos from "./components/QuienesSomos";
import ContactoArqui from "./components/ContactoArqui";
import MiPerfilArq from "./components/MiPerfilArq";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', name:"LogInClient", component: LogInClient},
  {path:'/admin/login', name:"LoginArq", component:LoginArq},
  {path:'/home', name:"HomePage", component:HomePage},
  {path:'/admin/home', name:"HomePageArq", component:HomePageArq},
  {path:'/miestudio', name:"MiEstudio", component: MiEstudio},
  {path:'/admin/miestudio', name:"MiEstudio", component: MiEstudio},
  {path:'/admin/registro', name:"Registro", component: Registro},
  {path: '/admin/addproject', name:"NewProject", component: NewProject},
  {path: '/miperfil', name:"MiPerfil", component: MiPerfil},
  {path: '/admin/miperfil', name:"MiPerfil", component: MiPerfilArq},
  {path: '/contacto', name:"Contacto", component: Contacto},
  {path: '/admin/contacto', name:"Contacto", component: ContactoArqui},
  {path: '/quienessomos', name:"QuienesSomos", component: QuienesSomos},
  {path: '/admin/quienessomos', name:"QuienesSomos", component: QuienesSomos},
  {path: '/*', name:"ErrorPage", component: ErrorPage},
  {path: '/miestudio/anteproyecto', name:"Anteproyecto", component: Anteproyecto},
]


const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
