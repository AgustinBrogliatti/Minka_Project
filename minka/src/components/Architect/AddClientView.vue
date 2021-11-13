<template>
  <div id="home_page">
    <Header v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
    <div id="content-body">
      <NavBarArq></NavBarArq>
      <AddClient></AddClient>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import NavBarArq from "@/components/Architect/NavBarArq";
import AddClient from "@/components/Architect/AddClient";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import axios from "axios";



export default {
  name: "addClient",
  components: {
    Header,
    NavBarArq,
    AddClient,
    Banner,
    Footer

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

  }
}
</script>

<style scoped>

</style>