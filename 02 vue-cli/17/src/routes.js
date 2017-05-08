import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
  { path: '', name: 'home', components: {
    default: Home,
    'header-top': Header
  } },
 //  { path: '/user', component: User }
//  { path: '/user/:id', component: User }
   { path: '/user', components: {
    default: User,
    'header-bottom': Header
   }, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UserDetail },
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
   ] },
   /*{ path: '/redirect-me', redirect: '/user'}*/ // example of simple redirection
   { path: '/redirect-me', redirect: { name: 'home' } }, // redirection based on route name
   { path: '*', redirect: '/' } // generic catch all else
];
