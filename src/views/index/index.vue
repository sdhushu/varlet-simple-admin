<script setup lang="ts">
import VarLayout from "@/components/layout";

const { Layout, Header, Content, Footer, Aside } = VarLayout
</script>

<template>
  <Layout>
    <Header>
      <div class="title">Varlet Simple Admin</div>
    </Header>
    <Layout>
      <Aside class="var-height"  style="width: 200px" >aside</Aside>
      <Content class="var-height">
        content
      </Content>
    </Layout>
    <Footer>
      footer
    </Footer>
  </Layout>
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
