<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: "Header",
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
span {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #4b5fa0;
  mix-blend-mode: normal;
  opacity: 0.5;
}
</style>
