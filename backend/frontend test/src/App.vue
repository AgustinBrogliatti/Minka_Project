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

    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      axios.get('http://127.0.0.1:4000/uploads/files-view')
        .then(response => {
          return this.files = response.data.files
        })
        .catch (err => {
          console.log(err)
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


      axios.get('http://127.0.0.1:4000/uploads/files-view')
          .then(response => {

            let fileList = response.data.files
            if(fileList.some(file => file.name == fileName)){
              console.log("The file already exists")

            } else {
              let file = {name:'', url: ''};
              file.name = fileName;

              if (file.name.split(".").reverse()[0] == "pdf") {
                file.url = "https://cdn-icons-png.flaticon.com/512/337/337946.png";
              } else if (file.name.split(".").reverse()[0] == ("dwg" || "dxf")) {
                file.url = "https://cdn6.aptoide.com/imgs/c/d/9/cd955aff42e031df7d4e0c1c20115d9c_icon.png";
              } else {
                file.url = 'http://127.0.0.1:4000/uploads/' + file.name;
              }

              let extension = fileName.split(".").reverse()[0].toUpperCase();
              if (extensionsAllowed.includes(extension)) {
                axios.post('http://127.0.0.1:4000/upload-file', formData,
                    {headers: {'Content-Type': 'multipart/form-data'}
                    }
                )
                .then(() => {
                  axios.post('http://127.0.0.1:4000/uploads/files-view', file)
                      .then(() => {
                        console.log("Files list updated")
                        location.reload()
                      })
                      .catch(err => {
                        console.log(err)
                      })
                })

              }
              else {console.log("Unsupported file extension")}
            }
          })
          .catch (err => {
            console.log(err)

          })

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
    deleteFile(file) {
      axios.delete('http://127.0.0.1:4000/uploads/' + file.name)
          .then(() => {
            console.log('File deleted successfully')
            location.reload()
          })
          .catch(error => {
            console.log(error)
          })

    },


  },


}
</script>

<style>

</style>

