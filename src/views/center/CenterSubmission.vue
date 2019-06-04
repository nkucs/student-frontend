<template>
  <a-table :columns="columns" :dataSource="data" @change="onChange" />
</template>

<script>
import { axios } from '@/utils/request'

const columns = [{
  title: '题目编号',
  dataIndex: 'id', 
  align:'center',
  sorter: (a, b) => a.id - b.id,
}, {
  title: '提交时间',
  dataIndex: 'time',
  align:'center',
  sorter: (a, b) => a.time - b.time,
}, {
  title: '通过情况',
  dataIndex: 'accept',
  align:'center',
  sorter: (a, b) => a.accept - b.accept,
}, {
  title: '分数',
  dataIndex: 'score',
  align:'center',
  sorter: (a, b) => a.score - b.score,
}, {
  title: '语言',
  dataIndex: 'language',
  align:'center',
  
}, {
  title: '运行时间',
  dataIndex: 'run',
  align:'center',
  sorter: (a, b) => a.run - b.run,
},{
  title: '使用内存',
  dataIndex: 'store',
  align:'center',
  sorter: (a, b) => a.store - b.store,
},{
  title: '状态',
  dataIndex: 'state',
  align:'center',
},

]

const data = [{
  key: '',
  id: '',
  time: '',
  accept: '',
  score:'',
  // length:'',
  language:'',
  run:'',
  store:'',
  state:'',
  
}]

function onChange(pagination, sorter) {
  console.log('params', pagination, sorter)
}


export default {
  data() {
    return {
      data,
      columns,
    }
  },
  created: function(){
    this.getSubmissionData()
  },
  methods: {
    onChange,
    getSubmissionData:function(){
      axios({
        method:'get',
        url:'/student/submission/get_all_submission',
        params:{student_id: 1}
      }).then(response =>{
        console.log(response.data[0])
        var num = Object.keys(response.data).length
        
        for(let index=0;index<num;index++)
        {
          this.data.push({
            key:index,
            id: response.data[index].problem,
            language: response.data[index].language,
            time:response.data[index].create_at,
            run:response.data[index].runtime,
            accept:response.data[index].status,
            store:response.data[index].memory,
            state:response.data[index].submission_status

          })
        } 
        console.log(response.data)
       
      }).catch(error=>{
        window.alert('sorry')
        console.log(error)
      })
    },
  
}
}
</script>

<style>
.ant-table{
  font-size: 14px;
}
</style>

