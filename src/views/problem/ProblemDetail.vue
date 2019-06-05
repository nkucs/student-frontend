<template>
  <div id="components-layout-demo-basic">
    <div class="title">{{ title }}</div>
    <a-divider class="line"/>
    <a-row>
      <a-col :span="11">
        <a-tabs defaultActiveKey="1" onChange={callback}>
          <a-tab-pane tab="题目描述" key="1">
            <a-list	itemLayout="horizontal"	:dataSource="describelist">
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta>
                  <a slot="title">{{ item.title }}</a>
                  <a slot="description">{{ item.content }}</a>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="提交记录" key="2">
            <a-table :columns="columns" :dataSource="data" bordered>
              <template slot="name" slot-scope="text">
                <a href="javascript:;">{{ text }}</a>
              </template>
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :span="2">
        <a-divider dash type="vertical" class="line" style="height: 800px;color: black;"/>
      </a-col>
      <a-col :span="11">
        <a-select defaultValue="Python" @click="handleChange">
          <a-select-option value="Python">Python</a-select-option>
          <a-select-option value="C++">C++</a-select-option>
          <a-select-option value="C">C</a-select-option>
          <a-select-option value="C#">C#</a-select-option>
          <a-select-option value="Java">Java</a-select-option>
          <a-select-option value="Javascript">Javascript</a-select-option>
          <a-select-option value="Pascal">Pascal</a-select-option>
        </a-select>
        <a-textarea placeholder="code here" :rows="30" style="margin-bottom: 6px;margin-top: 6px;"/>
        <a-button type="primary" @click="confirm" >确定</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<style scoped>
.line {
	width: 5px;
	color: black;
}
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.ant-list-item-meta-title, .ant-list-item-meta-description {
	text-align: left;
	margin-left: 20px;
	color: black;
}
.title {
	font-size: 20px;
	line-height: 28px;
	font-weight: 500;
	margin-bottom: 16px;
}
th.column-money, td.column-money {
  text-align: right !important;
}
</style>
<script>
const columns = [{
  title: 'id',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' },
}, {
  title: '提交时间',
  className: '提交时间',
  dataIndex: 'time',
}, {
  title: '提交结果',
  dataIndex: 'result',
}]

const data = []

const des = ['描述', '时间限制','空间限制']
const describelist = [{
		title: '描述',
		content: 'A simple example'
	},
	{
		title: '时间限制',
		content: '100'
	},
	{
		title: '空间限制',
		content: '100'
	}]
const title = 'A+B Problem'
export default {
	data () {
		return {
			describelist,
			title,
			data,
      columns,
      problem_id: 5,
      des
		}
  },
  created: function(){
    this.getTheOneData()
  },
  onload() {},
	methods: {
    getTheOneData:function(){
    //获取该题目提交情况
    this.axios({
        method: 'get',
        url: 'student/submission/get_problem_submission',
        params: {
        problem_id: 5,
      },
      }).then((response) => {
        console.log(response.data)
       for(let i = 0;i < Object.keys(response.data).length; i++) {
          this.data.push({
            key:i,
            name: response.data[i].student,
            time:response.data[i].create_at,
            result:response.data[i].status
          })
       }
      })
  //获取某题目详细信息
    this.axios({
        method: 'get',
        url: 'api/student/problem/get-problem',
        params: {
        id_problem: 1,
      },
      }).then((response) => {
        this.describelist[0].content = response.data[0].description
        this.describelist[1].content = response.data[0].memory_limit
        this.describelist[2].content = response.data[0].runtime_limit
        this.title = response.data[0].name
      })
    },
		handleChange(value) {
			console.log(`selected ${value}`)
		},
		confirm() {
      this.axios({
          method: 'post',
          url: '/api/student/problem_hand_in',
          data: {
          user_id: 1,
          problem_id: 1,
          code: '',
        },
        }).then(() => {
          console.log('success!!')
        })
		},
		handleTableChange (pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      })
    }
	}
}
</script>
