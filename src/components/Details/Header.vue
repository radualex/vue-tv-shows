<template>
  <div id="header">
    <span id="title">{{ title }}</span>
    <span v-if="rating" id="rating">{{ rating }}/10</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    rating: Number,
  },
};
</script>

<style scoped lang="scss">
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  #title {
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 44px;

    color: #1f2229;
  }
  #rating {
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 23px;

    color: #0f64d7;
  }
}
</style>
