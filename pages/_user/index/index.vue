<template>
  <Square
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import Square from '@/components/Square';

export default {
  components: {
    Square,
  },
};
</script>
