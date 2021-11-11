<template>
  <div id="content-body3">
    <Header/>
    <br><br><br>
    <div id="content-body4">
      <h1>Quiénes Somos...</h1><br>
      <p>
        Desde Minka ofrecemos una variedad de herramientas y servicios para ser aprovechados tanto por arquitectos como clientes, pero todas ellas son atravesadas por un único fin: facilitar la comunicación y el trabajo entre ambas partes.<br><br>
        Al analizar el trabajo a realizar por arquitectos y la forma en que el fruto de eso era presentado al cliente, observamos cierta dificultad y poca sincronicidad a la hora de hacerlo, lo que generaba disconformidad y atrasaba la realización de proyectos. <br><br>De esta forma, decidimos crear una plataforma con el objetivo de atacar esa problemática, e intentar hacer de la comunicación entre ambas partes algo más fluido.
        Así, y a través de Minka, esperamos que las ideas de clientes junto con la creatividad y profesionalismo de los arquitectos vayan de la mano en todo el proceso, para así fomentar el correcto desarrollo del proyecto, sin dejar nada atrás o prevenir algo por delante.
      </p>
      <br><router-link to="home">Volvé a la homepage</router-link>
    </div>
    <br><br><br>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "QuienesSomos",
  components:{
    Header,
    Footer,

  }
}
</script>

<style scoped>
@import "../assets/CSS/main layout.css";
@import "../assets/CSS/normalize.css";

#content-body3 {
  display: flex;
  width: 100%;
  flex-flow: column;
  justify-content: space-between;
  background-image: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") ;
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