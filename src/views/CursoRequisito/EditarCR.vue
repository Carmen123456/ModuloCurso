<template>

     <v-form enctype="multipart/form-data">
      <Header/>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
         <v-text-field
            name="idRequisitosFK"
             id="idRequisitosFK"
              v-model="form.idRequisitosFK"
            label="Tipo de requisitos"
          ></v-text-field>
           <v-text-field
            name="idCursoFK" 
            id="idCursoFK"
             v-model="form.idCursoFK"
            label="Curso"
          ></v-text-field>
          
         
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
</template>
<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
export default {
    
    name:"EditarTipoCurso",
    data:function() {
        return{   
            form:{
               idRequisitosFK: '',
                 idCursoFK:'',
                
            },
        }
    },
    components:{
       Header
      
    },
    
    methods:{
            editar(){
               
                axios.put("http://localhost:5000/api/CursoRequisito/"+this.form.idCursoRequisito, this.form)
                .then( data => {
                    console.log(data);
                     this.salir();
                })
            },
            salir(){
                this.$router.push("/CursoRequisito")
            }
    },
    mounted:function(){
            this.form.idCursoRequisito = this.$route.params.id;
              axios.get("http://localhost:5000/api/CursoRequisito/"+ this.form.idCursoRequisito)
              .then( datos => {
                  console.log(datos)
                   this.form.idRequisitosFK= datos.data.idRequisitosFK;  
                    this.form.idCursoFK = datos.data.idCursoFK;                  
                  console.log(this.form);
              })
        

    }
}
  </script>

<style scoped>

</style>