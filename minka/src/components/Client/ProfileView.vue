<template>
  <div id="profile">
    <Header v-bind:userData="{name: this.clientData.name, lastname: this.clientData.lastname}"></Header>
    <div id="content-body">
      <NavBarClient></NavBarClient>
      <Profile></Profile>
      <Banner></Banner>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBarClient from "@/components/Client/NavBarClient";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import axios from "axios";
import Profile from "@/components/Client/Profile";


export default {
  name: "ProfileView",
  components: {
    Header,
    NavBarClient,
    Profile,
    Banner,
    Footer
  },
  data() {
    return {
      clientData: "",
    }
  },
  mounted() {
    axios.get("http://localhost:4000/api/v1/clients/" + this.$route.params.id)
    .then(response => {
      this.clientData = response.data.client
      console.log(response.data.message)
    })
  }
}
</script>

<style scoped>

</style>