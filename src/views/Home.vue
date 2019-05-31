<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout>
        <a-layout-content>
          <a-card>
            <p>新闻</p>
            <a-list
              class="demo-loadmore-list"
              :loading="loading"
              itemLayout="horizontal"
              :dataSource="data"
              text-align=left;
            >
            
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a slot="actions">more</a>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <a slot="title" href="https://vue.ant.design/">"{{ item.name.last }}"</a>
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
            <div style="background-color: #ececec; margin-top:60px;padding: 50px;">
              <a-row :gutter="16">
                <a-col :span="6">
                  <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                  </a-card>
                </a-col>
              </a-row>
              <a-row :gutter="16">
                <a-col :span="6">
                  <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                  </a-card>
                </a-col>
                <a-col :span="6">
                  <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </a-card>
          <a-card>
            <a-divider>提交记录</a-divider>
            <template>
              <div style="margin-left:auto; margin-right:auto;width:600px;">
                <ve-pie :data="chartData"></ve-pie>
              </div>
            </template>
            <a-divider>每日提交情况</a-divider>
            <template>
              <div style="margin-left:auto; margin-right:auto;width:600px;">
                <ve-line :data="chartData2" :settings="chartSettings"></ve-line>
              </div>
            </template>
          </a-card>
        </a-layout-content>
        <a-layout-sider>
          <a-card title="个人信息">
            <p>姓名：王大毛</p>
            <p>学号:1612940</p>
            <p>院系：软件学院</p>
            <p>积分：999</p>
            <p>邮箱：xxx@mail.nankai.edu.cn</p>
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
  background: #ffffff;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #ffffff;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgb(255, 255, 255);
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
        rows: [
          { 日期: 'Accept', 访问用户: 1393 },
          { 日期: '其他', 访问用户: 3530 },
          { 日期: '答案错误', 访问用户: 2923 },
          { 日期: '编译错误', 访问用户: 1723 },
          { 日期: '时间或空间超限', 访问用户: 4593 }
        ]
      },
      chartData2: {
        columns: ['日期', '提交次数'],
        rows: [
          { 日期: '1', 提交次数: 1393 },
          { 日期: '2', 提交次数: 3530 },
          { 日期: '3', 提交次数: 2923 },
          { 日期: '4', 提交次数: 1723 },
          { 日期: '5', 提交次数: 3792 },
          { 日期: '6', 提交次数: 4593 },
          { 日期: '7', 提交次数: 4593 }
        ]
      }
    }
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
    }
  }
}
</script>
