<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
    <div id="content-body">
      <NavBar></NavBar>
      <ContactArq></ContactArq>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "../Header";
import Footer from "../Footer";
import NavBar from "./NavBarArq";
import Banner from "../Banner";
import ContactArq from "@/components/Architect/ContactArq";
import axios from "axios";

export default {
  name: "ContactoArqView",
  components: {
    Header,
    Footer,
    NavBar,
    Banner,
    ContactArq
  },
  data() {
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
@import "../../assets/CSS/normalize.css";

</style>