import Vue from 'vue';
import VueRouter from 'vue-router';
import FeedPage from '../views/FeedPage.vue';
import SignupPage from '../views/SignupPage.vue';
import LoginPage from '../views/LoginPage.vue';
import UserPage from '../views/UserPage.vue';
import CreatePage from '../views/CreatePage.vue';
import PostPage from '../views/PostPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FeedPage',
    component: FeedPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  },
  {
    path: '/user/:userId',
    component: UserPage,
  },
  {
    path: '/post/:postId',
    component: PostPage,
  },
  {
    path: '/create',
    component: CreatePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
