<template>
  <div class="about">
    <h1>This is the Feeds page</h1>
    <input type="url" v-model="url" id="entry-url" />
    <button @click="findFeed(url)" id="find-feed">FIND FEED</button>
    <div>
      <h2>{{ feed.title }}</h2>
      <h3>{{ feed.url }}</h3>
      <button @click="loadFeedContent(feed.url)" id="get-feed">
        GET FEED CONTENT
      </button>
      <h4>{{ this.feed.content && this.feed.content.description }}</h4>
      <pre id="json-result">
        {{ JSON.stringify(this.feed, null, 2) }}
      </pre>
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
  url: string = '';
  @State(FEED_MODULE) public feed!: FeedState;
  @Action('resolveFeedUrl', { namespace: FEED_MODULE })
  private resolveFeedUrl: any;

  @Action('getFeedContent', { namespace: FEED_MODULE })
  private getFeedContent: any;

  private async created() {
    // await this.resolveFeedUrl('https://news.ycombinator.com/');
  }

  private async findFeed(url: string): Promise<any> {
    return await this.resolveFeedUrl(url);
  }

  private async loadFeedContent(url: string): Promise<any> {
    return await this.getFeedContent(url);
  }
}
</script>
