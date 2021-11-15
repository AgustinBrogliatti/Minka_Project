<template>
  <div class="body-page" id="content-contact">
      <h1>Contactos</h1>
    <div id="contacts">
      <table id="customers">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Pais</th>
          <th>Provincia</th>
          <th>Ciudad</th>
          <th>Proyectos</th>
        </tr>
        <tr id="client-contact" v-for="(client, index) in clients" :key="index">
          <td>{{client.name}} {{client.lastname}}</td>
          <td>{{client.email}}</td>
          <td>{{client.tel}}</td>
          <td>{{client.address}}</td>
          <td>{{client.country}}</td>
          <td>{{client.province}}</td>
          <td>{{client.city}}</td>
          <td></td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactArq",
  data () {
    return {
      clients:null,
      proyects: [],
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/clients?admin=" + this.$route.params.id)
      .then(response => {
        this.clients = response.data.clients
      })
      .catch(err => {
        console.log(err)
        console.log("INTERNAL SERVER ERROR 500")
        this.$router.push("/error-server")
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
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--main-color);
  color: white;
}
</style>