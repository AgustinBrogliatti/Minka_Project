<template>
  <div id="content-article">
    <div id="content-artitcle__img">

    </div>
    <div id="content-article__description">

    </div>
  </div>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style scoped>
  #content-article  {
    width: 230px;
    height: 200px;
    border: 1px solid red;
    margin: 10px;
    box-sizing: border-box;
  }

  #content-artitcle__img  {
    width: 100%;
    height: 80%;
    border: 1px solid red;
    box-sizing: border-box;
  }

  #content-article__description   {
    width: 100%;
    height: 20%;
    border: 1px solid red;
    box-sizing: border-box;

  }
</style>