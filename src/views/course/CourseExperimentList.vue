<template>
  <a-list 
    size="large" 
    itemLayout="horizontal" 
    :pagination="pagination"
    :dataSource="listData"
    class="list"
  >
    <a-list-item slot="renderItem" slot-scope="item, " class="item-border">
      <div class="item">
        <p class="item-head">{{ item.name }}</p>
        <p class="item-date">发布时间: {{ item.start_date }}</p>
        <p class="item-date">截止时间: {{ item.end_date }}</p>
      </div>
      <a-button type="primary" class="detail-btn" @click="checkDetail(item.id)">查看详情</a-button>
    </a-list-item>

  </a-list>
</template>

<script>
import { get_lab_list } from '@/api/lab'

const listData = new Array()

export default {
  created() {
    listData.splice(0, listData.length)
    get_lab_list(1).then(response => {
      console.log(response)
      if (response['data'].length != 0) {
        for (let i = 0; i < response['data'].length; i++) {
          listData.push({
            id: response['data'][i]['id'],
            name: response['data'][i]['name'],
            start_date: response['data'][i]['start_time'],
            end_date: response['data'][i]['end_time']
          })
        }
      }
    })
  },

  data () {
    return {
      listData,
      pagination: {
        pageSize: 3,
      },
    }
  },

  methods: {
    checkDetail(id_lab) {
      this.$router.push({ path: '/course/experiment/experimentdetail', params: { id_lab: id_lab } })
    }
  }
}
</script>

<style scoped>
	.list {
		padding-bottom: 10px;
	}
	.item {
		text-align: left;
		width: 80%;
	}
	.item-head {
		font-size: 200%;
		margin-left: 8%;
		font-weight: bold;
	}
	.item-date {
		margin-left: 8%;
		color:black;
	}
	.detail-btn {
		margin-top: 60px;
		border-radius:30px;
		background-color: #6db1fc;
	}
	.detail-btn:hover {
		background-color: #2280e4;
	}
	.item-border {
    border: solid #bbbbbb;
    margin: 10px 4% 20px;
  }
	.list >>> .ant-list-item:last-child {
    border-bottom: solid #bbbbbb;
	}
	.list >>> .ant-list-pagination {
    margin-top: 24px;
    text-align: center;
}
</style>