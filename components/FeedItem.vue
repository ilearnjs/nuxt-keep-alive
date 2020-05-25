<template>
  <div>
    <div>
      User
    </div>
    <div
      class="square relative cursor-pointer border border-gray-500"
    >
      <div class="content">
        <div class="h-full w-full flex items-center justify-center text-2xl">
          {{ item.id }}
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        {{ item.title }}
      </div>
      <n-link
        v-if="showLink"
        :to="`/${$route.params.user}/${item.id}`"
      >
        Open
      </n-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
      showLink: {
        type: Boolean,
        default: true,
      }
    },
  };
</script>

<style lang="scss" scoped>
  .square {
    position: relative;
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
