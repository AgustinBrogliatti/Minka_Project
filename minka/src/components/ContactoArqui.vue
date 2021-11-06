<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBar></NavBar>
      <div class="content-home">
        <h2> Nombre arquitecto: </h2>
        <p> {{nombre}} </p>
      </div>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Banner from "./Banner";

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
@import "../assets/CSS/main layout.css";
@import "../assets/CSS/normalize.css";
</style>