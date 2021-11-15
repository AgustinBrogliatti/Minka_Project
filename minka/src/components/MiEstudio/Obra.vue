<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.userData.name, lastname: this.userData.lastname}"></Header>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <FilesManager v-bind:section="this.$route.name"></FilesManager>
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
  name: "Obra",
  components: {
    Header,
    NavBarEstudio,
    FilesManager,
    Banner,
    Footer,
  },
  data() {
    return{
      userData: ""
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
}
</script>

<style scoped>

@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";

p {
  margin-left: 2%;
  margin-right: 2%;
}

#body {
  width: 66%;
  background: white;
  margin: 4.2%;
}

</style>