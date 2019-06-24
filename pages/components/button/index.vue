<template>
  <article class="component">
    <v-header :title="component.fields.name">
      <v-install :command="`yarn add ${package}`"></v-install>
      <div v-if="component.fields.github" class="github">
        <a class="button button-orange" :href="component.fields.github" target="_blank"><img src="~/assets/svgs/github.svg" class="icon" alt="GitHub" />View on GitHub</a>
      </div>
    </v-header>
    <section class="example section">
      <a id="example"></a>
      <h2 class="heading">Example</h2>
      <div class="shadowbox is-padded">
        <v-markdown>{{component.fields.example}}</v-markdown>
        <v-button>CKD Vue Button</v-button>
      </div>
    </section>
    <section class="usage section">
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
          <label class="variant-label">Outlined Button</label>
          <v-button class="is-outlined">Outlined Button</v-button>
          <p class="variant-caption">Default button look with the <code>is-outlined</code> class</p>
        </div>
        <div class="variant">
          <label class="variant-label">Text Button</label>
          <v-button class="is-text">Text Button</v-button>
          <p class="variant-caption">Default button look with the <code>is-text</code> class</p>
        </div>
        <div class="variant">
          <label class="variant-label">Circle Button</label>
          <v-button class="is-circle">Circle Button</v-button>
          <p class="variant-caption">Default button look with the <code>is-circle</code> class</p>
        </div>
        <div class="variant">
          <label class="variant-label">Default Loading Button</label>
          <v-button :loading="loadingActive" @click="toggleLoading()">Default Loading Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>loading</code> prop to <code>true</code> on click</p>
        </div>
        <div class="variant">
          <label class="variant-label">Disabled Button</label>
          <v-button :disabled="true">Disabled Button</v-button>
          <p class="variant-caption">Default button look with the <code>disabled</code> prop set to <code>true</code></p>
        </div>
        <div class="variant">
          <label class="variant-label">Rippleless Button</label>
          <v-button :ripple="false">Rippleless Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>ripple</code> prop to <code>false</code></p>
        </div>
        <div class="variant">
          <label class="variant-label">Ripple Offset Button</label>
          <v-button :ripple-offset="0.8">Ripple Offset Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>ripple-offset</code> prop to <code>0.8</code> (80% lighter ripple color than background)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom Ripple Color Button</label>
          <v-button ripple-color="orange">Custom Ripple Color Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>ripple-color</code> prop to <code>orange</code></p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom Ripple Duration Button</label>
          <v-button :ripple-duration="3000">Custom Ripple Duration Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>ripple-duration</code> prop to <code>3000</code> (time in milliseconds)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom Ripple Scale Button</label>
          <v-button :ripple-scale="1" class="is-outlined">Custom Ripple Scale Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>ripple-scale</code> prop to <code>1</code> (40x40 pixels)</p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom Text Color Button</label>
          <v-button text-color="yellow">Custom Text Color Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>text-color</code> prop to <code>yellow</code></p>
        </div>
        <div class="variant">
          <label class="variant-label">Icon Button</label>
          <v-button @click="iconActive = !iconActive" class="is-circle" :class="{ 'is-active': iconActive }">
            <div class="card">
              <div class="front">
                <img src="~/assets/svgs/like.svg" width="20" height="20" key="like" />
              </div>
              <div class="back">
                <img src="~/assets/svgs/like-full.svg" width="20" height="20" key="like-full" />
              </div>
            </div>
          </v-button>
          <p class="variant-caption">Demonstration of toggling internal content state on click</p>
        </div>
        <div class="variant">
          <label class="variant-label">Custom Color Button</label>
          <v-button button-color="lightseagreen">Custom Color Button</v-button>
          <p class="variant-caption">Demonstration of setting the <code>button-color</code> prop to <code>lightseagreen</code></p>
        </div>
        <div class="variant">
          <label class="variant-label">Text Adjacent Loader</label>
          <v-button class="adjacent-button" :loading="adjacentActive" @click="toggleAdjacent()">
            Text Adjacent Loader
          </v-button>
          <p class="variant-caption">Custom style overrides to place the loader adjacent to the label on click</p>
        </div>
        <div class="variant">
          <label class="variant-label">Label State Switcher Button</label>
          <v-button class="state-button" :button-color="stateColor" :class="{ 'is-active': stateActive }" @click="toggleState()">
            <div class="labels">
              <div class="label create">Create</div>
              <div class="label delete">Delete</div>
            </div>
          </v-button>
          <p class="variant-caption">Demonstration of button that changes labels & color on click</p>
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
      <div class="shadowbox">
        <table class="table">
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
                <td class="table-cell is-large"><v-markdown>{{prop.fields.description}}</v-markdown></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </section>
    <section class="style section">
      <a id="classes"></a>
      <h2 class="heading">CSS Classes</h2>
      <div class="shadowbox">
        <table class="table">
          <thead>
            <tr>
              <th class="table-cell table-header">Class Name</th>
              <th class="table-cell table-header">Where</th>
              <th class="table-cell table-header is-large">When</th>
              <th class="table-cell table-header is-large">Why</th>
            </tr>
          </thead>
          <tbody class="table-content">
            <template v-for="klass in component.fields.classes">
              <tr v-if="klass.fields.divider" :key="klass.fields.name">
                <td class="table-cell no-wrap is-divider" colspan="4"><v-markdown>{{klass.fields.where}}</v-markdown></td>
              </tr>
              <tr v-else :key="klass.fields.name">
                <td class="table-cell no-wrap"><a :id="`class-${klass.fields.name}`"></a>{{klass.fields.name}}</td>
                <td class="table-cell"><v-markdown>{{klass.fields.where}}</v-markdown></td>
                <td class="table-cell is-large"><v-markdown>{{klass.fields.when}}</v-markdown></td>
                <td class="table-cell is-large"><v-markdown>{{klass.fields.why}}</v-markdown></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </section>
  </article>
