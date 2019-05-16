<template>
  <a-dropdown>
    <span class="action global-lang">
      <a-icon type="global" style="font-size: 16px"/>
    </span>
    <a-menu slot="overlay" style="width: 150px;" @click="SwitchLang">
      <a-menu-item key="zh-CN">
        <a rel="noopener noreferrer">
          <span role="img" aria-label="简体中文">🇨🇳</span> 简体中文
        </a>
      </a-menu-item>
      <a-menu-item key="en-US">
        <a rel="noopener noreferrer">
          <span role="img" aria-label="English">🇬🇧</span> English
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'LangSelect',
  data() {
    return {}
  },
  methods: {
    SwitchLang(row) {
      this.$store.dispatch('SetLang', row.key)
    }
  }
}
</script>
