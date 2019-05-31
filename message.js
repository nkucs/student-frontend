import { axios } from '@/utils/request'

//连接
export function getCourseMessage(parameter) {
    return axios({
      url: '/api/student/course',
      method: 'get',
      data: parameter
    })
}
//连接用户查看课程信息api
export function getCourse(parameter) {
  return axios({
    url: '/api/student/course_message',
    method: 'get',
    data: parameter
  })
}



