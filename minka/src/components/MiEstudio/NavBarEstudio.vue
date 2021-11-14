<template>
  <div id="content-navbar">
    <div class="navbar">
        <ul>
          <router-link :to="toHome"><li><i class="fas fa-house-user"></i> Home</li></router-link>
          <router-link :to="toMiEstudio"><li><i class="far fa-folder-open"></i> Mis archivos</li></router-link>
          <router-link :to="toIdeas"><li><i class="far fa-lightbulb"></i> Ideas</li></router-link>
          <router-link :to="toDoc"><li><i class="fas fa-file"></i> Documentación</li></router-link>
          <router-link :to="toAnteproyecto"><li><i class="fas fa-folder-open"></i> Anteproyecto</li></router-link>
          <router-link :to="toAvances"><li><i class="fas fa-rocket"></i> Avances</li></router-link>
          <router-link :to="toLegajo"><li><i class="fas fa-archive"></i> Legajo</li></router-link>
          <router-link :to="toObra"><li><i class="fas fa-hard-hat"></i> Obra</li></router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarEstudio",
  data () {
    return {
      toHome: "/admin/" + this.$route.params.id + "/home",
      toMiEstudio: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/misarchivos",
      toIdeas: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/ideas",
      toAnteproyecto: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/anteproyecto",
      toDoc: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/documentacion",
      toAvances: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/avances",
      toLegajo: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/legajo",
      toObra: "/admin/" + this.$route.params.id +  "/miestudio/" + this.$route.params.proyect + "/obra",

    }
  }
}
</script>

<style scoped>

@import "../../assets/CSS/navbar.css";

</style>