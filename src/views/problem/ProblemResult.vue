<template>
  <div model="getdata">
    <div align="center" style="height: 100px;">
      <img alt="" style="width: 80px; height: 80px" src="@assets/images/state/accept.png">
    </div>
    <a-table :columns="columns" :dataSource="data" @change="onChange" />
  </div>

</template>

<script>

import { axios } from '@/utils/request'

const columns = [{
  title: '题目编号',
  dataIndex: 'id',
  align:'center',
}, {
  title: '提交时间',
  dataIndex: 'time',
  align:'center',
},{
  title: '状态',
  dataIndex: 'state',
  align:'center',
}, {
  title: '分数',
  dataIndex: 'score',
  align:'center',
},{
  title: '运行时间',
  dataIndex: 'run',
  align:'center',
},{
  title: '使用内存',
  dataIndex: 'store',
  align:'center',
},

]

const data = [{
  key: '',
  id: '',
  time: '',
  score:'',
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
      columns
    }
  },
  created: function(){
    this.getTheOneData()
  },
  methods: {
    onChange,
    getTheOneData:function(){
      axios({
        method:'get',
        url:'/student/submission/get_user_submission',
        params:
        {
          student_id: 1,
          problem_id:5
        }
      }).then(response =>{
        console.log(response.data[0])
        var num = Object.keys(response.data).length
        
        for(let index=0;index<num;index++)
        {
          this.data.push({
            key:index,
            id: response.data[index].problem,
            time:response.data[index].create_at,
            score:response.data[index].created_at,
            run:response.data[index].runtime,
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

  },

}
</script>

<style>
.ant-table{
  font-size: 14px;
}
</style>

