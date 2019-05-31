<template>
  <a-table :columns="columns" :dataSource="data" @change="onChange" />
</template>

<script>
var getdata = {
  id:'',
  time:'',
  run:'',
  accept:'',
  store:'',
  length:'',
  lenguage:''
}
// import classnames from 'classnames'
// import { ListSize } from 'ant-design-vue/es/list'
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
  title: '代码长度',
  dataIndex: 'length',
  align:'center',
  sorter: (a, b) => a.length - b.length,
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
  key: '1',
  id: getdata.problem_id,
  time: getdata.time,
  accept: getdata.accept,
  score:getdata.score,
  length:getdata.length,
  language:getdata.language,
  run:getdata.run,
  store:getdata.store,
  state:'内存超限',
  
}]

function onChange(pagination, sorter) {
  console.log('params', pagination, sorter)
}


export default {
  data() {
    return {
      data,
      getdata:{},
      columns,
    }
  },
  methods: {
    onChange,
  },
  onload(){
    this.$axios.post('api/submission/get_all_submission',JSON.stringify('123').then(res=>{
        console.log(res)
    }))
  
    this.$axios.get('api/submission/get_all_submission',{
        params:{
          content:this.get_user_submission
        }
      }).then(res => {
        console.log(res)
        this.getdata.id = 1100,
        this.getdata.time='2019-01-01 23:59:59',
        this.getdata.score = 20,
        this.getdata.run = 123,
        this.getdata.store=2.5
        // this.getdata = res.data
        // this.getdata=Object.assign({},{
        //   time:'2019-01-01 23:59:59',
        //   score:20,
        //   run:'123ms',
        //   store:2.5
        // })

      })
  }
}
</script>

<style>
.ant-table{
  font-size: 14px;
}
</style>



