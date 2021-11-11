<template>
  <div id="container">
    <div id="content-banner">
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
  #content-banner {
    border: 1px solid gray;
    width: 180px;
    height: 500px;
    margin: 25px;
    background-size: 100% 100%;
    animation: banner 30s infinite;
  }

  #container{
    padding: 0.5%;
    margin-top: 2.5%;
  }
  @keyframes banner {
    0%,25%{
      background-image: url("../assets/img/banners/publ1.jpeg");
      opacity: 1;
    }
    26%,50%{
      background-image: url("../assets/img/banners/publ2.jpeg");
      opacity: 1;
    }
    51%,75%{
      background-image: url("../assets/img/banners/publ3.jpeg");
      opacity: 1;
    }
    76%,100%{
      background-image: url("../assets/img/banners/publ4.jpg");
      opacity: 1;
    }
  }

  img{
    width: 100%;
  }
</style>