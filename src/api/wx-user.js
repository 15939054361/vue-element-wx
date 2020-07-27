import request from '@/utils/request'

export function list(data) {
  return request({
    url: '/admin/common/user/inquire',
    method: 'GET',
    data
  })
}

export function register(data) {
  return request({
    url: '/admin/user/add',
    method: 'POST',
    data
  })
}