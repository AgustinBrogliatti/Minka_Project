<template>
  <div class="register-page">
    <HeaderLogin/>

    <div class="content-login">
        <form class="login-form">
          <h1 class="login-title">Registrarse</h1>
          <label class="login-form__label">Nombre:</label>
          <input
              type="text"
              class="login-form__input"
              id="login-name"
              placeholder="Introduzca su nombre"
              required
              v-model="name"
              tabindex="1"
          >

          <label class="login-form__label">Apellido:</label>
          <input
              type="text"
              class="login-form__input"
              id="login-lastname"
              placeholder="Introduzca su apellido"
              required
              v-model="lastname"
              tabindex="20"
          >

          <label class="login-form__label">Email:</label>
          <input
              type="email"
              class="login-form__input"
              id="login-email"
              placeholder="Introduzca su email"
              required
              v-model="email"
              tabindex="30"
              @focusout="userIDCreate()"
          >

          <label class="login-form__label">Nombre de Usuario:</label>
          <input
              type="username"
              class="login-form__input"
              id="login-username"
              placeholder="Cree un Nombre de Usuario"
              required
              v-model="username"

          >
          <label class="login-form__label">Contraseña:</label>
          <input
              type="password"
              class="login-form__input"
              id="password"
              placeholder="Introduzca su contraseña"
              required
              v-model="password"
              tabindex="50"
          >
          <label class="login-form__label">Repita su contraseña:</label>
          <input
              type="password"
              class="login-form__input"
              id="register-password"
              placeholder="Repita su contraseña"
              required
              v-model="repeatPassword"
              tabindex="60"
          >
          <p v-if="error" class="login-error">Debes completar todos los campos</p>
          <p v-if="errorPass" class="login-error" :style="styleMessage">{{errorMessage}}</p>
          <input class="form-submit" type="button" value="Registrarse" tabindex="70" @click="register()">
          <router-link to="/admin/login"> <input class="btn-routerLink" type="submit" value="Volver a Iniciar Sesión" tabindex="80"> </router-link>

        </form>
    </div>
  </div>


</template>

<script>
import HeaderLogin from "./HeaderLogin";
import axios from "axios";

export default {
  name: "Registro",
  components: {
    HeaderLogin
  },
  data: () => ({
    name: null,
    lastname: null,
    email: null,
    password: null,
    repeatPassword: null,
    username: null,
    error: false,
    errorPass: false,
    message: null,
    styleMessage: null
  }),
  methods: {
    userIDCreate() {
      let name = this.name
      let lastname = this.lastname
      if (name != "" && lastname != "") {
        let newName = name.match(/^[a-z]/ig) + lastname + Math.floor(Math.random() * (99 - 10) + 10);
        this.username = newName

      }
    },
    register() {
      if (this.name != null && this.lastname != null &&
          this.email != null && this.password != null &&
          this.repeatPassword != null && this.username != null) {

        if (this.password == this.repeatPassword) {

          let adminData = {
            "adminID": this.username,
            "password": this.password,
            "name": this.name,
            "lastname": this.lastname,
            "email": this.email,
            "tel": '',
            "adress": '',
          };

          axios.post('http://localhost:4000/api/v1/admins', adminData)
              .then(response => {
                console.log(response.data.message)
                this.message = response.data.message

                if (response.data.status == "201 CREATED") {
                  this.styleMessage = {color: 'green', backgroundColor: '#CCFFCC'}
                }

                if (this.error == true) {
                  this.error = false
                  this.errorPass = true
                } else {this.errorPass = true}
              })
              .catch(err => {
                console.log(err)
                console.log("INTERNAL SERVER ERROR 500")
              })
        } else {
          this.message = "The passwords are different"
          if (this.error == true) {
            this.error = false
            this.errorPass = true
          } else {this.errorPass = true}

        }
      } else{this.error = true}



    },
  }

}

</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";
@import "../../assets/CSS/login_form.css";


</style>