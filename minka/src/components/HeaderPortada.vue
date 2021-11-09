<template>
  <div id="header">
    <div id="content-logo">
      <img id="content-logo__logo" alt="minkaLogo" src="../assets/img/logo_minka.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPortada"
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
  justify-content: center;


}

#content-logo   {
  width: auto;
  margin-left: 1.5%;

}

#content-logo__logo   {
  height: 60px;
}

#content-login  {
  width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2%;
}

#content-login__tagName  {
  margin: auto;
}

#content-login__photo   {
  border-radius: 50%;
  width: 22%;
  height: 80%;
  background-image: url("../assets/img/login.png");
  background-position: center;
  background-size: cover;
}

#content-login__tagName   {
  font-size: 1.2em;
}
/*img:hover {
  cursor: pointer;
}*/
</style>