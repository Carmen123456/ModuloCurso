
<template>
     <v-form enctype="multipart/form-data">
      <Header/>
  
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
         <v-container>
             <SelectCurso  />
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
import axios from 'axios';
import Header from '@/components/Header.vue';

export default {
    
    name:"NuevoInscri",
    data() {
        return{  
            form:{
                 'idCursoFK': '',
            }
        }
    },
    components:{
        
         SelectCurso,
          Header
    },
    methods:{
        guardar(){
            this.form.idCursoFK = document.getElementById("idCursoFK").value
            
            axios.post("http://localhost:5000/api/Inscripcion",this.form)
         .then(data =>{
                    console.log(data);
                 this.salir()
                
            })
        },
        salir(){
            this.$router.push("/Inscripcion");
        },
        cambiarCurso(tipo){
            this.form.idCursoFK = tipo
        },
        
        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
        
    }
}

</script>
<style scoped>

</style>