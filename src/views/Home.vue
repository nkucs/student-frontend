<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout>
        <a-layout-content>
          <a-card>
            <p class="title">新闻</p>
            <a-divider/>
            <a-list
              class="demo-loadmore-list"
              itemLayout="horizontal"
              :dataSource="data"
              text-align=left;
            >
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a slot="actions" href="https://vue.ant.design/">more</a>
                <a-list-item-meta
                  description="快来查看最新消息吧！"
                >
                  <a slot="title">本课程又发布新的作业啦！</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>

            <div id="container" style="padding: 24px"></div>
          </a-card>
          <a-card>
            <p class="title">课程</p>
            <a-divider/>
            <div style="float:left;">
              <a href="#">正在进行</a>
              <a-divider type="vertical"/>
              <a href="#">全部</a>
            </div>
            <div style="margin-top:60px;padding: 50px;">
              <a-row :gutter="16">
                <a-col :span="8">
                  <a-card title="数据结构">
                    <p>主讲教师：刘明铭</p>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="操作系统">
                    <p>主讲教师：李旭东</p>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="数据库">
                    <p>主讲教师：李旭东</p>
                  </a-card>
                </a-col>
              </a-row>
              <a-row :gutter="16">
                <a-col :span="8">
                  <a-card title="面向对象设计">
                    <p>主讲教师：张波</p>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="软件测试">
                    <p>主讲教师：张圣林</p>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="java">
                    <p>主讲教师：刘明铭</p>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-card>
          <a-card>
            <p class="title">提交记录</p>
            <a-divider/>
            <template>
              <div style="margin-left:auto; margin-right:auto;width:600px;">
                <ve-pie :data="chartData"></ve-pie>
              </div>
            </template>
            <p class="title">每日提交情况</p>
            <a-divider/>
            <template>
              <div style="margin-left:auto; margin-right:auto;width:600px;">
                <ve-line :data="chartData2"></ve-line>
              </div>
            </template>
          </a-card>
        </a-layout-content>
        <a-layout-sider>
          <a-card title="个人信息"> 
            <p>姓名：大毛</p>	
            <p>学号: 1612999</p>
            <p>院系：软件学院</p>
            <p>积分：100</p>
            <p>邮箱：damao@mail.nankai.edu.cn</p>	
          </a-card>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
.title {
  font-size: 20px;
  float: left;
}
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #fff;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #fff;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background:#fff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>

<script>
import reqwest from 'reqwest'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

export default {

    data() {
        return {
            data: [],
            chartData: {
                columns: ['日期', '访问用户'],
                rows: [{
                        日期: 'Accept',
                        访问用户: 1393
                    },
                    {
                        日期: '其他',
                        访问用户: 3530
                    },
                    {
                        日期: '答案错误',
                        访问用户: 2923
                    },
                    {
                        日期: '编译错误',
                        访问用户: 1723
                    },
                    {
                        日期: '时间或空间超限',
                        访问用户: 4593
                    }
                ]
            },
            chartData2: {
                columns: ['日期', '提交次数'],
                rows: [{
                        日期: '1',
                        提交次数: 1393
                    },
                    {
                        日期: '2',
                        提交次数: 3530
                    },
                    {
                        日期: '3',
                        提交次数: 2923
                    },
                    {
                        日期: '4',
                        提交次数: 1723
                    },
                    {
                        日期: '5',
                        提交次数: 3792
                    },
                    {
                        日期: '6',
                        提交次数: 4593
                    },
                    {
                        日期: '7',
                        提交次数: 4593
                    }
                ]
            },
        }
    },

    onLoad() {
        // this.axios({
        //     //从user获取
        //     method: 'get',
        //     url: '/api/user/personal_information',
        //     data: {
        //         id_user: '',
        //     },
        // }).then((response) => {
        //     if (response != null) {
        //         this.user.name = response.name
        //         this.user.id_user_status = response.id_user_status
        //         this.user.email = response.email
        //         this.user.id_gender = response.id_gender
        //         // this.user = response.;
        //     }

        // })
        // this.axios({
        //     //从student获取
        //     method: 'get',
        //     url: '/api/student/personal_information',
        //     data: {
        //         id_student: '',
        //     },
        // }).then((response) => {
        //     if (response != null) {
        //         this.user.student_number = response.student_number
        //         this.user.id_user = response.id_user
        //         this.user.rank_score = response.rank_score
        //         this.user.room = response.room
        //         this.user.province = response.province
        //         this.user.class = response.class
        //     }

        // })
    },

    mounted() {
        this.getData(res => {
            this.loading = false
            this.data = res.results
        })
    },
    methods: {
        getData(callback) {
            reqwest({
                url: fakeDataUrl,
                type: 'json',
                method: 'get',
                contentType: 'application/json',
                success: res => {
                    callback(res)
                }
            })
        },
        // get_course() {
        //     const temp = this.user
        // }
    }
}
</script>
