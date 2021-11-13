<template>

  <div id="headerLogin">
    <div class="content-logo">
      <img class="content-logo__logo" alt="minkaLogo" src="../../assets/img/minkaLogo.png">
      <p class="text-logo">INKA</p>
    </div>
    <h5 class="slogan">Build for the people</h5>
  </div>

</template>

<script>
export default {
  name: "HeaderLogin",
}
</script>

<style scoped>
@import "../../assets/CSS/Login/header_login.css";
#headerLogin  {
  width: 100%;
  height: 80px;
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content-logo {
  width: auto;
  margin: auto;
  margin-top: 8px;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.content-logo__logo   {
  height: 45px;
}

.text-logo {
  display: inline-block;
  margin: 0;
  margin-left: 8px;
  font-size: 35px;
  color: white;
  font-family: "Arial";
  letter-spacing: 5px;
}

.slogan {
  margin-left: 50px;
  font-family: Helvetica;
  margin: 0 auto 4px;
  color: white;
}
</style>