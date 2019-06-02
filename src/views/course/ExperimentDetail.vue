<template>
  <div class="detail">
    <div class="title">{{ title }}</div>
    <div class="separate-line"></div>
    <div class="description text">{{ description }}</div>
    <div class="separate-line"></div>
    <div class="additional text">
      <div class="additional-title">附加问题：</div>
      <ul class="additional-question">
        <li v-for="question in additional_questions" :key="question.title" style="list-style-type:none;">
          <div class="content-row">
            <a :href="question.link" class="row-unit">{{ question.title }}</a>
            <div>得分情况：{{ question.score }}/100</div>
          </div>
        </li>
      </ul>
      <div class="additional-title">
        <div>附件上传：</div>
        <a-button shape="circle" icon="plus" />
      </div>
      <ol class="upload-file">
        <li v-for="file in upload_files" :key="file.file_name" style="list-style-type:none;">
          <div class="content-row">
            <a :href="file.link" class="row-unit">{{ file.file_name }}</a>
            <div class="row-unit">{{ file.file_size }}</div>
            <div class="delete-file">删除</div>
          </div>
        </li>
      </ol>
      <a-button type="primary">提交</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperimentDetail',
  data () {
    return {
      title: '背包问题',
      description:
        '背包问题（Knapsack problem）是一种组合优化的NP完全问题。问题可以描述为：给定一组物品，每种物品都有自己的重量和价格，在限定的总重量内，我们如何选择，才能使得物品的总价格最高。问题的名称来源于如何选择最合适的物品放置于给定背包中。',
      additional_questions: [
        { title: '238.背包问题1', score: 66, link: '/' },
        { title: '239.背包问题2', score: 78, link: '/' }
      ],
      upload_files: [
        {file_name: '1612xxx实验报告.docs', file_size: '567kb', link: '/'},
        {file_name: 'main.cpp', file_size: '23kb', link: '/'}
      ]
    }
  }
}
</script>

<style scoped>
.detail {
  padding: 0 5%;
}
.title {
  font-weight: bold;
  font-size: 2rem;
}
.separate-line {
  height: 2px;
  margin: 2% 0;
  background-color: #ccc;
}
.text {
  text-align: left;
  padding-left: 5%;
}
.description {
  height: 15rem;
}
.additional {
  font-size: 1rem;
}
.additional-title {
  font-weight: bold;
  display: flex;
  align-items: center;
}
.content-row{
  display: flex;
  padding: 1% 0;
}
.row-unit{
  width: 30%;
}
.delete-file{
  color: orangered;
}
</style>
