<template>
  <div class="artist-details">
    <div class="artist-details__header">
      <template v-if="imageUrl">
        <img class="artist-details__image" :src="imageUrl" :alt="data.name" />
      </template>
      <template v-else>
        <span class="material-icons  artist-details__icon"
          >&#xE87C;</span
        ></template
      >

      <div class="artist-details__info">
        <SimpleInfo :label="data?.type"></SimpleInfo>
        <div class="artist-details__name">
          {{ data?.name }}
        </div>
        <SimpleInfo
          label="Followers"
          :value="data?.followers?.total"
        ></SimpleInfo>
        <SimpleInfo label="Genres" :value="genres"></SimpleInfo>
        <SimpleInfo label="Popularity" :value="data?.popularity"></SimpleInfo>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import SimpleInfo from "@/components/commons/SimpleInfo.vue";
const IMAGE_SIZE_POSITION = 1; // medium
export default {
  name: "ArtistDetails",
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
    const genres = computed(() => props?.data?.genres?.join(", "));
    return { imageUrl, genres };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.artist-details {
  &__header {
    padding: 16px;
    display: block;
  }

  &__icon {
    font-size: 200px;
    margin: 0 0 16px 0;
  }

  &__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 0 16px 0;
  }

  &__info {
    text-align: left;
  }

  &__name {
    font-size: $font-size-xxl;
    margin-bottom: 24px;
  }
}

@include media-md {
  .artist-details {
    &__header {
      display: flex;
      align-content: flex-start;
    }

    &__image {
      width: 300px;
      height: 300px;
      margin: 0 16px 0 0;
    }

    &__icon {
      font-size: 300px;
      margin: 0 16px 0 0;
    }
  }
}
</style>
