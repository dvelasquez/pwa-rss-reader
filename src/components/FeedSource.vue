<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="icon" alt="Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ title }}</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur sit amet massa fringilla egestas. Nullam condimentum
            luctus turpis.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FeedSource extends Vue {
  @Prop({ default: 'Loading Title...' })
  title!: string;
  @Prop({ default: '#' })
  url!: string;
  @Prop({ default: 'https://bulma.io/images/placeholders/128x128.png' })
  icon!: string;
}
</script>

<style scoped></style>
