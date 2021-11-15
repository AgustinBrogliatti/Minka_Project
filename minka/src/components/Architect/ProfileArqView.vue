<template>
  <div id="profile">
    <Header v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
    <div id="content-body">
      <NavBar></NavBar>
      <ProfileArq></ProfileArq>
      <Banner></Banner>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../Header";
import ProfileArq from "@/components/Architect/ProfileArq";
import Footer from "../Footer";
import NavBar from "./NavBarArq";
import Banner from "../Banner";
import axios from "axios";

export default {
  name: "ProfileArqView",
  components: {
    Header,
    ProfileArq,
    Footer,
    NavBar,
    Banner
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