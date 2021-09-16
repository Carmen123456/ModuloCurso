 <template>
    <v-container grid-List-md>
       <Header/>
    <v-btn   color="purple" text  v-on:click="nuevo()">Nuevo curso</v-btn>
<v-btn  color="purple" text  v-on:click="consultarInactivos()" >Cursos Inactivos</v-btn>
      <v-row>
        <v-col
        cols="4"
           v-for="curso in listaCurso" 
          :key="curso.idCurso"
        >
          <v-card  max-width="500">
            <v-img
             class="white--text align-end"
              :src="curso.imagenCurso"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title  style="font-size:30px"  v-text="curso.nombreCurso"></v-card-title>
            </v-img>
            <v-card-text class="text--primary" style="font-size:20px" >
                         <p> {{ curso.fechaInicialCurso }}</p>
                         <p>{{curso.fechaFinalCurso}}</p>
                         <p>{{curso.costoCurso}}</p>
                         <p>{{curso.TipoCurso.nombreTipoCurso}}</p>
                         </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
                  <v-btn  class="ma-2"
                    v-on:click="inscribir(curso.nombreCurso)"
         color="purple"
        dark>
                  Inscribir
                <v-icon 
                dark
               right>
             plus_one
             </v-icon>
              </v-btn>

              <v-btn
        class="ma-1"
          color="purple"
        dark
        v-on:click="editar(curso.idCurso)"
      >
       Editar
        <v-icon
          dark
          right
        >
        
            mode
        </v-icon>
      </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>

import axios from 'axios';
import Header from '@/components/Header.vue';
export default {
    name:"Dashboard",
    data(){
        
        return{
            listaCurso: null
            
        }
    },
    components:{
       Header
        
        
    },
    methods:{
         consultarInactivos(){
                 let direccion = "http://localhost:5000/api/Curso/inactivos";
                axios.get(direccion).then( data =>{
                    this.listaCurso = data.data;
                    console.log(this.listaCurso)
                }); 
            },
            
        editar(id){
            this.$router.push('/Editar/'+id);
        },
        nuevo(){
           this.$router.push('/Nuevo');
        },
        inscribir(nombre){
           this.$router.push('/NuevoIns/'+nombre);
        }
    },
    mounted:function(){
        let url = "http://localhost:5000/api/Curso/";
        axios.get(url).then(data => {
            this.listaCurso = data.data;
            console.log(this.listaCurso)
        })

    }
}
</script>
<style lang="stylus" scoped>

</style>