<template>
  <div id="home_page">
    <HeaderArq></HeaderArq>
    <div id="content-body">
      <NavBar></NavBar>
      <Home></Home>
      <Banner></Banner>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderArq from "./HeaderArq";
import NavBar from "./NavBar";
import Home from "./Home";
import Banner from "./Banner";
import Footer from "./Footer";

export default {
  name: "HomePage",
  components:{
    HeaderArq,
    NavBar,
    Home,
    Banner,
    Footer
  }
}
</script>

<style>
@import "../assets/CSS/main layout.css";

</style>