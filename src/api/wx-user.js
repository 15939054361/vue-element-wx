import request from '@/utils/request'

export function list(data) {
  return request({
    url: '/admin/common/user/inquire',
    method: 'GET',
    data
  })
}