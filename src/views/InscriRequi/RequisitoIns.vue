
<template>

  <v-card>
     <Header/>
    <v-card-title>
     Requisitos
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mode"
        label="Buscar url"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-btn color="purple" text  v-on:click="nuevo()">Nuevo Requisito</v-btn>
 <v-data-table :headers="headers" :items="listaInscriRequi" :search="search">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.idInscriRequi}}</td>
            <td>{{row.item.Inscripcion.fechaInscripcion}}</td>
             <td>{{row.item.CursoRequisito.idRequisitosFK}}</td>
                 <td>{{row.item.CursoRequisito.idCursoFK}}</td>
            <td>{{row.item.urlRequisito}}</td>
            <td>
                <v-btn class="mx-2" fab dark small   color="purple" v-on:click="editar(row.item.idInscriRequi)">
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
    name:"RequisitoIns",
    data(){
        return{
         search:'',
            headers: [
          {
            text: '#',
            align: 'start',
            filterable: false,
            value: 'idInscriRequi',
          },
          { text: 'Inscripcion', value: 'idInscripcionFK' },
            { text: 'Requisito', value: 'idRequisitosFK' },
             { text: 'Curso', value: 'idCursoFK' },
              { text: 'Url requisito', value: 'urlRequisito' },
        { text: 'Actions', value: 'actions', sortable: false },
        ],
      listaInscriRequi:[
         {
           idInscriRequi:'',
           idInscripcionFK:'',
           idRequisitosFK:'',
           idCursoFK:'',
           urlRequisito:'',
           }
        ],
        }
    },
    components:{
        Header
    },
    methods:{
        editar(id){
            this.$router.push('/EditarIR/'+id);
        },
        nuevo(){
           this.$router.push('/NuevoIR');
        }
    },
    mounted:function(){
        let url = "http://localhost:5000/api/InscriRequi/";
        axios.get(url)
    .then(data => {
         console.log(data)
           this. listaInscriRequi= data.data;
            
        })

    }
}
</script>

<style scoped>

</style>