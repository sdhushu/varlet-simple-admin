<script lang="ts">
import {computed, defineComponent} from "vue";
import VarLayout from "@/components/layout";
import {props} from './props'

const { Layout, Header, Content, Footer, Aside } = VarLayout

export default defineComponent({
  name: 'ProLayout',
  props,
  components : {
    Layout,
    Header,
    Content,
    Footer,
    Aside
  },
  setup(props) {
    const height = computed(()=> {
      let allHeight = 0
      console.log(props, 111)
      if (props.footer) {
        allHeight += 50
      }
      if (props.header) {
        allHeight += 50
      }
      return allHeight + 'px'
    })
    return {
      height
    }
  }
})
</script>

<template>
    <Layout>
      <Header v-if="header">
        <div class="title">Varlet Simple Admin</div>
      </Header>
      <Layout>
        <Aside :style="{height: `calc(100vh - ${height})`}"  style="width: 200px" v-if="aside">
          menu
        </Aside>
        <Content :style="{height: `calc(100vh - ${height})`}">
          content
        </Content>
      </Layout>
      <Footer v-if="footer">
        footer
      </Footer>
    </Layout>
</template>

<style scoped>
.title {
  font-size: 30px;
  color: aliceblue;
}

</style>