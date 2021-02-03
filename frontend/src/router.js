import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';
import Rosters from './components/Rosters.vue';
import Notes from './components/Notes.vue';
import AllPlayers from './components/AllPlayers.vue';
import Inventory from './components/Inventory.vue';

Vue.use(Router);

export const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/rosters',
      name: 'rosters',
      component: Rosters
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/notes',
      component: Notes
    },
    {
      path: '/drafted',
      name: 'drafted',
      component: AllPlayers
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    { path: '*', redirect: '/' }
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   // lazy-loaded
    //   component: () => import('./views/Profile.vue')
    // },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   // lazy-loaded
    //   component: () => import('./views/BoardAdmin.vue')
    // },
    // {
    //   path: '/mod',
    //   name: 'moderator',
    //   // lazy-loaded
    //   component: () => import('./views/BoardModerator.vue')
    // },
    // {
    //   path: '/user',
    //   name: 'user',
    //   // lazy-loaded
    //   component: () => import('./views/BoardUser.vue')
    // }
  ]
});

// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home', '/rosters'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
  
//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//       next('/login');
//     } else {
//       next();
//     }
//   });