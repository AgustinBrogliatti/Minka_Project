<template>
  <div id="content-article">
    <div id="content-artitcle__img"></div>
    <div id="content-article__description">
      <p>{{title}}</p>
      <p>{{name}}</p>
      <p>{{date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data () {
    return {
      title: "Miravalles - Alma Verde",
      name: "Eugenio Miravalles",
      date: "22/05/2021"
    }
  }
  }
</script>

<style scoped>
  #content-article  {
    width: 350px;
    height: 350px;
    border: 1px solid red;
    margin: 10px;
    box-sizing: border-box;
  }

  #content-artitcle__img  {
    width: 100%;
    height: 80%;
    border: 1px solid red;
    box-sizing: border-box;
    background-image: url("../assets/img/miravalles.jpeg");
    background-size: cover;
  }

  #content-article__description   {
    width: 100%;
    height: 20%;
    padding: 5px;
    border: 1px solid red;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 14px;

  }

  #content-article__description p {
    margin: 2px 5px;
    font-size: 16px;
  }

</style>