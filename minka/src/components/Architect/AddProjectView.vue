<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
    <div id="content-body">
      <NavBar></NavBar>
      <AddProyect></AddProyect>
      <Banner></Banner>

    </div>
      <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import NavBar from "@/components/Architect/NavBarArq";
import AddProyect from "@/components/Architect/AddProyect";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import axios from "axios";


export default {
  name: "AddProyectView",
  components: {
    Header,
    NavBar,
    AddProyect,
    Banner,
    Footer,
  },
  data () {
    return {
      adminData: ""
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/admins/" + this.$route.params.id)
        .then(response => {
          this.adminData = response.data.admin
          console.log(response.data.message)
        })
        .catch(err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
          this.$router.push("/error-server")
        })

  }
}

</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";

</style>