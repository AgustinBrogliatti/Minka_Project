<template>
  <div class="body-page container_auxiliar">
    <form>
      <legend> <h1> Datos del Cliente </h1> </legend>
      <hr>

      <label for="fname">Nombre</label>
      <input type="text" id="fname" name="firstname" v-model="name" required>

      <label for="lname">Apellido</label>
      <input type="text" id="lname" name="lastname" v-model="lastname" required @focusout="userIDCreate()">

      <label for="username">Nombre de Usuario</label>
      <input type="text" id="username" name="username" v-model="clientID" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="lastname" v-model="email" required>

      <label>País</label>
      <select id="pais" v-model="country" required>
        <option :value="pais" v-for="(pais, index) in paises" :key="index">{{pais}}</option>
      </select>

      <label>Provincia</label>
      <select id="provincia" v-model="province" required>
        <option :value="provincia" v-for="(provincia, index) in provincias" :key="index">{{provincia}}</option>
      </select>

      <label for="ciudad">Ciudad</label>
      <input type="text" id="ciudad" name="ciudad" v-model="city" required>
      <p class="message" v-if="alertPass">Contraseña generada: {{this.password}}</p>
      <p class="message" v-if="alertPass">Cliente creado exitosamente</p>

      <br><br>

      <input id="add-client_button" type="button" @click="registerClient()"  value="AÑADIR CLIENTE">
    </form>
  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "ProjectInfo",
  data() {
    return {
      name: null,
      lastname: null,
      email: null,
      country: null,
      province: null,
      city: null,
      password: null,
      clientID: null,
      alertPass: false,
      provincias: ["Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
      paises: ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]
    }
  },
  methods: {
    userIDCreate() {
      let name = this.name
      let lastname = this.lastname
      if (name != "" && lastname != "") {
        let newName = name.match(/^[a-z]/ig) + lastname + Math.floor(Math.random() * (99 - 10) + 10);
        this.clientID = newName
      }
    },
    registerClient() {
      if (this.name != null && this.lastname != null && this.email != null && this.country != null && this.province != null && this.city != null && this.clientID != null){
        let passwordCreated = Math.random().toString(36).substring(2, 10)
        this.password = passwordCreated
        this.alertPass = true

        let name = this.name
        let lastname = this.lastname
        let email = this.email
        let country = this.country
        let province = this.province
        let city = this.city
        let password = this.password
        let clientID = this.clientID

        let newClient = {
          name: name,
          lastname: lastname,
          email: email,
          address: "",
          tel: "",
          dni: "",
          cuit: "",
          country: country,
          province: province,
          city: city,
          clientID: clientID,
          password: password,
          adminID: this.$route.params.id
        };

        axios.post('http://localhost:4000/api/v1/clients', newClient)
            .then(response => {
              console.log(response.data.message)
            })
            .catch(err => {
              console.log(err)
              console.log("INTERNAL SERVER ERROR 500")
            })

      } else {console.log("NO llenaste todos los campos maestro")}
    },

  }
}
</script>

<style scoped>

@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/body.css";

</style>