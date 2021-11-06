<template>
  <div id="app">

      <div>
        <label>File
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          <textarea name="" id="" cols="30" rows="2" maxlength="300" v-model="message"></textarea>
        </label>
        <button @click="submitFile()">Submit</button>
      </div>


      <div v-for="(file, index) in files" :key="index" >
        <img :src="files[index].url" :alt="files[index].name" width="10%">
        {{file.message}} <br>
        <button @click="downloadFile(file.name)">Descargar</button>
        <button @click="deleteFile(file)">Delete</button>
      </div>
    <input type="text" placeholder="Name" v-model="name">
    <input type="text" placeholder="Lastname" v-model="lastName" @focusout="userCreate()">
    <input type="text" placeholder="User" v-model="adminID">
    <input type="text" placeholder="Mail" v-model="email">
    <input type="password" placeholder="pass" v-model="password">
    <input type="password" placeholder="repeat pass" v-model="passwordRepeat">

    <button @click="registrarse()">Register</button>
    <br>

    <input type="text" placeholder="User" v-model="adminID">
    <input type="password" placeholder="pass" v-model="password">
    <button @click="login()">Login</button>
    {{adminData}}




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
      files: [],

      message: '',
      adminID: '',
      password: '',
      passwordRepeat: '',
      name: '',
      lastName: '',
      email: '',
      adminData: {},

    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      axios.get('http://127.0.0.1:4000/api/v1/uploads/files-view')
        .then(response => {
          this.files = response.data["files_list"]
          console.log(response.data.message)
        })
        .catch (err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
        })
      axios.get('http://127.0.0.1:4000/api/v1/database-admins')
          .then(response => {
            this.adminData = response.data["admins_list"]
            console.log(response.data.message)
          })
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
          })
    })
  },
  methods: {
    userCreate() {
      if (this.name != "" && this.lastName != "") {
        let name = this.name
        let newName = name.match(/^[a-z]/ig) + this.lastName + Math.floor(Math.random() * (99 - 10) + 10);
        this.adminID = newName

      }
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

        axios.post('http://127.0.0.1:4000/api/v1/database-admins', adminData)
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
      axios.get('http://127.0.0.1:4000/api/v1/database-admins')
          .then(response => {
            let adminList = response.data["admins_list"]

            if(adminList.some(admin => admin.adminID === this.adminID && admin.password === this.password)){
              console.log('PASASTE LA PRUEBA CAPO')
            } else {console.log("Usuario o contrase;a incorrectos")}

          })
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
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


      axios.get('http://127.0.0.1:4000/api/v1/uploads/files-view')
          .then(response => {

            let fileList = response.data["files_list"]

            if(fileList.some(file => file.name == fileName)){
              console.log("The file already exists")

            } else {

                axios.post('http://127.0.0.1:4000/api/v1/upload-file', formData,
                    {headers: {'Content-Type': 'multipart/form-data'}
                    }
                )
                  .then(response => {
                    console.log(response.data.message)

                    if(response.data.status != 'BAD REQUEST\t400') {

                      let file = {name:'', url: '', message: this.message};
                      file.name = fileName;

                      if (file.name.split(".").reverse()[0] == "pdf") {
                        file.url = "https://cdn-icons-png.flaticon.com/512/337/337946.png";
                      } else if (file.name.split(".").reverse()[0] == ("dwg" || "dxf")) {
                        file.url = "https://gisresources.com/wp-content/uploads/2016/09/dwg-icon.png";
                      } else {
                        file.url = 'http://127.0.0.1:4000/api/v1/uploads/' + file.name;
                      }

                      axios.post('http://127.0.0.1:4000/api/v1/uploads/files-view', file)
                          .then(response => {
                            console.log(response.data.message)
                            location.reload()
                          })
                          .catch(err => {
                            console.log(err)
                            console.log("INTERNAL SERVER ERROR 500")
                          })
                    }

                  })
                  .catch(err => {
                    console.log(err)
                    console.log("INTERNAL SERVER ERROR 500")
                  })
            }
          })
          .catch (err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")

          })

    },
    downloadFile(fileName) {

      fileName = fileName.replace(/[\s$&+,:;=?@<>"'`#%~{}^]/gi, "_");
      fileName = fileName.replace(/^[_]*|[_]*$/gi, "");
      fileName = fileName.replace(/[()]/gi, "");
      fileName = fileName.replace(/[_]+/gi, "_");

      axios.get('http://127.0.0.1:4000/api/v1/uploads/' + fileName, {responseType: 'blob'})
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
            console.log("INTERNAL SERVER ERROR 500")
          })
    },
    deleteFile(file) {
      axios.delete('http://127.0.0.1:4000/api/v1/uploads/'+ file.name)
          .then(response => {
            console.log(response.data.message)
            location.reload()
          })
          .catch(error => {
            console.log(error)
            console.log("INTERNAL SERVER ERROR 500")
          })

    },


  },


}
</script>

<style>

</style>

