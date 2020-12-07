import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import AddTodo from '../components/AddTodo.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/shop',
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
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
