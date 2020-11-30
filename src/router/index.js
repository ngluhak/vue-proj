import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'
import About from '../views/About.vue'
import AddTodo from '../components/AddTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
    children: [
      {
        path: '/edit/:id',
        name: 'AddTodo',
        component: AddTodo
      },
      {
        path: '/add',
        name: 'AddTodo',
        component: AddTodo
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
