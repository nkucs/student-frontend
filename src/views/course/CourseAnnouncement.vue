<template>
	<div class="container">
		<div v-for="message in message_data" :key="message.course_name" class="item">
			<a class='course_name'>
				{{ message.course_name }}
			</a>
			<div class='content'>
				{{ message.content }}
			</div>
		</div>
	</div>
</template>
<script>
import { getAllMessage } from '@/api/lectureaxios'

const message_data=[]
for(let i = 0; i < 10; ++i){
	message_data.push({
					content: '第1次作业提交时间将要截止',
					course_name: '数据结构',
				},{
					content: '第2次作业提交时间将要截止',
					course_name: '数据结构',
				},{
					content: '第3次作业提交时间将要截止',
					course_name: '数据结构',
				},{
					content: '第4次作业提交时间将要截止',
					course_name: '数据结构',
				})
}

export default {
	data () {
		return {
			message_data,
		}
	},
	mounted: function(){
		const obj = getAllMessage(this.$route.query.course_id)
		const self = this
		obj.then(response => {
				console.log('seek successfully')
				self.message_data = response.data//对应后端返回的数据
			}).catch((fail) => {
				console.log('seek fail' + fail)
			})
		}
}
</script>
<style>
.container {
	height: 500px;
	width: 100%;
	overflow-y: auto;
}
.page_title{
	width: 148px;
	height: 61px;
	left: 291px;
	top: 147px;
	color: rgba(56, 56, 56, 1);
	font-size: 29px;
	line-height: 140%;
	text-align: left;
	font-weight: bold;
}
.course_name{
	font-size: 20px;
	line-height: 45px;
}
.item{
	
}
.content{
	font-size: 16px;
}
</style>