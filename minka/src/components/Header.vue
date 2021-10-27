<template>
  <div id="header">
    <div id="content-logo">
      <img id="content-logo__logo" alt="minkaLogo" src="../assets/img/logo_minka.png">
    </div>

    <div id="content-login">
      <div id="content-login__tagName">
        <p>{{userName}}</p>
      </div>
      <div id="content-login__photo"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data ()   {
    return  {
      userName: 'Agustin Brogliatti',
      logoImage: '../assets/img/logo.png',

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
    height: 60px;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;


  }

  #content-logo   {
    width: auto;
    margin-left: 20px;

  }

  #content-logo__logo   {
    height: 60px;
  }

  #content-login  {
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 35px;
  }

  #content-login__tagName  {
    margin: auto;
  }

  #content-login__photo   {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-image: url("../assets/img/login.png");
    background-position: center;
    background-size: cover;
  }

  #content-login__tagName   {
    font-size: 20px;
  }
</style>