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
            <div>得分情况：{{ question.score }}</div>
          </div>
        </li>
      </ul>
      <div class="file-upload">
        <div class="file-upload-text">附件上传</div>
        <input name="upfile" id="id" class="file-upload-input" type="file" @change='Change'>
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
      <a-button type="primary" @click="submit">提交</a-button>
    </div>
  </div>
</template>

<script>
import { axios } from '@/utils/request'
export default {
  name: 'ExperimentDetail',
  data () {
    return {
      title: '背包问题',
      description:
        '背包问题（Knapsack problem）是一种组合优化的NP完全问题。问题可以描述为：给定一组物品，每种物品都有自己的重量和价格，sakjhdkjasdhkjashkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk在限定的总重量内，我们如何选择，才能使得物品的总价格最高。问题的名称来源于如何选择最合适的物品放置于给定背包中。',
      additional_questions: [
        { title: '238.背包问题1', score: 66, link: '/problem/detail/?id_problem=1' },
        { title: '239.背包问题2', score: 78, link: '/problem/detail/?id_problem=2' }
      ],
      upload_files: [],
      upload:'',
      report_required:false,
    }
  },
  mounted: function () {
    axios.get('/api/course/lab_course_detail/?id_lab='+this.$router.params.id_lab).then(function (response) 
    {
      this.title = response.data.name
      this.description = response.data.description
      var additional = {
        title:response.data.problem['name'],
        score:response.data.problem['score'],
        link: '/problem/detail?id_problem='+response.data.problem['id_problem']
      }
      this.additional_questions.push(additional)
      this.report_required = response.data.report_required
      //this.$router.push({name:'course/problem',params:{problem_id:response.data.problem['id_problem']}})
      console.log(response)
    })
  },
  methods: {
    Change (e) {
      var file = e.target.files[0]
      var fileName = file.name
      var fileSize = file.size
      this.upload = this.getObjectURL(file)
      if(file.size<1000)
      {
        fileSize = fileSize.toFixed(2) + 'b'
      }
      else if(file.size<1000*1000)
      {
        fileSize = (fileSize/1000).toFixed(2) + 'kb'
      }
      else{
        fileSize = (fileSize/1000000).toFixed(2) + 'mb'
      }
      var uploadfile = [{file_name:fileName, file_size:fileSize, link:this.upload}]
      this.upload_files= uploadfile
      console.log(this.upload)
    },
    getObjectURL (file) {
      let url = null 
      if (window.createObjectURL!=undefined) { 
        url = window.createObjectURL(file) 
      }else if (window.webkitURL!=undefined) { 
        url = window.webkitURL.createObjectURL(file) 
      }else if (window.URL!=undefined) { 
        url = window.URL.createObjectURL(file) 
      }
      return url 
    },
    submit () {
      axios.post('api/student/lab_attachment_hand_in',{ 
        id_user:this.$router.params.id_user,
        id_course:this.$router.params.id_course,
        id_lab:this.$router.params.id_lab,
        file:this.file, 
        })
        .then(function (response){
          console.log(response)
        })
        .catch(function (error){
          console.log(error)
        })
    }
  },
}
</script>


<style scoped>
.detail {
  padding: 0 5%;
  margin:10px 10px;
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
  min-height:50px;
}
.additional {
  font-size: 1rem;
}
.file-upload {
  width: 80px;
  height: 30px;
  position: relative;
  overflow: hidden;
  border: 1px solid #40a9ff;
  display: inline-block;
  border-radius: 4px;
  font-size: 15px;
  color: #40a9ff;
  text-align: center;
  line-height: 26px;
  margin: 10px 0 auto auto;
}
.file-upload-input {
  background-color: transparent;
  position: absolute;
  width: 999px;
  height: 999px;
  top: -10px;
  right: -10px;
  cursor: pointer;
}
.content-row{
  display: flex;
  padding: 1% 0;
}
.row-unit{
  width: 30%;
  white-space:nowrap;
  text-overflow : ellipsis ;
  overflow:hidden;
}
.delete-file{
  color: orangered;
}
</style>
