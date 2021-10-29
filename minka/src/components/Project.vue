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
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Home from "@/components/Home";
export default {
  name: "Project",
  components: {
    Home,
    Header,
    Footer,
    NavBar,
    Banner,

  },
  data() {
    return {
      name: "Nombre del proyecto"
    }
  }

}
</script>

<style scoped>
@import "../assets/CSS/main layout.css";

#content-project {
  width: 3335px;
  height: 2937px;
  border: 1px solid red;
  margin: .9%;
  box-sizing: border-box;
}
</style>