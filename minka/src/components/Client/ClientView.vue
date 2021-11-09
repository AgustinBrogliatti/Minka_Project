<template>

   <div id="home_page">
     <Header></Header>
     <div id="content-body">
       <NavBar></NavBar>
       <div class="content-home">
         <div id="content-project">
          <div id="content-project__img">
            <img src="../../assets/img/miravalles.jpeg">
          </div>
          <div id = "content-project__description">
            <p>{{title}}</p>
            <p>{{name}}</p>
            <p>{{date}}</p>
          </div>
         </div>
       </div>

       <Banner></Banner>
     </div>
     <Footer></Footer>
   </div>

</template>

<script>
import NavBar from "@/components/Architect/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";


export default {
  name: "Project",
  components: {

    Header,
    Footer,
    NavBar,
    Banner,

  },

  data() {
    return {
      title:"Miravalles - Alma Verde",
      name: "Eugenio Miravalles",
      date: "22/05/2021"
    }
  }
}
</script>

<style scoped>
@import "../../assets/CSS/main layout.css";

#content-project  {
  width: 100%;
  height: auto;
  border: 1px solid steelblue;
  margin: .9%;
  box-sizing: border-box;
}

#content-project__img  {
  width: 100%;
  height: 100%;
  border: 1px solid steelblue;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

}

#content-project__img  img{
  width: 50%;
  align-self: center;
}

#content-project__description   {
  width: 100%;
  height: 50%;
  padding: 1%;
  border: 1px solid steelblue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .8 em;

}

#content-project__description p {
  margin: .6% 2%;
  font-size: 1 em;
}

</style>