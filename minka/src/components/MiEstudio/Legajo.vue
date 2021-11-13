<template>
  <div id="home_page">
    <Header></Header>
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
    <Footer></Footer>
  </div>

</template>

<script>

import Header from "@/components/Header";
import NavBarEstudio from "./NavBarEstudio";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default {
  name: "Legajo",
  components: {
    NavBarEstudio,
    Header,
    Banner,
    Footer,
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