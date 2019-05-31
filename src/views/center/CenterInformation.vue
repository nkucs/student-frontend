<template>
  <div class="hello">
    <h3>统计展示</h3>
    <a-tabs defaultActiveKey="1" @change="change_course">
      <a-tab-pane v-for="course in courses" :tab="course.name" :key="course.index">
        <div style="margin-left:auto; margin-right:auto; width:600px; height:400px">
          <ve-pie :data="chart_data1"></ve-pie>
        </div>
      </a-tab-pane>
    </a-tabs>
    <h3>实时排名</h3>
    <a-tabs defaultActiveKey="1" @change="change_course">
      <a-tab-pane v-for="course in courses" :tab="course.name" :key="course.index">
        <div style="margin-left:auto; margin-right:auto; width:600px; height:400px">
          <ve-line :data="chart_data2"></ve-line>
        </div>
      </a-tab-pane>
    </a-tabs>
    <h3>课程排名</h3>
    <a-tabs defaultActiveKey="1" @change="change_course">
      <a-tab-pane v-for="course in courses" :tab="course.name" :key="course.index">
        <div style="margin-left:auto; margin-right:auto; width:600px; height:400px">
          <ve-line :data="chart_data2"></ve-line>
        </div>
      </a-tab-pane>
    </a-tabs>
    <h3>词云展示</h3>
    <div style="margin-left:auto; margin-right:auto; width:600px; height:400px">
      展示词云
    </div>
  </div>
</template>

<script>
import { axios } from '../../utils/axios'
export default {
  name: 'Infomation',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      courses: [{
        name: '数据结构',
        index: '1',
        compiler_err: '123',
        answer_err: '123',
        runtime_err: '123',
        timeout: '123',
        other_err: '123'
      },
      {
        name: '算法导论',
        index: '2',
        compiler_err: '123',
        answer_err: '123',
        runtime_err: '123',
        timeout: '123',
        other_err: '123'
      },
      {
        name: 'JAVA应用',
        index: '3',
        compiler_err: '123',
        answer_err: '123',
        runtime_err: '123',
        timeout: '123',
        other_err: '123'
      }],
      chart_data1: {
        columns: ['错误类型', '个数'],
        rows: [
          {错误类型:'compiler_err', 个数:'122'},
          {错误类型:'answer_err', 个数:'122'},
          {错误类型:'runtime_err', 个数:'122'},
          {错误类型:'timeout', 个数:'122'},
          {错误类型:'other_err', 个数:'122'},
        ]
      },
      chart_data2: {
        columns: ['错误类型', '个数'],
        rows: [
          {错误类型:'compiler_err', 个数:'1'},
          {错误类型:'answer_err', 个数:'2'},
          {错误类型:'runtime_err', 个数:'4'},
          {错误类型:'timeout', 个数:'6'},
          {错误类型:'other_err', 个数:'8'},
        ]
      }
    }
  },
  method: {
    change_course (key) {
      console.log(key)
    },
    function () {
      axios.get('/api/student/course')
      .then(function(responce) {
        this.courses = responce
        for(let i = 0; i < responce.len(); i++){
          this.courses[i].index = i + 1
        }
      })
      .catch(function(err) {
        console.log(err)
      })
    }
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
</style>
