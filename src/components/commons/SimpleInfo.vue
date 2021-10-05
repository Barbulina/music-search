<template>
  <div class="simple-data">
    <div v-if="label" class="simple-data__label">
      {{ label }}
    </div>
    <div v-if="value" class="simple-data__content">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleInfo",
  props: {
    label: {
      type: String,
      default: undefined,
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/base-variables.scss";
@import "@/assets/styles/mixins.scss";
.simple-data {
  &__label {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 16px;
  }

  &__content {
    font-size: $font-size-xl;
    margin-bottom: 24px;
  }
}
</style>
