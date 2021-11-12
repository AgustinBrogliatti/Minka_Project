<template>
  <div id="home_page">
    <HeaderEstudio/>
    <div id="content-body">
      <NavBarEstudio/>

      <div class ="content-home">
        <div class="file-container">
          <div class="file-container__img">
          </div>
          <div class="file-container__description">
          </div>
        </div>
        <div class="file-container">
          <div class="file-container__img">
          </div>
          <div class="file-container__description">
          </div>
        </div>
        <div class="file-container">
          <div class="file-container__img">
          </div>
          <div class="file-container__description">
          </div>
        </div>
        <div class="file-container">
          <div class="file-container__img">
          </div>
          <div class="file-container__description">
          </div>
        </div>
        <div class="file-container">
          <div class="file-container__img">
          </div>
          <div class="file-container__description">
          </div>
        </div>
        <div class="file-container">
          <div class="file-container__img">
          </div>
          <div class="file-container__description">
          </div>
        </div>
      </div>
      <Banner/>

    </div>
    <FooterEstudio/>
  </div>

</template>

<script>


import HeaderEstudio from "./HeaderEstudio";
import FooterEstudio from "./FooterEstudio";
import Banner from "../Banner";
import NavBarEstudio from "./NavBarEstudio";


export default {
  name: "MiEstudio",
  components: {
    NavBarEstudio,
    HeaderEstudio,
    FooterEstudio,
    Banner
  },
  data() {
    return{
      filename: "Mansion Miami.jpeg",
      project: "Mansion Fort"
    }
  }

};



</script>

<style scoped>
@import "../../assets/CSS/main_layout.css";

.file-container  {
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
  margin: .9%;
  box-sizing: border-box;
  background: white;
  align-items: ;
}

.file-container:hover {
  border: 1px solid #777;
}


.file-container__img  {
  width: 100%;
  height: 100%;
  border: 1px solid steelblue;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

}

#file-container__img  img{
  width: 50%;
  align-self: center;
}

.file-container__description   {
  width: 100%;
  height: 50%;
  padding: 1%;
  border: 1px solid steelblue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .8em;

}

.file-container__description p {
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

/*estos estilos los usamos cuando integremos con backend*/
</style>