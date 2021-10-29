<template>
  <div id="content-home">
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
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  #content-home   {
    margin: 5% auto 3% auto;
    padding: 2.4%;
    border: 1px solid red;
    width: 66%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
  }

</style>