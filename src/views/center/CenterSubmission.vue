
<template>
  <body>
    <h1>提交记录</h1>
    <a-table :columns="columns" :dataSource="data" bordered>
    </a-table>
  </body>
</template>
<script>
import axios from 'axios'
const columns = [{
  title: '题目编号',
  dataIndex: 'question_id',
}, {
  title: '提交时间',
  dataIndex: 'create_at',
}, {
  title: '通过情况',
  dataIndex: 'isAC',
},{
  title: '分数',
  dataIndex: 'score',
},{
  title: '代码长度',
  dataIndex: 'length',
},{
  title: '语言',
  dataIndex: 'language',
},{
  title: '运行用时',
  dataIndex: 'runtime',
},{
  title: '使用内存',
  dataIndex: 'memory',
},{
  title: '状态',
  dataIndex: 'status',
}]

const data = [{
  key: '1',
  question_id: '1001',
  create_at: '2019-01-01 23:23:23',
  isAC: '1/5',
  score:'20',
  length:'936B',
  language:'C++',
  runtime:'123ms',
  memory:'2.4MB',
  status:'内存超限(TLB)',
}, {
  key: '2',
  question_id: '1001',
  create_at: '2019-01-01 23:23:23',
  isAC: '1/5',
  score:'20',
  length:'936B',
  language:'C++',
  runtime:'123ms',
  memory:'2.4MB',
  status:'内存超限(TLB)',
}, {
  key: '3',
  question_id: '1001',
  create_at: '2019-01-01 23:23:23',
  isAC: '1/5',
  score:'20',
  length:'936B',
  language:'C++',
  runtime:'123ms',
  memory:'2.4MB',
  status:'内存超限(TLB)',
}]


export default {
  method :{
  function(){
    axios.get('/api/student/problem_history_mission?id_student=12345')
  .then(function (response) {
    console.log(response)
    this.data=response
  })
  .catch(function (error) {
    console.log(error)
  })
  }
},

  data() {
    return {
      data,
      columns,
    }
  }
}
</script>
