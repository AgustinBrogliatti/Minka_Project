<template>
<div id="home_page">
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
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import Banner from "./Banner";
import Footer from "./Footer";

export default {
  name: "HomePage",
  components:{
    Header,
    NavBar,
    Home,
    Banner,
    Footer
  }
}
</script>

<style>
#content-body{
  background-image: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") ;
  background-size: cover;
}
</style>