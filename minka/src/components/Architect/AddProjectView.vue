<template>
  <div id="home_page">
    <Header></Header>
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


export default {
  name: "addProyect",
  components: {
    Header,
    NavBar,
    AddProyect,
    Banner,
    Footer,
  }
}

</script>

<style scoped>

@import "../../assets/CSS/main_layout.css";


</style>