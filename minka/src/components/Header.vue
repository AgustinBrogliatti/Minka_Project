<template>
  <div id="header">
    <div id="content-logo">
      <img id="content-logo__logo" src="../assets/img/logo.png" alt="minkaLogo">
    </div>
    <div id="content-login">
      <div id="content-login__tagName">
        <p>{{userName}}</p>
      </div>
      <div id="content-login__photo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data ()   {
    return  {
      userName: "Agustin Brogliatti",
      logo: "Minka"
    }
  }
}
</script>

<style scoped>
  *   {
    border: 1px solid red;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #header   {
    width: 100%;
    height: 50px;
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;
  }

  #content-logo   {
    width: 15%;


  }

  #content-logo__logo   {
    width: 50px;

  }

  #content-login__tagName  {
    margin: auto;
  }

  #content-login  {
    width: 14%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }

  #content-login__photo   {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-image: url("../assets/img/logo.png");
    background-position: center;

  }

  #content-login__tagName   {
    width: auto;
    height: 20px;
  }
</style>