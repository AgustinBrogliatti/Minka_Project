<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
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
  name: "Ideas",
  components: {
    NavBarEstudio,
    Header,
    FilesManager,
    Banner,
    Footer,
  },
  data() {
    return{
      adminData: "",
      file:'',
      message: '',
      files: [],
      section: "ideas"
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
        .then(response => {
          this.adminData = response.data.admin
          console.log(response.data.message)

        })
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

</style>