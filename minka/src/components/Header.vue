<template>
  <div id="header">
    <div id="content-logo">
      <img id="content-logo__logo" alt="minkaLogo" @click="goToHome()" src="../assets/img/logo_minka.png">
    </div>

    <div id="content-login">
      <div id="content-login__tagName">
        <p @click="goToProfile()">{{userName}}</p>
      </div>
      <div id="content-login__photo" @click="goToProfile()">
        {{ initials }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: 'Agustin Brogliatti',
      initials: 'AB',
      logoImage: '../assets/img/logo.png',
    }
  }, methods: {
    goToProfile(){
      this.$router.push('/miperfil');
    }, goToHome(){
      this.$router.push('/home');
    },
     createProfileImage() {
      let inName = this.name.match(/^(\w)/g)
      let inLname = this.lastname.match(/^(\w)/g)
      let acronym = inName + " " + inLname
      this.initials = acronym

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
    width: 50px;
    height: 50px;
    background: #d23b64;
    font-size: 25px;
    font-family: 'Titillium Web', sans-serif;
    color: #fff;
    text-align: center;
    line-height: 150px;
    margin: 0 auto;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #content-login__tagName   {
    font-size: 1.2em;
  }

  #content-login__photo, #content-logo__logo, #content-login__tagName:hover{
    cursor: pointer;
  }


</style>
