<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <div id="files">
        <FilesManager v-for="(section, index) in sections" :key="index" :section="section"></FilesManager>
      </div>

      <Banner></Banner>

    </div>
    <Footer></Footer>
  </div>

</template>

<script>


import Header from "@/components/Header";
import NavBarEstudio from "./NavBarEstudio";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import axios from "axios";
import FilesManager from "@/components/MiEstudio/FilesManager";

export default {
  name: "MisArchivos",
  components: {
    NavBarEstudio,
    FilesManager,
    Header,
    Banner,
    Footer,

  },
  data() {
    return{
      adminData: "",
      sections: ["ideas", "documentacion", "anteproyecto", "avances", "legajo", "obra"]
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
        .then(response => {
          this.adminData = response.data.admin
          console.log(response.data.message)
        })
  }

};



</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/MyFiles.css";


.file-container  {
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
  margin: .9%;
  box-sizing: border-box;
  background: white;
  align-items: ;
}

.file-container:hover {
  border: 1px solid #777;
}


.file-container__img  {
  width: 100%;
  height: 100%;
  border: 1px solid steelblue;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

}

#file-container__img  img{
  width: 50%;
  align-self: center;
}

.file-container__description   {
  width: 100%;
  height: 50%;
  padding: 1%;
  border: 1px solid steelblue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .8em;

}

.file-container__description p {
  margin: .6% 2%;
  font-size: 1em;
}

#add-project_button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

#files {
  display: flex;
  flex-direction: column;
}
</style>