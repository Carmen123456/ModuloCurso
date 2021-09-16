<template>

<select class="form-control" name="idInscripcionFK" id="idInscripcionFK">
    <option v-for="Inscripcion in ListaidInscripcion" :key="Inscripcion.idInscripcion"
     :value="Inscripcion.idInscripcion">{{Inscripcion.fechaInscripcion}}
     </option>
</select>

</template>

<script>
import axios from 'axios';


export default {
    name:"SelectIns",
   data(){
        return {
            ListaidInscripcion:null,
        }
        
    },
    mounted:function(){
        let direccion = "http://localhost:5000/api/Inscripcion/";
                axios.get(direccion).then( data =>{
                this.ListaidInscripcion = data.data;
                  }); 
    }
    
        
}

</script>