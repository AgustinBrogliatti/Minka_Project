<template>
  <div class="body-page container_auxiliar" id="contet-files">
    <form id="form-fileUpdate">
        <label> Suba su archivo aquí. Formatos compatibles: JPEG, JPG, PNG, DWG, DXF, XSLX, CSV, PDF
          <input type="file"  ref="file" v-on:change="handleFileUpload()" required>
          <label>Añada una breve descripción del archivo </label>
          <textarea id="message" name="description" cols="30" rows="5" maxlength="140" v-model="message" required></textarea>
        </label>
        <div id="submit-file" @click="submitFile()">    <i class="fas fa-plus"></i>      Añadir archivo  </div>
    </form>

    <div id="content-image" v-for="(file, index) in files" :key="index">
      <img :src="files[index].url" :alt="files[index].name" width="100%">
      {{file.message}} <br>
      <button @click="downloadFile(file.name)">Descargar</button>
      <button @click="deleteFile(file)">Delete</button>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "FilesManager",
  data() {
    return{
      adminData: "",
      file:'',
      message: '',
      files: [],
    }
  },
  props: {
    section: {
      type: String,
      required: true,
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
        .then(response => {
          this.adminData = response.data.admin
          console.log(response.data.message)
          this.getFiles()
        })

    document.addEventListener("DOMContentLoaded", () => {this.getFiles()})

  },
  methods: {
    getFiles () {
      axios.get('http://localhost:4000/api/v1/uploads/files-view/' + this.$route.params.proyect + "/"+ this.section.toLowerCase())
          .then(response => {
            this.files = response.data["files"]
            console.log(response.data.message)
          })
          .catch (err => {
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

      axios.post('http://localhost:4000/api/v1/upload-file/' + this.$route.params.proyect + "/" + this.section.toLowerCase(), formData,
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
              file.url = 'http://localhost:4000/api/v1/uploads/' + this.$route.params.proyect + "/"+ this.section.toLowerCase() + "/" + file.name;
            }

            axios.post('http://localhost:4000/api/v1/uploads/files-view/' + this.$route.params.proyect + "/" +this.section.toLowerCase() , file)
                .then(response => {
                  console.log(response.data.message)
                  location.reload()
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

      axios.get('http://localhost:4000/api/v1/uploads/' + this.$route.params.proyect + "/" + this.section.toLowerCase() + "/" + fileName, {responseType: 'blob'})
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
      axios.delete('http://localhost:4000/api/v1/uploads/' +  this.$route.params.proyect + "/" + this.section.toLowerCase() + "/" + file.name)
          .then(response => {
            console.log(response.data.message)
            location.reload()
          })
          .catch(error => {
            console.log(error)
            console.log("NOT FOUND ERROR 404")
          })

    },
  }
}

</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";
@import "../../assets/CSS/MyFiles.css";


</style>