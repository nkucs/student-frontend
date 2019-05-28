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

      <div class="items">
        <div class="title">
          <div
            style="flex: 1;
            line-height: 40px;
            text-align: center;
            min-width: 100px;">
            <a-icon type="edit" theme="filled"/>
          </div>
          <div style="flex: 2; line-height: 40px; min-width: 300px;">题名</div>
          <div style="flex: 1; line-height: 40px; min-width: 100px;">分数</div>
          <div style="flex: 1; line-height: 40px; min-width: 100px;">通过率</div>
          <div style="flex: 1; line-height: 40px; min-width: 100px;">难度</div>
        </div>
        

        <div
          v-for="data in datas"
          :key="data.index"
          :class="data.index%2==0?'even-item':'oven-item'"
          @click="selectItem(data.id)">
          <div
            style="flex: 1;
            line-height: 40px;
            text-align: center;
            min-width: 100px;">
            {{ data.id }}
          </div>
          <div style="flex: 2; line-height: 40px; min-width: 300px;">{{ data.name }}</div>
          <div style="flex: 1; line-height: 40px; min-width: 100px;">{{ data.score }}</div>
          <div style="flex: 1; line-height: 40px; min-width: 100px;">{{ data.success }}</div>
          <div style="flex: 1; line-height: 40px; min-width: 100px;">
            <a-icon
              theme="twoTone"
              twoToneColor="#eb2f96"
              v-for="s in star.slice(0, data.difficulty)"
              :key="s" 
              type="frown"
              style="margin-right: 5px;"/>
          </div>
        </div>
      </div>



    </div>
    <div class="end-exam">
      <a-button class="my-button" @click="examEnd">结束考试</a-button>
    </div>

  </div>
</template>

<script>

const datas = []
for (let i = 0; i < 30; i++) {
  datas.push({
    index: i,
    id: i,
    name: `第${i}题`,
    score: `${i}`,
    success: `80%`,
    difficulty: i%5+1,
  })
}
const star = [1, 2, 3, 4, 5]

export default {
  data () {
    return {
      datas,
      star,

    }
  },

  methods: {
    onSearch (value) {
      console.log(value)
    },
    examEnd () {
      this.$router.push({ path:'/course/ExamEnd'  })
    },
    selectItem (id) {
      console.log(id)
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
  flex: 10;
  margin-top: 10px;
  overflow-y: auto;
  overflow-x: auto;
}
.title {
  height: 40px;
  display: flex;
  flex-direction: row;
  background: lightgray;
  min-width: 700px;
}

.items {
  margin-top: 5px;
  min-width: 700px;
}
.even-item {
  height: 40px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
}
.oven-item {
  height: 40px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  background: white;
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
