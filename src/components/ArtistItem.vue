<template>
  <div class="artist">
    <div class="artist__header">
      <div class="artist__title">
        <div class="artist__title-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="artist__content">
      <template v-if="imageUrl">
        <img class="artist__image" :src="imageUrl" :alt="item.name" />
      </template>
      <template v-else>
        <span class="material-icons  artist__icon">&#xE87C;</span></template
      >
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
const IMAGE_SIZE_POSITION = 2; // small
export default {
  name: "Artist",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const imageUrl = computed(() => {
      const url = props.item.images[IMAGE_SIZE_POSITION]?.url;
      return url;
    });
    return { imageUrl };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";

.artist {
  @include card;

  width: 128px;
  height: 128px;
  padding: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  &__header {
    width: 100%;
    flex: 0 0 auto;
  }
  &__title {
    font-size: $font-size;
    font-weight: bold;
    margin-bottom: 12px;
    white-space: nowrap;
    overflow: hidden;
  }

  &__title-text {
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
  }

  &__content {
    flex: 1 1 auto;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }

  &__image {
    flex: 0 0 auto;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  &__icon {
    flex: 0 0 auto;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    font-size: 84px;
  }
}
</style>
