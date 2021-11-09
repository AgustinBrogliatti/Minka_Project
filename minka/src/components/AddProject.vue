<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBar></NavBar>

      <ProjectInfo></ProjectInfo>

      <Banner></Banner>

    </div>
      <Footer></Footer>
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";


export default {
  name: "NewProject",
  components: {
    ProjectInfo,
    Header,
    Footer,
    NavBar,
    Banner
  }
}

</script>

<style scoped>

@import "../assets/CSS/main layout.css";


</style>