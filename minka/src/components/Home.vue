<template>
  <div id="content-home">
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
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  #content-home   {
    margin: 80px auto 60px auto;
    padding: 44px;
    border: 1px solid red;
    width: 1200px;
    height: auto;
    display: flex;
    flex-flow: row wrap;

  }
</style>