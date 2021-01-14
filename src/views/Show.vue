<template>
  <div class="container">
    <search class="search" />
    <separator />
  </div>
</template>

<script>
import search from "@/components/Show/Search.vue";
import separator from "@/components/Show/Separator.vue";

export default {
  name: "Show",
  components: {
    search,
    separator,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 562px;
  height: 385px;

  background: #ffffff;
  box-shadow: 0px 18px 40px -20px rgba(20, 26, 133, 0.203835);

  padding: 40px 50px;

  display: flex;
  flex-direction: column;

  .search {
    margin: 0 0 24px 0;
  }
}
</style>
