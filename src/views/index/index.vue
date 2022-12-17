<script setup lang="ts">
import VarLayout from "@/components/layout";
import Menu from '@/components/menu/index.vue';
import SubMenu from "@/components/sub-menu/index.vue";
import ProLayout from "@/components/pro-layout/index.vue";
import Config from '@/components/config/index.vue';

</script>

<template>
  <ProLayout :header="false" :footer="false" :aside="false" />
  <Config />
</template>

<style scoped lang="less">
  .title {
    font-size: 30px;
    color: aliceblue;
  }

  .var-height {
    height: calc(100vh - 100px);
  }

</style>
