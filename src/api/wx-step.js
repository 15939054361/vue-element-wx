import request from '@/utils/request'

export function list(data) {
  return request({
    url: '/admin/common/step/inquire',
    method: 'GET',
    data
  })
}