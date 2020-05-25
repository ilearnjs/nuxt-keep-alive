<template>
  <Feed
    v-bind="$attrs"
    v-on="$listeners"
    ref="feed"
  />
</template>

<script>
import Feed from '@/components/Feed';

export default {
  components: {
    Feed,
  },
  methods: {
    goToItem(id) {
      this.$refs.feed.goToItem(id);
    },
  },
};
</script>
