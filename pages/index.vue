<template>
  <div class="max-w-screen-sm mx-auto">
    <h1 class="text-2xl text-center border-b border-gray-500">
      Users
    </h1>
    <div>
      <template
        v-for="u in users"
      >
        <n-link
          tag="button"
          class="btn"
          :key="u.username"
          :to="u.username"
        >
          {{ u.displayName }}
        </n-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({
    app,
  }) {
    const users = await app.$api.users.getList();

    return {
      users,
    };
  },
}
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
