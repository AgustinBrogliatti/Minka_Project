<template>
  <div id="content-home">
    <Article v-for="(infoArticle, index) in infoArticles" :key="index"></Article>

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
      infoArticles: [
        {title: "Miravalles - Alma Verde", description: "2 de Febrero - Actualidad"},
        {title: "Vicario - Somisa", description: "12 de Noviembre - 14 de Diciembre"},
        {title: "Manfredi - Alma Verde", description: "18 de Abril - Actualidad"},
        {title: "Vicario - Belgrano", description: "24 de Marzo - Actualidad"},
      ],
    }
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