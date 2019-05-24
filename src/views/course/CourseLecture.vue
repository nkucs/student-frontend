<template>
  <div>
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
        <!-- <a-button 
          type="primary" 
          html-type="submit"
          :disabled="hasErrors(form.getFieldsError())
        >
          搜索
        </a-button> -->
      </a-form-item>
    </a-form>                                           

    <a-table :columns="columns" :dataSource="data">
      <a slot="action" href="javascript:;">Delete</a>
      <p slot="expandedRowRender" slot-scope="record" style="margin: 0">{{record.description}}</p>
    </a-table>
  </div>
</template>

<script>
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
]

const data = [
  { key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
  { key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
  { key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
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
<!-- <style scoped>
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
.text_10247X6 {
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
</style> -->
