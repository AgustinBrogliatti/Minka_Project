<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.userData.name, lastname: this.userData.lastname}"></Header>

    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>

      <div id="files">
        <h1 id="title-proyect">{{this.$route.params.proyect}}</h1>
        <MisArchivos v-for="(section, index) in sections" :key="index" :section="section"  v-bind:seccion="section"></MisArchivos>
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
import MisArchivos from "@/components/MiEstudio/MisArchivos";


export default {
  name: "MisArchivosView",
  components: {
    NavBarEstudio,
    MisArchivos,
    Header,
    Banner,
    Footer,

  },
  data() {
    return{
      userData: "",
      sections: ["ideas", "documentacion", "anteproyecto", "avances", "legajo", "obra"]
    }
  },
  beforeMount() {
    if (this.$route.fullPath.match("admin") != null) {
      axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
          .then(response => {
            this.userData = response.data.admin
            console.log(response.data.message)
          })
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
            this.$router.push("/error-server")
          })
    } else {
      axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
          .then(response => {
            this.userData = response.data.client
            console.log(response.data.message)
          })
          .catch(err => {
            console.log(err)
            console.log("INTERNAL SERVER ERROR 500")
            this.$router.push("/error-server")
          })
    }
  }
};


</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/MyFiles.css";


#file-container__img  img{
  width: 50%;
  align-self: center;
}

.file-container__description p {
  margin: .6% 2%;
  font-size: 1em;
}

#files {
  display: flex;
  flex-direction: column;
  margin-left: -8%;
  margin-top: 3%;
  margin-right: -5%;
  height: 60%;
  width: 70%;
  align-items: center;
}

#title-proyect {
  margin: 0;
  font-size: 50px;
  text-decoration: underline;

}
</style>