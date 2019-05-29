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
  <div>
    <div align="center" style="height: 100px;">
      <img alt="" style="width: 80px; height: 80px" src="@assets/images/state/accept.png">
    </div>
    <a-table :columns="columns" :dataSource="data" @change="onChange" />
  </div>

</template>

<script>
const columns = [{
  title: '题目编号',
  dataIndex: 'id',
  align:'center',
}, {
  title: '提交时间',
  dataIndex: 'time',
  align:'center',
},{
  title: '状态',
  dataIndex: 'state',
  align:'center',
}, {
  title: '分数',
  dataIndex: 'score',
  align:'center',
},{
  title: '运行时间',
  dataIndex: 'run',
  align:'center',
},{
  title: '使用内存',
  dataIndex: 'store',
  align:'center',
},

]

const data = [{
  key: '1',
  id: 1001,
  time: '2019-01-01 23:59:59',
  score:20,
  run:123,
  store:2.5,
  state:'内存超限',
  
},{
  key: '2',
  id: 1001,
  time: '2019-01-01 23:59:59',
  score:20,
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
      columns
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

