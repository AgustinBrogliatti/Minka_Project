<template>
  <div id="app">

      <div>
        <label>File
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </label>
        <button @click="submitFile()">Submit</button>
      </div>


      <div v-for="(file, index) in files" :key="index" >
        <img :src="files[index].url" :alt="files[index].name" width="10%">
        <a href="#" @click="downloadFile(file.name)">{{file.name}}</a>
        <button @click="deleteFile(file, index)">Delete</button>
      </div>

      <button @click="probando()">Probando</button>
{{files}}


  </div>
</template>

<script>
import axios from 'axios';

const extensionsAllowed = ['JPEG', 'JPG', 'PNG', 'GIF', 'MP4', 'MP3', 'WMV', 'DWG', 'DXF', 'XSLX', 'CSV', 'PDF']

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      file:'',
      files: [],
      list: [],
    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("filesList") != null) {
        let filesList = JSON.parse(localStorage.getItem("filesList"));
        this.files = filesList;
      }
    })
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitFile() {

      let formData = new FormData();
      formData.append('file', this.file);
      let extension = this.file.name.split(".").reverse()[0].toUpperCase();
      if (extensionsAllowed.includes(extension)) {
        axios.post('http://127.0.0.1:4000/upload-file', formData,
            {headers: {'Content-Type': 'multipart/form-data'}
            }
        )
            .then( () => {

              let fileName = this.file.name
              fileName = fileName.replace(/[\s$&+,:;=?@<>"'`#%~{}^]/gi, "_");
              fileName = fileName.replace(/^[_]*|[_]*$/gi, "");
              fileName = fileName.replace(/[()]/gi, "");
              fileName = fileName.replace(/[_]+/gi, "_");

              let file = {name:'', url: ''};
              file.name = fileName;

              if (file.name.split(".").reverse()[0] == "pdf") {
                file.url = "https://cdn-icons-png.flaticon.com/512/337/337946.png";
              } else if (file.name.split(".").reverse()[0] == ("dwg" || "dxf")) {
                file.url = "https://cdn6.aptoide.com/imgs/c/d/9/cd955aff42e031df7d4e0c1c20115d9c_icon.png";
              } else {
                file.url = 'http://127.0.0.1:4000/uploads/' + file.name;
              }
              axios.post('http://127.0.0.1:4000/uploads/files-list', file)
              .then(() => {
                console.log('file send')
              })


              if (localStorage.getItem("filesList") != null) {
                let filesList = JSON.parse(localStorage.getItem("filesList"));

                if(filesList.some(file => file.name == fileName)){
                  console.log("File exist")
                } else{
                  filesList.push(file)
                  localStorage.setItem("filesList", JSON.stringify(filesList));
                  console.log("File sent successfully!!")
                  location.reload()
                }

              } else {
                let list = []
                list.push(file)
                localStorage.setItem("filesList", JSON.stringify(list));
                console.log("File sent successfully!!")
                location.reload()

              }

            })
            .catch(error => {
              console.log(error)
            })
      } else {
        console.log("The file could not be sent")
        console.log("The file extension not allowed")
      }


    },
    downloadFile(fileName) {

      fileName = fileName.replace(/[\s$&+,:;=?@<>"'`#%~{}^]/gi, "_");
      fileName = fileName.replace(/^[_]*|[_]*$/gi, "");
      fileName = fileName.replace(/[()]/gi, "");
      fileName = fileName.replace(/[_]+/gi, "_");

      axios.get('http://127.0.0.1:4000/uploads/' + fileName, {responseType: 'blob'})
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            console.log("File downloaded successfully!!")

          })
          .catch(error => {
            console.log(error)
          })
    },
    deleteFile(file, index) {
      axios.delete('http://127.0.0.1:4000/uploads/' + file.name)
          .then(() => {
            let filesList = JSON.parse(localStorage.getItem("filesList"));
            filesList.splice(index, 1)
            localStorage.setItem("filesList", JSON.stringify(filesList));
            this.files = filesList
            console.log('File deleted successfully')
            location.reload()
          })
          .catch(error => {
            console.log(error)
          })

    },
    // probando() {
    //   axios.get('http://127.0.0.1:4000/uploads/files-list')
    //   .then(response => {
    //     console.log(response.data.files)
    //     this.files = response.data.files
    //   })
    // }

  },


}
</script>

<style>

</style>

