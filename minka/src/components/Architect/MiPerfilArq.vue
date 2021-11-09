<template>
  <div id="profile">
    <Header/>
    <div id="content-body">
      <NavBar></NavBar>
      <div class="content-home container_auxiliar">
        <h1>{{nombre}}</h1>
        <h2>Datos:</h2>
        <p>Usuario: {{usuario}}</p>
        <p>Mail: {{mail}}</p>
        <button class="logout" @click="goToStart()">Cerrar Sesión</button>
      </div>
      <Banner></Banner>

    </div>
    <Footer/>

  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
import NavBar from "./NavBar";
import Banner from "../Banner";

export default {
  name: "MiPerfil",
  components: {
    Header,
    Footer,
    NavBar,
    Banner
  },
  methods: {
    goToStart() {
      this.$router.push('/');
    },
  },
    data() {
      return {
        nombre: "Agustin Brogliati",
        usuario: "agusbrogliatti",
        mail: "agustinbrogliatti@gmail.com"

      }
    }
}
</script>

<style scoped>
.content-home{
  display: flex;
  flex-direction: column;
}
.logout{
  background-color: var(--main-color);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}
.logout:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.container_auxiliar {
  border: 1px solid steelblue;
}
</style>