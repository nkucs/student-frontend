<template>
  <div model="getdata">
    <div align="center" style="height: 100px;">
      <img alt="" style="width: 80px; height: 80px" src="@assets/images/state/accept.png">
    </div>
    <a-table :columns="columns" :dataSource="data" :model="getdata" @change="onChange" />
  </div>

</template>

<script>
var getdata = {
  time:'',
  run:'',
  store:''
}
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
  key: '1',
  id: 1001,
  time: getdata.time,
  score:getdata.score,
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
      columns
    }
  },
  methods: {
    onChange,
  },

  onload(){
    this.$axios.post('api/submission/get_user_submission',JSON.stringify('123,1100').then(res=>{
        console.log(res)
    }))
  
    this.$axios.get('api/submission/get_user_submission',{
        params:{
          content:this.get_user_submission
        }
      }).then(res => {
        console.log(res)
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

