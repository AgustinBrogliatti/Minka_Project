<template>
  <div id="content-navbar">
    <div class="navbar">
        <ul>
          <router-link :to="toHome"><li><i class="fas fa-house-user"></i> Home</li></router-link>
          <router-link :to = "toMiEstudio">
            <li><i class="fas fa-tasks"></i> Mi Estudio
            <ul>
              <li>Miravalles</li>
              <li>Vicario</li>
              <li>Olivos</li>
            </ul>
            </li>
          </router-link>
          <router-link :to="toAddClient"><li>  <i class="fas fa-user-plus"></i>  Añadir cliente </li></router-link>
          <router-link :to="toAddProyect"> <li>  <i class="fas fa-plus"></i>  Añadir proyecto </li> </router-link>
          <router-link :to="toProfile"><li><i class="fas fa-user-circle"></i>  Mi Perfil</li></router-link>
          <router-link :to="toContact"><li><i class="fas fa-address-card"></i>  Contacto</li></router-link>
          <router-link to="/"><li><i class="fas fa-sign-out-alt"></i>  Cerrar Sesión</li></router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarArq",
  methods: {

  },
  data () {
    return {
      toHome: "/admin/home/" + this.$route.params.id,
      toMiEstudio: "/admin/home/" + this.$route.params.id + "/miestudio",
      toAddClient: "/admin/home/" + this.$route.params.id + "/addclient",
      toAddProyect: "/admin/home/" + this.$route.params.id + "/addproyect",
      toContact: "/admin/home/" + this.$route.params.id + "/contact",
      toProfile: "/admin/home/" + this.$route.params.id + "/profile",
    }
  }
}
</script>

<style scoped>
@import "../../assets/CSS/navbar.css";

</style>