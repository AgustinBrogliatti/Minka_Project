<template>
  <div class="container">
    <div class="navbar">
      <div class="body">
        <ul>
          <router-link to="/admin/home"><li><i class="fas fa-house-user"></i> Home</li></router-link>
          <li><i class="fas fa-tasks"></i> Proyectos
            <ul>
              <li>Miravalles</li>
              <li>Vicario</li>
              <li>Olivos</li>
            </ul>
          </li>
          <router-link to="addproject"> <li>  <i class="fas fa-plus"></i>  Añadir proyecto </li> </router-link>
          <li> <i class="fas fa-user-plus"></i>  Añadir cliente </li>
          <router-link to="miperfil"><li><i class="fas fa-user-circle"></i>  Mi Perfil</li></router-link>
          <router-link to="contacto"><li><i class="fas fa-address-card"></i>  Contacto</li></router-link>
          <router-link to="/"><li><i class="fas fa-sign-out-alt"></i>  Cerrar Sesión</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.container{
  padding: 20px;
  margin-top: 2.5%;
}

.navbar{
  width: 200px;
  height: 350px;
  background-color: var(--main-color);
  border-radius: 10px 10px;
}


.body li{
  transition: 1s all;
  font-family: sans-serif;
  font-size: 18px;
  padding: 15px;
  margin-left: -40px;
  color: #fff;
  list-style: none;
  display: block;
  border-radius: 10px 10px;
}

li:hover{
  transition: 1s all;
  color: #2f89fc;
  background-color: rgba(42, 56, 65, 0.82);
  border-radius: 10px 10px;
  cursor: pointer;
}

.body > li{
  float: left;
}

.body li ul{
  background: #1E2B32;
  margin-left: 190px;
  margin-top: -38px;
  display: none;
  position: absolute;
  border-radius: 10px 10px;
}

.body li:hover > ul{
  display: block;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>