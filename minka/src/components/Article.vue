<template>
  <div id="content-article">
    <div id="content-artitcle__img">
      <img  src="../assets/img/miravalles.jpeg">
    </div>
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
    width: 31.5%;
    height: auto;
    border: 1px solid red;
    margin: .9%;
    box-sizing: border-box;
  }

  #content-artitcle__img  {
    width: 100%;
    height: 80%;
    border: 1px solid red;
    box-sizing: border-box;

  }

  #content-artitcle__img  img{
    width: 100%;
  }

  #content-article__description   {
    width: 100%;
    height: 20%;
    padding: 1%;
    border: 1px solid red;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: .8 em;

  }

  #content-article__description p {
    margin: .6% 2%;
    font-size: 1 em;
  }

</style>