<template>
  <div class="body-page" id="content-contact">
    <h1>Arq. Miguel Unzué</h1>
    <div id="contacts3">
      <div id="contacts2">
        <div id="client-contact2">
          <p><i class="fas fa-envelope fa-2x"></i><br><br><strong>Mail: </strong><br><br>{{adminData.email}}</p>
        </div>
        <div id="client-contact2">
          <p><i class="fas fa-phone fa-2x"></i><br><br><strong>Teléfono: </strong><br><br>{{adminData.tel}}</p>
        </div>
      </div>
      <div id="contacts2">
        <div id="client-contact2">
          <p><i class="fas fa-map-marker-alt fa-2x"></i><br><br><strong>Direccion: </strong><br><br>{{adminData.address}}</p>
        </div>
        <div id="client-contact2">
          <p><i class="fas fa-id-badge fa-2x"></i><br><br><strong>Nro. de Matrícula: </strong><br><br>{{adminData.card}}</p>
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