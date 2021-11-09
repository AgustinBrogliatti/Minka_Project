<template>
  <div class="login-arq">
    <HeaderPortada/>
    <div class="login">
      <h1 class="title">Inicie sesión como arquitecto</h1>
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
        <router-link to="/admin/home" class="enter-button"> <input class="form-submit" type="submit" value="Login"> </router-link>
        <h4>¿Todavía no tenes cuenta?</h4>
        <router-link to="/admin/registro" class="enter-button"> <input class="form-submit" type="submit" value="Registrarse"> </router-link>
        <button @click= "loginArq()" > LOGIN ARQ </button>
        {{listaObjetos}}
      </form>

    </div>
    <Footer/>
  </div>
</template>

<script>

import HeaderPortada from "../HeaderPortada";
import Footer from "../Footer";


export default {
  name: "Login",
  components:{
    HeaderPortada,
    Footer
  },
  data: () => ({
      email: "",
      password: "",
      listaObjetos: [],
      error: false
    }),
    methods: {
      login() {
        console.log(this.email);
        console.log(this.password);
      },
      loginArq(){
        let email = this.email
        let password = this.password
        let projectObject = {
          "email" : email,
          "password": password
        }
        this.listaObjetos.push(projectObject)
      }
    }
}
</script>

<style scoped>
@import "../../assets/CSS/main layout.css";
@import "../../assets/CSS/normalize.css";

.login {
  padding: 2%;
  background-image: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") ;
  background-size: cover;
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
  width: 50%;
  border-radius: 8px;
}

 h4{
   text-align: center;
   color: white;
 }


 .enter-button{
   text-align: center;
 }

</style>