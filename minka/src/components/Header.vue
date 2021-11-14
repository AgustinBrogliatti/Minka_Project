<template>
  <div id="header">
    <div class="content-logo">
      <router-link :to="toHome">
      <div>
        <img class="content-logo__logo" alt="minkaLogo" src="../assets/img/minkaLogo.png">
        <p class="text-logo">INKA</p>
      </div>
      <h5 class="slogan">Build for the people</h5>
    </router-link>
    </div>


    <div id="content-user">
      <div id="content-login__tagName">
        <p id="userName">{{this.userData.name}} {{this.userData.lastname}}</p>
      </div>
      <div id="content-login__photo">
        <img id="userImg" src="../assets/img/account.svg" alt="userLogo">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    userData: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      toHome: "",
    }
  },
  beforeMount () {
    if (this.$route.fullPath.match("admin") != null) {
      this.toHome = "/admin/" + this.$route.params.id + "/home"
    } else {
      this.toHome = "/" + this.$route.params.id + "/home"
    }
  }

}
</script>

<style scoped>
@import "../assets/CSS/header.css";

</style>
