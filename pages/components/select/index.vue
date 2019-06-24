<template>
  <article class="component">
    <v-header :title="component.fields.name">
      <v-install :command="`yarn add ${package}`"></v-install>
      <div v-if="component.fields.github" class="github">
        <a class="button button-orange" :href="component.fields.github" target="_blank"><img src="~/assets/svgs/github.svg" class="icon" alt="GitHub" />View on GitHub</a>
      </div>
    </v-header>
    <section class="example">
      <a id="example"></a>
      <h2 class="heading">Example</h2>
      <div class="shadowbox is-padded">
        <v-markdown>{{component.fields.example}}</v-markdown>
        <v-select :options="cocktails"></v-select>
      </div>
    </section>
    <section class="usage">
      <a id="usage"></a>
      <h2 class="heading">Usage</h2>
      <v-tabs name="usage">
        <v-tab label="JavaScript">
          <v-markdown>{{component.fields.javascript}}</v-markdown>
        </v-tab>
        <v-tab label="HTML">
          <v-markdown>{{component.fields.html}}</v-markdown>
        </v-tab>
        <v-tab label="CSS">
          <v-markdown>{{component.fields.css}}</v-markdown>
        </v-tab>
      </v-tabs>
    </section>
    <section class="variants section">
      <a id="variants"></a>
      <h2 class="heading">Variants</h2>
      <div class="grid shadowbox is-padded">
        <div class="variant">
          <label class="variant-label">Placeholder</label>
          <v-select placeholder="Choose a State" :options="states"></v-select>
          <p class="variant-caption">Demonstrating use of the <code>placeholder</code> prop</p>
        </div>
        <div class="variant">
          <label class="variant-label">Pre-selected option</label>
          <v-select :options="states" value="CO"></v-select>
          <p class="variant-caption">Demonstrating use of the <code>value</code> prop, which targets the value of an option. Optionally, you can bind to this with <code>v-model</code></p>
        </div>
        <div class="variant">
          <label class="variant-label">Disabled options</label>
          <v-select :options="disabled_options"></v-select>
          <p class="variant-caption">Demonstrating a list with disabled options (randomly applied)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Grouped items</label>
          <v-select :options="cocktails"></v-select>
          <p class="variant-caption">Demonstrating nested options, same as <code>&lt;optgroup&gt;</code> in a native select element</p>
        </div>
        <div class="variant">
          <label class="variant-label">Disabled group</label>
          <v-select :options="disabled_group"></v-select>
          <p class="variant-caption">Demonstrating setting an entire option group to disabled (randomly applied)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom option markup</label>
          <v-select :options="custom_options"></v-select>
          <p class="variant-caption">Demonstrating options with custom markup by defining the options <code>item</code> key (randomly applied)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom option labels</label>
          <v-select :options="custom_labels"></v-select>
          <p class="variant-caption">Demonstrating an option with a <code>label</code> that includes custom markup (select any option)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Disabled mobile detection</label>
          <v-select :options="states" :native="false"></v-select>
          <p class="variant-caption">Demonstrating setting the <code>native</code> prop to <code>false</code> to force default component functionality</p>
        </div>
      </div>
    </section>
    <section class="experience section">
      <a id="experience"></a>
      <h2 class="heading">UX Experience</h2>
      <v-markdown>{{component.fields.experience}}</v-markdown>
    </section>
    <section class="config section">
      <a id="props"></a>
      <h2 class="heading">Props</h2>
      <div class="overflow-table shadow">
        <table class="table shadowbox">
          <thead>
            <tr>
              <th class="table-cell table-header">Prop</th>
              <th class="table-cell table-header">Type</th>
              <th class="table-cell table-header">Default Value</th>
              <th class="table-cell table-header">Description</th>
            </tr>
          </thead>
          <tbody class="table-content">
            <template v-for="prop in component.fields.props">
              <tr v-if="prop.fields.divider" :key="prop.fields.name">
                <td class="table-cell no-wrap is-divider" colspan="4"><v-markdown>{{prop.fields.description}}</v-markdown></td>
              </tr>
              <tr v-else :key="prop.fields.name">
                <td class="table-cell no-wrap"><a :id="`prop-${prop.fields.name}`"></a>{{prop.fields.name}}</td>
                <td class="table-cell no-wrap">{{prop.fields.type.join(' / ')}}</td>
                <td class="table-cell no-wrap">{{prop.fields.default}}</td>
                <td class="table-cell is-large" v-html="prop.fields.description"></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </section>
    <section class="style section">
      <a id="classes"></a>
      <h2 class="heading">CSS Classes</h2>
      <div class="overflow-table shadow">
        <table class="table shadowbox">
          <thead>
            <tr>
              <th class="table-cell table-header">Class Name</th>
              <th class="table-cell table-header">Where</th>
              <th class="table-cell table-header is-large">When</th>
              <th class="table-cell table-header is-large">Why</th>
            </tr>
          </thead>
          <tbody class="table-content">
            <tr v-for="klass in component.fields.classes" :key="klass.fields.name">
              <td class="table-cell no-wrap"><a :id="`class-${klass.fields.name}`"></a>{{klass.fields.name}}</td>
              <td class="table-cell"><v-markdown>{{klass.fields.where}}</v-markdown></td>
              <td class="table-cell is-large"><v-markdown>{{klass.fields.when}}</v-markdown></td>
              <td class="table-cell is-large"><v-markdown>{{klass.fields.why}}</v-markdown></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </article>
