import Home from './components/Home.vue';
import Header from './components/Header.vue';

// webpack's dynamic loading necessary code (splits bundle into multiple bundles)
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  });
};
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  });
}
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  });
}
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  });
}

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
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => { // local beforeEnter example
      console.log('inside route setup');
      next(); 
    } },
    { path: ':id/edit', component: UserEdit, name: 'userEdit' }
   ] },
   /*{ path: '/redirect-me', redirect: '/user'}*/ // example of simple redirection
   { path: '/redirect-me', redirect: { name: 'home' } }, // redirection based on route name
   { path: '*', redirect: '/' } // generic catch all else
];
