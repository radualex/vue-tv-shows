<template>
  <div class="scrollable-container">
    <div class="tile-wrapper">
      <Tile
        v-for="show in shows"
        v-bind:key="show.id"
        :id="show.id"
        :genres="show.genres"
        :cover="show.image"
        :name="show.name"
        :networkName="show.network"
      />
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
  props: {
    shows: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../../mixins/mixins.scss";

.scrollable-container {
  display: flex;
  align-items: center;
  width: 100%;

  @include respond(tablet) {
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
    @include respond(tablet) {
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
