import { api } from '@/config'
import request from '@/utils/request'

const { byDay } = api
export async function queryByDay2(param) {
  return request({
    url: byDay,
    method: 'get',
    data: param,
  })
}

export async function queryByDay(param) {
  return request({
    url: byDay,
    method: 'post',
    data: param,
  })
}
