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
        <button @click="deleteFile(file)">Delete</button>
      </div>


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

    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      axios.get('http://127.0.0.1:4000/api/v1/uploads/files-view')
        .then(response => {
          this.files = response.data.files
          if (this.files.length == 0) {
            console.log('Empity data base')
          } else {
            console.log(response.data.message)
          }

        })
        .catch (err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
        })
    })
  },
  methods: {
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

            let fileList = response.data.files
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

                      let file = {name:'', url: ''};
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
      axios.delete('http://127.0.0.1:4000//api/v1/upload-file', {'data': {'name': file.name}})
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

