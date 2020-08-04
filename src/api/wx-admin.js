import request from '@/utils/request'
export function register(data) {
  return request({
    url: '/admin/user/add',
    method: 'POST',
    data
  })
}
export function inquire(data) {
  return request({
    url: '/admin/user/inquire',
    method: 'GET',
    data
  })
}