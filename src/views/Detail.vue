<template>
  <div class="details">
    <div class="details__header">
      <span class="details__back material-icons" @click="goBack">
        arrow_back
      </span>
    </div>
    <template v-if="type === types.albums"
      ><AlbumDetails :data="detail"></AlbumDetails
    ></template>
    <template v-if="type === types.artists"
      ><ArtistDetails :data="detail"></ArtistDetails
    ></template>
    <template v-if="type === types.tracks"
      ><TrackDetails :data="detail"></TrackDetails
    ></template>
  </div>
</template>

<script>
import { typesOfLists } from "@/config.js";
import ArtistDetails from "@/components/ArtistDetails.vue";
import AlbumDetails from "@/components/AlbumDetails.vue";
import TrackDetails from "@/components/TrackDetails.vue";
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Details",
  components: {
    AlbumDetails,
    TrackDetails,
    ArtistDetails,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const types = typesOfLists;
    const detail = ref();
    const router = useRouter();
    const data = {
      type: props.type,
      id: props.id,
    };
    store.dispatch("getByTypeId", data);

    const goBack = async () => {
      await router.go(-1);
      setTimeout(() => {
        // TODO how I can wait router.go??

        store.commit("setDetail", {});
      }, 500);
    };

    watchEffect(() => {
      detail.value = store?.state?.detail;
    });

    return { types, detail, goBack };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";

.details {
  @include card;

  margin: 5%;
  &__header {
    padding: 16px;
    text-align: left;
  }
  &__back {
    cursor: pointer;
  }
}
</style>
