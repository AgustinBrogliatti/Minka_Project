<template>
  <div id="home_page">
    <HeaderPortada></HeaderPortada>
    <div id="content-body2">
      <div class="content-home2">
        <input class="form-submit" type="submit" value="Registrarse" @click="goRegistro()">
        <input class="form-submit" type="submit" value="Iniciar Sesion (soy cliente)" @click="goLogIn()">
        <input class="form-submit" type="submit" value="Iniciar Sesion (soy arquitecto)" @click="goLogIn()">
      </div>
      <div id="content-body3">
        <div id="content-body4">
          <h1>Quienes Somos...</h1><br>
          <p>Desde Minka ofrecemos una variedad de herramientas y servicios para ser aprovechados tanto por arquitectos como clientes, pero todas ellas son atravesadas por un único fin: facilitar la comunicación y el trabajo entre ambas partes.<br><br>
          Al analizar el trabajo a realizar por arquitectos y la forma en que el fruto de eso era presentado al cliente, observamos cierta dificultad y poca sincronicidad a la hora de hacerlo, lo que generaba disconformidad y atrasaba la realización de proyectos. <br><br>De esta forma, decidimos crear una plataforma con el objetivo de atacar esa problemática, e intentar hacer de la comunicación entre ambas partes algo más fluido.
          Así, y a través de Minka, esperamos que las ideas de clientes junto con la creatividad y profesionalismo de los arquitectos vayan de la mano en todo el proceso, para así fomentar el correcto desarrollo del proyecto, sin dejar nada atrás o prevenir algo por delante.</p>
        </div>
        <Banner id="content-body5"></Banner>
      </div>
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
  margin-bottom: 3rem;
  margin-left: 2%;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

.content-home2   {
  width: 66%;
  height: auto;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

#content-body2 {
  background-image: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  display: flex;
  flex-flow: column;
  align-items: center;
}

#content-body3 {
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-between;
}

#content-body4 {
  justify-content: flex-start;
  width: 80%;
  font-size: 20px;
  background-color: aliceblue;
  margin-left: 2rem;
  padding: 2%;
}

#content-body5 {
  justify-content: flex-end;
  border: 1px solid red;
  width: 150px;
  height: 300px;
  margin: 25px;
}
</style>