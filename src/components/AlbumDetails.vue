<template>
  <div class="album-details">
    <div class="album-details__header">
      <template v-if="imageUrl">
        <img class="album-details__image" :src="imageUrl" :alt="data.name" />
      </template>
      <template v-else>
        <span class="material-icons  album-details__icon"
          >library_music
        </span></template
      >

      <div class="album-details__info">
        <SimpleInfo :label="data?.type"></SimpleInfo>
        <div class="album-details__name">
          {{ data?.name }}
        </div>
        <SimpleInfo
          label="Release date"
          :value="data?.release_date"
        ></SimpleInfo>
        <SimpleInfo
          label="Total tracks"
          :value="data?.total_tracks"
        ></SimpleInfo>
        <SimpleInfo label="Artist" :value="artists"></SimpleInfo>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import SimpleInfo from "@/components/commons/SimpleInfo.vue";
const IMAGE_SIZE_POSITION = 1; // medium
export default {
  name: "AlbumDetails",
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
    const imageUrl = computed(() => {
      if (props?.data?.images && props.data.images.length > 1) {
        const url = props.data.images[IMAGE_SIZE_POSITION]?.url;
        return url;
      }
    });
    const artists = computed(() =>
      props?.data?.artists?.map((item) => item.name).join(", ")
    );
    return { imageUrl, artists };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.album-details {
  &__header {
    padding: 16px;
    display: block;
    align-content: flex-start;
  }

  &__image {
    width: 300px;
    height: 300px;
    border-radius: 5px;
    margin: 0 0 16px 0;
  }

  &__info {
    text-align: left;
  }

  &__name {
    font-size: $font-size-xxl;
    margin-bottom: 24px;
  }
  &__icon {
    font-size: 300px;
    margin-right: 16px;
  }
}
@include media-md {
  .album-details {
    &__header {
      display: flex;
    }

    &__image {
      margin: 0 16px 0 0;
    }
  }
}
</style>
