<template>
  <div id="content-article">
    <div id="content-artitcle__img">

    </div>
    <div id="content-article__description">
      <p>{{title}}</p>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["title", "description"]

  }
</script>

<style scoped>
  #content-article  {
    width: 230px;
    height: 250px;
    border: 1px solid red;
    margin: 10px;
    box-sizing: border-box;
  }

  #content-artitcle__img  {
    width: 100%;
    height: 200px;
    border: 1px solid red;
    box-sizing: border-box;
    background-image: url("../assets/img/miravalles.jpeg");
    background-size: cover;
  }
  #content-article__description p   {
     margin: auto 5px;
  }
  #content-article__description   {
    width: 100%;
    height: 50px;
    border: 1px solid red;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 14px;

  }
</style>