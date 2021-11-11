<template>

    <div id="login-page">

      <HeaderLogin/>

      <div class="content-login">

        <form class="login-form">
          <h1 class="login-title">Iniciar sesión</h1>
          <label class="login-form__label" >Email:</label>
          <input
              class="login-form__input"
              id="login-email"
              type="email"
              placeholder="Introduzca su email"
              required
              v-model="email"
          >
          <label class="login-form__label" >Contraseña:</label>
          <input
              class="login-form__input"
              id="login-password"
              type="password"
              placeholder="Introduzca su contraseña"
              required
              v-model="password"
          >

          <p id="login-error">Has introducido mal el email o la contraseña.</p>
          <router-link to="/home" class="enter-button"> <input class="form-submit" type="submit" value="Iniciar Sesión"> </router-link>
          <h3 id="login-subtitle">¿Sos arquitecto?</h3>
          <router-link to="/admin/login" class="enter-button"> <input class="to-loginArq" type="submit" value="Iniciar Sesión como Arquitecto" > </router-link>
        </form>
      </div>

    </div>

</template>

<script>
import HeaderLogin from "./HeaderLogin";

export default {
  name: "HomePage",
  components: {
    HeaderLogin
  },

  data: () => ({
    email: "",
    password: "",
    error: true
  }),
  methods: {

  }
}
</script>

<style scoped>
@import "../assets/CSS/main layout.css";
@import "../assets/CSS/normalize.css";


#login-page {
  background-image: url("../assets/img/backgrounds/background_12.jpg");
  background-size: cover;
  display: flex;
  flex-flow: column;
  align-items: center;
}



.content-login {
  padding: 2%;
  margin-top: 50px;
}

.login-title {
  text-align: center;
  color: white
}

.login-form {
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  padding: 40px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #2A3A46;
  border-radius: 15px;
  box-shadow: 0 4px 10px 4px #B3B3B3;
}

.login-form__label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.login-form__input {
  padding: 10px 15px;
  border: 1px solid white;
  color: white;
}

#login-password {
  margin-bottom: 20px;
}

#login-error {
  color: #7C2020;
  background: #E9BEBE;
  border-radius: 8px;
  padding: 10px;
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  padding: 5%;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  border-radius: 8px;

 }

#login-subtitle{
  text-align: center;
  color: white;
  margin: 0;
  margin-top: 35px;
}


.to-loginArq {
  border: 1px solid #1ab188;
  background: none;
  color: white;
  padding: 5%;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  border-radius: 8px;
}





:first-of-type {
  margin-top: 0rem;
}



:focus {
  outline: 0;
  border-color: #1ab188;
}



.enter-button{
  text-align: center;
  margin-top: 8%;
  margin-bottom: 10%;
}


</style>