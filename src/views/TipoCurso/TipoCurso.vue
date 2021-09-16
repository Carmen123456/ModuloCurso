<template>

  <v-card>
     <Header/>
    <v-card-title>
     Tipo Curso
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-btn   color="purple" text  v-on:click="nuevo()">Nuevo curso</v-btn>
 <v-data-table :headers="headers" :items="tipocursos" :search="search">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.idTipoCurso}}</td>
            <td>{{row.item.nombreTipoCurso}}</td>
            <td>
                <v-btn class="mx-2" fab dark small   color="purple" v-on:click="editar(row.item.idTipoCurso)">
                    <v-icon dark>mode</v-icon>
                </v-btn>
            </td>
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>




<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
    name:"TipoCurso",
    data(){
        return{
          search:'',
          
            headers: [
          {
            text: '#',
            align: 'start',
            filterable: false,
            value: 'idTipoCurso',
          },
          { text: 'Tipo curso', value: 'nombreTipoCurso' },
        { text: 'Actions', value: 'actions', sortable: false },
        ],
       tipocursos:[
         {
           idTipoCurso:'',
           nombreTipoCurso:''
           }
        ],
        }
    },
    components:{ 
       Header
    },
    methods:{
            
        editar(id){
            this.$router.push('/EditarTipoCurso/'+id);
        },
        nuevo(){
           this.$router.push('/NuevoTipoCurso');
        }
    },
    mounted:function(){
        let url = "http://localhost:5000/api/TipoCurso";
        axios.get(url).then(data => {
            this.tipocursos = data.data;
            console.log(this.tipocursos)
        })

    }
}
</script>



<style scoped>

</style>