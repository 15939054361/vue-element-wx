import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/user/login',
    method: 'POST',
    data
  })
}

export function inquire(data) {
  return request({
    url: `/admin/user/inquire/${data}`,
    method: 'GET',
  })
}