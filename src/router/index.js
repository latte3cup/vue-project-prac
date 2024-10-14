import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingList from '../views/DataBindingList.vue'
import EventClick from '../views/EventClick.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentComponent2 from '../views/ParentComponent2.vue'
import ParentComponent4 from '../views/ParentComponent4.vue'
import ParentComponent5 from '../views/ParentComponent5.vue'
import StoreAccess from '../views/StoreAccess.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path:'/databindingclass',
    name: 'dataBindingClass',
    component: DataBindingClass
  },
  {
    path:'/databindinglist',
    name: 'dataBindingList',
    component: DataBindingList
  },
  {
    path:'/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path:'/databindinglist2',
    name: 'dataBindingList2',
    component: DataBindingList2
  },
  {
    path:'/nestedcomponent',
    name: 'nestedcomponent',
    component: NestedComponent
  },
  {
    path:'/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path:'/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path:'/parentcomponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path:'/parentcomponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import( /* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import( /* webpackChunkName: "slot" */ '../views/Calculator.vue')
  },
  {
    path: '/calculatorapi',
    name: 'calculatorapi',
    component: () => import( /* webpackChunkName: "slot" */ '../views/CalculatorAPI.vue')
  },
  {
    path: '/calculatorapi2',
    name: 'calculatorapi2',
    component: () => import( /* webpackChunkName: "slot" */ '../views/CalculatorAPI2.vue')
  },
  {
    path: '/calculatorapi3',
    name: 'calculatorapi3',
    component: () => import( /* webpackChunkName: "slot" */ '../views/CalculatorAPI3.vue')
  },
  {
    path: '/calculatorapi4',
    name: 'calculatorapi4',
    component: () => import( /* webpackChunkName: "slot" */ '../views/CalculatorAPI4.vue')
  },
  {
    path: '/storeaccess',
    name: 'storeaccess',
    component:StoreAccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
