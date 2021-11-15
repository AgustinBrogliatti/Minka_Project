<template>
  <div class="body-page" id="content-contact">
    <h1>Arq. {{name}} {{lastname}}</h1>
    <div id="content-contacts">

      <div class="content-contacts__section">
        <div class="content-contacts__section-card">
          <p><i class="fas fa-envelope fa-2x"></i><br><br><strong>Mail: </strong><br><br>{{email}}</p>
        </div>
        <div class="content-contacts__section-card">
          <p><i class="fas fa-phone fa-2x"></i><br><br><strong>Teléfono: </strong><br><br>{{tel}}</p>
        </div>
      </div>

      <div class="content-contacts__section">
        <div class="content-contacts__section-card">
          <p><i class="fas fa-map-marker-alt fa-2x"></i><br><br><strong>Direccion: </strong><br><br>{{address}}</p>
        </div>
        <div class="content-contacts__section-card">
          <p><i class="fas fa-id-badge fa-2x"></i><br><br><strong>Nro. de Matrícula: </strong><br><br>{{card}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data () {
    return {
      adminData : null,
      name : "",
      lastname : "",
      address : "",
      tel : "",
      card : "",
      email : "",
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
        .then(response => {
          console.log(response.data.message)
          axios.get("http://localhost:4000/api/v1/admins/" + response.data.client.adminID)
              .then(response => {
                console.log(response.data.message)
                this.adminData = response.data.admin;
                this.name = this.adminData.name;
                this.lastname = this.adminData.lastname;
                this.address = this.adminData.address;
                this.email = this.adminData.email;
                this.card = this.adminData.card;
                this.tel = this.adminData.tel;
              })
              .catch(err => {
                console.log(err)
                console.log("INTERNAL SERVER ERROR 500")
                this.$router.push("/error-server")
              })
              .catch(err => {
                console.log(err)
                console.log("INTERNAL SERVER ERROR 500")
                this.$router.push("/error-server")
              })
        })
  },
}
</script>

<style scoped>

</style>