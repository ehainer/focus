<template>
  <div class="page" :class="{ 'is-open': open }">
    <aside ref="menu" class="menu">
      <v-menu></v-menu>
    </aside>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script type="text/javascript">
import VMenu from '~/components/menu.vue'

export default {
  components: { VMenu },
  watch: {
    $route(to, from){
      if(this.open){
        this.$store.dispatch('app/setOpen', false)
      }
    }
  },
  mounted: function(){
    document.addEventListener('click', (event) => {
      if(!this.$refs.menu.contains(event.target) && this.open && !this.isDescendentOf(event.target, 'v-hamburger')){
        this.$store.dispatch('app/setOpen', false)
      }
    })
  },
  methods: {
    isDescendentOf: function(element, klass){
      if(element.classList && element.classList.contains(klass)) return true
      return element.parentNode && this.isDescendentOf(element.parentNode, klass)
    }
  },
  computed: {
    open: function(){
      return this.$store.getters['app/getOpen']
    }
  }
}
</script>

<style lang="scss">
.page {
  display: grid;
  grid-template-columns: 350px 1fr;
}

.menu {
  background-color: $focus-blue;
}

.main {
  padding: 3rem;
}

@media only screen and (max-width: 1200px) {
  .page {
    grid-template-columns: 1fr;
  }

  .page.is-open .menu {
    left: 0;
  }

  .menu {
    transition: left 300ms ease-out;
    position: fixed;
    width: 350px;
    max-width: 85%;
    top: 0;
    left: -350px;
    height: 100%;
    z-index: 999;
  }

  .main {
    padding: 2rem;
  }
}
</style>
