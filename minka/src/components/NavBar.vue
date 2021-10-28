<template>
  <div id="content-NavBar">
    <p class="nav__option">Mi Estudio</p>
    <p class="nav__option">Contacto</p>
    <p class="nav__option">Proyectos</p>
    <p class="nav__option">Miravalles</p>
    <p class="nav__option">Vicario</p>
    <p class="nav__option">Manfredi</p>
    <p class="nav__option">Mollo</p>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  #content-NavBar   {
    width: 11%;
    height: 20%;
    border: 1px solid red;
    margin: 1.5%;
  }

  .nav__option  {
    background-color: green;
    margin: 0;
    font-size: 1.3em;
    padding: 4%;
  }

  .nav__option:hover  {
    background-color: red;
  }
</style>