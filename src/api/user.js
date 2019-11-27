import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getRoleList() {
  return request({
    url: '/api/roleList',
    method: 'get',
  })
}
export function getRoleData() {
  return request({
    url: '/api/roleData',
    method: 'get',
  })
}
