<template>
 <div>
  <footer class="footer-distributed">
    <div class="footer-left">
      <div class="content-logo">
        <router-link :to="toHome">
        <div>
          <img class="content-logo__logo" alt="minkaLogo" src="../assets/img/minkaLogo.png">
          <p class="text-logo">INKA</p>
        </div>
        </router-link>
      </div>
      <p class="footer-links">
        <router-link :to="toHome">Home </router-link>
        <router-link class="bar" :to="toAboutUs">Acerca de nosotros </router-link>
        <router-link class="bar" :to="toAboutUs">Contacto</router-link>
      </p>
      <p id="footer-company-name">Minka© 2021. All rights reserved.</p>
    </div>
  </footer>
 </div>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      toHome: "",
      toContact: "",
      toAboutUs: "",
    }
  },
  beforeMount () {
    if (this.$route.fullPath.match("admin") != null) {
      this.toHome = "/admin/" + this.$route.params.id + "/home"
      this.toContact = "/admin/" + this.$route.params.id + "/aboutus"
      this.toAboutUs = "/admin/" + this.$route.params.id + "/aboutus"
    } else {
      this.toHome = "/" + this.$route.params.id + "/home"
      this.toContact = "/" + this.$route.params.id + "/aboutus"
      this.toAboutUs = "/" + this.$route.params.id + "/aboutus"
    }
  }
}
</script>

<style scoped>

.content-logo {
  cursor: pointer;
}
.footer-distributed{
  background: #484E52;
  width: 100%;
  text-align: center;
  padding: 30px;
  font-family: sans-serif;
  font-size: 17px;
  height: 300px;

}

.footer-left{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 70px;
}

#footer-company-name {
  font-size: 14.5px;
  color: white;
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