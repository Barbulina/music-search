<template>
  <div class="type">
    <div class="type__nav">
      <a class="type__back" @click="goBack"
        ><span class="material-icons">
          arrow_back
        </span>
      </a>
      <div class="type__title">{{ type }}</div>
    </div>
    <div class="type__content">
      <List :items="result" :type="type" @onSelectedItem="selectedItem"></List>
      <div class="type__load-more">
        <a @click="loadMore(next)" v-if="next">more...</a>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { typesMap } from "@/config.js";
import { useRoute } from "vue-router";
import { DEFAULT_LIMIT_BY_TYPE } from "@/config";
import { useRouter } from "vue-router";
export default {
  name: "Type",
  components: {
    List,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let result = ref();
    let next = ref();

    const selectedItem = (data) => {
      router.push("/" + data.type + "/" + data.id);
    };

    const goBack = () => {
      store.commit("setTypeList", {});
      router.push("/");
    };

    const loadMore = (url) => {
      store.dispatch("getTypeListByUrlAnAddItems", { url });
    };

    watchEffect(() => {
      result.value = store?.state?.typeList[props?.type]?.items;
      next.value = store?.state?.typeList[props?.type]?.next;
    });

    onMounted(() =>
      store.dispatch("getList", {
        types: [typesMap[props?.type]],
        limit: DEFAULT_LIMIT_BY_TYPE,
        textToSearch: route?.query?.q,
      })
    );

    return { result, next, selectedItem, goBack, loadMore };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.type {
  &__content {
    padding: 12px;
  }
  &__nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }

  &__back {
    position: absolute;
    left: 16px;
    top: 16px;
  }

  &__title {
    flex: 1 1 auto;
    font-size: $font-size-xl;
    font-weight: bold;
    text-transform: uppercase;
  }
  &__back {
    cursor: pointer;
  }

  &__load-more {
    padding: 16px;
    text-align: right;
  }
}
</style>
