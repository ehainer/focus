<template>
  <div class="v-install">
    <code ref="command" class="command" @click="select()">{{command}}</code>
    <button title="Copy install command" class="copy" @click="copy()"></button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'install',
  props: {
    command: {
      type: String,
      required: true
    }
  },
  methods: {
    copy: function(){
      const el = document.createElement('textarea')
      el.value = this.command
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      if(selected){
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
      }
    },
    select: function(){
      if(document.selection){
        const range = document.body.createTextRange()
        range.moveToElementText(this.$refs.command)
        range.select()
      }else if(window.getSelection){
        const range = document.createRange()
        range.selectNode(this.$refs.command)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-install {
  background-color: darken($faint-gray, 5%);
  padding: 0 0 0 2rem;
  height: 55px;
  border-radius: 3px;
  white-space: nowrap;
  font-family: monospace;
  font-size: 1.4rem;
  display: flex;
}

.command {
  flex: 1 1 auto;
  line-height: 55px;
}

.copy {
  flex: 0 0 55px;
  width: 55px;
  border: 0;
  cursor: pointer;
  background: url('~assets/svgs/copy.svg') no-repeat center center/20px 20px;
}
</style>