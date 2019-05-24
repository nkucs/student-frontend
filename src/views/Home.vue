<template>
  <div class="home">
    <div class="top-banner">
      <div align="center"><h1>NKCS-OPEP</h1> </div>
      <div align="right">首页 | 消息 | 个人中心</div>
    </div>
    <div class="banner">
      <img alt="Vue logo" style="width: 64px; height: 64px" src="../assets/logo.png">
      <h3 style="margin-top: 1rem">王大毛，欢迎来到NKU-OPEP</h3>
    </div>

<div align="center">
  <h2  align="left">个人信息</h2>
<h2  align="right"></h2>

<table border="1" align="left">
<tr>
<tr><td>姓名：</td><td>王大毛</td></tr>
<tr><td>学号：</td><td>1231231</td></tr>
<tr><td>邮箱：</td><td>kkk@123.com</td></tr>
</tr>
</table>
<table border="1" align="right">
<tr>
<tr><td>老王</td><td>取消关注</td></tr>
<tr><td>老张</td><td>取消关注</td></tr>
<tr><td>老李</td><td>取消关注</td></tr>
</tr>
</table>
</div>

<h2  align="center">新闻</h2>

<table border="1" align="center">
<tr>
<tr><td>张芳芳：10分钟之前提交了大数求和</td><td>查看详情</td></tr>
<tr><td>陈小小：20分钟之前获得了“解题小能手勋章”</td><td>查看详情</td></tr>
<tr><td>李大大：1天前成为排行棒第一的“霸主”，快来膜拜他！</td><td>查看详情</td></tr>
<tr><td>陈小小：1周前提交了B树实验</td><td>查看详情</td></tr>
<tr><td>周胖胖：2周前获得了“提交次数最多”勋章</td><td>查看详情</td></tr>
</tr>
</table>
<br/>
<h2> 课程 </h2>
    <a-breadcrumb>
      <a-breadcrumb-item>正在进行</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">全部</a></a-breadcrumb-item>
    </a-breadcrumb>

    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card
            hoverable
            style="width: 300px"
          >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="C++"
          description="This is the description">
        </a-card-meta>
        </a-card>
        </a-col>


        <a-col :span="8">
          <a-card
            hoverable
            style="width: 300px"
          >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="C++加强版"
          description="This is the description">
        </a-card-meta>
        </a-card>


        </a-col>
        <a-col :span="8">
          <a-card
            hoverable
            style="width: 300px"
          >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="面向对象编程"
          description="This is the description">
        </a-card-meta>
        </a-card>  
        </a-col>
      </a-row>
    </div>

    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card
            hoverable
            style="width: 300px"
          >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="Java"
          description="This is the description">
        </a-card-meta>
        </a-card>
        </a-col>
        
        <a-col :span="8">
          <a-card
            hoverable
            style="width: 300px"
          >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="Python"
          description="This is the description">
        </a-card-meta>
        </a-card>
        </a-col>


        <a-col :span="8">
          <a-card
            hoverable
            style="width: 300px"
          >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta
          title="并行"
          description="This is the description">
        </a-card-meta>
        </a-card> 
        </a-col>
      </a-row>
    </div>
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
    data () {
      return {
        targetTime: new Date().getTime() + 3900000
      }
    },
    methods: {
      onEndHandle () {
        this.$message.success('CountDown callback!!!')
      },
      onEndHandle2 () {
        this.$notification.open({
          message: 'Notification Title',
          description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
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
  .top-banner{
      width: 960px;
      height: 70px;
      background-color: #99CCFF;
      position: fixed;
      left: 50%;
   
      top: 0;
      margin-left: -480px;
  }
</style>
