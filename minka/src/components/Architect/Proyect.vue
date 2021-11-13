<template>
  <div id="content-article">
    <div id="content-article__img">
      <img  src="../../assets/img/miravalles.jpeg">
    </div>
    <div id="content-article__description">
      <p>{{this.proyect.name}}</p>
      <p>{{this.proyect.clientName}} {{this.proyect.clientLastname}}</p>
      <p>{{this.proyect.date}} - {{this.proyect.endpoint}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proyect",
  data () {
    return {
    }
  },
  props: {
    proyect: {
      type: Object,
      required: true,
    }
  }
  }
</script>

<style scoped>
  #content-article  {
    width: 31.5%;
    height: auto;
    border: 1px solid lightgray;
    margin: .9%;
    box-sizing: border-box;
    background: white;
  }
  #content-article:hover {
    border: 1px solid #777;
  }

  #content-article__img  {
    width: 100%;
    height: 80%;
    box-sizing: border-box;
  }

  #content-article__img  img{
    width: 100%;
  }

  #content-article__description   {
    width: 100%;
    height: 30%;
    padding: 1%;
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