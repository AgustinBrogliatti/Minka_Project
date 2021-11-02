<template>
  <div>
    <HeaderPortada/>
    <Footer/>
    <router-link to="/home">Volver atrás</router-link>
  </div>
</template>

<script>
import HeaderPortada from "./HeaderPortada";
import Footer from "./Footer";

export default {
  name: "MiPerfil",
  components:{
    HeaderPortada,
    Footer
  }
}
</script>

<style scoped>

</style>