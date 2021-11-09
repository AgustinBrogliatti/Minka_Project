<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBarCli></NavBarCli>
      <div class="content-home container_auxiliar">
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
import NavBarCli from "./NavBarCli";
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
@import "../../assets/CSS/main layout.css";
@import "../../assets/CSS/normalize.css";

.container_auxiliar {
  border: 1px solid steelblue;
}
</style>