<template>
  <div id="content-home">
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
  </div>
</template>

<script>
import Article from "@/components/Article";

export default {
  name: "Home",
  components:   {
    Article,
  }
}
</script>

<style scoped>
  #content-home   {
    margin: auto;
    margin-top: 60px;
    padding: 24px;
    border: 1px solid red;
    width: 800px;
    height: auto;
    display: flex;
    flex-flow: row wrap;


  }
</style>