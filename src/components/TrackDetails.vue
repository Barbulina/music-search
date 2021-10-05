<template>
  <div class="track-details">
    <div class="track-details__info">
      <SimpleInfo label="Track name"></SimpleInfo>
      <div class="album-details__name">
        {{ data?.name }}
      </div>
      <SimpleInfo label="Album" :value="data?.album?.name"></SimpleInfo>
      <SimpleInfo label="Duration" :value="time"></SimpleInfo>
      <SimpleInfo label="Popularity" :value="data.popularity"></SimpleInfo>
      <SimpleInfo label="Artist" :value="artists"></SimpleInfo>
    </div>
  </div>
</template>

<script>
import { msToTime } from "@/utils/msToTime.js";
import { computed } from "@vue/reactivity";
import SimpleInfo from "@/components/commons/SimpleInfo.vue";
export default {
  name: "TrackDetails",
  components: {
    SimpleInfo,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const time = computed(() => msToTime(props.data.duration_ms));
    const artists = computed(() =>
      props?.data?.artists?.map((item) => item.name).join(", ")
    );
    return { time, artists };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.track-details {
  &__info {
    text-align: left;
    padding: 16px;
    text-align: left;
  }

  &__name {
    font-size: $font-size-xxl;
    margin-bottom: 24px;
  }
}
</style>
