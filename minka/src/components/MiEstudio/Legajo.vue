<template>
  <div id="home_page">
    <HeaderEstudio></HeaderEstudio>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <div class = "body-page">
        <div>
          <h1> LEGAJO </h1>
          <p> En esta carpeta se incluirá aquel conjunto de documentación gráfica y escrita que define tanto la obra como las condiciones de ejecución de la misma. </p>
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
  name: "Legajo",
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

p {
  margin-left: 2%;
  margin-right: 2%;
}


</style>