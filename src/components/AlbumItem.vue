<template>
  <img class="album" :src="imageUrl" :alt="item.name" />
</template>

<script>
import { computed } from "@vue/reactivity";
const IMAGE_SIZE = 1; //medium

export default {
  name: "Album",
  props: {
    item: {
      type: Object,
      required: true,
      default: null,
    },
  },
  setup(props) {
    const imageUrl = computed(() => {
      const url = props.item.images[IMAGE_SIZE]?.url;
      return url;
    });
    return { imageUrl };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.album {
  @include card;
  cursor: pointer;
  width: 160px;
}
</style>
