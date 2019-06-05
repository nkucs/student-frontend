import { axios } from '@/utils/request'

export function getlecture(course_id) {
  // 其他文件使用本接口时调用test
  return axios({
    url: '/student/lecture/showlecture', // 此处url为上面定义的url
    method: 'get', // 一般 get 或 post
    params: {
      course_id: course_id
    } // get方法
    // data: parameter // post方法
  })
}

export function getlecturename(name) {
  // 其他文件使用本接口时调用test
  return axios({
    url: '/student/lecture/showlecturename', // 此处url为上面定义的url
    method: 'get', // 一般 get 或 post
    params: {
      name: name
    } // get方法
    // data: parameter // post方法
  })
}

export function getLectureProblem(course_id, page, page_length) {
  return axios({
    url: '/student/lecture/lecture_problem',
    method: 'get',
    params: {
      course_id: course_id,
      page: page,
      page_length: page_length,
    }
  })
}

export function getAllMessage(parameter) {
  return axios({
    url: '/student/lecture/get-all-message',
    method: 'get',
    params: parameter
  })
}
