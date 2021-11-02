<template>
  <div id="home_page">
    <Header></Header>
    <div id="content-body">
      <NavBar></NavBar>
      <div class="content-home">
        <div>
          <NewProject></NewProject>
            <div id="add-project_button">
              <p> Añadir proyecto </p>
            </div>


        </div>
        <router-link to="/home">Volver atrás</router-link>
      </div>
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

import NewProject from "@/components/NewProject";
export default {
  name: "MiEstudio",
  components: {
    Header,
    Footer,
    NavBar,
    Banner,
    NewProject
  },

  methods: {
    addProject: function () {
      this.components.push(NewProject);
    }
  }

};



</script>

<style scoped>
@import "../assets/CSS/main layout.css";

#content-project  {
  width: 100%;
  height: auto;
  border: 1px solid red;
  margin: .9%;
  box-sizing: border-box;
}

#content-project__img  {
  width: 100%;
  height: 100%;
  border: 1px solid red;
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
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .8 em;

}

#content-project__description p {
  margin: .6% 2%;
  font-size: 1 em;
}

#add-project_button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}


</style>