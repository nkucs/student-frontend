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
      <div class="clearfix">
        <a-upload
          :fileList="fileList"
          :remove="handleRemove"
          :beforeUpload="beforeUpload"
        >
          <a-button>
            <a-icon type="upload" /> 附件上传
          </a-button>
        </a-upload>
        <a-button
          type="primary"
          @click="handleUpload"
          :disabled="fileList.length === 0"
          :loading="uploading"
          style="margin-top: 16px"
        >
          {{ uploading ? '正在上传' : '提交' }}
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getExperimentDetail,upload } from '@/api/lab'
export default {
  name: 'ExperimentDetail',
  data () {
    return {
      title: '',
      description: '',
      additional_questions: [],
      fileList: [],
      uploading: false,
      report_required:false,
    }
  },
  mounted: function () {
    getExperimentDetail({'id_lab':this.$route.query.id_lab}).then(response =>
    {
      console.log(response.data.problem)
      this.title = response.data.name
      this.description = response.data.description
      response.data.problem.forEach((problem) => {
        var question = {
          title: problem['name'],
          score: problem['score'],
          link: '/problem/detail?id_problem='+response.data.problem['id_problem']
        }
        this.additional_questions.push(question)
      })
      // for(problem in response.data.problem){
      //   var question = {
      //     title:problem['name'],
      //     score:problem['score'],
      //     link: '/problem/detail?id_problem='+response.data.problem['id_problem']
      //   }
      //   this.additional_questions.push(question)
      // }
      console.log(this.additional_questions)
      this.report_required = response.data.report_required
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file]
      return false
    },
    handleUpload() {
      const { fileList } = this
      const formData = new FormData()
      // fileList.forEach((file) => {
      //   formData.append('files[]', file)
      // })
      console.log(fileList)
      //formData.append('user_id', this.$route.params.id_user)
      formData.append('user_id', 1)
      formData.append('lab_id', this.$route.query.id_lab)
      // formData.append('file', fileList[0])
      this.uploading = true
      fileList.forEach((file) => {
        formData.append('file', file)
        upload(
          formData
          ).then(response =>{
          formData.delete('file')
          console.log(response)
          this.$message.success('上传成功')
        })
        .catch(error => {
          console.log(error)
          this.$message.error('上传失败')
        })
      })
      // upload(
      //   formData
      //   ).then(response =>{
      //   console.log(response)
      //   this.$message.error('上传成功')
      // })
      // .catch(error => {
      //   console.log(error)
      //   this.$message.error('上传失败')
      // })
      this.uploading =false
    },
  },
}
</script>


<style scoped>
.detail {
  padding: 0 5%;
  margin:10px 10px;
}
.additional {
  font-size: 1rem;
}
.additional-title {
  font-weight: bold;
  display: flex;
  align-items: center;
}
.title {
  text-align: center;
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
  padding: 0 5%;
}
.description {
  min-height:50px;
  width: 100%;
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
