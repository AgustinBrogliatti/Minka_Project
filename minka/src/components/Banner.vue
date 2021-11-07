<template>
  <div id="content-banner">
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
  #content-banner {
    border: 1px solid steelblue;
    width: 150px;
    height: 300px;
    margin: 25px;
    background-size: 100% 100%;
    animation: banner 20s infinite;
  }
  /*@keyframes banner {
    0%,11.666%{
      background-image: url("../assets/img/banner/img1.jpg");
      opacity: 1;
    }
    11.667%,16.666%{
      opacity: 0.1;
    }
    16.667%,28.333%{
      background-image: url("../assets/img/banner/img2.jpg");
      opacity: 1;
    }
    28.334%,33.333%{
      opacity: 0.1;
    }
    33.334%,45%{
           background-image: url("");
           opacity: 1;
         }
    45%,50%{
      opacity: 0.1;
    }
    50%,61.666%{
           background-image: url("");
           opacity: 1;
         }
    61.667%,66.666%{
      opacity: 0.1;
    }
    66.667%,78.333%{
           background-image: url("");
           opacity: 1;
         }
    78.334%,83.333%{
      opacity: 0.1;
    }
    83.334%,95%{
           background-image: url("");
           opacity: 1;
         }
    95%,100%{
      opacity: 0.1;
    }
  }*/
  img{
    width: 100%;
  }
</style>