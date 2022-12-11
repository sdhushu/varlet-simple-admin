<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'header'
})

</script>

<template>
  <header class="header">
    <slot />
  </header>
</template>

<style scoped lang="less">
  .header {
    width: 100%;
    height: 50px;
    background: skyblue;
  }
</style>