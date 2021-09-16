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
        >
         <v-text-field
            name="Inscripcion"
             id="Inscripcion"
              v-model="form.idInscripcionFK"
            label="Estdo Inscripcion" 
          ></v-text-field>
          <v-text-field
            name="idCursoRequisitoFK"
             id="idCursoRequisitoFK"
              v-model="form.idCursoRequisitoFK"
            label="Definición" 
          ></v-text-field>
            <validation-provider
        v-slot="{ errors }"
        name="urlRequisito"
        rules="required|max:250|min:3"
      >
          <v-text-field
             name="urlRequisito" 
             id="urlRequisito" 
             v-model="form.urlRequisito"
              :counter="250"
          :error-messages="errors"
          required
            label=" Requisito"
          ></v-text-field>
          </validation-provider>
          
            <v-btn  class="ma-2"
          color="purple"
        dark
        v-on:click="salir()" >
        Salir
        </v-btn>
         <v-btn  class="ma-2"
         color="purple"
        dark v-on:click="editar()" >
        Editar
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
 </v-form>
   </validation-observer>
</template>
<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import { required, max, min, numeric} from 'vee-validate/dist/rules'
  import { extend, ValidationObserver,ValidationProvider } from 'vee-validate'
   extend('numeric', {
    ...numeric,
    message: 'El campo {field} solo debe contener numeros',
  })
  extend('required', {
    ...required,
    message: 'El campo no puede estar vacio',
  })
  extend('max', {
    ...max,
    message: 'El campo  no puede tener más de {length} caracteres',
  })
  extend('min', {
    ...min,
    message: 'El campo  debe tener minimo {length} caracteres',
  })
  extend('required', {
    ...required,
    message: 'El campo no puede estar vacio',
  })
export default {
    
    name:"EditarTipoCurso",
    data:function() {
        return{   
            form:{
               idInscripcionFK: '',
                 idCursoRequisitoFK:'',
                 urlRequisito:''
            },
        }
    },
    components:{
      ValidationObserver,
         ValidationProvider,
          Header
    },
    
    methods:{
            editar(){
               
                axios.put("http://localhost:5000/api/InscriRequi/"+this.form.idInscriRequi, this.form)
                .then( data => {
                    console.log(data);
                     this.salir();
                })
            },
            salir(){
                this.$router.push("/RequisitoIns")
            }
    },
    mounted:function(){
            this.form.idInscriRequi = this.$route.params.id;
              axios.get("http://localhost:5000/api/InscriRequi/"+ this.form.idInscriRequi)
              .then( datos => {
                  console.log(datos)
                   this.form.idInscripcionFK = datos.data.idInscripcionFK;  
                    this.form.idCursoRequisitoFK = datos.data.idCursoRequisitoFK;  
                     this.form.urlRequisito = datos.data.urlRequisito;                 
                  console.log(this.form);
              })
        

    }
}
  </script>

<style scoped>

</style>