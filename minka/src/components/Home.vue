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
  components:   {
    Article,
  },
    /*methods: {
      goHome(){
        this.$router.push('/projects');
      }
    }*/
  }
</script>

<style scoped>
@import "../assets/CSS/main layout.css";


</style>