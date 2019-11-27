import request from '@/utils/request'

export function getRoleList() {
    return request({
        url: '/roleList',
        method: 'get',
    })
}
export function getRoleData() {
    return request({
        url: '/roleData',
        method: 'get',
    })
}