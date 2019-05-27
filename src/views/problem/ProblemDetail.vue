<template>
  <div id="components-layout-demo-basic">
    <div class="title">A+B Problem</div>
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


          <a-tab-pane tab="讨论" key="2">
            <a-list
              class="comment-list"
              :header="`${commlist.length} 回复`"
              itemLayout="horizontal"
              :dataSource="commlist"
            >
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-comment
                  :author=item.author
                  :avatar=item.avatar>
                  <p slot="content">{{ item.content }}</p>
                  <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                    <span>{{ item.datetime.fromNow() }}</span>
                  </a-tooltip>
                </a-comment>
              </a-list-item>
            </a-list>
          </a-tab-pane>

          
          <a-tab-pane tab="提交记录" key="3">
            <a-table :columns="columns" :dataSource="data" bordered>
              <template slot="name" slot-scope="text">
                <a href="javascript:;">{{ text }}</a>
              </template>
            </a-table>
          </a-tab-pane>
        </a-tabs>
        <div>
          <a-button>返回</a-button>
          <a-button>上一题</a-button>
          <a-button>下一题</a-button>
        </div>
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
import moment from 'moment'

const columns = [{
  title: 'Name',
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

const data = [{
  key: '1',
  name: 'John Brown',
  time: '10:55:53',
  result: 'AC',
}, {
  key: '2',
  name: 'Jim Green',
  time: '11:50:00',
  result: 'Time Out',
}, {
  key: '3',
  name: 'Joe Black',
  time: '12:00:03',
  result: 'AC',
}]

const describelist = [
	{
		title: '描述',
		content: '这是一个简单的问题，给你两个数，把他们加起来，具体看样例。'
	},
	{
		title: '输入',
		content: '每组首先输入XXXX'
	},
	{
		title: '输出',
		content: '对于每一组数据XXX'
	},
	{
		title: '样例输入',
		content: '每组首先输入XXXX'
	},
	{
		title: '样例输出',
		content: '每组首先输入XXXX'
	}]
	const commlist = [
		{
			author: 'Han Solo',
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
			datetime: moment().subtract(1, 'days'),
		},
		{
			author: 'Han Solo',
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
			datetime: moment().subtract(2, 'days'),
		}]
export default {
	data () {
		// title: 'A+B Problem'
		return {
			describelist,
			commlist,
			moment,
			data,
      columns
		}
	},
	mounted () {
		this.fetch()
	},
	methods: {
		handleChange(value) {
			console.log(`selected ${value}`)
		},
		confirm() {
			console.log('confirm!!')
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
    },
    fetch (params = {}) {
      console.log('params:', params)
      this.loading = true
    }
	}
}
</script>
