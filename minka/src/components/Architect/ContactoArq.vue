<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBar></NavBar>
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
import NavBar from "./NavBarArq";
import Banner from "../Banner";

export default {
  name: "ContactoArqui",
  components: {
    Header,
    Footer,
    NavBar,
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