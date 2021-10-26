<template>
  <div id="content-NavBar">
    <p class="nav__option">Mi Estudio</p>
    <p class="nav__option">Calendario</p>
    <p class="nav__option">Contacto</p>
    <p class="nav__option">Miravalles</p>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  #content-NavBar   {
    width: 200px;
    height: 300px;
    border: 1px solid red;
    margin: 25px;
  }

  .nav__option  {
    background-color: green;
    margin: 0;
    font-size: 20px;
    padding: 10px;
  }

  .nav__option:hover  {
    background-color: red;
  }
</style>