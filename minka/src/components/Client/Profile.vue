<template>
  <div class="body-page container_auxiliar">
    <div id="content-profile">
      <h1>Mi Perfil</h1>
      <div>
        <label>Nombre de Usuario:</label><input type="text" readonly :value="clientID">
        <label>Nombre:</label><input type="text" v-model="name">
        <label>Apellido:</label><input type="text" v-model="lastname">
        <label>Email:</label><input type="text" v-model="email">
        <label>Telefono:</label><input type="tel" v-model="tel">
        <label>Direccion:</label><input type="text" v-model="address">
        <label>Contraseña Actual:</label><input type="password" v-model="password">
        <label>Nueva Contraseña:</label><input type="password" v-model="newPassword">
      </div>
      <input type="button" id="add-client_button" @click="updateAdminData()" value="Actualizar Datos">
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
      address: null,
      password: null,
      newPassword: null,
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
        "cuit": this.cuit
      };

      if (this.clientID != null && this.name != null && this.lastname != null
          && this.email != null && this.tel != null && this.address != null && this.password != null && this.newPassword != null) {
        if (this.password == this.clientData.password) {

          axios.put("http://localhost:4000/api/v1/clients/" + this.$route.params.id, newClientData)
              .then(response =>{
                console.log(response.data.message)
              })
        } else {console.log("Contrase;a incorrecta")}
      } else{console.log("Completa los datos capo")}
    },
  }
}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";
</style>