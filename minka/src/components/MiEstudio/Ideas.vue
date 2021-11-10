<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";
import NavBarEstudio from "./NavBarEstudio";

export default {
  name: "Ideas",
  components: {
    NavBarEstudio,
    Header,
    Footer,
    Banner,
  },
}
</script>

<style scoped>
@import "../../assets/CSS/main layout.css";
@import "../../assets/CSS/normalize.css";
</style>