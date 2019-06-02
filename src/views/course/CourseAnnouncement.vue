
  <template>
  <a-list
    itemLayout="horizontal"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta :description="item.content">
        <a slot="title">{{item.title}}</a>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
import axios from 'axios'
const data = [
  {
	  content: 'content 1',
    title: '课程消息1',
  },
  {
	  content: 'content 2',
    title: '课程消息2',
  },
  {
	  content: 'content 3',
    title: '课程消息3',
  },
  {
	  content: 'content 4',
    title: 'Ant Design Title 4',
  },
]
// export default {
//   data () {
//     axios.get('/api/student/course_message?id_course=12345')
// 	.then(function (response) {
// 	  console.log(response)
// 	})
// 	.catch(function (error) {
// 	  console.log(error)
// 	})
//     return {
//       data,
//     }
//   },
// }
</script>
<style>
</style>