<template>
<div id="home_page">
  <Header v-bind:userData="{name: this.clientData.name, lastname: this.clientData.lastname}"></Header>
  <div id="content-body">
    <NavBarClient></NavBarClient>
    <CatalogueClient></CatalogueClient>
    <Banner></Banner>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "../Header";
import NavBarClient from "./NavBarClient";
import CatalogueClient from "./Proyects";
import Banner from "../Banner";
import Footer from "../Footer";
import axios from "axios";

export default {
  name: "Home",
  components:{
    Header,
    NavBarClient,
    CatalogueClient,
    Banner,
    Footer
  },
  data () {
    return {
      clientData: "",
    }
  },
  beforeMount() {
      axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
          .then(response => {
            this.clientData = response.data.client
            console.log(response.data.message)
          })

  }
}
</script>

<style>
@import "../../assets/CSS/main_layout.css";

</style>