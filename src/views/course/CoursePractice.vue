<template>
  <a-table :columns="columns" :dataSource="data"
    >
    <!-- <a slot="name" slot-scope="text, record" @click="problemDetail(record.problem_id)">{{record.name}}</a> -->
  </a-table>
</template>
<script>
const columns = [
  { title: '题目序号', dataIndex: 'key', key: 'key' },
  { title: '题目名称', dataIndex: 'name', key: 'name', scopedSlots: { customRender: 'name' } },
  { title: '语言', dataIndex: 'language', key: 'language' },
  // { dataIndex: 'id', key: 'id',  },
];

const data1 = [
  { "id":1,"code":"0","name":"深度搜索","description":"为什么不能设置为空","runtime_limit":null,"memory_limit":null,"teacher":null,"tags":[],"language":1,"problem_id":3 },
  { "id": 2, "name": 'A+B Problem', "language": '63', "problem_id":3 },
  { "id": 3, "name": 'A*B Problem', "language": '63', "problem_id":3 },
];

import { axios } from '@/utils/request'
import {getLectureProblem} from '@/api/lectureaxios'

export default {
  data() {
    return {
      // data1,
      data: [],
      columns,
    }
  },

  mounted () {
     this.getData(this.$route.params.course_id, 1, 10)
    //this.getData(2, 1, 10)
  },

  methods: {
    getData (course_id, page, page_length) {
      getLectureProblem(course_id, page, page_length).then((response)=>{
          console.log(response.data)
          this.data.push(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    },

    problemDetail(id) {
      this.$router.push({
        path: '/problem/ProblemDetail',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
