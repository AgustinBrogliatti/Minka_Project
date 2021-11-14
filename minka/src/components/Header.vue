<template>
  <div id="header">
    <router-link :to="toHome">
    <div class="content-logo">
      <div>
        <img class="content-logo__logo" alt="minkaLogo" @click="goToHome()" src="../assets/img/minkaLogo.png">
        <p class="text-logo">INKA</p>
      </div>
      <h5 class="slogan">Build for the people</h5>
    </div>
    </router-link>

    <div id="content-user">
      <div id="content-login__tagName">
        <p id="userName" @click="goToProfile()">{{this.userData.name}} {{this.userData.lastname}}</p>
      </div>
      <div id="content-login__photo" @click="goToProfile()">
        <img id="userImg" src="../assets/img/account.svg" alt="userLogo">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Header",
  methods: {
    goToProfile(){
      this.$router.push('./miperfil');
    }, goToHome(){
      this.$router.push('./home');
    }
  },
  props: {
    userData: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      toHome: "/admin/" + this.$route.params.id + "/home",
    }
  }

}
</script>

<style scoped>
@import "../assets/CSS/header.css";

</style>
