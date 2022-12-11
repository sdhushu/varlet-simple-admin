<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "footer"
})
</script>

<template>
  <footer class="var-footer">
    <slot />
  </footer>
</template>

<style scoped lang="less">
  .var-footer {
    width: 100%;
    height: 50px;
    background: skyblue;
  }
</style>