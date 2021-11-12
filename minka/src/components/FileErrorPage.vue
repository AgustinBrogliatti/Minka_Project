<template>
  <div>
    <HeaderPortada/>
    <div class="container">
      <h1>File upload error....</h1>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <p>
        Intentá subirlo más tarde <router-link to="/home">volvé a la homepage</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileErrorPage"
}
</script>

<style scoped>
@import "../assets/CSS/main_layout.css";
@import "../assets/CSS/normalize.css";

.container{
  margin-top: 5%;
  border: 1px solid black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  background-image: url("../assets/img/error.jpeg");
  background-size: 35%;
}
</style>