<template>
  <div>
    <h1>FeedList</h1>
    <div>
      <feed-item
        v-for="(item, index) in this.feedData.content.item"
        v-bind:key="index"
        :title="item.title"
        :pub-date="item.pubDate"
        :link="item.link"
      ></feed-item>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { FeedEntity } from '@/domain/entities/FeedEntity';
import { Vue } from 'vue-property-decorator';
import FeedItem from '@/components/FeedItem.vue';

const feedDataFunction = (): FeedEntity => ({
  title: 'Hacker News',
  url: 'https://news.ycombinator.com/rss',
  content: {
    title: 'Hacker News',
    link: 'https://news.ycombinator.com/',
    description: 'Links for the intellectually curious, ranked by readers.',
    item: [
      {
        title: 'Google’s robots.txt Parser is Now Open Source',
        link:
          'https://opensource.googleblog.com/2019/07/googles-robotstxt-parser-is-now-open.html',
        pubDate: 'Mon, 1 Jul 2019 14:13:08 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325395',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Jeff Hawkins: Thousand Brains Theory of Intelligence',
        link: 'https://lexfridman.com/jeff-hawkins/',
        pubDate: 'Mon, 1 Jul 2019 15:36:26 +0000',
        comments: 'https://news.ycombinator.com/item?id=20326396',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Ask HN: Who is hiring? (July 2019)',
        link: 'https://news.ycombinator.com/item?id=20325925',
        pubDate: 'Mon, 1 Jul 2019 15:00:06 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325925',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title:
          'The New HAProxy Data Plane API: Two Examples of Programmatic Configuration',
        link: 'https://www.haproxy.com/blog/new-haproxy-data-plane-api/',
        pubDate: 'Mon, 1 Jul 2019 17:48:27 +0000',
        comments: 'https://news.ycombinator.com/item?id=20327867',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Scientists capture MRI scans of single atoms',
        link:
          'https://www.nytimes.com/2019/07/01/science/microscope-atom-magnetic-mri.html',
        pubDate: 'Mon, 1 Jul 2019 15:37:10 +0000',
        comments: 'https://news.ycombinator.com/item?id=20326407',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'How to support open-source software and stay sane',
        link: 'https://www.nature.com/articles/d41586-019-02046-0',
        pubDate: 'Mon, 1 Jul 2019 13:25:31 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325011',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Ask HN: Who wants to be hired? (July 2019)',
        link: 'https://news.ycombinator.com/item?id=20325923',
        pubDate: 'Mon, 1 Jul 2019 15:00:06 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325923',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title:
          'I thought I made a hard game and then speedrunners destroyed it',
        link: 'https://imgur.com/t/speedrunning/OUtDA5J',
        pubDate: 'Mon, 1 Jul 2019 18:28:11 +0000',
        comments: 'https://news.ycombinator.com/item?id=20328266',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title:
          'Former NASA Flight Director Gene Kranz Restores Mission Control in Houston',
        link:
          'https://www.npr.org/2019/06/30/737327895/former-nasa-flight-director-gene-kranz-restores-mission-control-in-houston',
        pubDate: 'Mon, 1 Jul 2019 10:09:21 +0000',
        comments: 'https://news.ycombinator.com/item?id=20323927',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Show HN: Open-Source OAuth2 Server Hydra 1.0 Released',
        link: 'https://gethydra.sh/hydra-1.0-stable-release',
        pubDate: 'Mon, 1 Jul 2019 16:24:44 +0000',
        comments: 'https://news.ycombinator.com/item?id=20326931',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title:
          "The New Austrian Railways' Intercity and Nightjet Sleeper Train Interior Design",
        link:
          'https://www.priestmangoode.com/project/new-intercity-and-nightjet/',
        pubDate: 'Mon, 1 Jul 2019 13:22:43 +0000',
        comments: 'https://news.ycombinator.com/item?id=20324992',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Absence of certain features in IRC considered a feature',
        link:
          'https://drewdevault.com/2019/07/01/Absence-of-features-in-IRC.html',
        pubDate: 'Mon, 1 Jul 2019 12:43:23 +0000',
        comments: 'https://news.ycombinator.com/item?id=20324675',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Hong Kong protesters occupy legislative chamber',
        link:
          'https://www.hongkongfp.com/2019/07/01/breaking-hong-kong-protesters-storm-legislature-breaking-glass-doors-prying-gates-open/',
        pubDate: 'Mon, 1 Jul 2019 16:46:33 +0000',
        comments: 'https://news.ycombinator.com/item?id=20327182',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title:
          'Oregon Just Voted to Legalize Duplexes on Almost Every City Lot',
        link:
          'https://www.sightline.org/2019/06/30/oregon-just-voted-to-legalize-duplexes-on-almost-every-city-lot',
        pubDate: 'Mon, 1 Jul 2019 03:57:01 +0000',
        comments: 'https://news.ycombinator.com/item?id=20322358',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Microsoft explains the lack of Registry backups in Windows 10',
        link:
          'https://www.ghacks.net/2019/06/29/microsoft-explains-the-lack-of-registry-backups-in-windows-10/',
        pubDate: 'Sun, 30 Jun 2019 11:25:09 +0000',
        comments: 'https://news.ycombinator.com/item?id=20317669',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Dear Agile, I’m Tired of Pretending (2018)',
        link:
          'https://medium.com/columbus-egg/dear-agile-im-tired-of-pretending-d39ab6a12003',
        pubDate: 'Mon, 1 Jul 2019 13:35:47 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325096',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title:
          'An Initial Look at the IBM POWER9 4c/16t CPU Performance on the Blackbird',
        link:
          'https://www.phoronix.com/scan.php?page=article&item=blackbird-power9-4c&num=1',
        pubDate: 'Mon, 1 Jul 2019 17:33:41 +0000',
        comments: 'https://news.ycombinator.com/item?id=20327692',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Tesla’s head of production is going to EV startup Lucid Motors',
        link:
          'https://electrek.co/2019/07/01/tesla-head-of-production-ev-startup-lucid-motors/',
        pubDate: 'Mon, 1 Jul 2019 18:02:39 +0000',
        comments: 'https://news.ycombinator.com/item?id=20328010',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'What If All Your Slack Chats Were Leaked?',
        link:
          'https://www.nytimes.com/2019/07/01/opinion/slack-chat-hackers-encryption.html',
        pubDate: 'Mon, 1 Jul 2019 13:53:09 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325226',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'AIs Named by AIs',
        link: 'https://aiweirdness.com/post/185883998702/ais-named-by-ais',
        pubDate: 'Mon, 1 Jul 2019 14:36:11 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325640',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Degraded performance on GitLab.com',
        link: 'https://gitlab.com/gitlab-com/gl-infra/production/issues/928',
        pubDate: 'Mon, 1 Jul 2019 15:05:23 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325997',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'The rise of remote working will continue',
        link:
          'https://www.fastcompany.com/90318974/the-rise-of-remote-working-will-continue',
        pubDate: 'Mon, 1 Jul 2019 09:51:57 +0000',
        comments: 'https://news.ycombinator.com/item?id=20323849',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Jerry (YC S17) Is Hiring Software Developers (Toronto, Canada)',
        link: 'https://jerry.workable.com/j/089F60DE31',
        pubDate: 'Mon, 1 Jul 2019 16:13:40 +0000',
        comments: 'https://news.ycombinator.com/item?id=20326813',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'The Day of Two Noons',
        link:
          'https://www.npr.org/templates/transcript/transcript.php?storyId=730727038',
        pubDate: 'Sun, 30 Jun 2019 23:06:43 +0000',
        comments: 'https://news.ycombinator.com/item?id=20321146',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'GNU Guix package definitions for Gov.uk software and systems',
        link: 'https://github.com/alphagov/govuk-guix',
        pubDate: 'Mon, 1 Jul 2019 08:57:40 +0000',
        comments: 'https://news.ycombinator.com/item?id=20323594',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Electric cars grab almost half of sales in Norway',
        link:
          'https://www.reuters.com/article/us-autos-electric-norway/electric-cars-grab-almost-half-of-sales-in-oil-producing-norway-idUSKCN1TW2WO',
        pubDate: 'Mon, 1 Jul 2019 14:45:43 +0000',
        comments: 'https://news.ycombinator.com/item?id=20325744',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Against Disenchantment',
        link:
          'https://aeon.co/essays/enlightenment-does-not-demand-disenchantment-with-the-world',
        pubDate: 'Fri, 28 Jun 2019 04:51:04 +0000',
        comments: 'https://news.ycombinator.com/item?id=20301573',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'ICANN lifts the price cap on .org domains',
        link:
          'https://domainnamewire.com/2019/06/30/domain-overseer-lifts-all-price-caps-on-org-domain-names/',
        pubDate: 'Mon, 1 Jul 2019 12:53:12 +0000',
        comments: 'https://news.ycombinator.com/item?id=20324747',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'What I Want from a Type System',
        link:
          'https://gist.github.com/halgari/f431b2d1094e4ec1e933969969489854',
        pubDate: 'Mon, 1 Jul 2019 05:35:46 +0000',
        comments: 'https://news.ycombinator.com/item?id=20322704',
        description: {
          '#cdata-section': {}
        }
      },
      {
        title: 'Go Slices Are Fat Pointers',
        link: 'https://nullprogram.com/blog/2019/06/30/',
        pubDate: 'Sun, 30 Jun 2019 23:01:36 +0000',
        comments: 'https://news.ycombinator.com/item?id=20321116',
        description: {
          '#cdata-section': {}
        }
      }
    ]
  }
});

@Component({
  components: {
    FeedItem
  }
})
export default class TheFeedList extends Vue {
  feedData: FeedEntity = feedDataFunction();
  get computedFeed() {
    return feedDataFunction();
  }
}
</script>

<style scoped></style>
