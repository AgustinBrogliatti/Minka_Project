<template>
  <div class="body-page" id="content-contact">
    <h1>Contacto</h1>
    <div id="contacts">
      <div id="client-contact">
        <p>Nombre: {{adminData.name}} {{adminData.lastname}}</p>
        <p>Email: {{adminData.email}}</p>
        <p>Telefono: {{adminData.tel}}</p>
        <p>Direccion: {{adminData.address}}</p>
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
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
        .then(response => {
          console.log(response)
          axios.get("http://localhost:4000/api/v1/admins/" + response.data.client.adminID)
              .then(response => {
                console.log(response)
                  this.adminData = response.data.admin
              })

        })
  }
}
</script>

<style scoped>

</style>