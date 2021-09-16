<template>
  <v-toolbar
    color="purple"
    max-height= "67"
    dark
  >
    <v-toolbar-title>SACRIS</v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

      <v-btn color="purple" href="./" >Inicio </v-btn >

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
     <v-btn color="purple"  href="./Dashboard">curso</v-btn >

      <v-divider vertical></v-divider>
<br>
<v-btn color="purple" href="./TipoCurso">Tipocurso</v-btn>
<br>
<v-btn color="purple" href="./Inscripcion">Inscripcion</v-btn>
<br>

<v-btn color="purple" href="./Requisito">Requisito</v-btn>
<br>
<v-btn color="purple" href="./RequisitoIns">RequisitosIns</v-btn>
<br>
<v-btn color="purple" href="./CursoRequisito">CursoRequisito</v-btn>
<br>

      <v-divider vertical></v-divider>

      

      <v-divider vertical></v-divider>
    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>


    
  </v-toolbar>





  
</template>