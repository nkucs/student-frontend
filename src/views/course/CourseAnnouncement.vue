<template>
  <div>
    <a-text class="page_title">
      课程资源
    </a-text>
    <a-form 
      layout="inline" 
      :form="form" 
      @submit="handleSubmit"
    >
      <a-form-item 
        :validate-status="sectionNameError() ? 'error' : ''"
        :help="sectionNameError() || ''"
      >
        <a-input 
          v-decorator="[ 'sectionName',
            {rules: [{ required: true, message: '请输入章节名称!' }]}
          ]"
          placeholder="章节名称"
        >
        </a-input>
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
      <a slot="sourse" class="ant-dropdown-link" href="javascript:;">
        课件1 <a-icon type="down" />
      </a>
    </a-table>
  </div>
</template>
<script>
const columns = [
  { title: '', dataIndex: 'key', key: 'key' },
  { title: '章节', dataIndex: 'section', key: 'section' },
  { title: '课件', dataIndex: 'sourse', key: 'sourse', scopedSlots: { customRender: 'action' }  },
  { title: '下载', dataIndex: '', key: '', },
]

const data = [
  { key: 1, section: '走近c++', sourse: '课件1'},
  { key: 2, section: '基本数据类型', sourse: '课件1'},
  { key: 3, section: '基本控制语句', sourse: '课件1'},
]
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this),
      data,
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
.search_input{
	width: 320px;
	height: 38px;
	left: 321px;
	top: 241px;
	text-indent: 5px;
	color: rgba(51, 51, 51, 1);
	background-color: rgba(240, 242, 245, 1);
	border-radius: 2px;
	font-size: 18px;
	line-height: 150%;
	border: rgba(153, 153, 153, 1) solid 1px;
	text-align: left;
}
.search_button{
	width: 105px;
	height: 33px;
	left: 677px;
	top: 246px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(24, 144, 255, 1);
	border-radius: 4px;
	font-size: 15px;
	line-height: 150%;
	text-align: center;
}
</style>
