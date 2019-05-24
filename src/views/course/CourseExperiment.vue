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
        <p class="item-head">
          {{ item.name }}
        </p>
        <p class="item-date">
          {{ item.date }}
        </p>
      </div>
      <a-button type="primary" class="detail-btn">查看详情</a-button>
    </a-list-item>

  </a-list>
</template>

<script>

const listData = []
for (let i = 0; i < 20; i++) {
    listData.push({
				name: `实验 ${i+1}`,
				date: '发布时间: 2019-10-25 12:00 截止时间: 2019-11-25 12:00',
    })
}

export default {
  data () {
    return {
      listData,
      pagination: {
        pageSize: 3,
      },
    }
  },
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