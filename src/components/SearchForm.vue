<template>
  <div class="form">
    <input
      class="form__input"
      type="search"
      placeholder="type album, track or artist"
      v-model="textToSearch"
      v-on:keyup="submit"
    />
  </div>
</template>

<script>
import { debounce } from "@/utils/debounce.js";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { DEFAULT_DEBOUNCE_TIME } from "@/config.js";

export default {
  name: "SearchForm",
  components: {},
  emits: ["onSubmit"],
  setup(props, context) {
    const store = useStore();
    let textToSearch = ref();
    const submit = debounce(emitSearch, DEFAULT_DEBOUNCE_TIME);

    if (store.state.lastSearch) {
      textToSearch.value = store.state.lastSearch;
    }
    function emitSearch() {
      const data = {
        textToSearch: textToSearch.value,
      };
      store.commit("setTextToSearch", textToSearch.value);
      context.emit("onSubmit", data);
    }

    return {
      submit,
      textToSearch,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
.form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__input {
    margin: 12px 0;
    padding: 8px;
    flex: 1 1 auto;
    height: 48px;
    font-size: $font-size-xl;
    color: $color-black-light;
    caret-color: $color-black-light;
    font-weight: bold;
    border: none;
    border-bottom: 2px solid $color-black-light;
  }
}
</style>
