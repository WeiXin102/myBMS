//载入公用的路由组件
import { constantRoutes } from '@/router'
//载入后台的路由表
import { list } from '../../../mock/data/index'
//载入动态创建路由组件
import { customAddRoutes } from '../../changeRouter'

/**
 * 判断是否 被许可 （确认权限）
 * @param roles 权限，例如：roles: ['editor'], roles: ['admin'],
 * @param route 路由  例如： {roles: ['editor']}
 * return Boolean
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 *  通过权限roles 进行过滤 
 * @param routes 动态添加的整个路由表
 * @param roles 权限 例如：roles: ['editor'], roles: ['admin'],
 * return 经过过滤拥有权限的 路由表
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}


const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}
const actions = {
  async generateRoutes({ commit }, roles, roleList) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = customAddRoutes(list) || []
        // accessedRoutes = asyncRoutes || []      
        console.log('admin', accessedRoutes)
      } else {
        accessedRoutes = filterAsyncRoutes(customAddRoutes(list), roles)
        // accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        console.log('经过权限过滤', accessedRoutes)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
