import axios form 'axios'
<template>
  <div class="container">
    <div v-for='message in message_data' :key="message.id">
      <a class='course_name'>
        {{ message.course_name }}
      </a>
      <div class='content'>
        {{ message.content }}
      </div>
    </div>
  </div>
</template>
<script>
import { getAllMessage } from '@/api/manage'

const message_data=[]

export default {
  data () {
    return {
      message_data,
    }
  },
  mounted: function(){
    const obj = getAllMessage({course_id : 1})
    const self = this
    obj.then(response => {
        console.log('seek successfully')
        self.message_data = response.data//对应后端返回的数据
      }).catch((fail) => {
        console.log('seek fail' + fail)
      })
    }
  
}
</script>
<style>
</style>