import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const ShopCar = () => import('@/views/shopcar/ShopCar')
const Profile = () => import('@/views/profile/Profile')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/shopcar',
      component: ShopCar,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '我的'
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})

export default router;
