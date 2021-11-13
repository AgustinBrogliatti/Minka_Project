<template>
  <div id="content-banner">
    <div id="banner"></div>
  </div>

</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
  #content-banner {
    width: 200px;
    height: 500px;
    margin: auto;
    margin-top: 4.4%;
    background-size: 100% 100%;
    animation: banner 30s infinite;
  }

  #banner{
    padding: 0.5%;
    margin-top: 2.5%;
  }

  @keyframes banner {
    0%,25%{
      background-image: url("../assets/img/banners/banner_1.jpeg");
      opacity: 1;
    }
    26%,50%{
      background-image: url("../assets/img/banners/banner_2.jpeg");
      opacity: 1;
    }
    51%,75%{
      background-image: url("../assets/img/banners/banner_3.jpeg");
      opacity: 1;
    }
    76%,100%{
      background-image: url("../assets/img/banners/banner_4.jpg");
      opacity: 1;
    }
  }

  img{
    width: 100%;
  }
</style>