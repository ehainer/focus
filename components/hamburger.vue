<template>
  <div class="v-hamburger" v-on="$listeners">
    <span class="line top"></span>
    <span class="line middle"></span>
    <span class="line bottom"></span>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'hamburger',
  computed: {
    open: function(){
      return this.$store.getters['app/getOpen']
    }
  }
}
</script>

<style lang="scss" scoped>
.v-hamburger {
  transition: left 300ms ease-out;
  position: relative;
  width: 40px;
  height: 30px;
  cursor: pointer;

  &.is-open .line {
    background-color: $white;
  }

  &.is-open .top {
    transform: rotate(45deg) translate(6px, 13px);
  }

  &.is-open .middle {
    opacity: 0;
  }

  &.is-open .bottom {
    transform: rotate(-45deg) translate(6px, -13px);
  }
}

.line {
  transition: transform 300ms ease-out, opacity 300ms ease-out, color 300ms ease-out;
  transition-delay: 65ms;
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 4px;
  width: 100%;
  opacity: 1;
  background-color: #d2d2d2;
}

.line.top {
  top: 0;
}

.line.middle {
  top: 50%;
  transform: translateY(-50%);
}

.line.bottom {
  bottom: 0;
}
</style>
