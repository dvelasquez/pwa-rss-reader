<template>
  <div>
    <h1 class="title is-1">Feed Source</h1>
    <div>FOO</div>
    <FeedSource
      :key="index"
      :title="item.title"
      v-for="(item, index) in this.feedSourceData"
    ></FeedSource>
  </div>
</template>

<script lang="ts">
import FeedSource from '@/components/FeedSource.vue';
import { FeedSourceEntity } from '@/domain/entities/FeedSourceEntity';
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';

const feedSourceData = () => {
  const feedsSources: FeedSourceEntity[] = [
    {
      title: 'FayerWayer',
      url: 'https://feeds.feedburner.com/fayerwayer?format=xml',
      articles: []
    },
    {
      title: 'Hacker News',
      url: 'https://news.ycombinator.com//rss',
      articles: []
    }
  ];
  return feedsSources;
};

@Component({
  components: {
    FeedSource
  }
})
export default class TheFeedSource extends Vue {
  feedSourceData: FeedSourceEntity[] = feedSourceData();
  get computedFeed() {
    return feedSourceData();
  }
}
</script>

<style scoped></style>
