<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.clientData.name, lastname: this.clientData.lastname}"></Header>
    <div id="content-body">
      <NavBarCli></NavBarCli>
      <Contact></Contact>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "../Header";
import Footer from "../Footer";
import NavBarCli from "./NavBarClient";
import Banner from "../Banner";
import axios from "axios";
import Contact from "@/components/Client/Contact";

export default {
  name: "ContactView",
  components: {
    Header,
    Footer,
    Contact,
    NavBarCli,
    Banner,
  },
  data() {
    return {
      clientData: ""
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

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";


</style>