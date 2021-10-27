<template>
  <div id="app">
    <Header></Header>
    <div id="content-body">
      <NavBar></NavBar>
      <Home></Home>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    Home,
    Banner,
    Footer,

  }
}
</script>

<style scoped>
@import "./assets/CSS/normalize.css"

</style>
