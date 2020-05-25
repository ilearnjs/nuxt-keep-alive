<template>
  <div class="mt-1 pb-1 border-b border-gray-500 mx-auto">
    <ul
      class="grid gap-1 grid-cols-3 sm:grid-cols-4"
    >
      <li
        v-for="(item, i) of items"
        :key="item.id"
      >
        <SquareItem
          :item="item"
          @click.native="$emit('openFeed', item.id)"
          v-observe-visibility="hasNextPage && i === items.length - 1 ? (isVisible) => $emit('loadMore', isVisible) : false"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SquareItem from './SquareItem';

export default {
  components: {
    SquareItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    hasNextPage: {
      type: Boolean,
    },
  }
}
</script>