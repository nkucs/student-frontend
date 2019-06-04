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
              <a-list itemLayout="horizontal" :dataSource="mytime" >
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta>
                    <a slot="title">
                      <span>距离 <b> {{ item.name }}</b> 结束还有：
                        <!--{{ `${mytime.day}天${mytime.hr}小时${mytime.min}分钟${mytime.sec}秒` }}-->
                        <b>{{ item.time }}</b>

                      </span></a>
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
                      <b>{{ item.name }}</b> 将 <b>{{ item.title }}</b> 题更新了</a>
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
                    <a slot="title"><b>{{ item.name }}</b> 将课程 <b>{{ item.title }}</b> 更新了</a>
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
      day: '2019-6-05 21:19:32'
    },
    {
      title: '算法导论',
      day: '2019-6-06 22:18:41'
    },
    {
      title: '离散数学',
      day: '2019-6-07 23:18:11'
    },
    {
      title: '软件测试',
      day: '2019-6-08 05:42:18'
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
        data3,
        mytime:[]

      }
    },
    methods: {
      countdown: function() {
        try {
          data1.forEach((times)=>{
            const end = Date.parse(new Date(times.day))
            const now = Date.parse(new Date())
            const msec = end - now
            const day = parseInt(msec / 1000 / 60 / 60 / 24)
            const hr = parseInt(msec / 1000 / 60 / 60 % 24)
            const min = parseInt(msec / 1000 / 60 % 60)
            const sec = parseInt(msec / 1000 % 60)
            if(this.mytime.length==data1.length){
              for(let i = 0; i<data1.length; i++){
                this.mytime.pop()
              }
            }
            //插入天数
            this.day = day
            //this.mytime.push(this.day)
            //插入小时数
            this.hr = hr > 9 ? hr : '0' + hr
            //插入分钟数
            //this.mytime.push(this.hr)
            this.min = min > 9 ? min : '0' + min
            //this.mytime.push(this.min)
            //插入秒数
            this.sec = sec > 9 ? sec : '0' + sec
            //this.mytime.push(this.sec)
            const lefttime = this.day+'天'+this.hr+'小时'+this.min+'分钟'+this.sec+'秒'
            const name = times.title
            const dic = {
              name: name,
              time:lefttime
            }
            this.mytime.push(dic)
          })
        }
        catch (err) {
          console(err)
        }
        // const end = Date.parse(new Date('2019-6-04 '))
        // const now = Date.parse(new Date())
        // const msec = end - now
        // const day = parseInt(msec / 1000 / 60 / 60 / 24)
        // const hr = parseInt(msec / 1000 / 60 / 60 % 24)
        // const min = parseInt(msec / 1000 / 60 % 60)
        // const sec = parseInt(msec / 1000 % 60)
        // this.day = day
        // this.hr = hr > 9 ? hr : '0' + hr
        // this.min = min > 9 ? min : '0' + min
        // this.sec = sec > 9 ? sec : '0' + sec
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
  b{
    color: #2f54eb;
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