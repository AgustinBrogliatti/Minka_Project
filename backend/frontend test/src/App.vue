<template>
  <div id="app">
      <h1>Files</h1>
      <div>
        <form>
          <label>File
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" required/>
          <textarea name="" id="" cols="30" rows="2" maxlength="300" v-model="message" required></textarea>
        </label>
        <input type="button" value="Submit" @click="submitFile()">
        </form>
      </div>


      <div v-for="(file, index) in files" :key="index" >
        <img :src="files[index].url" :alt="files[index].name" width="10%">
        {{file.message}} <br>
        <button @click="downloadFile(file.name)">Descargar</button>
        <button @click="deleteFile(file)">Delete</button>
      </div>


    <hr>
    <h1>Register Admin</h1>
    <form @submit="registrarse()">
    <input type="text" placeholder="Name" required v-model="name">
    <input type="text" placeholder="Lastname" required v-model="lastName" @focusout="userIDCreate()">
    <input type="text" placeholder="User" required v-model="adminID">
    <input type="email" placeholder="Mail" required v-model="email">
    <input type="password" placeholder="pass" required v-model="password">
    <input type="password" placeholder="repeat pass" required v-model="passwordRepeat">
    <input type="submit" >Register
    </form>

    <br><hr>
    <h1>Login Admin</h1>
    <input type="text" placeholder="User" v-model="adminID">
    <input type="password" placeholder="pass" v-model="password">
    <button @click="login()">Login</button>

    <br><hr>
    <h1>Client Created</h1>

    <input type="text" placeholder="name" required v-model="clientName">
    <input type="text" placeholder="lastname" required v-model="clientLastname" @focusout="userIDCreate()">
    <input type="text" placeholder="clientID" required v-model="clientID">
    <input type="text" placeholder="email" required v-model="clientEmail">
    <button @click="registerUser()">Registrar Usuario</button>
    <br>
    Generated password: {{clientPassword}}

    <h1>Login Client</h1>
    <input type="text" placeholder="User" v-model="clientID">
    <input type="password" placeholder="pass" v-model="clientPassword">
    <button @click="loginClient()">Login</button>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      file:'',
      message: '',
      files: [],
      alerta: "",

      adminID: '',
      password: '',
      passwordRepeat: '',
      name: '',
      lastName: '',
      email: '',
      adminData: {},

      clientID: null,
      clientName: null,
      clientLastname: null,
      clientPassword: null,
      clientEmail: null,
      clientData: {},

      proyect: "Alma_Verde",
      section: "legajo",
      agustin: ""

    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      axios.get('http://localhost:4000/api/v1/uploads/files-view/' + this.proyect +"/" + this.section)
        .then(response => {
          this.files = response.data["files"]
          console.log(response.data.message)
        })
        .catch (err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
        })

    })
  },
  methods: {

    userIDCreate() {
      let name = this.clientName
      let lastname = this.clientLastname
      if (name != "" && lastname != "") {
        let newName = name.match(/^[a-z]/ig) + lastname + Math.floor(Math.random() * (99 - 10) + 10);
        this.clientID = newName

      }
    },
    registerUser(){
      if (this.clientID != null && this.clientPassword != null && this.clientName != null && this.clientLastname != null && this.clientEmail != null){
        let password = Math.random().toString(36).substring(2, 10)
        this.clientPassword = password

        let clientData = {
          "clientID": this.clientID,
          "password": this.clientPassword,
          "name": this.clientName,
          "lastname": this.clientLastname,
          "email": this.clientEmail,
          "tel": '',
          "adress": '',
          "proyectos": [],
          "admins": [],

        };

        axios.post('http://localhost:4000/api/v1/clients', clientData)
            .then(response => {
              console.log(response.data.message)
            })
            .catch(err => {
              console.log(err)
              console.log("INTERNAL SERVER ERROR 500")
            })
      } else {console.log("NO llenaste todos los campos maestro")}



  },
    loginClient() {
      axios.get('http://localhost:4000/api/v1/clients' + this.clientID)
          .then(response => {

            if(response.data.client.clientID == this.clientID && response.data.client.password == this.clientPassword){
              console.log('PASASTE LA PRUEBA')
            } else {console.log("Usuario o contrase;a incorrectos")}

          })
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
          })
    },

    registrarse() {
      if (this.password == this.passwordRepeat) {

        let adminData = {
          "adminID": this.adminID,
          "password": this.password,
          "name": this.name,
          "lastname": this.lastName,
          "email": this.email,
          "tel": '',
          "adress": '',
          "proyectos": [],
          "clientes": [],

        };

        axios.post('http://localhost:4000/api/v1/admins', adminData)
            .then(response => {
              console.log(response.data.message)
            })
            .catch(err => {
              console.log(err)
              console.log("INTERNAL SERVER ERROR 500")
            })
      } else {console.log("The passwords are not the same")}

    },

    login() {
      axios.get('http://localhost:4000/api/v1/admins/' + this.adminID)
          .then(response => {
            if(response.data.admin.adminID == this.adminID && response.data.admin.password == this.password){
              console.log('PASASTE LA PRUEBA CAPO')
            } else {console.log("Usuario o contrase;a incorrectos")}

          })
          .catch(err => {
            console.log(err)
            console.log("NOT FOUND 404")
          })
    },





    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitFile() {
      let formData = new FormData();
      formData.append('file', this.file);

      let fileName = this.file.name
      fileName = fileName.replace(/[\s$&+,:;=?@<>"'`#%~{}^]/gi, "_");
      fileName = fileName.replace(/^[_]*|[_]*$/gi, "");
      fileName = fileName.replace(/[()]/gi, "");
      fileName = fileName.replace(/[_]+/gi, "_");

      axios.post('http://localhost:4000/api/v1/upload-file/' + this.proyect + "/" + this.section, formData,
          {headers: {'Content-Type': 'multipart/form-data'},
          }
      )
        .then(response => {
          console.log(response.data.message)

          let file = {name:'', url: '', message: this.message};
          file.name = fileName;

          if (file.name.split(".").reverse()[0] == "pdf") {
            file.url = "https://cdn-icons-png.flaticon.com/512/337/337946.png";
          } else if (file.name.split(".").reverse()[0] == ("dwg" || "dxf")) {
            file.url = "https://gisresources.com/wp-content/uploads/2016/09/dwg-icon.png";
          } else {
            file.url = 'http://localhost:4000/api/v1/uploads/' + this.proyect + "/" + this.section + "/"  + file.name;
          }

          axios.post('http://localhost:4000/api/v1/uploads/files-view/' + this.proyect + "/" + this.section, file)
              .then(response => {
                console.log(response.data.message)

              })
              .catch(err => {
                console.log(err)
                console.log("NOT FOUND ERROR 404")
              })

        })
        .catch(err => {
          console.log(err)
          console.log("NOT FOUND ERROR 404")
        })




    },
    downloadFile(fileName) {

      fileName = fileName.replace(/[\s$&+,:;=?@<>"'`#%~{}^]/gi, "_");
      fileName = fileName.replace(/^[_]*|[_]*$/gi, "");
      fileName = fileName.replace(/[()]/gi, "");
      fileName = fileName.replace(/[_]+/gi, "_");

      axios.get('http://localhost:4000/api/v1/uploads/' + this.proyect + "/" + this.section + "/" + fileName, {responseType: 'blob'})
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            console.log("File downloaded successfully")

          })
          .catch(error => {
            console.log(error)
            console.log("NOT FOUND ERROR 404")
          })
    },
    deleteFile(file) {
      axios.delete('http://localhost:4000/api/v1/uploads/' + this.proyect + "/" + this.section + "/" + file.name)
          .then(response => {
            console.log(response.data.message)
            location.reload()
          })
          .catch(error => {
            console.log(error)
            console.log("NOT FOUND ERROR 404")
          })

    },


  },


}
</script>

<style>

</style>

