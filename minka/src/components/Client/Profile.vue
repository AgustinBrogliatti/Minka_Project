<template>
  <div class="body-page container_auxiliar">
    <div id="content-profile">
      <h1>Mi Perfil</h1>
      <div>
        <label>Nombre de Usuario:</label><input type="text" readonly :value="clientID">
        <label>Nombre:</label><input type="text" v-model="name">
        <label>Apellido:</label><input type="text" v-model="lastname">
        <label>Email:</label><input type="text" v-model="email">
        <label>Dni:</label><input type="text" v-model="dni">
        <label>Cuit:</label><input type="text" v-model="cuit">
        <label>Telefono:</label><input type="tel" v-model="tel">
        <label>Direccion:</label><input type="text" v-model="address">
        <label>Contraseña Actual:</label><input type="password" v-model="password">
        <label>Nueva Contraseña:</label><input type="password" v-model="newPassword">
      </div>
      <p class="message" v-if="message">Datos actualizados exitosamente</p>
      <p v-if="error" class="login-error">{{alertMessage}}</p>
      <input type="button" class="add_button"  @click="updateAdminData()" value="Actualizar Datos">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
        .then(response => {
          console.log(response.data.message)
          this.clientData = response.data.client
          this.clientID = this.clientData.clientID
          this.name = this.clientData.name
          this.lastname = this.clientData.lastname
          this.email = this.clientData.email
          this.adminID = this.clientData.adminID
          this.country = this.clientData.country
          this.province = this.clientData.province
          this.city = this.clientData.city
          this.dni = this.clientData.dni
          this.cuit = this.clientData.cuit
          this.tel = this.clientData.tel
          this.address = this.clientData.address
        })
        .catch(err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
          this.$router.push("/error-server")
        })

  },
  data () {
    return {
      clientData: null,
      clientID: null,
      name: null,
      lastname: null,
      email: null,
      tel: null,
      country: null,
      province: null,
      city: null,
      dni: null,
      cuit: null,
      address: null,
      password: null,
      newPassword: null,
      adminID: null,
      message: false,
      error: false,
      alertMessage: "",
    }
  },
  methods: {
    updateAdminData() {
      let newClientData = {
        "clientID": this.clientID,
        "password": this.newPassword,
        "name": this.name,
        "lastname": this.lastname,
        "email": this.email,
        "tel": this.tel,
        "address": this.address,
        "dni": this.dni,
        "cuit": this.cuit,
        "adminID": this.adminID,
        "country": this.country,
        "province": this.province,
        "city": this.city,
      };

      if (this.clientID != null && this.name != null && this.lastname != null
          && this.email != null && this.tel != null && this.address != null && this.password != null && this.newPassword != null) {
        if (this.password == this.clientData.password) {

          axios.put("http://localhost:4000/api/v1/clients/" + this.$route.params.id, newClientData)
              .then(response =>{
                console.log(response.data.message)
                setTimeout(function(){ location.reload(); }, 2000);
                if (this.error == true) {
                  this.error = false
                  this.message = true
                } else {this.message = true}
              })
              .catch(err => {
                console.log(err)
                console.log("INTERNAL SERVER ERROR 500")
                this.$router.push("/error-server")
              })
        }  else {
          this.alertMessage = "Contraseña incorrecta"
          if (this.message == true) {
            this.message = false
            this.error = true
          } else {this.error = true}
        }
      } this.alertMessage = "Debes completar todos los campos"
      if (this.message == true) {
        this.message = false
        this.error = true
      } else {this.error = true}
    },
  }
}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";
</style>