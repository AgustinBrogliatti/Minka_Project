<template>
  <div id="home_page">
    <HeaderEstudio></HeaderEstudio>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
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
    <FooterEstudio></FooterEstudio>
  </div>
</template>

<script>

import HeaderEstudio from "./HeaderEstudio";
import FooterEstudio from "./FooterEstudio";
import Banner from "../Banner";
import NavBarEstudio from "./NavBarEstudio";

export default {
  name: "Ideas",
  components: {
    NavBarEstudio,
    HeaderEstudio,
    FooterEstudio,
    Banner,
  },
}
</script>

<style scoped>

@import "../../assets/CSS/main_layout.css";
@import "../../assets/CSS/normalize.css";


</style>