</template>

<script type="text/javascript">
import VInstall from '~/components/install.vue'

import '@ckd/vue-button/dist/@ckd/vue-button.css'

export default {
  name: 'component-button',
  asyncData: async function({ app, params }){
    const component = await app.$contentful.getComponent('button')
    return { component: component }
  },
  head: function(){
    return {
      title: `Focus | ${this.component.fields.name}`
    }
  },
  components: { VInstall },
  methods: {
    toggleState: function(){
      if(this.stateColor == '#231e49'){
        this.stateColor = 'crimson'
      }else{
        this.stateColor = '#231e49'
      }
      this.stateActive = !this.stateActive
    },
    toggleAdjacent: function(){
      this.adjacentActive = true
      setTimeout(() => { this.adjacentActive = false }, 5000)
    },
    toggleLoading: function(){
      this.loadingActive = true
      setTimeout(() => { this.loadingActive = false }, 5000)
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
    }
  },
  data: function(){
    return {
      component: {},
      iconActive: false,
      stateActive: false,
      stateColor: '#231e49',
      adjacentActive: false,
      loadingActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-tabs {
  background-color: #2D2D2D;
  border-radius: 5px;
  overflow: hidden;
}

.tab {
  color: $white;
  font-weight: bold !important;
}

.card {
  width: 20px;
  height: 20px;
  position: relative;
  transition: transform 500ms ease-out;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
}

.card .front,
.card .back {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  transform: rotateY(180deg);
}

.v-button.is-active .card {
  transform: rotateY(180deg);
}

/**
 * Text adjacent button
 */
.adjacent-button /deep/ .loader {
  transition: all 400ms ease-out;
  transform: none;
  position: relative;
  top: initial;
  left: initial;
  float: left;
  width: 0;
  height: 20px;
  margin-right: 0;
  opacity: 0;
  overflow: hidden;
}

.adjacent-button /deep/ .loader .circular {
  width: 20px;
  height: 20px;
}

.adjacent-button.is-loading /deep/ .loader {
  transform: none;
  width: 20px;
  margin-right: 1rem;
  opacity: 1;
}

.adjacent-button.is-loading /deep/ .content {
  transform: none;
  opacity: 1;
}

.state-button {
  &.is-active /deep/ .labels {
    top: -50px;
  }
}

.state-button /deep/ .frame {
  padding: 0 22px;
}

.state-button /deep/ .labels {
  transition: top 300ms ease-out;
  position: relative;
  top: 0;
  width: 80px;
  height: 44px;
}

.state-button /deep/ .label {
  position: absolute;
  left: 50%;
  height: 44px;
  transform: translateX(-50%);
  line-height: 44px;
}

.state-button /deep/ .label.create {
  top: 0;
}

.state-button /deep/ .label.delete {
  top: 50px;
}
</style>
