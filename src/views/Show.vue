<template>
  <div class="container">
    <Search class="search" />
    <Separator />
    <Header text="Genres" />
  </div>
</template>

<script>
import Search from "@/components/Show/Search.vue";
import Separator from "@/components/Show/Separator.vue";
import Header from "@/components/Show/Header.vue";

export default {
  name: "Show",
  components: {
    Search,
    Separator,
    Header,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";

.container {
  width: 562px;
  height: 385px;

  background: var(--card-background-color);
  box-shadow: 0px 18px 40px -20px rgba(20, 26, 133, 0.203835);

  padding: 40px 50px;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  .search {
    margin: 0 0 24px 0;
  }
}
</style>
