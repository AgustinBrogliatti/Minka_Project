<template>
  <div class="body-page container_auxiliar">
    <h1 id="title-proyect">{{this.$route.params.proyect}}:</h1> <h2 id="subtitle-proyect"> {{this.section}} </h2>

    <form id="form-files">
      <h3 id="description-section" v-if="titleIdeas">La seccion ideas esta destinada para romper el hielo y darle inicio a la etapa creativa del proyecto con distintas propuestas.</h3>
      <h3 id="description-section" v-if="titleDoc">La seccion documentacion debe utilizarse para la carga de todo tipo de documentacion util, tanto de la obra como del propietario.
        Como por ejemplo, planos catastrales, planos antecedentes, escritura, reglamento del country, etc.</h3>
      <h3 id="description-section" v-if="titleAnte">La seccion anteproyecto es donde se cargara el anteproyecto una vez terminado.</h3>
      <h3 id="description-section" v-if="titleAvances">La seccion avances es donde podran ir todo tipo de planos y archivos provisorios que surgiran durante el proceso y que no forman parte ni del anteproyecto final ni del proyecto.</h3>
      <h3 id="description-section" v-if="titleLegajo">La seccion legajo es donde finalmente se depositara el proyecto final. El legajo es toda la documentacion necesaria para ejecutar la obra una vez finalizado el proyecto.</h3>
      <h3 id="description-section" v-if="titleObra">La seccion obra sera utilizada para comunicar los avances de la obra o incluso hacer consultas sobre problemas que puedan surgir en la misma.</h3>

      <label> Formatos compatibles: JPEG, JPG, PNG, GIF, WMV, DWG, DXF, PDF
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" required/>
        <textarea name="" id="files-message" cols="30" rows="20" maxlength="39" v-model="message" placeholder="Añada un mensaje" required></textarea>
      </label>
      <input class="add_button" type="button" value="Subir archivo" @click="submitFile()">
    </form>
    <div id="content-files">
      <div id="files" v-for="(file, index) in files" :key="index" >
        <div id="content-image">
          <img :src="files[index].url" :alt="files[index].name">

        </div>
        <div id="content-message">
          {{file.message}}

        </div>

        <div id="content-buttons">
          <input type="button" class="button-files" value="Descargar" @click="downloadFile(file.name)">
          <input type="button" id="button-delete"  value="Eliminar" @click="deleteFile(file)">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

const extensionsAllowed = ['JPEG', 'JPG', 'PNG', 'GIF', 'DWG', 'DXF', 'PDF', 'TXT', 'jfif']

export default {
  name: "FilesManager",
  data() {
    return{
      adminData: "",
      file:'',
      message: '',
      files: [],
      titleIdeas: false,
      titleDoc: false,
      titleAnte: false,
      titleAvances: false,
      titleLegajo: false,
      titleObra: false,
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
        .catch(err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
          this.$router.push("/error-server")
        })

    document.addEventListener("DOMContentLoaded", () => {this.getFiles()})
    if (this.section == "Ideas") {this.titleIdeas = true}
    if (this.section == "Documentacion") {this.titleDoc = true}
    if (this.section == "Anteproyecto") {this.titleAnte = true}
    if (this.section == "Avances") {this.titleAvances = true}
    if (this.section == "Legajo") {this.titleLegajo = true}
    if (this.section == "Obra") {this.titleObra = true}


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
      let extension = this.file.name.split(".").reverse()[0].toUpperCase();

      if (extensionsAllowed.includes(extension)) {
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
              } else if (file.name.split(".").reverse()[0] == ("txt")) {
                file.url = "https://cdn-icons-png.flaticon.com/512/28/28878.png";
              }  else {
                file.url = 'http://localhost:4000/api/v1/uploads/' + this.$route.params.proyect + "/"+ this.section.toLowerCase() + "/" + file.name;
              }

              if (response.data.message != "The file name already exist") {
                axios.post('http://localhost:4000/api/v1/uploads/files-view/' + this.$route.params.proyect + "/" +this.section.toLowerCase() , file)
                    .then(response => {
                      console.log(response.data.message)
                      setTimeout(function(){ location.reload(); }, 2500);
                    })
                    .catch(err => {
                      console.log(err)
                      console.log("INTERNAL SERVER ERROR 500")
                      this.$router.push("/error-server")
                    })
              }

            })
            .catch(err => {
              console.log(err)
              console.log("INTERNAL SERVER ERROR 500")
              this.$router.push("/error-server")
            })
      } else {
        console.log("The file extension not allowed")
      }

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
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
            this.$router.push("/error-server")
          })
    },
    deleteFile(file) {
      axios.delete('http://localhost:4000/api/v1/uploads/' +  this.$route.params.proyect + "/" + this.section.toLowerCase() + "/" + file.name)
          .then(response => {
            console.log(response.data.message)
            location.reload()
          })
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
            this.$router.push("/error-server")
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