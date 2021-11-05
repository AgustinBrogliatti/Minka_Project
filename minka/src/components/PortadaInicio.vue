<template>
  <div id="home_page">
    <HeaderPortada></HeaderPortada>
    <div id="content-body2">
      <div class="login">
        <h1 class="title">Inicie sesión</h1>
        <form action class="form" @submit.prevent="login">
          <label class="form-label" for="#email">Email:</label>
          <input
              v-model="email"
              class="form-input"
              type="email"
              id="email"
              required
              placeholder="Introduzca su email"
          >
          <label class="form-label" for="#password">Contraseña:</label>
          <input
              v-model="password"
              class="form-input"
              type="password"
              id="password"
              placeholder="Introduzca su contraseña"
          >
          <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
          <input class="form-submit" type="submit" value="Login" @click="goClientView()">
          <input class="form-submit" type="submit" value="Iniciar Sesión como Arquitecto" @click="goLogin()">
          <button @click="viewLogin()">Boton</button>
          {{listadeObjetos}}
        </form>
      </div>
      <div id="content-body3">
        <div id="content-body4">
          <h1>Quiénes Somos...</h1><br>
          <p>Desde Minka ofrecemos una variedad de herramientas y servicios para ser aprovechados tanto por arquitectos como clientes, pero todas ellas son atravesadas por un único fin: facilitar la comunicación y el trabajo entre ambas partes.<br><br>
          Al analizar el trabajo a realizar por arquitectos y la forma en que el fruto de eso era presentado al cliente, observamos cierta dificultad y poca sincronicidad a la hora de hacerlo, lo que generaba disconformidad y atrasaba la realización de proyectos. <br><br>De esta forma, decidimos crear una plataforma con el objetivo de atacar esa problemática, e intentar hacer de la comunicación entre ambas partes algo más fluido.
          Así, y a través de Minka, esperamos que las ideas de clientes junto con la creatividad y profesionalismo de los arquitectos vayan de la mano en todo el proceso, para así fomentar el correcto desarrollo del proyecto, sin dejar nada atrás o prevenir algo por delante.</p>

        </div>
        <br>
        <Banner id="content-body5"></Banner>
        <br>
      </div>
      <br>
      <br>
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

  data: () => ({
    email: "",
    password: "",
    listadeObjetos: [],
    error: false
  }),
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
  },
    goClientView(){
    this.$router.push('/clientview');
  },
    goLogin(){
      this.$router.push('/loginArq')
    },
    viewLogin(){
      let email = this.email
      let password = this.password
      let projectObject = {
        "email" : email,
        "password": password
      }
      this.listadeObjetos.push(projectObject)
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
  padding: 2%;
  margin-left: 1%;
}

#content-body5 {
  justify-content: flex-end;
  border: 1px steelblue;
  width: 150px;
  height: 300px;
  margin: 25px;
}

.login {
  padding: 2%;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
:first-of-type {
  margin-top: 0rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}

:focus {
  outline: 0;
  border-color: #1ab188;
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: -10px;
  width: auto;
}
&:hover {
   background: #0b9185;
 }
</style>