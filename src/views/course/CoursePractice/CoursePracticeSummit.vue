<template>
	<div class="hello">
		<div v-if="check==1">
			<a-table :columns="columns" :dataSource="data"
				:pagination="pagination"
				@change="handleTableChange">
				<a slot="runtime" slot-scope="text">{{text}}ms</a>
				<a slot="memory" slot-scope="text">{{text}}kb</a>
				<a slot="case"  
				 slot-scope="text" v-if="text" 
				href="/course/CoursePractice/CoursePracticeExample/" + {{text}}>
					查看
				</a>
			</a-table>
			<div class="button">
				<a-button type="primary" class="back">返回题目</a-button>
				<a-button class="check">查看代码</a-button>
			</div>
		</div>
		<div v-else-if="check==0">
			<div class="error">对不起，您还没提交代码</div>
			<div class="button">
				<a-button type="primary" class="errorback">返回题目</a-button>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.button {
		margin-top: 20px;
	}
	
	.back {
		margin-left: 300px;
	}
	
	.check {
		margin-left: 100px;
	}
	.error{
		margin-top: 120px;
		margin-left: 400px;
		font-size: 40px;
		line-height: 150%;
	}
	.errorback{
		margin-top: 50px;
		margin-left: 550px;
	}
</style>
<script>const columns=[ {
	title: '提交时间', dataIndex: 'create_at', width: '20%',
}

,
{
	title: '状态', dataIndex: 'status', width: '20%',
}

,
{
	title: '执行时间',
	dataIndex: 'runtime',
	scopedSlots: {
		customRender: 'runtime'
	}
	,
}

,
{
	title: '内存消耗',
	dataIndex: 'memory',
	scopedSlots: {
		customRender: 'memory'
	}
	,
}

,
{
	title: '语言', dataIndex: 'language',
}

,
{
	title: '查看测试用例',
	dataIndex: 'example',
	scopedSlots: {
		customRender: 'example'
	}
	,
}

] 
const data=[ {
	create_at: 'John Brown', status: 'Accepted', runtime: 'New York No. 1 Lake Park', memory: 'nice', language: 'java', case: 30,
}

,
{
	create_at: 'John Brown', status: 'Accepted', runtime: 'New York No. 1 Lake Park', memory: 'nice', language: 'java', case: 30,
}

,
{
	create_at: 'John Brown', status: 'timeout', runtime: 'New York No. 1 Lake Park', memory: 'nice', language: 'java', case: -1,
}

,
{
	create_at: 'John Brown', status: 'timeout', runtime: 'New York No. 1 Lake Park', memory: 'nice', language: 'java', case: -1,
}

,
{
	create_at: 'John Brown', status: 'Accepted', runtime: 'New York No. 1 Lake Park', memory: 'nice', language: 'java', case: 30,
}

] 
export default {
	mounted() {
		this.getData(this.$route.params.problem_id,this.$route.params.student_id,1)
	}
	,
	data() {
		return {
			data:[],
			pagination: {},
			loading: false, 
			columns, 
			check: this.$route.params.check,
		}
	}
	,
	methods: {
		example: function() {
			this.$router.push( {
				path: '/course/CoursePractice/CoursePracticeExample/' + '123'
			}
			)
		}
		,
		getData: function(problem_id,student_id,page) {
			axios.get('http://127.0.0.1:8000/student/lecture/practice_submission', {
				params: {
					page:page,
					page_length:7,
					problem_id:problem_id,
					student_id:student_id
				}
			}
			) .then(function(response) {
				this.data = response.data
				const pagination = { ...this.pagination };
				pagination.total = response.data.total_counts;
				this.pagination = pagination;
				this.check= response.data.total_counts==0?false:true;
			}
			) .catch(function(error) {
				console.log(error);
			}
			);
	},
	 handleTableChange (pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.getData(this.$route.params.problem_id,this.$route.params.student_id,pager.current);
    },
	}
	,
}</script>