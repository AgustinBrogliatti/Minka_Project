<template>
 <div>
  <footer class="footer-distributed">
    <div class="footer-left">
      <router-link to="home"><img id="content-logo__logo" alt="minkaLogo" src="../assets/img/logo_minka.png"></router-link>
      <p class="footer-links">
        <router-link to="home">Home </router-link>
        <router-link class="bar" to="/quienessomos">Acerca de nosotros </router-link>
        <router-link class="bar" to="/contacto">Contacto</router-link>
      </p>
      <p class="footer-company-name">Minka© 2021. All rights reserved.</p>
    </div>
  </footer>
 </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
* {
  font-family: sans-serif;
}

.footer-distributed{
  background: #484E52;
  width: 100%;
  text-align: center;
  padding: 30px;
  display: inline-block;
}

.footer-left{
  display: inline-block;
  width: 40%;
}

.footer-links{
  color:  #ffffff;
}

a{
  text-decoration: none;
  color:  inherit;
}

.footer-links .bar:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  padding-right: 5px;
}

img {
  width: 40%;
}

</style>