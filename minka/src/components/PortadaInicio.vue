<template>
  <div id="home_page">
    <HeaderPortada></HeaderPortada>
    <div id="content-body">
      <input class="form-submit" type="submit" value="Registrarse" @click="goRegistro()">
      <input class="form-submit" type="submit" value="Iniciar Sesion (soy cliente)" @click="goLogIn()">
      <input class="form-submit" type="submit" value="Iniciar Sesion (soy arquitecto)" @click="goLogIn()">
      <h1>Quienes Somos...</h1>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "./Banner";
import Footer from "./Footer";
import HeaderPortada from "./HeaderPortada";

export default {
  name: "HomePage",
  components:{
    HeaderPortada,
    Banner,
    Footer
  },
  methods:{
    goLogIn(){
      this.$router.push('/login');
    },
    goRegistro(){
      this.$router.push('/registro');
    }
  }
}
</script>

<style scoped>
@import "../assets/CSS/main layout.css";
@import "../assets/CSS/normalize.css";

.form-submit {
  background: #1ab188;
  height: 20%;
  width: 40%;
  border: none;
  color: white;
  margin-top: 3rem;
  margin-left: 2%;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.content-home2   {
  margin: 5% auto 3% auto;
  padding: 2.4%;
  border: 1px solid red;
  width: 66%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
</style>