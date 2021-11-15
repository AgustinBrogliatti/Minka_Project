<template>
  <div id="content-body3">
    <Header v-bind:userData="{name: this.userData.name, lastname: this.userData.lastname}"></Header>
    <br><br><br>
    <div id="content-body4">
      <h1>Quiénes Somos...</h1><br>
      <p>
        Desde Minka ofrecemos una variedad de herramientas y servicios para ser aprovechados tanto por arquitectos como clientes, pero todas ellas son atravesadas por un único fin: facilitar la comunicación y el trabajo entre ambas partes.<br><br>
        Al analizar el trabajo a realizar por arquitectos y la forma en que el fruto de eso era presentado al cliente, observamos cierta dificultad y poca sincronicidad a la hora de hacerlo, lo que generaba disconformidad y atrasaba la realización de proyectos. <br><br>De esta forma, decidimos crear una plataforma con el objetivo de atacar esa problemática, e intentar hacer de la comunicación entre ambas partes algo más fluido.
        Así, y a través de Minka, esperamos que las ideas de clientes junto con la creatividad y profesionalismo de los arquitectos vayan de la mano en todo el proceso, para así fomentar el correcto desarrollo del proyecto, sin dejar nada atrás o prevenir algo por delante.
      </p>
      <br><router-link to="home">{{message}}</router-link>

    </div>

    <br><br><br>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

export default {
  name: "QuienesSomos",
  components:{
    Header,
    Footer,
  },
  data () {
    return {
      userData: "",
      message: "<-- Volvé a la homepage "
    }
  },
  beforeMount() {
    if (this.$route.fullPath.match("admin") != null) {
      axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
          .then(response => {
            this.userData = response.data.admin
            console.log(response.data.message)
          })
    } else {
      axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
          .then(response => {
            this.userData = response.data.client
            console.log(response.data.message)
          })
    }
  }
}
</script>

<style scoped>
@import "../assets/CSS/main_layout.css";
@import "../assets/CSS/normalize.css";

#content-body3 {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  justify-content: space-between;
  background-image: url("../assets/img/backgrounds/marmol_texture.jpg");
  background-size: cover;
}

#content-body4 {
  justify-content: center;
  width: 80%;
  font-size: 20px;
  background-color: aliceblue;
  padding: 2%;
  margin-left: 10%;
}

</style>