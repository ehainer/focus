<template>
  <nav class="v-menu">
    <header class="menu-header">
      <nuxt-link to="/" class="home-link">
        <figure class="logo">
          <img class="logo-image"
               srcset="~/assets/images/logo.png 250w,
                       ~/assets/images/logo@2x.png 450w,
                       ~/assets/images/logo@3x.png 800w"
               sizes="(max-width: 1920px) 1600px,
                      (max-width: 2500px) 2100px,
                      3000px"
               src="~/assets/images/logo.png" alt="CKD Focus Design Standard">
        </figure>
      </nuxt-link>
      <div class="hamburger-wrapper">
        <v-hamburger @click="toggleMenu()" class="is-open"></v-hamburger>
      </div>
    </header>
    <ul>
      <li><nuxt-link to="/components/button" class="nav-link">Button</nuxt-link></li>
      <li><nuxt-link to="/components/multiselect" class="nav-link">Multiselect</nuxt-link></li>
      <li><nuxt-link to="/components/select" class="nav-link">Select</nuxt-link></li>
    </ul>
  </nav>
</template>

<script type="text/javascript">
import VHamburger from '~/components/hamburger.vue'

export default {
  name: 'page-menu',
  components: { VHamburger },
  methods: {
    toggleMenu: function(){
      this.$store.dispatch('app/toggleMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-header {
  display: flex;
  align-items: center;
}

.home-link {
  flex: 1 1 auto;
}

.hamburger-wrapper {
  display: none;
  flex: 0 0 45px;
  padding: 2rem;
  cursor: pointer;
}

.logo {
  padding: 1.5rem 2rem;
}

.logo .logo-image {
  max-width: 60%;
}

.nav-link {
  display: block;
  font-weight: bold;
  color: $white;
  padding: 1rem 2rem;
  text-decoration: none;
}

@media only screen and (max-width: 1200px) {
  .hamburger-wrapper {
    display: block;
  }

  .logo .logo-image {
    max-width: 100%;
    max-height: 65px;
  }
}
</style>
