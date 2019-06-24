<template>
  <div class="v-markdown" v-html="html"></div>
</template>

<script type="text/javascript">
import * as showdown from 'showdown'

export default {
  computed: {
    html: function(){
      const converter = new showdown.Converter()
      return converter.makeHtml(this.$slots.default[0].text)
    }
  }
}
</script>
