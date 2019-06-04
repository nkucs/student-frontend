<template>
  <div>
    <a-form 
      layout="inline" 
      class="lecture_search"
      :form="form" 
      @submit="handleSubmit"
    >
      <a-form-item 
        :validate-status="sectionNameError() ? 'error' : ''"
        :help="sectionNameError() || ''"
      >
        <a-input-search 
          v-decorator="[ 'sectionName',
          {rules: [{ required: true, message: '请输入章节名称!' }]}]"
          placeholder="章节名称"
          @search="onSearch"
        >
        </a-input-search>
      </a-form-item>
      <a-form-item>
        <a-button 
          type="primary" 
          html-type="submit"
          :disabled="hasErrors(form.getFieldsError())"
        >
          搜索
        </a-button>
      </a-form-item>
    </a-form>                                           

    <a-table :columns="columns" :dataSource="data">
      <span slot="sourse" slot-scope="text,record">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            课件列表 <a-icon type="down" />
          </a>
          <a-menu slot="overlay" v-for="sou in record.sourses" :key="sou.id">
            
            <a-menu-item key="{{sou.id}}">{{ sou.name }}</a-menu-item>

          </a-menu>
        </a-dropdown>
      </span>
      <span slot="experiment" slot-scope="text,record">
        <a @click="getExperiment(record.id)">
          练习题
        </a> 
      </span>
      <span slot="download" slot-scope="text,record">
        <a @click="download(record.id)">
          下载
        </a> 
      </span>
    </a-table>
  </div>
</template>

<script>
import {getlecture} from '@/api/lectureaxios'
import {getlecturename} from '@/api/lectureaxios'
// import { axios } from '@/utils/request'
const columns = [
  { title: '章节序号', dataIndex: 'key', key: 'key' },
  { title: '章节列表', dataIndex: 'name', key: 'name' },
  { title: '课件列表', dataIndex: 'sourse', key: 'sourse', scopedSlots: { customRender: 'sourse' }  },
  {title: '章节练习', dataIndex: 'experiment', key: 'experiment', scopedSlots: { customRender: 'experiment' } },
  { title: '课件下载', key: 'download', scopedSlots: { customRender: 'download' } },

]

const data = [
  { key: 1, name: '数据结构', experiment: '练习题1', 
    sourses: [
      {id: 1,name: '课件一',size: 9},
      {id: 2,name: '课件二',size: 9},
      {id: 3,name: '课件三',size: 9}
    ]
  },
  { key: 2, name: '基本数据类型', experiment: '练习题1', sourse: '课件1'},
  { key: 3, name: '基本控制语句', experiment: '练习题1', sourse: '课件1'},
]
console.log(data[0].sourses)
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  created() { 
    this.fetch()
  },
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this),
      data,
      // data: [],
      columns,
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  
  methods: {
    sectionNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },

    handleSubmit  (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },

    fetch() {
        getlecture(this.$route.query.course_id).then((response)=>{
          this.data.push(response.data)
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })        
    },

    onSearch(value) {
      console.log(value)
      if(value) {
        getlecturename(value).then((response)=>{
          this.data=[]
          this.data.push(response.data)
          console.log(response)
        })
        .catch((error)=>{
          alert('meiyou')
          console.log(error)
        })        
       }
    },

    getExperiment(id) {
      // 直接调⽤$router.push 实现携带参数的跳转
      this.$router.push({
      // path: '/course/CoursePractice/CoursePracticeSummit/${id}',
      path: '/course/CoursePractice',

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.lecture_search {
  margin-bottom: 10px;
}
</style>
