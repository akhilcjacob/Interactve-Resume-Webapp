import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Projects'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import fileNotFound from '@/components/fileNotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Project
    }, {
      path: '/about',
      component: Home
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/projects',
      component: Project
    }, {
      path: '/contact',
      component: Contact
    },
    {
      path: '*',
      component: fileNotFound
    }
  ]
})
