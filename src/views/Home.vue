<template>
    <div id="components-layout-demo-basic">
        <a-layout>
        <a-layout-header>导航栏</a-layout-header>
        <a-layout>
            <a-layout-content>
                <a-card>
                    <p>新闻</p>
                </a-card>
                <a-card>
                    <p class="title">课程</p><a-divider />
                    <div style="float:left;"> 
                        <a href="#">正在进行</a>
                        <a-divider type="vertical" />
                        <a href="#">全部</a>
                    </div>
                    <div style="background-color: #ececec; margin-top:60px;padding: 50px;">
                        <a-row :gutter="16">
                        <a-col :span="6">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="6">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card> 
                        </a-col>
                        <a-col :span="6">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card>   
                        </a-col>
                        </a-row>
                        <a-row :gutter="16">
                        <a-col :span="6">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card>
                        </a-col>
                        <a-col :span="6">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card> 
                        </a-col>
                        <a-col :span="6">
                            <a-card title="Card title" :bordered=false>
                            <p>card content</p>
                            </a-card>   
                        </a-col>
                        </a-row>
                    </div>
                </a-card>
                <a-card>
                    <p>题目统计</p>
                </a-card>
            </a-layout-content>
            <a-layout-sider>个人信息的侧边栏</a-layout-sider>
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
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
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
export default {
    
}
</script>
