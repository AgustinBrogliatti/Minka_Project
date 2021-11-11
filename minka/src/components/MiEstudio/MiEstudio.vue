<template>
  <div id="home_page">
    <HeaderEstudio></HeaderEstudio>
    <div id="content-body">
      <NavBarEstudio></NavBarEstudio>
      <div class="content-home">
        <div class = "projects-container" v-for="(project,index) in comp" :key="index">
          <div> <NewProject></NewProject> </div>

            <div id="add-project_button">
              <p> Añadir proyecto </p>
            </div>

        </div>
      </div>
      <Banner></Banner>
    </div>
    <FooterEstudio></FooterEstudio>
  </div>
</template>

<script>


import HeaderEstudio from "./HeaderEstudio";
import FooterEstudio from "./FooterEstudio";
import Banner from "../Banner";
import NewProject from "../Architect/AddProject";
import NavBarEstudio from "./NavBarEstudio";

export default {
  name: "MiEstudio",
  components: {
    NavBarEstudio,
    HeaderEstudio,
    FooterEstudio,
    Banner,
    NewProject
  }

};



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
  font-size: .8em;

}

#content-project__description p {
  margin: .6% 2%;
  font-size: 1em;
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