<template>

  <div id="home_page">
    <HeaderPortada/>
    <div id="content-body2">
      <div class="login">
        <h1 class="title">Iniciar sesión</h1>
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
          <router-link to="/home" class="enter-button"> <input class="form-submit" type="submit" value="Iniciar sesión"> </router-link>
          <h4>¿Sos arquitecto?</h4>
          <router-link to="/admin/login" class="enter-button"> <input class="form-submit" type="submit" value="Iniciar Sesión como Arquitecto" > </router-link>
          <button @click="viewLogin()">Boton</button>
          {{listadeObjetos}}
        </form>
      </div>
      <br>
      <br>
    </div>

  </div>
</template>

<script>
import HeaderPortada from "./HeaderPortada";

export default {
  name: "HomePage",
  components:{
    HeaderPortada
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

#content-body2 {
  background-image: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  padding: 5%;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8%;
  margin-bottom: 10%;
  width: 85%;
  border-radius: 8px;
}

.enter-button{
  text-align: center;
}

h4{
  text-align: center;
  color: white;
}

</style>