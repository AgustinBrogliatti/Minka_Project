<template>
  <div id="content-article" @click="toProyect()">
    <div id="content-article__img">
      <img  src="../../assets/img/miravalles.jpeg">
    </div>
    <div id="content-article__description">
      <p>{{this.proyect.name}}</p>
      <p>{{this.proyect.adminName}} {{this.proyect.adminLastname}}</p>
      <p>{{this.proyect.date}} - {{this.proyect.endpoint}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProyectClient",
  methods: {
    toProyect() {
      this.$router.push("/" + this.$route.params.id + "/miestudio/" + this.proyect.name + "/misarchivos")
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
  width: 560px;
  height: auto;
  border: 1px solid lightgray;
  margin: .9%;
  box-sizing: border-box;
  background: white;
  cursor: pointer;
}

#content-article:hover {
  border: 1px solid #777;
  transition: 1s;
}

#content-article__img  {
  width: auto;
  box-sizing: border-box;
}

#content-article__img  img{
  width: 100%;
  height: 450px;
}

#content-article__description   {
  width: 560px;
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