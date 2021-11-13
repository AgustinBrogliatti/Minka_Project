<template>
  <div id="home_page">
    <Header  v-bind:userData="{name: this.adminData.name, lastname: this.adminData.lastname}"></Header>
    <div id="content-body">
      <NavBarArq></NavBarArq>
      <CatalogueArq></CatalogueArq>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBarArq from "@/components/Architect/NavBarArq";
import CatalogueArq from "@/components/Architect/CatalogueArq";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import axios from 'axios';

export default {
  name: "HomeArq",
  components:{
    Header,
    NavBarArq,
    CatalogueArq,
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

<style>
@import "../../assets/CSS/main_layout.css";

</style>