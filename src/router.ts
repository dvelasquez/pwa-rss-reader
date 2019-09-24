import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/feeds',
      name: 'feeds',
      component: () =>
        import(/* webpackChunkName: "feeds" */ './views/TheFeedsList.vue')
    },
    {
      path: '/feed-source',
      name: 'feed-source',
      component: () =>
        import(/* webpackChunkName: "feed-source" */ './views/TheFeedSource.vue')
    },
    {
      path: '/feed-importer',
      name: 'feed-importer',
      component: () =>
        import(/* webpackChunkName: "feed-importer" */ './views/TheFeedImporter.vue')
    }
  ]
});
