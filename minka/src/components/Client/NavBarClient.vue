<template>

  <div id="content-navbar">
    <div class="navbar">
        <ul>
          <router-link to="/home/asd"><li><i class="fas fa-house-user"></i> Home</li></router-link>
            <li><i class="fas fa-tasks"></i> Mi Estudio
              <ul>
                <li>Miravalles</li>
                <li>Vicario</li>
                <li>Olivos</li>
              </ul>
            </li>
          <router-link to="/miperfil"><li><i class="fas fa-user-circle"></i> Mi Perfil</li></router-link>
          <router-link to="/contacto"><li><i class="fas fa-address-card"></i> Contacto</li></router-link>
          <router-link to="/"><li><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</li></router-link>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBarClient",
}
</script>

<style scoped>
@import "../../assets/CSS/navbar.css"

</style>