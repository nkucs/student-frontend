<template>
  <div>
    <a-button type="primary" @click="showExamInformation">开始考试</a-button>
  </div>
</template>

<script>
export default {

  methods: {
    showExamInformation () {
      this.$router.push({ path:'/course/ExamInformation'  })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
