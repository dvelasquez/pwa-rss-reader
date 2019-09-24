<template>
  <div>
    <TheNavBar></TheNavBar>
    <div class="section">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TheNavBar from '@/components/TheNavBar.vue';
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';

@Component({
  components: {
    TheNavBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
