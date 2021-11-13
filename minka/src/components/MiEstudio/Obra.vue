<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <div class = "body-page">
        <div>
          <h1> OBRA </h1>
          <p> Añadir descripción </p>
          <div id="add-file-image" >
            <img src="../../assets/img/add-file.png" height="512" width="512"/></div>
        </div>
      </div>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import NavBarEstudio from "./NavBarEstudio";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default {
  name: "Obra",
  components: {
    Header,
    NavBarEstudio,
    Banner,
    Footer,
  },
}
</script>

<style scoped>

@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";
</style>