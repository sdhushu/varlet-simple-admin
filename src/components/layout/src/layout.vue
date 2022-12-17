<script >
import { defineComponent, computed } from "vue"

export default defineComponent({
  name: 'layout',
  setup(props, { slots }) {
    const isRow = computed(()=> {
      if (slots) {
        return slots.default().some(vNode=> {
          const name = vNode.type.name
          return name === 'header' || name === 'footer'
        })
      }
      return false
    })

    return {
      isRow
    }

  }
})
</script>

<template>
  <section :class="isRow ? 'row' : 'column' ">
    <slot />
  </section>
</template>


<style scoped>
  .column{
    display: flex;
    flex: none;
    width: 100%;
  }


</style>