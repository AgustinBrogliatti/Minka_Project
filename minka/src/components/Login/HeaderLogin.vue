<template>

  <div id="headerLogin">
    <div id="content-logo">
      <img id="content-logo__logo" alt="minkaLogo" src="../../assets/img/minkaLogo.png">
      <p id="text-logo">INKA</p>
      <h1 id="slogan">Build for the people</h1>
    </div>

  </div>

</template>

<script>
export default {
  name: "HeaderLogin",

}
</script>

<style scoped>

#headerLogin  {
  width: 100%;
  height: 70px;
  background-color: var(--main-color);
  display: flex;
  justify-content: space-around;
}

#content-logo {
  width: auto;
  margin: auto;
  margin-top: 7px;
  display: flex;
  align-items: baseline;
}

#content-logo__logo   {
  height: 45px;
  margin-bottom: 20px;
}

#text-logo {
  display: inline-block;
  margin: auto;
  font-size: 35px;
  color: white;
  font-family: "Arial";
  letter-spacing: 5px;
  margin-left: 8px;
}

#slogan {
  margin-left: 50px;
  font-family: Helvetica;

}

</style>