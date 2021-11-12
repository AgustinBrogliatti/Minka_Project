<template>
<div id="home_page">
  <Header></Header>
  <div id="content-body">
    <NavBarCli></NavBarCli>
    <Home></Home>
    <Banner></Banner>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "./Header";
import NavBarCli from "./Client/NavBarCli";
import Home from "./Home";
import Banner from "./Banner";
import Footer from "./Footer";

export default {
  name: "HomePage",
  components:{
    Header,
    NavBarCli,
    Home,
    Banner,
    Footer
  }
}
</script>

<style>
@import "../assets/CSS/main_layout.css";

</style>