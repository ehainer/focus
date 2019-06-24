<template>
  <header class="v-header">
    <h1 class="name">
      <v-hamburger @click="toggleMenu()"></v-hamburger>
      <span class="title">{{title}}</span>
    </h1>
    <div class="actions">
      <slot />
    </div>
  </header>
</template>

<script type="text/javascript">
import VHamburger from '~/components/hamburger.vue'

export default {
  name: 'page-header',
  components: { VHamburger },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleMenu: function(){
      this.$store.dispatch('app/toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-header {
  grid-area: header;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 2rem;
}

.v-header .name {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 60px;
  font-family: $serif;
}

.v-header .name .v-hamburger {
  display: none;
}

.v-header .actions {
  display: grid;
  grid-gap: 2rem 2rem;
  justify-content: flex-end;
  grid-template-columns: min-content min-content;
}

@media only screen and (max-width: 1300px) {
  .v-header {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
  }
  
  .v-header .actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media only screen and (max-width: 1200px) {
  .v-header .name {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    grid-gap: 2rem 2rem;
  }

  .v-header .name .v-hamburger {
    display: block;
  }
}

@media only screen and (max-width: 800px) {
  .v-header .title {
    font-size: 4rem;
  }
}
</style>
