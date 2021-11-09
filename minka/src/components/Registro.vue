<template>
  <div id="registro">
    <HeaderPortada></HeaderPortada>
  <div class="login">
      <h1 class="title">Regístrese</h1>
      <form action class="form" @submit.prevent="registro">

        <label class="form-label" for="#email">Nombre:</label>
        <input
            v-model="name"
            class="form-input"
            type="text"
            id="nombre"
            required
            placeholder="Introduzca su nombre"
        >

        <label class="form-label" for="#email">Apellido:</label>
        <input
            v-model="lastname"
            class="form-input"
            type="text"
            id="apellido"
            required
            placeholder="Introduzca su apellido"
        >

        <label class="form-label" for="#email">Email:</label>
        <input
            v-model="email"
            class="form-input"
            type="email"
            id="email"
            required
            placeholder="Introduzca su email"
        >

        <label class="form-label" for="#username">Nombre de Usuario:</label>
        <input
            v-model="username"
            class="form-input"
            type="username"
            id="username"
            placeholder="Cree un Nombre de Usuario"
        >
        <label class="form-label" for="#password">Contraseña:</label>
        <input
            v-model="password"
            class="form-input"
            type="password"
            id="password"
            placeholder="Introduzca su contraseña"
        >
        <label class="form-label" for="#repeatPassword">Repita su contraseña:</label>
        <input
            v-model="repeatPassword"
            class="form-input"
            type="password"
            id="repeatPassword"
            placeholder="Repita su contraseña"
        >


        <input class="form-submit" @click="goHome"  type="submit" value="Registrarse">




        <button @click="mostrarlistaObjetos()"> MOSTRAR LISTA </button>
        <br>
        {{ objectsList }}
      </form>
  </div>
  </div>


</template>

<script>
import HeaderPortada from "./HeaderPortada";
export default {
  name: "Registro",
  components: HeaderPortada,
  data: () => ({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    objectsList: [],
    error: false
  }),
  methods: {
    registro() {
      console.log(this.name);
      console.log(this.lastname);
      console.log(this.email);
      console.log(this.username);
      console.log(this.password);
      console.log(this.repeatPassword)
    },
    goHome(){
      this.$router.push('/home');
    },
    mostrarlistaObjetos() {
      let nombre =this.name
      let apellido = this.lastname
      let correo = this.email
      let usuario = this.username
      let contraseña = this.password
      let repetir = this.repeatPassword
      let projectObject = {
        "name": nombre,
        "lastname": apellido,
        "email": correo,
        "user": usuario,
        "password": contraseña,
        "repeat_pw": repetir
      }
      this.objectsList.push(projectObject)
    }

  }
}

</script>

<style scoped>
@import "../assets/CSS/main layout.css";
@import "../assets/CSS/normalize.css";

.login {
  padding: 5rem;
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
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
&:hover {
   background: #0b9185;
 }
</style>