<template>
  <div class="content-home">
      <form>
        <legend> <h1> Datos del proyecto </h1> </legend>
        <hr>

        <label>Nombre del proyecto</label>
        <input type="text" id="project_name" v-model="nombre_proyecto">

        <label>Nombre del cliente</label>
        <input type="text" id="fname" name="firstname" v-model="nombre">

        <label for="lname">Apellido del cliente</label>
        <input type="text" id="lname" name="lastname" v-model="apellido">

        <label>Localidad</label>
        <select id="city" v-model="ciudad">
          <option value="buenos aires">CABA</option>
          <option value="cba">Córdoba</option>
          <option value="ros">Rosario</option>
        </select>

        <label> Fecha </label>
        <br> <br>
        <input type="date" v-model="fecha">
        <br><br>
        <label>Breve descripción del proyecto </label>
        <textarea id="description" v-model="descripcion" ></textarea>

        <button @click= "crearProyecto()" > CREAR PROYECTO </button>
        {{listaObjetos}}
      </form>
    </div>

</template>

<script>



export default {
  name: "ProjectInfo",
  data() {
    return {
      listaObjetos: [],
      nombre_proyecto: "",
      nombre: "",
      apellido: "",
      ciudad: "",
      fecha: "",
      descripcion: ""
    }
  },
  methods: {
    crearProyecto() {
      let p_name = this.nombre_proyecto
      let name = this.nombre
      let lastname = this.apellido
      let city = this.ciudad
      let date = this.fecha
      let description = this.descripcion
      let projectObject = {
        "nombre del proyecto": p_name,
        "nombre del cliente": name,
        "apellido": lastname,
        "ciudad": city,
        "fecha": date,
        "descripcion": description
      }
      this.listaObjetos.push(projectObject)
    }
  }
}
</script>

<style scoped>

@import "../assets/CSS/main layout.css";


input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */


textarea {
  height:200px
}



</style>