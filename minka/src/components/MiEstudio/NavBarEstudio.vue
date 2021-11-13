<template>
  <div class="container">
    <div class="navbar">
      <div class="body">
        <ul>
          <router-link to="../home"><li><i class="fas fa-house-user"></i> Home</li></router-link>
          <router-link to="ideas"><li><i class="far fa-lightbulb"></i> Ideas</li></router-link>
          <router-link to="documentacion"><li><i class="fas fa-file"></i> Documentación</li></router-link>
          <router-link to="anteproyecto"><li><i class="fas fa-folder-open"></i> Anteproyecto</li></router-link>
          <router-link to="avances"><li><i class="fas fa-rocket"></i> Avances</li></router-link>
          <router-link to="legajo"><li><i class="fas fa-archive"></i> Legajo</li></router-link>
          <router-link to="obra"><li><i class="fas fa-hard-hat"></i> Obra</li></router-link>
          <router-link to="/miestudio/inicio"><li><i class="far fa-folder-open"></i> Mis archivos</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarEstudio"
}
</script>

<style scoped>
.container{
  padding: 20px;
  margin-top: 2.5%;
}
.navbar{
  width: 200px;
  height: 400px;
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
.body li ul{
  background: #1E2B32;
  margin-left: 190px;
  margin-top: -38px;
  display: none;
  position: absolute;
  border-radius: 10px 10px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>