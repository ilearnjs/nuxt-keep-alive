<template>
  <div class="mt-1 mx-auto" style="max-width: 500px;">
    <FeedItem
      :item="item"
      :showLink="false"
    />
  </div>
</template>

<script>
import FeedItem from '@/components/FeedItem';

export default {
  scrollToTop: true,
  components: {
    FeedItem,
  },
  async asyncData({
    app,
    route,
  }) {
    const id = route.params.id;
    const item = app.$api.items.getItem(id); 

    return {
      item, 
    };
  },
}
</script>
