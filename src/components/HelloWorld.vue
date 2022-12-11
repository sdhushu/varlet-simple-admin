<script setup lang="ts">
import VarLayout from "@/components/layout";
defineProps<{ msg: string }>()

const { Layout, Header, Content, Footer, Aside } = VarLayout
</script>

<template>
  <div class="title">{{ msg }}</div>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Aside style="width: 200px" >aside</Aside>
      <Content>
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
  color: skyblue;
}
</style>
