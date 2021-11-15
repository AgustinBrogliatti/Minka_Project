<template>

  <div id="content-navbar">
    <div class="navbar">
        <ul>
          <router-link :to="toHome"><li><i class="fas fa-house-user"></i> Home</li></router-link>
            <li><i class="fas fa-tasks"></i> Mi Estudio
              <ul>
                <li v-for="(proyect, index) in proyects" :key="index" v-bind:proyect="proyect" @click="toProyect(proyect.name)">{{proyect.name}}</li>
              </ul>
            </li>
          <router-link :to="toProfile"><li><i class="fas fa-user-circle"></i> Mi Perfil</li></router-link>
          <router-link :to="toContact"><li><i class="fas fa-address-card"></i> Contacto</li></router-link>
          <router-link to="/"><li><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</li></router-link>
        </ul>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavBarClient",
  methods: {
    toProyect(proyect) {
      this.$router.push("/" + this.$route.params.id + "/miestudio/" + proyect + "/misarchivos")
    }
  },
  data () {
    return {
      toHome: "/" + this.$route.params.id + "/home",
      toMiEstudio: "/" + this.$route.params.id + "/miestudio/Miravalles/misarchivos",
      toContact: "/" + this.$route.params.id + "/contact",
      toProfile: "/" + this.$route.params.id + "/profile",
      proyects: null,
    }
  },
  beforeMount() {
    axios.get("http://localhost:4000/api/v1/proyects?client=" + this.$route.params.id)
        .then(response => {
          this.proyects = response.data.proyects
        })
        .catch(err => {
          console.log(err)
          console.log("INTERNAL SERVER ERROR 500")
          this.$router.push("/error-server")
        })
  }
}
</script>

<style scoped>
@import "../../assets/CSS/navbar.css";

</style>