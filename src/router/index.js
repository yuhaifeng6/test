import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const _import = file => () => import("@/components/" + file + ".vue")
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: _import("HelloWorld"),
      meta: {
        title: "孙悟空！！！",
        bol: true
      },
      children: [
        {
          path: '/a',
          name: 'HelloWorld1',
          component: _import("HelloWorld"),
          meta: {
            title: "孙悟空111！！！",
            bol: true
          },
        },
      ]
    },
    {
      path: '/b',
      name: 'HelloWorld2',
      component: _import("HelloWorld"),
      meta: {
        title: "孙悟空222！！！",
        bol: true
      }
    },
    {
      path: "/subBox",
      name: "sub",
      component: _import("subBox"),
      children: [
        {
          path: "sub1",
          name: "sub1",
          component: _import("sub1")
        },
        {
          path: "sub2",
          name: "sub2",
          component: _import("sub2")
        },
        {
          path: "sub3",
          name: "sub3",
          component: _import("sub3")
        }
      ]
    },
    {
      path: '/list',
      name: 'itemList', // 商品管理
      component: _import("list"),
      meta: {
        keepAlive: true,
        title: '商品管理'
      }
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: _import("iframe"),
      meta: {
        keepAlive: true
      }
    }
  ]
})

export default router;
