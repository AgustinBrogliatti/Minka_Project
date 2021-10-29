<template>
  <div class="login">
    <h1 class="title">Inicie sesión</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Introduzca su email"
      >
      <label class="form-label" for="#password">Contraseña:</label>
      <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Introduzca su contraseña"
      >
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login" @click="goHome()">
    </form>

  </div>
</template>

<script>

export default {
  name: "Login",
  data: () => ({
      email: "",
      password: "",
      error: false
    }),
    methods: {
      login() {
        console.log(this.email);
        console.log(this.password);
      },
      goHome(){
        this.$router.push('/home');
      }
    }
}
</script>

<style scoped>
.login {
  padding: 5rem;
  background-image: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") ;
  background-size: cover;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
:first-of-type {
   margin-top: 0rem;
 }

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}

:focus {
   outline: 0;
   border-color: #1ab188;
 }

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
&:hover {
   background: #0b9185;
 }

</style>