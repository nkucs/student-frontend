<template>
  <div class="hello">
    <a-tabs defaultActiveKey="1" @change="change_course">
      <a-tab-pane v-for="course in courses" :tab="course.name" :key="course.index">
        <p>编译错误: {{ course.compiler_err }}</p>
        <p>答案错误: {{ course.answer_err }}</p>
        <p>运行错误: {{ course.runtime_err }}</p>
        <p>时间超线: {{ course.timeout }}</p>
        <p>其他错误: {{ course.other_err }}</p>
        <p>待添加饼图表格类插件</p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import axios from 'axios'
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
      }]
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
