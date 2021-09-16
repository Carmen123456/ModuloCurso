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
     <v-container
          label="Tipo Curso"
        >   
        <SelectIns  />
        </v-container>
         <validation-provider
        v-slot="{ errors }"
        name="NumeroDocumento"
        rules="required|max:2|numeric|min:1"
      >
        <v-text-field
          name="idCursoRequisitoFK" 
          id="idCursoRequisitoFK" 
          v-model="form.idCursoRequisitoFK"
          :counter="2"
          :error-messages="errors"
          required
            label="Definición Requisitos"
            
          ></v-text-field>
          </validation-provider>
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
import Header from '@/components/Header.vue';
import SelectIns from '@/components/SelectIns.vue';
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
    components: {SelectIns,
     ValidationObserver,
         ValidationProvider ,
          Header},
    name:"NuevoIR",
    data() {
        return{  
            form:{
                 idInscripcionFK: '',
                   idCursoRequisitoFK:'',
                 urlRequisito:''
            }
        }
    },
    
    methods:{
        guardar(){
           this.form.idInscripcionFK = document.getElementById("idInscripcionFK").value
            axios.post( "http://localhost:5000/api/InscriRequi/",this.form)
          .then(data =>{
                    console.log(data);
                this.salir()
                
            })
        },
        salir(){
            this.$router.push("/RequisitoIns")
        },
         cambiarIns(tipo){
            this.form.idInscripcionFK = tipo
        }
        
    }
}

</script>
<style scoped>

</style>