<template>

    <validation-observer
    ref="observer"
   
  >
  <Header/>
  <v-form enctype="multipart/form-data">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >  <validation-provider
        v-slot="{ errors }"
        name="nombreCurso"
        rules="required|max:25|alpha_spaces|min:3"
      >
          <v-text-field
             name="nombreCurso" 
             id="nombreCurso" 
             v-model="form.nombreCurso"
             :counter="25"
          :error-messages="errors"
          required
            label="Nombre curso"
          ></v-text-field>
          </validation-provider>
        </v-col>
              <v-col
          cols="12"
          sm="6"
        >
         <validation-provider
        v-slot="{ errors }"
        name="costoCurso"
        rules="required|max:6|numeric|min:5"
      >
          <v-text-field
             name="costoCurso" 
             type="number"
             id="costoCurso" 
             v-model="form.costoCurso"
            label="costo curso"
             :counter="10"
          :error-messages="errors"
          required
          ></v-text-field>
             </validation-provider>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
           <validation-provider
        v-slot="{ errors }"
        name="fechaInicialCurso"
        rules="required|max:10|min:10"
      >
          <v-date-picker
            name="fechaInicialCurso"
             id="fechaInicialCurso" 
             :error-messages="errors"
             v-model="form.fechaInicialCurso"
             required
          >Fecha inicial</v-date-picker>
           </validation-provider>
        </v-col>
        
        <v-col
          cols="12"
          sm="6"
        >
        
          <v-date-picker
          name="fechaFinalCurso" 
          id="fechaFinalCurso"
          label="Fecha final " 
          v-model="form.fechaFinalCurso"
          >Fecha final</v-date-picker>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
         <validation-provider
        v-slot="{ errors }"
        name="imagenCurso"
        rules="required|max:250|min:3"
      >
         <v-text-field
  
   name="imagenCurso"
    id="imagenCurso"
     v-model="form.imagenCurso"
      :counter="250"
          :error-messages="errors"
          required
     label="Imagen curso"
></v-text-field>
 </validation-provider>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
         <v-container
          label="Tipo Curso"
        >   
        <SelectTipoCurso  />
        </v-container>
        <v-btn  class="ma-2"
         color="purple"
        dark
        v-on:click="salir()" >
        Salir
        </v-btn>
         <v-btn  class="ma-2"
         color="purple"
        dark v-on:click="guardar()" >
        Guardar
        </v-btn>
        
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </validation-observer>
</template>

 
<script>

import axios from 'axios';
import SelectTipoCurso from '../components/SelectTipoCurso.vue';
import Header from '../components/Header.vue';
import { required, max, min, alpha_spaces,numeric ,alpha_dash} from 'vee-validate/dist/rules'
  import { extend, ValidationObserver,ValidationProvider } from 'vee-validate'
extend('required', {
    ...required,
    message: 'El campo no puede estar vacio',
  })
extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'El campo  solo debe tener caracteres alfabeticos y espacios',
  })
  extend('max', {
    ...max,
    message: 'El campo  no puede tener más de {length} caracteres',
  })
  extend('min', {
    ...min,
    message: 'El campo  debe tener minimo {length} caracteres',
  })
  extend('numeric', {
    ...numeric,
    message: 'El campo {field} solo debe contener numeros',
  })

  extend('alpha_dash', {
    ...alpha_dash,
    message: 'El campo {field} puede contener caracteres alfanuméricos, así como guiones y guiones bajos.',
  })
export default {
  components: { SelectTipoCurso,
         ValidationObserver,
         ValidationProvider,
         Header },

    name:"Nuevo",
    data:function() {
        return{   
            form:{
                "idCurso":"",
                "costoCurso":"",
                "estadoCurso": "",
                 "fechaInicialCurso": "",
               "fechaFinalCurso": "",
                "imagenCurso": "",
                "nombreCurso": "",
                 "idTipoCursoFK": ""
            }
        }
    },
      
  methods:{
        guardar(){/* 
            this.form.token = localStorage.getItem("token"); */
  this.form.idTipoCursoFK = document.getElementById("idTipoCursoFK").value
            axios.post("http://localhost:5000/api/Curso",this.form)
            .then(data =>{
                console.log(data);
                this.salir();
                }
                
            )
        },
        salir(){
            this.$router.push("/Dashboard");
        },
         cambiarTipoCurso(tipo){
            this.form.idTipoCursoFK = tipo
        }
        
    }
}
   
</script>
<style scoped>
.left{
    text-align: left;
}
</style>