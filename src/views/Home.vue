<template>
<div class="main">
  <div class="top-banner" style="width:100%;padding:56px 32px 0;">
      <div align="center"><h1>NKCS-OPEP</h1> </div>
      
    </div>
    <div class="banner" style="text-align: center;padding: 50px 0;margin: 15px 0;">
      <img alt="Vue logo" style="width: 120px; height: 120px" src="../assets/logo.png">
      <h1 style="margin-top: 1rem">南开OJ系统</h1>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8 p-r-0 title-margin-right">
                <div class="page-header">
                    <div class="page-title">
                        <h1>Hello, <span>Welcome To NKU OPEP</span></h1>
                    </div>
                </div>
            </div>
            <!-- /# column -->
            <div class="col-lg-4 p-l-0 title-margin-left">
                <div class="page-header">
                    <div class="page-title">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">首页</a></li>
                            <li class="breadcrumb-item">消息</li>
                            <li class="breadcrumb-item">个人中心</li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- /# column -->
        </div>
        <!-- /# row -->
        <section id="main-content">
            <div class="row">
                <div class="col-lg-3">
                    <div class="card">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-money color-success border-success"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">提交记录数</div>
                                <div class="stat-digit">1,012</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-user color-primary border-primary"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">在线用户数</div>
                                <div class="stat-digit">961</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-layout-grid2 color-pink border-pink"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">教学课程数</div>
                                <div class="stat-digit">770</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <div class="stat-widget-one">
                            <div class="stat-icon dib"><i class="ti-link color-danger border-danger"></i></div>
                            <div class="stat-content dib">
                                <div class="stat-text">编程题目数</div>
                                <div class="stat-digit">2,781</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-title">
                            <h4>统计信息显示部分</h4>
                        </div>
                        <div class="card-body">
                            <div class="ct-bar-chart m-t-30">
                                统计信息图表
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-title">
                            <h4>个人信息显示部分</h4>
                        </div>
                        <div class="card-body">
                            <div class="ct-pie-chart">
                                个人信息详细内容
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card bg-primary">
                                <div class="weather-widget">
                                    <div id="weather-one" class="weather-one p-22">
                                        统计信息显示部分
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="card">
                                <h6>统计信息图表</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- /# column -->
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-title pr">
                            <h4>提交记录</h4>

                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table student-data-table m-t-20">
                                    <thead>
                                        <tr>
                                            <th><label><input type="checkbox" value=""></label>题目</th>
                                            <th>课程</th>
                                            <th>运行结果</th>
                                            <th>运行时间</th>
                                            <th>运行空间</th>
                                            <th>提交时间</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>English</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Bangla</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>English</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                        <tr>
                                            <td>Class Test</td>
                                            <td>Mathmatics</td>
                                            <td>
                                                4.00
                                            </td>
                                            <td>
                                                95.00
                                            </td>
                                            <td>
                                                100
                                            </td>
                                            <td>20/04/2017</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /# column -->
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-title">
                            <h4>课程信息</h4>
                        </div>
                        <div class="card-body">
                            <div class="year-calendar">
                                课程信息内容
                            </div>
                        </div>
                    </div>
                    <!-- /# card -->
                </div>
                <!-- /# column -->
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-title">
                            <h4>我的关注</h4>

                        </div>
                        <div class="recent-comment m-t-15">
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="../assets/images/avatar/1.jpg" alt="..."></a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading color-primary">Coding Peasant</h4>
                                    <p>回答题目：10 提交次数 36</p>
                                    <p class="comment-date">1712890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /# card -->
                </div>
                <!-- /# column -->
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-title">
                            <h4>消息中心</h4>

                        </div>
                        <div class="card-body">
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-badge primary"><i class="fa fa-smile-o"></i></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5 class="timeline-title">算法导论发布了新的课件：二叉树</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <p>10 minutes ago</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-badge warning"><i class="fa fa-sun-o"></i></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5 class="timeline-title">系统通知：数据结构课程待提交作业提醒：1001 A+B Problem</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <p>20 minutes ago</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-badge danger"><i class="fa fa-times-circle-o"></i></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h5 class="timeline-title">Java程序设计发布了新的课件：IO流</h5>
                                        </div>
                                        <div class="timeline-body">
                                            <p>30 minutes ago</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /# card -->
                </div>
            </div>
            <!-- /# row -->

            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-title">
                            <h4>待办清单</h4>

                        </div>
                        <div class="todo-list">
                            <div class="tdl-holder">
                                <div class="tdl-content">
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="checkbox"><i></i><span>数据结构：1001 A+B Problem</span>
                                                <a href='#' class="ti-close"></a>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                        <input type="checkbox" checked><i></i><span>算法导论：快速排序算法</span>
                                                        <a href='#' class="ti-close"></a>
                                                    </label>
                                        </li>
                                    </ul>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-title pr">
                                <h4>我的课程</h4>

                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table student-data-table m-t-20">
                                        <thead>
                                            <tr>
                                                <th><label><input type="checkbox" value=""></label>ID</th>
                                                <th>课程名称</th>
                                                <th>任课教师</th>
                                                <th>课程状态</th>
                                                <th>教师邮箱</th>
                                                <th>创建时间</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><label><input type="checkbox" value=""></label>#2901</td>
                                                <td>
                                                    算法导论
                                                </td>
                                                <td>
                                                    张圣林
                                                </td>
                                                <td>
                                                    <span class="badge badge-primary">进行中</span>
                                                </td>
                                                <td>
                                                    edumin@gmail.com
                                                </td>
                                                <td>
                                                    10/05/2019
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label><input type="checkbox" value=""></label>#2902</td>
                                                <td>
                                                    数据结构
                                                </td>
                                                <td>
                                                    刘铭明
                                                </td>
                                                <td>
                                                    <span class="badge badge-warning">已结束</span>
                                                </td>
                                                <td>
                                                    edumin@gmail.com
                                                </td>
                                                <td>
                                                    10/05/2018
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /# column -->
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer">
                            <p>Copyright &copy; 2019 NKU <a href="https://github.com/nkucs/student-frontend"> Github</a></p>
                        </div>
                    </div>
                </div>
        </section>
    
    
    
    
    
    </div>
    <h2>个人统计</h2>
    <a-divider> 提交记录 </a-divider>
    <template>
      <ve-pie :data="chartData"></ve-pie>
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
            chartData: {
                columns: ['日期', '访问用户'],
                rows: [
                    { '日期': 'Accept', '访问用户': 1393 },
                    { '日期': '其他', '访问用户': 3530 },
                    { '日期': '答案错误', '访问用户': 2923 },
                    { '日期': '编译错误', '访问用户': 1723 },
                    { '日期': '时间或空间超限', '访问用户': 4593 }
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
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            })
        }
    }
}
</script>

<style scoped>
/* .main {
    width: 900px;
    margin: 0 auto;
    padding: 25px 0;
} */

.mian>.banner {
    text-align: center;
    padding: 25px 0;
    margin: 25px 0;
}

.top-banner {
    width: 100%;
    height: 150px;
    background-color: #99CCFF;
    /* position: fixed; */
    /* padding: 40px 0 0 0; */
    /* left: 50%; */

    top: 0;
    /* margin-left: -480px; */
}

@import "../assets/css/lib/calendar2/pignose.calendar.min.css";
@import "../assets/css/lib/chartist/chartist.min.css";
@import "../assets/css/lib/font-awesome.min.css";
@import "../assets/css/lib/themify-icons.css";
@import "../assets/css/lib/owl.carousel.min.css";
@import "../assets/css/lib/owl.theme.default.min.css";
@import "../assets/css/lib/weather-icons.css";
@import "../assets/css/lib/menubar/sidebar.css";
@import "../assets/css/lib/bootstrap.min.css";
@import "../assets/css/lib/helper.css";
@import "../assets/css/style.css"; 
</style>
