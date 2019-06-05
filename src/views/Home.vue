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
              :dataSource="datas"
              text-align="left"
            >
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a slot="actions">more</a>
                <a-list-item-meta
                  description="快来看看吧！"
                >
                  <a slot="title">数据结构课有更新啦！</a>
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
import { axios } from '@/utils/request'
import reqwest from 'reqwest'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
const datas = [{ title: '数据结构课已发布新的作业！', description: '快来看看吧！'}]
export default {

    data() {
        return {
            datas,
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
    created: function(){
      this.getTheSubmissionData()
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
        getTheSubmissionData:function(){
          axios({
        method:'get',
        url:'/student/submission/get_all_submission',
        params:{student_id: 2}
      }).then(response =>{
        console.log(response.data[0])
        var num = Object.keys(response.data).length
        this.chartData.rows = []
        var unknown = 0
        var accept = 0
        var runtime_error = 0
        var timelimit_exceed = 0
        var spacelimit_exceed = 0

        for(let index=0;index<num;index++)
        {
          if(response.data[index].status=='unknown')
          {
              unknown++
              this.chartData.rows.push({
              '日期':response.data[index].status,
              '访问用户':unknown
          })
          }
          else if(response.data[index].status=='accept')
          {
              accept++
              this.chartData.rows.push({
              '日期':response.data[index].status,
              '访问用户':accept
              })
          }
          else if(response.data[index].status=='runtime error')
          {
              runtime_error++
              this.chartData.rows.push({
              '日期':response.data[index].status,
              '访问用户':runtime_error
              })
          }
          else if(response.data[index].status=='timelimit exceed')
          {
              timelimit_exceed++
              this.chartData.rows.push({
              '日期':response.data[index].status,
              '访问用户':timelimit_exceed
              })

          }
          else if(response.data[index].status=='spacelimit exceed')
          {
              spacelimit_exceed++
              this.chartData.rows.push({
              '日期':response.data[index].status,
              '访问用户':spacelimit_exceed
              })

          }
          
          
        } 
        console.log(response.data)
       
      }).catch(error=>{
        window.alert('sorry')
        console.log(error)
      })
        }

      
    },

}
</script>
