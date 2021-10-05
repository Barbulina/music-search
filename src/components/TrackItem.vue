<template>
  <div class="track">
    <div class="track__info">
      <div class="track__name">{{ item.name }}</div>
      <div class="track__album">{{ item.album.name }}</div>
    </div>
    <div class="track__duration">{{ time }}</div>
  </div>
</template>

<script>
import { msToTime } from "@/utils/msToTime.js";
import { computed } from "@vue/reactivity";
export default {
  name: "Track",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const time = computed(() => msToTime(props.item.duration_ms));

    return { time };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.track {
  padding: 12px;
  display: block;
  background: $color-white;
  transition: ease-in-out 0.2s background;

  &:hover {
    cursor: pointer;
    background: $color-grey;
  }

  &__info {
    display: block;
    text-align: left;
  }

  &__name {
    font-weight: bold;
    font-size: $font-size;
    margin-bottom: 4px;
  }

  &__duration {
    font-weight: bold;
    text-align: left;
  }
}

@include media-md {
  .track {
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
