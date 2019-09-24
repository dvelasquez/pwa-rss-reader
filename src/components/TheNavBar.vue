<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png"
          height="28px"
          width="28px"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="isOpen = !isOpen"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
      <div class="navbar-end">
        <router-link
          to="/feeds"
          class="navbar-item is-tab"
          v-on:click.native="isOpen = !isOpen"
          >Feeds</router-link
        >
        <router-link
          to="/feed-source"
          class="navbar-item is-tab"
          v-on:click.native="isOpen = !isOpen"
          >Feeds Sources</router-link
        >
        <router-link
          to="/feed-importer"
          class="navbar-item is-tab"
          v-on:click.native="isOpen = !isOpen"
          >Feeds Importer</router-link
        >
        <router-link to="/else" class="navbar-item is-tab"
          >Something Else</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TheNavBar extends Vue {
  @Prop({ default: 'Loading Title...' })
  title!: string;
  @Prop({ default: false })
  isOpen!: boolean;
}
</script>

<style scoped></style>
