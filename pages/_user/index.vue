<template>
  <div class="max-w-screen-sm mx-auto">
    <h1 class="text-2xl text-center">
      User {{ user.displayName }}
    </h1>
    <h3 class="text-xl text-center border-b border-gray-500">
      User {{ user.description }}
    </h3>
    <div>
      <div class="text-center border-b border-gray-500">
        <n-link
          tag="button"
          class="btn"
          :to="`/${$route.params.user}`"
        >
          Sqrt
        </n-link>
        <n-link
          tag="button"
          class="btn"
          :to="`/${$route.params.user}/feed`"
        >
          Feed
        </n-link>
      </div>
      <div>
        <nuxt-child
          ref="child"
          keep-alive
          :items="items"
          :hasNextPage="hasNextPage"
          @openFeed="openFeed"
          @loadMore="loadMore"
        />
      </div>
    </div>
  </div>
</template>

<script>
import omit from 'lodash/omit';

export default {
  async asyncData({
    app,
    route,
  }) {
    const username = route.params.user;
    const user = app.$api.users.getUser(username);

    return {
      user,
    };
  },
  async fetch() {
    const { items, hasNextPage } = this.$api.media.getList(this.page);
    this.items = items;
    this.hasNextPage = hasNextPage;
  },
  data() {
    return {
      page: 1,
      hasNextPage: true,
      items: [],
    };
  },
  methods: {
    openFeed(id) {
      this.$router.push(`/${this.$route.params.user}/feed`);
      setTimeout(() => {
        this.$refs.child.goToItem(id);
      }, 100);
    },
    loadMore(isVisible) {
      if (isVisible) {
        this.page = this.page + 1;
        const { items, hasNextPage } = this.$api.media.getList(this.page);
        this.items.push(...items);
        this.hasNextPage = hasNextPage;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .btn {
    @apply m-2;
    @apply p-2;
    @apply rounded-md;
    @apply text-white;
    @apply bg-indigo-500;
  }
</style>
