import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    label: "登录",
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    label: "404",
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    label: "dashboard",
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      label: "dashboard展示",
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'form' }
    }]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [{
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [{
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [{
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [{
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      meta: { title: 'External Link', icon: 'link' }
    }]
  },
  {
    label: "用户",
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: "/user/user-list",
    meta: { title: '用户' },
    children: [{
      label: "用户列表",
      path: "user-list",
      name: "user-list",
      meta: {
        title: "用户列表"
      },
      component: () => import("@/views/user/list/index"),

    }]
    /*  {
       path: "user-create",
       name: "user-create",
       meta: {
         title: "创建列表"
       },
       component: () => import("@/views/user/list/index")
     } */
  },

  {
    label: "步数",
    path: '/step',
    name: 'step',
    component: Layout,
    redirect: "/step/step-list",
    meta: { title: '运动' },
    children: [{
      label: "运动步数列表",
      path: "step-list",
      name: "step-list",
      meta: {
        title: "运动步数列表"
      },
      component: () => import("@/views/step/list/index"),

    }]
  },

  {
    label: "管理员",
    path: '/admin',
    name: 'admin',
    component: Layout,
    redirect: "/admin/admin-list",
    meta: { title: '管理员' },
    children: [{
      label: "创建管理员",
      path: "admin-create",
      name: "admin-create",
      meta: {
        title: "创建管理员"
      },
      component: () => import("@/views/admin/create/index")
    }, {
      label: "管理员列表",
      path: "admin-list",
      name: "admin-list",
      meta: {
        title: "管理员列表"
      },
      component: () => import("@/views/admin/list/index")
    }, ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const permissionRoutes = [{
    label: "用户",
    path: '/user',
    name: 'user',
    id: "1",
    component: Layout,
    redirect: "/user/user-list",
    meta: { title: '用户' },
    children: [{
      id: "1-1",
      label: "用户列表",
      path: "user-list",
      name: "user-list",
      meta: {
        title: "用户列表"
      },
      component: () => import("@/views/user/list/index")
    }]
    /*  {
       path: "user-create",
       name: "user-create",
       meta: {
         title: "创建列表"
       },
       component: () => import("@/views/user/list/index")
     } */
  },

  {
    label: "步数",
    path: '/step',
    name: 'step',
    id: "2",
    component: Layout,
    redirect: "/step/step-list",
    meta: { title: '运动' },
    children: [{
      id: "2-1",
      label: "运动步数列表",
      path: "step-list",
      name: "step-list",
      meta: {
        title: "运动步数列表"
      },
      component: () => import("@/views/step/list/index")
    }]
  },

  {
    label: "管理员",
    path: '/admin',
    name: 'admin',
    component: Layout,
    redirect: "/admin/admin-list",
    meta: { title: '管理员' },
    id: "3",
    children: [{
      id: "3-1",
      label: "创建管理员",
      path: "admin-create",
      name: "admin-create",
      meta: {
        title: "创建管理员"
      },
      component: () => import("@/views/admin/create/index")
    }, {
      id: "3-2",
      label: "管理员列表",
      path: "admin-list",
      name: "admin-list",
      meta: {
        title: "管理员列表"
      },
      component: () => import("@/views/admin/list/index")
    }, ]
  },
  {
    label: "测试",
    path: '/admin',
    name: 'admin',
    id: "4",
    component: Layout,
    redirect: "/admin/admin-list",
    meta: { title: '管理员' },
    children: [{
      id: "4-1",
      label: "测试-1",
      path: "admin-create",
      name: "admin-create",
      meta: {
        title: "创建管理员"
      },
      component: () => import("@/views/admin/create/index")
    }, {
      id: "4-2",
      label: "测试-2",
      path: "admin-list",
      name: "admin-list",
      meta: {
        title: "管理员列表"
      },
      component: () => import("@/views/admin/list/index"),
      children: [{
        id: "4-2-1",
        label: "4-2-1",
        path: "admin-list-1",
        name: "admin-list-1",
        meta: {
          title: "创建管理员"
        },
        component: () => import("@/views/admin/create/index")
      }, {
        id: "4-2-2",
        label: "测试-2-2",
        path: "admin-list-2",
        name: "admin-list-2",
        meta: {
          title: "管理员列表"
        },
        component: () => import("@/views/admin/list/index")

      }]
    }, ]
  }
]



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router