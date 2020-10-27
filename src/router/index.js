import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ListBook from '../components/Book/ListBook'
import EditBook from "../components/Book/EditBook"
import DeleteBook from "../components/Book/DeleteBook"
import NewBook from "../components/Book/NewBook"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/books',
    name: 'ListBook',
    component: ListBook
  },
    {
    path: '/books/new',
    name: 'NewBook',
    component: NewBook
  },
    {
      path:'/books/:bookId/edit',
      name:'EditBook',
      component: EditBook
    },
    {
      path:'/books/:bookId/delete',
      name:'DeleteBook',
      component: DeleteBook
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
