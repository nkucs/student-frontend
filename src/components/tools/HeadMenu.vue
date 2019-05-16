<template>
  <div class="global-header-wrapper">
    <header-notice class="action"/>
    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu">
        <a-avatar class="avatar" size="small" :src="avatar()"/>
        <span class="nickname">{{ nickname() }}</span>
      </span>
      <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
        <a-menu-item key="3">
          <a href="javascript:;" @click="handleLogout">
            <a-icon type="logout"/>
            <!-- <span v-t="'header.HeadMenu.logout'"></span> -->
            <span>{{ $t('header.HeadMenu.logout') }}</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <!-- select lang component -->
    <lang-select/>
  </div>
</template>

<script>
import HeaderNotice from './HeaderNotice'
import LangSelect from '@/components/tools/LangSelect'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HeadMenu',
  components: {
    HeaderNotice,
    LangSelect
  },
  methods: {
    ...mapActions(['Logout']),
    ...mapGetters(['nickname', 'avatar']),
    handleLogout() {
      const that = this

      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk() {
          return that
            .Logout({})
            .then(() => {
              window.location.reload()
            })
            .catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
        },
        onCancel() {}
      })
    }
  }
}
</script>

<style scoped>
</style>