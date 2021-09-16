<template>

  <v-card>
     <Header/>
    <v-card-title>
     Inscripcion
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-btn   color="purple" text  v-on:click="nuevo()">Nueva Inscripcion</v-btn>
        <v-btn   color="purple" text  v-on:click="consultarInactivos()" >Inscripciones Inactivas</v-btn>
 <v-data-table :headers="headers" :items="listaInscri" :search="search">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.idInscripcion}}</td>
             <td>{{row.item.fechaInscripcion}}</td>
            <td>{{row.item.Curso.nombreCurso}}</td>
             <td>
                <v-btn class="mx-2" fab dark small   color="purple" v-on:click="editar(row.item.idInscripcion)">
                    <v-icon dark>mode</v-icon>
                </v-btn>
                <td>
                <v-btn class="mx-2" fab dark small   color="purple" v-on:click="subir()">
                    <v-icon dark>remove_red_eye</v-icon>
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
    name:"Inscripcion",
    data(){
        return{
           search:'',
          
            headers: [
          {
            text: '#',
            align: 'start',
            filterable: false,
            value: 'idInscripcion',
          },
             { text: 'fecha Inscripcion', value: 'fechaInscripcion' },
          { text: 'Curso', value: 'idCursoFK' },
       
        ],
       listaInscri:[
         {
           idInscripcion:'',
           fechaInscripcion:'',
           nombreCurso:'',
        
           }
        ],
        }
    }, 
             
    components:{
       Header
        
    },
    
    methods:{
           consultarInactivos(){
                 let direccion = "http://localhost:5000/api/Inscripcion/inactivos";
                axios.get(direccion).then( data =>{
                    this.listaInscri = data.data;
                    console.log(this.listaInscri)
                }); 
            },
            
    
        nuevo(){
           this.$router.push('/NuevoIns');
        },
        subir(){
          this.$router.push('/NuevoIR');
        },
         editar(id){
           this.$router.push('/EditarIns/'+id);
        }
    },
    functionBtn(accion, idInscripcion){
            axios.put("http://localhost:5000/api/Inscripcion/"+accion+"/"+idInscripcion)
              .then( data =>{
                  console.log(data);
                  this.salir();
              })
          },
    mounted:function(){
        let url = "http://localhost:5000/api/Inscripcion/";
        axios.get(url)
    .then(data => {
          this.listaInscri = data.data;
            console.log(this. listaInscri)
    })
    }

}
</script>

<style scoped>

</style>