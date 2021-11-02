<template>
  <div class="container">
    <div class="navbar">
      <div class="body">
        <ul>
          <li @click="goToStudio()">Mi Estudio</li>
          <li>Contacto</li>
          <li>Proyectos
            <ul>
              <li>Miravalles</li>
              <li>Vicario</li>
              <li>Olivos</li>
            </ul>
          </li>
          <li>Mi Perfil</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    goToStudio(){
      this.$router.push('/miestudio');
    }
  }
}
</script>

<style scoped>
.container{
  padding: 20px;
  margin-top: 2.5%;
}

.navbar{
  width: 200px;
  height: 200px;
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
</style>