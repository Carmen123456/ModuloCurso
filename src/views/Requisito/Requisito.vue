
<template>

  <v-card>
     <Header/>
    <v-card-title>
     Tipo Requisito
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-btn   color="purple"  v-on:click="nuevo()">Nuevo Requisito</v-btn>
 <v-data-table :headers="headers" :items="listaRequisito" :search="search">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.idRequisitos}}</td>
            <td>{{row.item.nombreRequisitos}}</td>
            <td>
                <v-btn class="mx-2" fab dark small   color="purple" v-on:click="editar(row.item.idRequisitos)">
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
    name:"Requisito",
    data(){
        return{
          search:'',
      headers: [
          {
            text: '#',
            align: 'start',
            filterable: false,
            value: 'idRequisitos',
          },
          { text: 'Tipo Requisito', value: 'nombreRequisitos' },
        { text: 'Actions', value: 'actions', sortable: false },
        ],
       listaRequisito:[
         {
           idRequisitos:'',
           nombreRequisitos:''
           }
        ],
        }
    },
    components:{
          Header
    },
    methods:{
            
        editar(id){
            this.$router.push('/EditarRequisito/'+id);
        },
        nuevo(){
           this.$router.push('/NuevoRequisito');
        }
    },
    mounted:function(){
        let url = "http://localhost:5000/api/Requisito/";
        axios.get(url).then(data => {
            this.listaRequisito = data.data;
            console.log(this.listaRequisito)
        })

    }
}
</script>

<style scoped>

</style>