</template>

<script type="text/javascript">
import VInstall from '~/components/install.vue'
import VHamburger from '~/components/hamburger.vue'

import states from '~/resources/select/states.json'
import countries from '~/resources/select/countries.json'
import cocktails from '~/resources/select/cocktails.json'

import '@ckd/vue-select/dist/@ckd/vue-select.css'

export default {
  name: 'component-select',
  asyncData: async function({ app, params }){
    const component = await app.$contentful.getComponent('select')
    return { component: component }
  },
  head: function(){
    return {
      title: `Focus | ${this.component.fields.name}`
    }
  },
  components: { VInstall, VHamburger },
  methods: {
    getRandomOption: function(arr){
      let index = Math.floor(Math.random() * arr.length)
      return index
    },
    toggleMenu: function(){
      this.$store.dispatch('app/toggleMenu')
    }
  },
  computed: {
    package: function(){
      return `@ckd/vue-${this.component.fields.slug}`
    },
    name: function(){
      return this.component.fields.name
    },
    element: function(){
      return `v-${this.component.fields.slug}`
    },
    disabled_options: function(){
      const clone = JSON.parse(JSON.stringify(this.states))
      for(let i=0; i<5; i++){
        clone[this.getRandomOption(clone)].disabled = true
      }

      return clone
    },
    disabled_group: function(){
      const clone = JSON.parse(JSON.stringify(this.cocktails))
      clone[this.getRandomOption(clone)].disabled = true
      return clone
    },
    custom_options: function(){
      const clone = JSON.parse(JSON.stringify(this.states))
      for(let i=0; i<30; i++){
        let option = clone[this.getRandomOption(clone)]
        option.item = `<span class="custom-green">${option.label}</span>`
      }

      return clone
    },
    custom_labels: function(){
      const clone = JSON.parse(JSON.stringify(this.states))
      clone.forEach((option) => {
        option.item = option.label
        option.label = `<span class="custom-green">${option.label}</span>`
      })

      return clone
    }
  },
  data: function(){
    return {
      component: {},
      cocktails: cocktails,
      countries: countries,
      states: states
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .custom-green {
  color: lightseagreen;
  font-weight: bold;
  font-style: italic;
}

/deep/ .is-highlighted .custom-green {
  color: white;
}

.v-tabs {
  background-color: #2D2D2D;
  border-radius: 5px;
  overflow: hidden;
}

.tab {
  color: $white;
  font-weight: bold !important;
}

.v-select.v-select {
  width: 100%;
}
</style>
