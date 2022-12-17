<script setup>
  import {ref} from "vue";

  const configShow = ref(false)
</script>

<template>
  <var-button class="fab" type="primary" @click="configShow= true">
    <var-icon name="cog-outline" />
  </var-button>

  <var-popup position="right" v-model:show="configShow">
      <div class="popup-example-block">
        <var-space direction="column">
          <div>布局模式</div>
          <var-space>
            <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
            <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
            <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />
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