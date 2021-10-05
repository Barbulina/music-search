<template>
  <div class="list">
    <div class="list__no-data" v-if="items?.length < 1">
      <img
        class="list__no-data-image"
        src="@/assets/images/no-data.svg"
        alt="no data found"
      />
    </div>
    <div v-else>
      <div class="list__items" v-if="type === types.albums">
        <transition-group tag="div" name="item">
          <template v-for="item in items" :key="item.id">
            <Album
              class="list__item"
              :item="item"
              @click="selectItem(item)"
            ></Album>
          </template>
        </transition-group>
      </div>

      <transition-group
        tag="div"
        class=" list__items"
        name="item"
        v-if="type === types.artists"
      >
        <template v-for="item in items" :key="item.id">
          <Artist
            class="list__item"
            :item="item"
            @click="selectItem(item)"
          ></Artist>
        </template>
      </transition-group>

      <div class="list__rows" v-if="type === types.tracks">
        <transition-group tag="div" name="item">
          <template v-for="item in items" :key="item.id">
            <Track :item="item" @click="selectItem(item)"></Track>
          </template>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Album from "@/components/AlbumItem.vue";
import Track from "@/components/TrackItem.vue";
import Artist from "@/components/ArtistItem.vue";
import { typesOfLists } from "@/config.js";
export default {
  name: "List",
  components: {
    Album,
    Artist,
    Track,
  },
  emits: ["onSelectedItem"],
  props: {
    items: {
      type: Array,
      default: () => null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  setup(props, context) {
    const types = typesOfLists;
    const selectItem = (item) => {
      const data = {
        id: item.id,
        type: props.type,
      };

      context.emit("onSelectedItem", data);
    };
    return {
      types,
      selectItem,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
.list {
  &__items {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  &__item {
    margin: 4px;
  }

  &__rows {
    @include card;
    padding: 12px;
  }
  &__no-data-image {
    width: 30%;
  }
}
</style>
