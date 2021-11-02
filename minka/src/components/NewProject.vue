<template>
  <div id="content-new_project">
    <div id="content-new_project__img">
      <img  src="../assets/img/miravalles.jpeg">
    </div>
    <div id="content-new_project__description">
      <p>{{project_name}}</p>
      <p>{{client_name}}</p>
      <p>{{start_date}}</p>
      <p> {{city}}</p>
    </div>




  </div>
</template>

<script>

export default {
  name: "NewProject",
  data() {
    return {
      project_name: "Mansión de Lujo",
      client_name: "Ricardo Fort",
      start_date: "12/12/2020",
      city: "Miami"
    }
  }

}

</script>

<style scoped>
#content-new_project  {
  width: 31.5%;
  height: auto;
  border: 1px solid red;
  margin: .9%;
  box-sizing: border-box;
}

#content-new_project__img  {
  width: 100%;
  height: 80%;
  border: 1px solid red;
  box-sizing: border-box;


}

#content-new_project__img  img{
  width: 100%;
}

#content-new_project__description   {
  width: 100%;
  height: 30%;
  padding: 1%;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .8 em;

}

#content-new_project__description p {
  margin: .6% 2%;
  font-size: 1 em;
}
</style>