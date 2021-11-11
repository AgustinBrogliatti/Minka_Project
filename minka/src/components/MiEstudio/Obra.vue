<template>
  <div id="home_page">
    <HeaderEstudio></HeaderEstudio>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <div class = "content-home">
        <div>
          <h1> OBRA </h1>
          <p> Añadir descripción </p>
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
  name: "Obra",
  components: {
    NavBarEstudio,
    HeaderEstudio,
    FooterEstudio,
    Banner,
  },
}
</script>

<style scoped>
@import "../../assets/CSS/miestudio-folders.css";
@import "../../assets/CSS/main layout.css";
@import "../../assets/CSS/normalize.css";
</style>