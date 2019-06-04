import { axios } from '@/utils/request'

const apis = {
    get_lab_list: '/student/lab/lab_course_list', // [映射] url名称: 实际url
    experimentDetail:'/student/lab/lab_course_detail/',
    upload:'/student/lab/lab_attachment_hand_in'
    // 此处实际url: https://httpbin.org/anything
    // 基地址baseURL在vue.config.js中指定
}

export function get_lab_list(id_course) { // 其他文件使用本接口时调用test
    return axios({
        url: apis.get_lab_list, // 此处url为上面定义的url
        method: 'get', // 一般 get 或 post
        params: { 'id_course': id_course } // get方法
        // data: parameter // post方法
    })
}

export default apis

export function getExperimentDetail(parameter) {
  return axios({
    url: apis.experimentDetail,
    method: 'GET',
    params: parameter,
  })
}


export function upload(parameter) {
  return axios({
    url: apis.upload,
    method: 'POST',
    data: parameter,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}