import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Dashboard from '../views/Dashboard.vue';
import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';

import TipoCurso from '../views/TipoCurso/TipoCurso';
import EditarTipoCurso from '../views/TipoCurso/EditarTipoCurso';
import NuevoTipoCurso from '../views/TipoCurso/NuevoTipoCurso';


import Inscripcion from '../views/Inscripcion/Inscripcion';
import NuevoIns from '../views/Inscripcion/NuevoIns';
import EditarIns from '../views/Inscripcion/EditarIns';


import RequisitoIns from '../views/InscriRequi/RequisitoIns';
import NuevoIR from '../views/InscriRequi/NuevoIR';
import EditarIR from '../views/InscriRequi/EditarIR';


import Requisito from '../views/Requisito/Requisito';
import NuevoRequisito from '../views/Requisito/NuevoRequisito';
import EditarRequisito from '../views/Requisito/EditarRequisito';


import CursoRequisito from '../views/CursoRequisito/CursoRequisito';
import NuevoCR from '../views/CursoRequisito/NuevoCR';
import EditarCR from '../views/CursoRequisito/EditarCR';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },
  {
    path: '/tipoCurso',
    name: 'TipoCurso',
    component: TipoCurso
  },
  {
    path: '/editarTipoCurso/:id',
    name: 'EditarTipoCurso',
    component: EditarTipoCurso
  },
  {
    path: '/NuevoTipoCurso',
    name: 'NuevoTipoCurso',
    component: NuevoTipoCurso
  },
  {
    path: '/Inscripcion',
    name: 'Inscripcion',
    component: Inscripcion
  },
  {
    path: '/NuevoIns/:nombre',
    name: 'NuevoIns',
    component: NuevoIns
  },
  {
    path: '/EditarIns/:id',
    name: 'EditarIns',
    component: EditarIns
  },
  {
    path: '/RequisitoIns',
    name: 'RequisitoIns',
    component: RequisitoIns
  },
  {
    path: '/NuevoIR',
    name: 'NuevoIR',
    component: NuevoIR
  },
  {
    path: '/EditarIR/:id',
    name: 'EditarIR',
    component:EditarIR
  }, {
    path: '/Requisito',
    name: 'Requisito',
    component: Requisito
  },
  {
    path: '/NuevoRequisito',
    name: 'NuevoRequisito',
    component: NuevoRequisito
  },
  {
    path: '/EditarRequisito/:id',
    name: 'EditarRequisito',
    component:EditarRequisito
  },
  {
    path: '/CursoRequisito',
    name: 'CursoRequisito',
    component: CursoRequisito
  },
  {
    path: '/NuevoCR',
    name: 'NuevoCR',
    component: NuevoCR
  },
  {
    path: '/EditarCR/:id',
    name: 'EditarCR',
    component:EditarCR
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
