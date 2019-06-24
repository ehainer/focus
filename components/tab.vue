<template>
  <div class="v-tab" :class="{ 'is-active': active }" :style="style">
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'tab',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    active: function(){
      return this.$parent.active === this.label
    },
    style: function(){
      const idx = this.$parent.tabs.findIndex(t => t.componentOptions.propsData.label == this.label)
      return { left: `${(idx - this.$parent.index) * 100}%` }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-tab {
  position: absolute;
  transition: left 300ms ease-out;
  top: 0;
  left: 0;
  max-width: 100%;
}
</style>