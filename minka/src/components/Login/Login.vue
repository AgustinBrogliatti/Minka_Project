<template>

    <div class="login-page">
      <HeaderLogin/>

      <div class="content-login">
        <form class="login-form">
          <h1 class="login-title">Iniciar sesión</h1>
          <label class="login-form__label" >Email:</label>
          <input
              type="email"
              class="login-form__input"
              id="login-email"
              placeholder="Introduzca su email"
              required
              v-model="email"
              tabindex="1"
              autofocus
              ref="email"
          >
          <label class="login-form__label" >Contraseña:</label>
          <input
              type="password"
              class="login-form__input"
              id="login-password"
              placeholder="Introduzca su contraseña"
              required
              v-model="password"
              tabindex="20"
              @keyup.enter="login()"
          >

          <p v-if="error" class="login-error">Has introducido mal el email o la contraseña.</p>
          <input class="form-submit" type="button" value="Iniciar Sesión" tabindex="30" @click="login()">
          <h3 id="login-subtitle">¿Sos arquitecto?</h3>
          <router-link to="/admin/login"> <input class="btn-routerLink" type="button" value="Iniciar Sesión como Arquitecto" tabindex="40"></router-link>
        </form>

      </div>
    </div>

</template>

<script>
import HeaderLogin from "./HeaderLogin";
import axios from 'axios';

export default {
  name: "Login",
  components: {
    HeaderLogin
  },

  data: () => ({
    email: null,
    password: null,
    error: false
  }),
  methods: {
    login() {
      if (this.email != null && this.password != null) {
        axios.get("http://localhost:4000/api/v1/clients/" + this.email)
          .then(response => {
            console.log(response.data.message)
            if (response.data.client['email'] == this.email && response.data.client['password'] == this.password) {
              this.$router.push('/home/' + response.data.client.clientID)

            } else {
              this.error = true
              this.$refs.email.focus()
            }

          })
          .catch(response => {
            console.log(response.data.message)
          })
      } else {
        this.error = true
        this.$refs.email.focus()
      }
    }
  }

}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";
@import "../../assets/CSS/Login/login_form.css";


</style>