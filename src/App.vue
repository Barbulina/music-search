<template>
  <div class="music-search">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
#app {
  height: 100%;
  width: 100%;
  text-align: center;
}
.music-search {
  height: 100%;
  width: 100%;
}
</style>
