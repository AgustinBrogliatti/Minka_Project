<template>
  <div class="body-page container_auxiliar">
      <form>
        <legend> <h1> Datos del proyecto </h1> </legend>
        <hr>

        <label for="name">Titulo</label>
        <input type="text" id="name" v-model="title" required>

        <label>Cliente</label>
        <select id="client" v-model="client" required>
          <option :value="client.clientID" v-for="(client, index) in clients" :key="index">{{client.name}} {{client.lastname}}</option>
        </select>

        <label> Fecha de Inicio </label>
        <br> <br>
        <input type="date" v-model="date" required>
        <br><br>

        <input id="add-project_button" type="button" @click="createProyect()" value="AÑADIR PROYECTO">
        <p class="message" v-if="alertPost">{{message}}</p>
        <p v-if="error" class="login-error">{{message}}</p>

      </form>
    </div>

</template>

<script>

import axios from "axios";

export default {
  name: "AddProyect",
  data() {
    return {
      title: null,
      client: null,
      date: null,
      clients: null,
      alertPost: false,
      error: false,
      message: null
    }
  },
  methods: {
    createProyect() {
      if (this.title != null && this.client != null && this.date != null) {
        let title = this.title;
        let client = this.client;
        let date = this.date;

        let newProyect = {
          name: title,
          client: client,
          admin: this.$route.params.id,
          date: date,
          endpoint: "Actualidad"
        }
        axios.post("http://localhost:4000/api/v1/proyects", newProyect)
          .then(response => {
            console.log(response.data.message);
            this.message = "Proyecto añadido correctamente"
            if (this.error == true) {
              this.error = false
              this.alertPost = true
            } else {this.alertPost = true}
          })
      } else{
        this.message = "Debes completar todos los campos"
        if (this.alertPost == true) {
          this.alertPost = false
          this.error = true
        } else {this.error = true}
      }
    }

  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/clients?admin=" + this.$route.params.id)
      .then(response => {
        console.log(response.data.message)
        this.clients = response.data.clients
      })
  }
}
</script>

<style scoped>

@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";
</style>