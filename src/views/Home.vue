<template>
  <div class="home">
    <div class="home__form">
      <SearchForm @onSubmit="search"></SearchForm>
    </div>

    <div
      class="home__no-list"
      v-if="!result.albums && !result.artists && !result.tracks"
    >
      <img
        class="home__image"
        src="@/assets/images/guitar-player.svg"
        alt="start to search"
      />
    </div>
    <div class="home__list" v-else>
      <div
        data-qa="home-album-section"
        class="home__list-item"
        v-if="result?.albums"
      >
        <div class="home__list-title">
          <h3 class="home__list-type">{{ "albums" }}</h3>
          <router-link :to="{ path: '/albums', query: { q: lastTextSearch } }"
            >show more</router-link
          >
        </div>
        <List
          :items="result.albums.items"
          :type="'albums'"
          @onSelectedItem="selectedItem"
        ></List>
      </div>
      <div
        data-qa="home-artists-section"
        class="home__list-item"
        v-if="result?.artists"
      >
        <div class="home__list-title">
          <h3 class="home__list-type">{{ "artists" }}</h3>
          <router-link :to="{ path: '/artists', query: { q: lastTextSearch } }"
            >show more</router-link
          >
        </div>
        <List
          :items="result.artists.items"
          :type="'artists'"
          @onSelectedItem="selectedItem"
        ></List>
      </div>
    </div>

    <div data-qa="home-tracks-section" class="home__rows" v-if="result?.tracks">
      <div class="home__list-title">
        <h3 class="home__list-type">{{ "tracks" }}</h3>
        <router-link :to="{ path: '/tracks', query: { q: lastTextSearch } }"
          >show more</router-link
        >
      </div>
      <List
        :items="result.tracks.items"
        :type="'tracks'"
        @onSelectedItem="selectedItem"
      ></List>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import SearchForm from "@/components/SearchForm.vue";
import { watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    SearchForm,
    List,
  },
  setup() {
    let result = ref();
    let lastTextSearch = ref();

    const router = useRouter();
    const store = useStore();

    const search = (data) => {
      store.dispatch("getList", data);
    };

    const selectedItem = (data) => {
      router.push("/" + data.type + "/" + data.id);
    };

    watchEffect(() => {
      result.value = store.state.list;
      lastTextSearch.value = store.state.lastSearch;
    });

    return {
      lastTextSearch,
      search,
      result,
      selectedItem,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";

.home {
  height: 100%;

  &__no-list {
    width: 100%;
  }

  &__image {
    width: 40%;
    height: 40%;
  }

  &__list {
    padding: 28px;
    display: block;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__list-item {
    margin: 8px;
    flex: 0 0 45%;
  }

  &__rows {
    padding: 32px;
  }

  &__list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__list-type {
    font-size: $font-size-xl;
    text-transform: uppercase;
  }
  &__form {
    padding: 16px;
    background: $color-white;
  }

  @include media-md {
    &__list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
</style>
