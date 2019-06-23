<template>
  <div class="about">
    <h1>This is the Feeds page</h1>
    <div>
      <h2>{{ feed.name }}</h2>
      <h3>{{ feed.url }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FeedState } from '@/store/modules/feed/types';
import { Action, State } from 'vuex-class';

const FEED_MODULE: string = 'feed';

@Component({
  components: {}
})
export default class Feeds extends Vue {
  @State(FEED_MODULE) public feed!: FeedState;
  @Action('resolveFeedUrl', { namespace: FEED_MODULE })
  private resolveFeedUrl: any;
  private created() {
    this.resolveFeedUrl('https://news.ycombinator.com/');
  }
}
</script>
