// import { Loading, Message } from 'element-ui'
// import url from '../store/modules/dataUrl'
// import axios from "axios"
import axios from "./../utils/http"
// import { Upload } from './upload'
import { callback } from './common'

import url from './dataUrl'

const all = url.state


/**
 * @description 获取所有课程分类
 * @param {function} cb
 * @return {Promise}
 */
const getCategory = (cb)=> {
  let loadingInstance = Loading.service({ text: '正在加载' })
  return axios.get(all.category).then(response => {
      callback(response, cb)
      loadingInstance.close()
  }, response => {
      console.log('errorCallback: ', response)
      loadingInstance.close()
  })
}
/**
 * @description test
 * @param {function} cb
 * @return {Promise}
 */
const getChannelStat1 = (cb)=> {
    // let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.get(all.getChannelStat).then(response => {
        // callback(response, cb)
        cb(response.data)
        // loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        // loadingInstance.close()
    })
}
/**
 * @description test1
 * @param {Object} data
 * @param {Function} cb
 * @return {Promise}
 */
const getChannelStat2 = (data, cb) => {
  let loadingInstance = Loading.service({ text: '正在加载' })
  return axios.post(all.getChannelStat2, data).then(response => {
      callback(response, cb)
      loadingInstance.close()
  }, response => {
      console.log('errorCallback: ', response)
      loadingInstance.close()
  })
}

/**
* @description test2
* @param {Object} params 
* @param {Function} cb 
* @return {Promise}
*/
const getChannelStat = (params, cb) => {
//   let loadingInstance = Loading.service({ text: '正在加载' })
  return axios.get(all.getChannelStat, { params: params }).then(response => {
    //   callback(response, cb)
    cb(response.data)
    //   loadingInstance.close()
  }, response => {
      console.log('errorCallback: ', response)
    //   loadingInstance.close()
  })
}
/**
* @description test3
* @param {Object} params 
* @param {Function} cb 
* @return {Promise}
*/
const getPerson = (params, cb) => {
//   let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.get(all.getPerson, { params: params }).then(response => {
    //   callback(response, cb)
    cb(response.data)
    //   loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
    //   loadingInstance.close()
    })
}





export const AdminInt = {
  getCategory,
  getChannelStat,

  getPerson
}
