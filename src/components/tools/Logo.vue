<template>
  <div class="logo">
    <router-link :to="{name:'index'}">
      <img src="~@/assets/logo.png" alt="logo">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      title: {
        type: String,
        default: 'NKU OPEP',
        required: false
      },
      showTitle: {
        type: Boolean,
        default: true,
        required: false
      }
    }
  }
</script>