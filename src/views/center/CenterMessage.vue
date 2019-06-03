<template>
  <div class="hello">
    <div class="message_title">
      <h1>消息中心</h1>
    </div>
    <template>
      <div class="card-container">
        <a-tabs type="card">
          <a-tab-pane tab="课程消息" key="1">
            <template>
              <a-list itemLayout="horizontal" :dataSource="data1">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta>
                    <a slot="title">
                      <span>距离课程结束还有：{{ `${day}天${hr}小时${min}分钟${sec}秒` }}</span></a>
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </template>
          </a-tab-pane>
          <a-tab-pane tab="题目更新" key="2">
            <template>
              <a-list itemLayout="horizontal" :dataSource="data2">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta>
                    <a slot="title">
                      {{ item.name }} 将 {{ item.title }} 题更新了</a>
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </template>
          </a-tab-pane>
          <a-tab-pane tab="课程更新" key="3">
            <template>
              <a-list itemLayout="horizontal" :dataSource="data3">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta>
                    <a slot="title">{{ teacherName }} 将课程 {{ courseName }} 更新了</a>
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </template>
          </a-tab-pane>
        </a-tabs>
      </div>
    </template>
  </div>
</template>

<script>
  import { getCourseMessage } from '@/api/message'
  import { getCourse } from '@/api/message'

  const data1 = [
    {
      title: '数据结构',
      day: '3'
    },
    {
      title: '算法导论',
      day: '5'
    },
    {
      title: '算法导论301',
      day: '2'
    },
    {
      title: '数据结构112',
      day: '1'
    }
  ]
  const data2 = [
    {
      title: '数据结构221',
      name: '李老师'
    },
    {
      title: '算法导论332',
      name: '张老师'
    },
    {
      title: '算法导论301',
      name: '马老师'
    },
    {
      title: '数据结构112',
      name: '孙老师'
    }
  ]
  const data3 = [
    {
      title: '数据结构',
      name: '李老师'
    },
    {
      title: '算法导论',
      name: '张老师'
    },
    {
      title: '算法导论',
      name: '马老师'
    },
    {
      title: '数据结构',
      name: '孙老师'
    }
  ]
  export default {
    name: 'DateComponent',
    data() {
      return {
        day: 0,
        hr: 0,
        min: 0,
        sec: 0,
        teacherName: null,
        courseName: null,
        coursemessage: null,
        data1,
        data2,
        data3
      }
    },
    methods: {
      countdown: function() {
        const end = Date.parse(new Date('2019-12-01'))
        const now = Date.parse(new Date())
        const msec = end - now
        const day = parseInt(msec / 1000 / 60 / 60 / 24)
        const hr = parseInt(msec / 1000 / 60 / 60 % 24)
        const min = parseInt(msec / 1000 / 60 % 60)
        const sec = parseInt(msec / 1000 % 60)
        this.day = day
        this.hr = hr > 9 ? hr : '0' + hr
        this.min = min > 9 ? min : '0' + min
        this.sec = sec > 9 ? sec : '0' + sec
      },
      callback(key) {
        console.log(key)
      },
      getMessaageCourse: function(id_user) {
        getCourseMessage({
          id_user: id_user
        }).then(response => {
          console.log(response)
          this.teacherName = response['teacher']
          this.courseName = response['name']
        })
          .catch(function(error) {
            console.log(error)
          })

      },
      courseGet: function(id_course) {
        getCourse({
          id_course: id_course
        }).then(response => {
          this.coursemessage = response['message']
        })
      }


    },
    mounted() {
      this.getMessaageCourse(this.$route.query.id)
      this.courseGet(this.$route.query.id)
      this._interval = setInterval(() => {
        this.countdown()
      }, 1000)
    },
    destroyed() {
      clearInterval(this._interval)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .message_title {

  }

  .card-container {
    background: #F5F5F5;
    overflow: hidden;
    padding: 24px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
  }
</style>