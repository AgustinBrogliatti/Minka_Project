<template>
  <div class="body-page-client">
    <ProyectClient v-for="(proyect, index) in proyects" :key="index" v-bind:proyect="proyect"></ProyectClient>


  </div>
</template>


<script>

import ProyectClient from "@/components/Client/ProyectClient";
import axios from "axios";

export default {
  name: "CatalogueClient",
  components: {
    ProyectClient
  },
  data () {
    return {
      proyects: ""
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/proyects?client=" + this.$route.params.id)
    .then(response => {
      this.proyects = response.data.proyects
    })
  }
}
</script>

<style scoped>

.body-page-client   {
  margin: 3.7% 0 3% 0;
  width: 66%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border: none;
  background: none;
}

</style>