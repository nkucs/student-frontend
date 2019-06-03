// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView,HomepageLayout } from '@/components/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      {
        path: '/problem',
        name: '题目',
        component: PageView,
        redirect: '/problem/list',
        meta: { title: '题目', icon: 'dashboard', permission: [ 'dashboard' ] },
        children: [{
          path: '/problem/list', // todo
          name: '题目列表',
          component: () => import('@/views/problem/ProblemList'),
          meta: { title: '题目列表', permission: [ 'dashboard' ] }
        },
        {
          path: '/problem/detail', // todo
          name: '题目详情',
          component: () => import('@/views/problem/ProblemDetail'),
          meta: { title: '题目详情', permission: [ 'dashboard' ] }
        },
        {
          path: '/problem/result', // todo
          name: '提交结果',
          component: () => import('@/views/problem/ProblemResult'),
          meta: { title: '提交结果', permission: [ 'dashboard' ] }
        }]
      },
      {
        path: '/center',
        name: '个人中心',
        component: PageView,
        redirect: '/center/achievement',
        meta: { title: '个人中心', icon: 'dashboard', permission: [ 'dashboard' ] },
        children: [{
          path: '/center/achievement', // todo
          name: '个人成就',
          component: () => import('@/views/center/CenterAchievement'),
          meta: { title: '个人成就', permission: [ 'dashboard' ] }
        },
        {
          path: '/center/message', //todo
          name: '消息中心',
          component: () => import('@/views/center/CenterMessage'),
          meta: { title: '消息中心', permission: [ 'dashboard' ] }
        },
        {
          path: '/center/information', // todo
          name: '信息统计',
          component: () => import('@/views/center/CenterInformation'),
          meta: { title: '信息统计', permission: [ 'dashboard' ] }
        },
        {
          path: '/center/report', // todo
          name: '年度报告',
          component: () => import('@/views/center/CenterReport'),
          meta: { title: '年度报告', permission: [ 'dashboard' ] }
        },
        {
          path: '/center/submission', // todo
          name: '提交记录',
          component: () => import('@/views/center/CenterSubmission'),
          meta: { title: '提交记录', permission: [ 'dashboard' ] }
        }]
      },
      {
        path: '/course',
        name: '课程中心',
        component: PageView,
        redirect: '/course/announcement',
        meta: { title: '课程中心', icon: 'dashboard', permission: [ 'dashboard' ] },
        children: [{
          path: '/course/announcement', // todo
          name: '公告',
          component: () => import('@/views/course/CourseAnnouncement'),
          meta: { title: '公告', permission: [ 'dashboard' ] }
        },
        {
          path: '/course/lecture', // todo
          name: '主讲课',
          component: () => import('@/views/course/CourseLecture'),
          meta: { title: '主讲课', permission: [ 'dashboard' ] }
        },

        {
          path: '/course/experiment/experimentlist', // todo
          name: '实验课',
          component: () => import('@/views/course/CourseExperimentList'),
          meta: { title: '实验课', permission: [ 'dashboard' ] }
        },

        {
          path: '/course/experiment/experimentdetail', // todo
          name: '查看详情',
          hidden: true,
          component: () => import('@/views/course/ExperimentDetail'),
          meta: { title: '查看详情', permission: [ 'dashboard' ], hiddenHeaderContent: 'true' }
        },
        
        {
          path: '/course/resource', // todo
          name: '课程资料',
          component: () => import('@/views/course/CourseResource'),
          meta: { title: '课程资料', permission: [ 'dashboard' ] }
        },
        {
          path: '/course/CourseExam', // todo
          name: '考试',
          component: () => import('@/views/exam/CourseExam'),
          meta: { title: '考试', permission: [ 'dashboard' ] },
        },{
          path: '/course/ExamInformation',
          name: 'course/ExamInformation',
          component: () => import('@/views/exam/ExamInformation'),
          meta: { title: '开始考试', permission: [ 'dashboard' ] },
          hidden: true,
      },{
          path: '/course/ExamEnd',
          name: 'course/ExamEnd',
          component: () => import('@/views/exam/ExamEnd'),
          meta: { title: '结束考试', permission: [ 'dashboard' ] },
          hidden: true,
      }]
      }
    ]},
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/',
    component: HomepageLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: { title: '首页' , permission: [ 'dashboard' ]}
      }
    ]
  },


  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },

]
