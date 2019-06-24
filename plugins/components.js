import Vue from 'vue'
import Select from '@ckd/vue-select'
import Multiselect from '@ckd/vue-multiselect'
import Button from '@ckd/vue-button'
import Markdown from '~/components/markdown.vue'
import Tab from '~/components/tab.vue'
import Tabs from '~/components/tabs.vue'
import Header from '~/components/header.vue'

export default (context, inject) => {
  Vue.component('v-multiselect', Multiselect)
  Vue.component('v-select', Select)
  Vue.component('v-button', Button)
  Vue.component('v-markdown', Markdown)
  Vue.component('v-tab', Tab)
  Vue.component('v-tabs', Tabs)
  Vue.component('v-header', Header)
}
