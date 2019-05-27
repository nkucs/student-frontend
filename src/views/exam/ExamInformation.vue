<template>
  <div class="container">
    <div class="search-item">
      <a-input-search
        placeholder="题目搜索"
        style="width: 200px; flex: 1;"
        @search="onSearch"
      />
      <div style="flex: 2;"/>
    </div>

    <div class="exam-item">
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="{ pageSize: 4 }"
        onRow="onClickRow"
      />
    </div>

    <div class="end-exam">
      <a-button class="my-button" @click="examEnd">结束考试</a-button>
    </div>

  </div>
</template>

<script>
const columns = [{
  title: '题号',
  dataIndex: 'index',
  width: 100,
},{
  title: '题名',
  dataIndex: 'name',
  width: 200,
}, {
  title: '分数',
  dataIndex: 'score',
  width: 100,
}, {
  title: '通过率',
  dataIndex: 'success',
  width: 100,
},{
  title: '难度',
  dataIndex: 'difficulty',
  width: 100,
}]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    index: i,
    name: `第${i}题`,
    score: `${i}`,
    success: `80%`,
    difficulty: '***'
  })
}


export default {
  data () {
    return {
      data,
      columns,
    }
  },

  methods: {
    onSearch (value) {
      console.log(value)
    },
    //出现问题
    //onClickRow (record) {
      //return {
        //onClick: () => {
          //console.log("click row")
          //console.log(record)
        //}
      //}
    //},
    examEnd () {
      this.$router.push({ path:'/course/ExamEnd'  })
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 500px;
}
.search-item {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.exam-item {
  flex: 8;
}
.end-exam {
  flex: 2;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.my-button {
  height: 80%;
  background-color: red;
  color: white;
}
</style>
