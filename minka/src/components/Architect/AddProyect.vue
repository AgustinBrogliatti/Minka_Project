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

        <input id="add-project_button" type="button" @click="createProyect()" value="CREAR PROYECTO">

        <p class="message" v-if="alertPost">{{message}}</p>

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
      message: null,
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
            this.message = response.data.message
            this.alertPost = true;
          })
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

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

textarea {
  height:200px
}

.container_auxiliar {
  padding: 2%;
  background: #f2f2f2;
  margin-top: 4.4%;
}
.body-page{
  border: 1px solid gray;
  text-align: left;
}

.message {
  color: green;
  background: #CCFFCC;
  border-radius: 8px;
  padding: 10px;
  margin: 0;
  margin-bottom: 30px;
}

#add-project_button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

</style>