<template>
  <div id="content-body3">
    <HeaderLogin></HeaderLogin>
    <br><br><br>
    <div id="content-body4">
      <h1>ERROR 404. Página no encontrada!</h1>
      <img src="../assets/img/error-404-not-found.webp">
      <p>
        La URL solicitada no existe.<br>
        Intentá reescribiendola o <u><router-link :to="login">{{message}}</router-link></u>
      </p>

    </div>

    <br><br><br>
    <Footer/>
  </div>
</template>

<script>
import HeaderLogin from "@/components/Login/HeaderLogin";


export default {
  name: "QuienesSomos",
  components:{
    HeaderLogin,
  },
  data () {
    return {
      userData: "",
      message: "volvé al inicio ",
      login: "/"
    }
  },
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
  text-align: center;
  justify-content: center;
  width: 80%;
  font-size: 20px;
  background-color: aliceblue;
  padding: 2%;
  margin-left: 10%;
}
p {
  text-align: left;
}

img{
  width: 35%;
}
</style>