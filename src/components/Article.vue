<template>
  <div>
    <h2>{{ this.title }}</h2>
    <h3>{{ this.pubDate }}</h3>
    <a :href="this.link">Link</a>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Article extends Vue {
  @Prop({ default: 'Loading Title...' })
  title!: string;
  @Prop({ default: '' })
  link!: string;
  @Prop({ default: new Date() })
  pubDate!: Date;
}
</script>

<style scoped></style>
