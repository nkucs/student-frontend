<template>
	<div class="hello">
		<div v-if="check==1">
			<a-table :columns="columns" :dataSource="data"></a-table>
			<div class="button">
				<a-button type="primary" class="back">返回题目</a-button>
				<a-button class="check">查看代码</a-button>
				<a-button type="primary" class="check" @click="example">查看测试用例</a-button>
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
<script>
	const columns = [{
			title: '提交时间',
			dataIndex: 'summit_time',
			width: '20%',
		}

		,
		{
			title: '状态',
			dataIndex: 'status',
			width: '20%',
		}

		,
		{
			title: '执行时间',
			dataIndex: 'execute_time',
		}

		,
		{
			title: '内存消耗',
			dataIndex: 'ram',
		}

	]
	const data = [{
			summit_time: 'John Brown',
			status: 32,
			execute_time: 'New York No. 1 Lake Park',
			ram: 'nice',
		}

		,
		{
			summit_time: 'John Brown',
			status: 32,
			execute_time: 'New York No. 1 Lake Park',
			ram: 'nice',
		}

		,
		{
			summit_time: 'John Brown',
			status: 32,
			execute_time: 'New York No. 1 Lake Park',
			ram: 'nice',
		}

		,
		{
			summit_time: 'John Brown',
			status: 32,
			execute_time: 'New York No. 1 Lake Park',
			ram: 'nice',
		}

		,
		{
			summit_time: 'John Brown',
			status: 32,
			execute_time: 'New York No. 1 Lake Park',
			ram: 'nice',
		}

	]
	export default {
		mounted() {},
		data() {
			return {
				data,
				pagination: {},
				loading: false,
				columns,
				check: this.$route.params.check,
			}
		},
		methods: {
			example: function() {
				this.$router.push({
					path: '/course/CoursePractice/CoursePracticeExample/' + '123'
				})
			}
		},
	}
</script>