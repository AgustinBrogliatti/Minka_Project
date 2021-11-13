<template>
  <div class="body-page-client">
    <Proyect v-for="(proyect, index) in proyects" :key="index" v-bind:proyect="proyect"></Proyect>

  </div>
</template>

<script>

import Proyect from "@/components/Architect/Proyect";
import axios from "axios";

export default {
  name: "CatalogueArq",
  components: {
    Proyect
  },
  data () {
    return {
      proyects: ""
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/proyects?admin=" + this.$route.params.id)
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
  justify-content: start;
  align-items: center;
  text-align: center;
  border: none;
  background: none;
}

</style>