<template>
  <div class ="content-home">
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article></Article>
    <Article/>
    <Article/>

  </div>
</template>

<script>
import Article from "@/components/Article";

export default {
  name: "Home",
  components: {
    Article,
  }
}
</script>

<style scoped>
@import "../assets/CSS/main_layout.css";
.content-home{
  border: none;
  background: none;
}


</style>