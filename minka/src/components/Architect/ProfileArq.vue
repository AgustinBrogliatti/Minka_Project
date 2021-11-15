<template>
  <div class="body-page container_auxiliar">
    <div id="content-profile">
      <h1>Mi Perfil</h1>
      <div>
        <label>Nombre de Usuario:</label><input type="text" readonly :value="adminID">
        <label>Nombre:</label><input type="text" v-model="name">
        <label>Apellido:</label><input type="text" v-model="lastname">
        <label>Email:</label><input type="text" v-model="email">
        <label>Telefono:</label><input type="tel" v-model="tel">
        <label>Direccion:</label><input type="text" v-model="address">
        <label>Matricula (Nro. de 8 digitos):</label><input type="number" v-model="card">
        <label>Contraseña Actual:</label><input type="password" v-model="password">
        <label>Nueva Contraseña:</label><input type="password" v-model="newPassword">
      </div>
      <p class="message" v-if="message">Datos actualizados exitosamente</p>
      <p v-if="error" class="login-error">{{alertMessage}}</p>
      <input type="button" id="add-client_button" @click="updateAdminData()" value="Actualizar Datos">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileArq",
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
        .then(response => {
          console.log(response.data.message)
          this.adminData = response.data.admin
          this.adminID = this.adminData.adminID
          this.name = this.adminData.name
          this.lastname = this.adminData.lastname
          this.email = this.adminData.email
          this.tel = this.adminData.tel
          this.address = this.adminData.address
          this.card = this.adminData.card
        })

  },
  data () {
    return {
      adminData: "",
      adminID: "",
      name: "",
      lastname: "",
      email: "",
      tel: "",
      address: "",
      password: "",
      newPassword: "",
      card: "",
      message: false,
      error: false,
      alertMessage: "",
    }
  },
  methods: {
    updateAdminData() {
      let newAdminData = {
        "adminID": this.adminID,
        "password": this.newPassword,
        "name": this.name,
        "lastname": this.lastname,
        "email": this.email,
        "tel": this.tel,
        "address": this.address,
        "card": this.card,
      };

      if (this.adminID != "" && this.name != "" && this.lastname != "" && this.card != ""
          && this.email != "" && this.tel != "" && this.address != "" && this.password != "" && this.newPassword != "") {
        if (this.password == this.adminData.password) {

          axios.put("http://localhost:4000/api/v1/admins/" + this.$route.params.id, newAdminData)
              .then(response =>{
                console.log(response.data.message)
                setTimeout(function(){ location.reload(); }, 2000);
                if (this.error == true) {
                  this.error = false
                  this.message = true
                } else {this.message = true}
              })
        } else {
          this.alertMessage = "Contraseña incorrecta"
          if (this.message == true) {
            this.message = false
            this.error = true
          } else {this.error = true}
        }
      } else{
          this.alertMessage = "Debes completar todos los campos"
          if (this.message == true) {
            this.message = false
            this.error = true
          } else {this.error = true}
       }
    }
  }
  

}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";
</style>