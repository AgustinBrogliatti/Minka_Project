<template>
  <div id="content-NavBar">
    <p class="nav__option">Mi Estudio</p>
    <p class="nav__option">Contacto</p>
    <p class="nav__option">Proyectos</p>
    <p class="nav__option_project">Miravalles</p>
    <p class="nav__option_project">Vicario</p>
    <p class="nav__option_project">Manfredi</p>
    <p class="nav__option_project">Mollo</p>
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
    height: 30%;
    border: 1px solid red;
    margin: 1.5%;
  }

  .nav__option, .nav__option_project  {
    background-color: green;
    margin: 0;
    font-size: 1.3em;
    padding: 4%;
  }

  .nav__option:hover, .nav__option_project:hover  {
    background-color: red;
  }

  .nav__option_project {
    padding-left: 15%;
  }
</style>