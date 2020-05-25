<template>
  <div class="mt-1 mx-auto" style="max-width: 500px;">
    <ul>
      <li
        v-for="(item, i) of items"
        :key="item.id"
        class="pb-1 mb-1 border-b border-gray-500"
        v-observe-visibility="hasNextPage && i === items.length - 1 ? (isVisible) => $emit('loadMore', isVisible) : false"
      >
        <FeedItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import FeedItem from './FeedItem'

export default {
  components: {
    FeedItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    hasNextPage: {
      type: Boolean,
    },
  },
  methods: {
    goToItem(id) {
      const el = this.$children.find(ch => ch.item.id === id);
      el.$el.scrollIntoView();
    },
  }
}
</script>