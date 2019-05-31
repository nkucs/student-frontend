<template>
  <div class="container">
    <div class="my-exam">
      <div class="title">{{ data.examType }}</div>
      <div class="information">
        <div style="margin-top: 30px;">
          <div>考试开始时间：{{ data.beginTime }}</div>
          <div>考试结束时间：{{ data.endTime }}</div>
          <div>考试时间：{{ data.examTime }}</div>
        </div>
      </div>
    </div>
    <div class="my-notice">
      <div class="title">考生须知</div>
      <div class="information">{{ data.examNotice }}</div>
    </div>
    <div class="my-button">
      <a-button type="primary" @click="showExamInformation" style="height: 80%;">开始考试</a-button>
    </div>
    
  </div>
</template>

<script>
const data = {
	examType: 'B组试题',
	beginTime: '2018年1月1日12：00：00',
	endTime: '2018年1月1日14：00：00',
	examTime: '120分钟',
	examNotice: '请不要作弊'
}
export default {
  data () {
    return {
      data,
    }
  },

  methods: {
    showExamInformation () {
      this.$router.push({ path:'/course/ExamInformation'  })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	height: 500px;
	display: flex;
	flex-direction: column;
}
.my-exam {
	flex: 6;
	display: flex;
	flex-direction: column;
}
.title {
	flex: 1;
	line-height: 100px;
	min-width: 100px;
	font-size: xx-large;
	font-weight:bold;
}
.information {
	flex: 2;
}
.my-notice {
	flex: 5;
	display: flex;
	flex-direction: column;
}
.my-button {
	flex: 2;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
}
</style>
