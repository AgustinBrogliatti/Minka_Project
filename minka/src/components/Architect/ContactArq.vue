<template>
  <div class="body-page" id="content-contact">
      <h1>Contactos</h1>
    <div id="contacts">
      <div id="client-contact" v-for="(client, index) in clients" :key="index">
        <p>Nombre: {{client.name}} {{client.lastname}}</p>
        <p>Email: {{client.email}}</p>
        <p>Telefono: {{client.tel}}</p>
        <p>Direccion: {{client.address}}</p>
        <p>Pais: {{client.country}}</p>
        <p>Provincia: {{client.province}}</p>
        <p>Ciudad: {{client.city}}</p>
        <p>Proyectos:</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactArq",
  data () {
    return {
      clients: null,
      proyects: [],
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/clients?admin=" + this.$route.params.id)
      .then(response => {
        this.clients = response.data.clients
      })
  },
  methods: {
    // getClientProyects(clientID) {
    //
    //   axios.get("http://localhost:4000/api/v1/proyects?client=" + clientID)
    //       .then(response => {
    //         let proyects = response.data.proyects
    //         var names = []
    //         for (const proyect of proyects) {
    //           names.push(proyect.name)
    //         }
    //         console.log(names)
    //         return this.proyects.push(names)
    //       })
    // }
  }
}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";
</style>