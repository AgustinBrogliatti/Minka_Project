<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBarCli></NavBarCli>
      <div class="body-page">
        <h2> Nombre arquitecto: </h2>
        <p> {{nombre}} </p>
      </div>
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

export default {
  name: "Contacto",
  components: {
    Header,
    Footer,
    NavBarCli,
    Banner,
  },
  data() {
    return {
      nombre: "Raul Pedro García"
    }
  }
}
</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";


</style>