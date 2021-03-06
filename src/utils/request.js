import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import qs from 'qs'
import axios from './interceptors'

const fetch = (options) => {
  /* eslint-disable */
  let { method = 'get', data, url } = options
  const cloneData = lodash.cloneDeep(data)
  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    console.log(e)
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, qs.stringify(cloneData))
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request(options) {
  return fetch(options)
    .then((response) => {
      const { statusText, status } = response
      const data = response.data
      return {
        success: true,
        message: statusText,
        statusCode: status,
        ...data,
      }
    })
    .catch((error) => {
      const { response } = error
      let msg
      let statusCode
      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }
      return { success: false, statusCode, message: msg }
    })
}
