
<!--<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
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
</style>-->
<template>
  <a-table :columns="columns" :dataSource="data" @change="onChange" />
</template>

<script>
// import classnames from 'classnames'
// import { ListSize } from 'ant-design-vue/es/list'
const columns = [{
  title: '题目编号',
  dataIndex: 'id', 
  align:'center',
  sorter: (a, b) => a.id - b.id,
}, {
  title: '提交时间',
  dataIndex: 'time',
  align:'center',
  sorter: (a, b) => a.time - b.time,
}, {
  title: '通过情况',
  dataIndex: 'accept',
  align:'center',
  sorter: (a, b) => a.accept - b.accept,
}, {
  title: '分数',
  dataIndex: 'score',
  align:'center',
  sorter: (a, b) => a.score - b.score,
}, {
  title: '代码长度',
  dataIndex: 'length',
  align:'center',
  sorter: (a, b) => a.length - b.length,
}, {
  title: '语言',
  dataIndex: 'language',
  align:'center',
  
}, {
  title: '运行时间',
  dataIndex: 'run',
  align:'center',
  sorter: (a, b) => a.run - b.run,
},{
  title: '使用内存',
  dataIndex: 'store',
  align:'center',
  sorter: (a, b) => a.store - b.store,
},{
  title: '状态',
  dataIndex: 'state',
  align:'center',
},

]

const data = [{
  key: '1',
  id: 1001,
  time: '2019-01-01 23:59:59',
  accept: 0.2,
  score:20,
  length:936,
  language:'C++',
  run:123,
  store:2.5,
  state:'内存超限',
  
}]

function onChange(pagination, sorter) {
  console.log('params', pagination, sorter)
}


export default {
  data() {
    return {
      data,
      columns,
    }
  },
  methods: {
    onChange,
  }
}
</script>

<style>
.ant-table{
  font-size: 14px;
}
</style>



