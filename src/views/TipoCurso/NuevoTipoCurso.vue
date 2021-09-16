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
     
   
   
      <validation-provider
        v-slot="{ errors }"
        name="nombreTipoCurso"
        rules="required|max:25|alpha_spaces|min:3"
      >
          <v-text-field
             name="nombreTipoCurso" 
             id="nombreTipoCurso" 
             v-model="form.nombreTipoCurso"
              :counter="25"
          :error-messages="errors"
          required
            label="Nombre curso"
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
 import { required, max, min, alpha_spaces } from 'vee-validate/dist/rules'
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
export default {
    name:"NuevoTipoCurso",
    data() {
        return{  
            form:{
                 nombreTipoCurso: '',
            }
        }
    },
    components:{
      
         ValidationObserver,
         ValidationProvider,
          Header
    },
    methods:{
        guardar(){
             this.$refs.observer.validate()
            axios.post("http://localhost:5000/api/TipoCurso",this.form)
          
           .then(data =>{
                    console.log(data);
                this.salir();
                
                
            })
        },
        salir(){
            this.$router.push("/TipoCurso");
        },
        
        
    }
}

</script>
<style scoped>

</style>