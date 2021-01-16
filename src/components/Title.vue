<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: "Title",
  props: { text: String }
};
</script>

<style scoped lang="scss">
span {
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 28px;
  color: #1f2229;
}
</style>
