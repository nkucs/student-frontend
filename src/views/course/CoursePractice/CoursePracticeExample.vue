<template>
  <div class="hello">
    <a-table :columns="columns":dataSource="data"></a-table>
    <div>
      <a-button type="primary" class="back" @click="back">返回</a-button>
    </div>
  </div>
</template>
<style scoped>
	.back{
		margin-top: 20px;
		margin-left: 1125px;
	}
</style>
<script>
const columns = [{
  title: '测试输入',
  dataIndex: 'input',
  width: '20%',
}, {
  title: '状态',
  dataIndex: 'status',
  width: '20%',
}, {
  title: '标准输出',
  dataIndex: 'standard_output',
}
,{
  title: '答案输出',
  dataIndex: 'output',
}]

const data = [{
  input: 'John Brown',
  status: 32,
  standard_output: 'New York No. 1 Lake Park',
  output: 'nice',
},{
  input: 'John Brown',
  status: 32,
  standard_output: 'New York No. 1 Lake Park',
  output: 'nice',
},
{
  input: 'John Brown',
  status: 32,
  standard_output: 'New York No. 1 Lake Park',
  output: 'nice',
},
{
  input: 'John Brown',
  status: 32,
  standard_output: 'New York No. 1 Lake Park',
  output: 'nice',
},{
  input: 'John Brown',
  status: 32,
  standard_output: 'New York No. 1 Lake Park',
  output: 'nice',
}]

export default {
  mounted() {
  	console.log(this.$route.params.id)
  },
  data() {
    return {
      data,
      pagination: {},
      loading: false,
      columns,
    }
  },
  methods:{
    back:function(){
      this.$router.push({path:'/course/CoursePractice/CoursePracticeSummit/1'})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
