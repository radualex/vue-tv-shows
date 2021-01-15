<template>
  <div class="scrollable-container">
    <div class="tile-wrapper">
      <!-- <Tile v-for="item in items" v-bind:key="item.id" :item="item" /> -->
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  </div>
</template>

<script>
import Tile from "./Tile";
export default {
  name: "Scrollable",
  components: {
    Tile,
  },
  props: ["items"],
};
</script>

<style lang="scss" scoped>
.scrollable-container {
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 600px) {
    height: 100%;
  }

  .tile-wrapper {
    padding: 8px 0 8px 0;
    overflow-x: scroll;
    overflow-y: hidden;
    max-height: 25rem;
    display: flex;
    flex-direction: row;
    gap: 24px;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: scroll;
      max-height: none;
      height: 50vh;
      width: 100%;
      align-items: center;
      padding: 0 8px;
    }
  }
}
</style>
