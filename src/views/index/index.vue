<script setup lang="ts">
import ProLayout from "@/components/pro-layout/index.vue";
import Config from '@/components/config/index.vue';
import {reactive, ref} from "vue";

const configLayout = reactive({
  header: true,
  aside: true,
  footer: true
})

</script>

<template>
  <ProLayout :header="configLayout.header" :aside="configLayout.aside" :footer="configLayout.footer" />
  <Config
      v-model:header="configLayout.header"
      v-model:aside="configLayout.aside"
      v-model:footer="configLayout.footer"
  />
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
