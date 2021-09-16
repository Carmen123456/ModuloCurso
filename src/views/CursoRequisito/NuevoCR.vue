
<template>
     <v-form enctype="multipart/form-data">
     <Header/>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
         <v-container aria-label="hola">
             <SelectCurso  />
         </v-container>
         <v-container>
             <SelectRequisito  />
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
</template>
<script>
import SelectCurso from '@/components/SelectCurso.vue';
import Header from '@/components/Header.vue';
import SelectRequisito  from '@/components/SelectRequisito.vue';
import axios from 'axios';

export default {
    
    name:"NuevoInscri",
    data() {
        return{  
            form:{
                 'idCursoFK': '',
                 'idRequisitosFK':'',
            }
        }
    },
    components:{
        
         SelectCurso,
         SelectRequisito,
          Header
    },
    methods:{
        guardar(){
            this.form.idCursoFK = document.getElementById("idCursoFK").value
             this.form.idRequisitosFK = document.getElementById("idRequisitosFK").value
            
            axios.post("http://localhost:5000/api/CursoRequisito",this.form)
         .then(data =>{
                    console.log(data);
                 this.salir()
                
            })
        },
        salir(){
            this.$router.push("/CursoRequisito");
        },
        cambiarCurso(tipo){
            this.form.idCursoFK = tipo
        },
        cambiarRequisito(tipo){
            this.form.idRequisitosFK = tipo
        }
        
      
        
    }
}

</script>
<style scoped>

</style>