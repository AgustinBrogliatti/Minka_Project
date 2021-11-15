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

      <h1>Nuestro equipo</h1>
      <div id="team-members">

        <div id="content-members">
          <div class="team-image" id="team-image1"></div>
          <div><span id="name">Agustin Brogliatti</span></div>
        </div>
        <div id="content-members">
          <div class="team-image" id="team-image2"></div>
          <div><span id="name">Martino Boca</span></div>
        </div>
        <div id="content-members">
          <div class="team-image" id="team-image3"></div>
          <div><span id="name">Nicolas Gutkowski</span></div>
        </div>
        <div id="content-members">
          <div class="team-image" id="team-image4"></div>
          <div><span id="name">Fermin Iturriaga</span></div>
        </div>
        <div id="content-members">
          <div class="team-image" id="team-image5"></div>
          <div><span id="name">Mateo Sceia</span></div>
        </div>


      </div>

      <h2> ¿Necesitás ayuda? ¡Contactanos! </h2>

      <h2>Email de soporte:</h2> <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhkXBQBJcXmkjwpJpRxDdWmxwVHjkFQhGrgJfSdKVnhkDsCCFTBNgCRnjFBspmZPkwtdD">minkasupport@gmail.com</a>

      <br>
      <br>

      <router-link to="home"> <button class="add_button"> <i class="fas fa-arrow-alt-circle-left"></i> {{message}} </button>    </router-link>

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
      message: "Volvé a la homepage "
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
  height: 100%;
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

#team-members {
  height: 300px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-around;
  text-align: end;
}


.team-image {
  height: 200px;
  width: 200px;
  border: 1px solid grey;
  border-radius: 50%;
  background-size: cover;
  margin-bottom: 15px;
}

#team-image1 {
  background-image: url("../../src/assets/img/OurTeam/agus.jpg");

}
#team-image2 {
  background-image: url("../../src/assets/img/OurTeam/marto.jpg");

}
#team-image3 {
  background-image: url("../../src/assets/img/OurTeam/guti.jpg");

}
#team-image4 {
  background-image: url("../../src/assets/img/OurTeam/fermin.jpg");

}

#team-image5 {
  background-image: url("../../src/assets/img/OurTeam/mateo.jpg");

}
#content-members {
  display: flex;
  flex-direction: column;
  text-align: center;

}



</style>

