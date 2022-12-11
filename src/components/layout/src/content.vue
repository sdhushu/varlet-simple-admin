<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "content"
})
</script>

<template>
  <main class="var-content">
    <slot />
  </main>
</template>

<style scoped lang="less">
  .var-content {
    width: 100%;
    height: 200px;
    background: antiquewhite;
  }
</style>