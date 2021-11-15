<template>
  <div id="header">

    <router-link :to="toHome">
    <div class="content-logo">
      <div>
        <img class="content-logo__logo" alt="minkaLogo" src="../assets/img/minkaLogo.png">
        <p class="text-logo">INKA</p>
      </div>
      <h5 class="slogan">Build for the people</h5>
    </div>
    </router-link>


    <div id="content-user">
      <router-link :to="toProfile">
      <div id="content-login__tagName">
        <p id="userName">{{this.userData.name}} {{this.userData.lastname}}</p>
      </div>
      </router-link>
      <router-link :to="toProfile">
      <div id="content-login__photo">
        <img id="userImg" src="../assets/img/account.svg" alt="userLogo">
      </div>
      </router-link>
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
      toProfile: "",
    }
  },
  beforeMount () {
    if (this.$route.fullPath.match("admin") != null) {
      this.toHome = "/admin/" + this.$route.params.id + "/home"
      this.toProfile = "/admin/" + this.$route.params.id + "/profile"

    } else {
      this.toHome = "/" + this.$route.params.id + "/home"
      this.toProfile = "/" + this.$route.params.id + "/profile"
    }
  }

}
</script>

<style scoped>
@import "../assets/CSS/header.css";

</style>
