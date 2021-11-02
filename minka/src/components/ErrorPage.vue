<template>
  <div>
    <HeaderPortada/>
    <div class="container">
      <h1>Parece que ingresaste a un link erroneo...</h1>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <p>
        Intentá reescribiendo el link o <router-link to="/home">volvé a la homepage</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
import HeaderPortada from "./HeaderPortada";

export default {
  name: "ErrorPage",
  components: {
    HeaderPortada
  }
}
</script>

<style scoped>
@import "../assets/CSS/main layout.css";
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