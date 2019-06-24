<template>
  <div class="v-tabs">
    <ul class="tabs">
      <li v-for="tab in tabs" :key="tab.componentOptions.propsData.label" class="tab" :class="{ 'is-active': tab.componentOptions.propsData.label == active }" @click="setActiveTab(tab.componentOptions.propsData.label)">{{tab.componentOptions.propsData.label}}</li>
      <span class="highlight" :style="highlight"></span>
    </ul>
    <div class="panes" :style="panes">
      <slot />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'tabs',
  props: {
    name: {
      type: String
    }
  },
  beforeMount: function(){
    if(this.name){
      const last = window.localStorage.getItem(this.name)

      if(this.tabs.some(t => t.componentOptions.propsData.label == last)){
        this.active = window.localStorage.getItem(this.name)
      }else if(this.tabs.length){
        this.active = this.tabs[0].componentOptions.propsData.label
      }
    }
  },
  watch: {
    active: function(active_tab){
      if(this.name){
        window.localStorage.setItem(this.name, active_tab)
      }

      this.$emit('change', active_tab)

      this.$nextTick(() => {
        const tab = this.$el.querySelector('.tab.is-active')
        const pane = this.$el.querySelector('.v-tab.is-active')

        if(tab && pane){
          this.paneHeight     = pane.offsetHeight
          this.highlightLeft  = tab.offsetLeft
          this.highlightWidth = tab.offsetWidth
        }
      })
    }
  },
  methods: {
    setActiveTab: function(label){
      this.active = label
    }
  },
  computed: {
    tabs: function(){
      return this.$slots.default ? this.$slots.default.filter(slot => slot.componentOptions) : []
    },
    index: function(){
      return this.tabs.findIndex(t => t.componentOptions.propsData.label == this.active)
    },
    panes: function(){
      return {
        height: this.paneHeight == 'auto' ? 'auto' : `${this.paneHeight}px`
      }
    },
    highlight: function(){
      return {
        width: `${this.highlightWidth}px`,
        left: `${this.highlightLeft}px`
      }
    }
  },
  data: function(){
    return {
      active: null,
      paneHeight: 'auto',
      highlightLeft: 0,
      highlightWidth: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  list-style: none;
}

.tabs .tab {
  display: inline-block;
  position: relative;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  z-index: 0;
  color: $white;
  font-weight: bold;
}

.tabs .highlight {
  transition: width 300ms ease-out, left 300ms ease-out;
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background-color: $orange;
  z-index: 0;
}

.panes {
  transition: height 300ms ease-out;
  position: relative;
  overflow: hidden;
}
</style>
