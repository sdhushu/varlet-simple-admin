<script>
import {reactive, ref, defineComponent, watchEffect} from "vue";
import {props} from './props'
  export default defineComponent({
    props,
    emits: ['update:footer', 'update:header', 'update:aside'],
    setup(props, ctx) {
      const configShow = ref(false)
      const value = reactive({
        header: true,
        aside: true,
        footer: true
      })
      return {
        configShow,
        value,
        ctx
      }
    }
  })


</script>

<template>
  <var-button class="fab" type="primary" @click="configShow= true">
    <var-icon name="cog-outline" />
  </var-button>

  <var-popup position="right" v-model:show="configShow">
      <div class="popup-example-block">
        <var-space direction="column">
          <div>布局模式</div>
          <var-space direction="column">
            header <var-switch v-model="value.header" @click="ctx.emit('update:header', !value.header)" />
            aside <var-switch v-model="value.aside" @click="ctx.emit('update:aside', !value.aside)" />
            footer <var-switch v-model="value.footer" @click="ctx.emit('update:footer', !value.footer)"/>
          </var-space>
        </var-space>
      </div>

  </var-popup>
</template>

<style scoped>
.fab {
  position: absolute;
  top: 50%;
  right: 0;
}

.popup-example-block {
  padding: 20px;
  width: 100%;
}
</style>

<!--{-->
<!--"fixSiderbar": true,-->
<!--"layout": "mix",-->
<!--"splitMenus": false,-->
<!--"navTheme": "light",-->
<!--"contentWidth": "Fluid",-->
<!--"colorPrimary": "#1677FF",-->
<!--"siderMenuType": "sub",-->
<!--"fixedHeader": true,-->
<!--"menuHeaderRender": false-->
<!--}-->

<!--{-->
<!--"fixSiderbar": true,-->
<!--"layout": "side",-->
<!--"splitMenus": false,-->
<!--"navTheme": "light",-->
<!--"contentWidth": "Fluid",-->
<!--"colorPrimary": "#1677FF",-->
<!--"siderMenuType": "sub",-->
<!--"fixedHeader": true,-->
<!--"menuHeaderRender": false-->
<!--}-->

<!--{-->
<!--"fixSiderbar": true,-->
<!--"layout": "side",-->
<!--"splitMenus": false,-->
<!--"navTheme": "light",-->
<!--"contentWidth": "Fluid",-->
<!--"colorPrimary": "#1677FF",-->
<!--"siderMenuType": "sub",-->
<!--"fixedHeader": true,-->
<!--"headerRender": false,-->
<!--"footerRender": false,-->
<!--"menuRender": false,-->
<!--"menuHeaderRender": false-->
<!--}-->