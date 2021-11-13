<template>
 <div>
  <footer class="footer-distributed">
    <div class="footer-left">
      <div class="content-logo">
        <div>
          <img class="content-logo__logo" alt="minkaLogo" @click="goToHome()" src="../assets/img/minkaLogo.png">
          <p class="text-logo">INKA</p>
        </div>

      </div>
      <p class="footer-links">
        <router-link to="home">Home </router-link>
        <router-link class="bar" to="quienessomos">Acerca de nosotros </router-link>
        <router-link class="bar" to="contacto">Contacto</router-link>
      </p>
      <p id="footer-company-name">Minka© 2021. All rights reserved.</p>
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

.footer-distributed{
  background: #484E52;
  width: 100%;
  height: 200px;
  text-align: center;
  padding: 30px;
  font-family: sans-serif;
  font-size: 17px;
}

.footer-left{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

#footer-company-name {
  margin: 0;
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