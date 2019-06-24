<template>
  <div class="home">
    <v-header title="Focus Design System"></v-header>
    <v-markdown>{{page.fields.content}}</v-markdown>
  </div>
</template>

<script>
export default {
  name: 'page-home',
  asyncData: async function({ app, params, error, store }){
    const page = await app.$contentful.getPage('home')
    return { page: page }
  },
  head: function(){
    return {
      title: `Focus | ${this.page.fields.title}`
    }
  },
  data: function(){
    return {
      page: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.home /deep/ p {
  margin-bottom: 1rem;
}
</style>
