<template>
  <div class="about">
    <h1>This is the Feeds page</h1>
    <input type="url" v-model="url" id="entry-url" />
    <button @click="findFeed(url)" id="find-feed">FIND FEED</button>
    <div>
      <h2>{{ feed.title }}</h2>
      <h3>{{ feed.url }}</h3>
      <button @click="storeFeeds(feed)" id="get-feed">
        Save Feed Source
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { FeedSourceEntity } from '@/domain/entities/FeedSourceEntity';
import { PersistenceState } from '@/store/modules/persistence/types';
import { Component, Vue } from 'vue-property-decorator';
import { FeedSourceState } from '@/store/modules/feed/types';
import { Action, State } from 'vuex-class';

const FEED_SOURCE_MODULE: string = 'feed';
const PERSISTENCE_MODULE: string = 'persistence';

@Component({
  components: {}
})
export default class TheFeedImporter extends Vue {
  url: string = '';
  @State(FEED_SOURCE_MODULE) public feed!: FeedSourceState;
  @State(PERSISTENCE_MODULE) public persistence!: PersistenceState;
  @Action('resolveFeedUrl', { namespace: FEED_SOURCE_MODULE })
  private resolveFeedUrl: any;
  @Action('saveFeeds', { namespace: PERSISTENCE_MODULE })
  private saveFeeds: any;

  private async created() {
    // await this.resolveFeedUrl('https://news.ycombinator.com/');
  }

  private async findFeed(url: string): Promise<any> {
    return await this.resolveFeedUrl(url);
  }

  private async storeFeeds(feed: FeedSourceEntity) {
    return await this.saveFeeds([feed]);
  }
}
</script>
