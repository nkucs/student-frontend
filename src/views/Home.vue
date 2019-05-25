<template>
  <div class="home">
    <div class="top-banner">
      <div align="center"><h1>NKCS-OPEP</h1> </div>
      <div align="right">首页 | 消息 | 个人中心</div>
    </div>
    <div class="banner">
      <img alt="Vue logo" style="width: 120px; height: 120px" src="../assets/logo.png">
      <h1 style="margin-top: 1rem">南开OJ系统</h1>
    </div>

    <br>

    
    <h2>课程</h2>
    <a-breadcrumb>
      <a-breadcrumb-item>正在进行</a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href>全部</a>
      </a-breadcrumb-item>
    </a-breadcrumb>

    <div style="background-color: #ececec; padding: 20px 15px 20px 10px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card hoverable style="width: 280px">
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              slot="cover"
            >
            <a-card-meta title="C++" description="This is the description"></a-card-meta>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card hoverable style="width: 280px">
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              slot="cover"
            >
            <a-card-meta title="C++加强版" description="This is the description"></a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable style="width: 280px">
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              slot="cover"
            >
            <a-card-meta title="面向对象编程" description="This is the description"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div style="background-color: #ececec; padding: 20px 15px 20px 10px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card hoverable style="width: 280px">
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              slot="cover"
            >
            <a-card-meta title="Java" description="This is the description"></a-card-meta>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card hoverable style="width: 280px">
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              slot="cover"
            >
            <a-card-meta title="Python" description="This is the description"></a-card-meta>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card hoverable style="width: 280px">
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              slot="cover"
            >
            <a-card-meta title="并行" description="This is the description"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <template>
      <div style="background-color: #ececec;text-align: center;padding:20px;margin-bottom: 3rem">
    <a-pagination v-model="current" :total="50" />
    </div>
    </template>


    <h2>个人统计</h2>
    <a-divider> 提交记录 </a-divider>
    <template>
      <ve-pie :data="chartData"></ve-pie>
    </template>

    <a-divider> 每日提交情况 </a-divider>
    <template>
      <ve-line :data="chartData2" :settings="chartSettings"></ve-line>
    </template>



    
  </div>
</template>

<script>
// @ is an alias to /src

import Trend from '@/components/Trend'
import AvatarList from '@/components/AvatarList'
import CountDown from '@/components/CountDown/CountDown'
import Ellipsis from '@/components/Ellipsis'
import NumberInfo from '@/components/NumberInfo'

const AvatarListItem = AvatarList.AvatarItem

export default {
  name: 'Home',
  components: {
    NumberInfo,
    Ellipsis,
    CountDown,
    Trend,
    AvatarList,
    AvatarListItem
  },
  
  data() {
    return {
      targetTime: new Date().getTime() + 3900000,
      current: 2,
      chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': 'Accept', '访问用户': 1393 },
            { '日期': '其他', '访问用户': 3530 },
            { '日期': '答案错误', '访问用户': 2923 },
            { '日期': '编译错误', '访问用户': 1723 },
            { '日期': '时间或空间超限', '访问用户': 4593 }
          ]
        },
      chartData2: {
          columns: ['日期', '提交次数'],
          rows: [
            { '日期': '1', '提交次数': 1393},
            { '日期': '2', '提交次数': 3530},
            { '日期': '3', '提交次数': 2923},
            { '日期': '4', '提交次数': 1723},
            { '日期': '5', '提交次数': 3792},
            { '日期': '6', '提交次数': 4593},
            { '日期': '7', '提交次数': 4593}
          ]
        }
    }
  },
  methods: {
    onEndHandle() {
      this.$message.success('CountDown callback!!!')
    },
    onEndHandle2() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }
  }
}
</script>




<style scoped>
.home {
  width: 900px;
  margin: 0 auto;
  padding: 25px 0;
}
.home > .banner {
  text-align: center;
  padding: 25px 0;
  margin: 25px 0;
}
</style>
