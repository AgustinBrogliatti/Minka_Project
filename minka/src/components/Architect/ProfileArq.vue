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
        })

  },
  data () {
    return {
      adminData: null,
      adminID: null,
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
      let newAdminData = {
        "adminID": this.adminID,
        "password": this.newPassword,
        "name": this.name,
        "lastname": this.lastname,
        "email": this.email,
        "tel": this.tel,
        "address": this.address,
      };

      if (this.adminID != null && this.name != null && this.lastname != null
          && this.email != null && this.tel != null && this.address != null && this.password != null && this.newPassword != null) {
        if (this.password == this.adminData.password) {

          axios.put("http://localhost:4000/api/v1/admins/" + this.$route.params.id, newAdminData)
              .then(response =>{
                console.log(response.data.message)
              })
        } else {console.log("Contrase;a incorrecta")}
      } else{console.log("Completa los datos capo")}
    }
  }
  

}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";
</style>