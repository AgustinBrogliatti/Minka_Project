<template>
  <div id="header">
    <div id="content-logo">
      <img id="content-logo__logo" alt="minkaLogo" @click="goToHome()" src="../assets/img/logo_minka.png">
    </div>

    <div id="content-login">
      <div id="content-login__tagName">
        <p @click="goToProfile()">{{userName}}</p>
      </div>
      <div id="content-login__photo" @click="goToProfile()"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: 'Agustin Brogliatti',
      logoImage: '../assets/img/logo.png',
    }
  }, methods: {
    goToProfile(){
      this.$router.push('/miperfil');
    }, goToHome(){
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
  *   {

    box-sizing: border-box;

  }

  #header   {
    width: 100%;
    height: 5%;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;


  }

  #content-logo   {
    width: auto;
    margin-left: 1.5%;

  }

  #content-logo__logo   {
    height: 60px;
  }

  #content-login  {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1%;
  }

  #content-login__tagName  {
    margin: auto;
  }

  #content-login__photo   {
    border-radius: 100%;
    width: 22%;
    height: 80%;
    background-image: url("../assets/img/login.png");
    background-position: center;
    background-size: cover;
  }

  #content-login__tagName   {
    font-size: 1.2em;
  }
  #content-login__photo, #content-logo__logo, #content-login__tagName:hover{
    cursor: pointer;
  }
</style>