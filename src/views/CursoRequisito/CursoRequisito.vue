<template>

  <v-card>
     <Header/>
    <v-card-title>
    Definición Requisitos
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
       <v-btn   color="purple" text  v-on:click="nuevo()">Nueva Definición</v-btn>
        <v-data-table :headers="headers" :items="listaCR" :search="search">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.idCursoRequisito}}</td>

            <td>{{row.item.Requisito.nombreRequisitos}}</td>
               <td>{{row.item.Curso.nombreCurso}}</td>
                <td>{{row.item.InscriRequis.urlRequisito}}</td>

             
             <td>
                <v-btn class="mx-2" fab dark small   color="purple" v-on:click="editar(row.item.idCursoRequisito)">
                    <v-icon dark>mode</v-icon>
                </v-btn>
            </td>
           
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>

import axios from 'axios';
import Header from '@/components/Header.vue';
export default {
    name:"CursoRequisito",
    data(){
        return{
           search:'',
          
            headers: [
          {
            text: '#',
            align: 'start',
            filterable: false,
            value: 'idCursoRequisito',
          },
          { text: 'Requisito', value: 'idRequisitosFK' },
            { text: 'Curso', value: 'idCursoFK' }
  
  
       
        ],
       listaCR:[
         {
           idCursoRequisito:'',
              nombreCurso:'',
           nombreRequisitos:'',
           urlRequisito:''
           
           

          
        
           }
        ],
        }
    }, 
             
    components:{
         Header
    },
    
    methods:{
           
          
        nuevo(){
           this.$router.push('/NuevoCR');
        },
         editar(id){
           this.$router.push('/EditarCR/'+id);
        }
    },
    mounted:function(){
        let url = "http://localhost:5000/api/CursoRequisito";
        axios.get(url)
    .then(data => {
          this.listaCR = data.data;
            console.log(this.listaCR)
    })
    }

}
</script>

<style scoped>

</style>