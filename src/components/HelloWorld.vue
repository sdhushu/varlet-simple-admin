<script setup lang="ts">
defineProps<{ msg: string }>()

</script>

<template>
  <div class="title">{{ msg }}</div>
  <var-space :size="[10, 10]">
    <var-button>默认按钮</var-button>
    <var-button type="primary">主要按钮</var-button>
    <var-button type="info">信息按钮</var-button>
    <var-button type="success">成功按钮</var-button>
    <var-button type="warning">警告按钮</var-button>
    <var-button type="danger">危险按钮</var-button>
  </var-space>
</template>

<style scoped lang="less">

.title {
  font-size: 30px;
  color: skyblue;
}
</style>
