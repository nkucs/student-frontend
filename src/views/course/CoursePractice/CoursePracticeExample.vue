<template>
  <div class="hello">
    <a-table 
      :columns="columns"
      :dataSource="data"></a-table>
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
  title: '标准输出',
  dataIndex: 'output',
}]

const data = [{
  input: 'John Brown',
  output: 'New York No. 1 Lake Park',
},{
  input: 'John Brown',
  output: 'nice',
},
{
  status: 32,
  output: 'nice',
},
{
  input: 'John Brown',
  output: 'nice',
},{
  input: 'John Brown',
  output: 'nice',
}]

export default {
  mounted() {
    this.getData(this.this.$route.params.id)
  },
  data() {
    return {
      data:[],
      columns,
    }
  },
  methods:{
    back:function(){
      this.$router.push({path:'/course/CoursePractice/CoursePracticeSummit/'})
    },
    getData: function(case_id) {
      axios.get('http://127.0.0.1:8000/student/lecture/practice_example', {
				params: {
					case:case_id
				}
			}
			) .then(function(response) {
				this.data = response.data
			}
			) .catch(function(error) {
				console.log(error)
			}
			)
	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
