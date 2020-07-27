import { permissionRoutes, constantRoutes } from "@/router/index";
const copyRoute = JSON.stringify(permissionRoutes);
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(route, permission) {

  let arr=[]
  // debugger
  for (let index = 0; index < route.length; index++) {
    const element = route[index];
    const res = permission.find(per_item => per_item.id === element.id);
    if (res && res.children) {
      res.children = filterAsyncRoutes(element.children, res.children)
    }
    if (res) {
      arr.push(res)
    }
  }
  // console.log(this.permissionRoutes)
  // debugger
  return arr;
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
    console.log("routes===>", state.routes)
  }
}

const actions = {
  generateRoutes_2({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },

  generateRoutes({ commit }, routes) {
    return new Promise(async resolve => {
      const accessedRoutes = filterAsyncRoutes(routes, permissionRoutes)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }

  // generateRoutes({ state }) {
  //   console.log(state)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}