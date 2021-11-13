<template>
  <div id="home_page">
    <Header></Header>
    <NavBarEstudio></NavBarEstudio>
    <div id="content-body">

      <div class = "body-page">
        <div>
          <h1> IDEAS </h1>
          <p> En esta carpeta se incluirán todos aquellos archivos que participan del proceso creativo </p>
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

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import NavBarEstudio from "@/components/MiEstudio/NavBarEstudio";

export default {
  name: "Ideas",
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