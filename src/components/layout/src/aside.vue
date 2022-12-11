<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: "aside"
})
</script>

<template>
  <aside class="var-aside" v-bind="$attrs">
    <slot />
  </aside>
</template>

<style scoped lang="less">
  .var-aside {
    width: 100px;
    height: 200px;
    background: #9ca3af;
    flex: none;
    box-sizing: border-box;
  }
</style>