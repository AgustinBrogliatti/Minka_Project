<template>
  <div id="home_page">
    <HeaderEstudio></HeaderEstudio>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <Banner></Banner>
    </div>
    <FooterEstudio></FooterEstudio>
  </div>
</template>

<script>

import HeaderEstudio from "../HeaderEstudio";
import FooterEstudio from "../FooterEstudio";
import Banner from "../Banner";
import NavBarEstudio from "./NavBarEstudio";

export default {
  name: "Documentacion",
  components: {
    NavBarEstudio,
    HeaderEstudio,
    FooterEstudio,
    Banner,
  },
}
</script>

<style scoped>
@import "../../assets/CSS/main layout.css";
@import "../../assets/CSS/normalize.css";
</style>