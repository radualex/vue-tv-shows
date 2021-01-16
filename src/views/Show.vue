<template>
  <div class="container">
    <Search class="search" @searchData="handleSearchData($event)" />
    <Separator />
    <Header text="Popular searches" />
    <div class="words">
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :text="tag.word"
        :color="tag.color"
        @tagClicked="handleTagClick($event)"
      />
    </div>
    <Scrollable :shows="items" />
  </div>
</template>

<script>
import Search from "@/components/Show/Search.vue";
import Separator from "@/components/Show/Separator.vue";
import Header from "@/components/Show/Header.vue";
import Tag from "@/components/Show/Tag.vue";
import Scrollable from "@/components/Show/Scrollable.vue";

import { showSearch } from "../components/utils/TvShowsAPI.js";
import { mapDataArray } from "../components/utils/helpers.js";

export default {
  name: "Show",
  components: {
    Search,
    Separator,
    Header,
    Tag,
    Scrollable,
  },
  data() {
    return {
      tags: [
        { word: "Top Gear", color: "#E6F6F2" },
        { word: "Suits", color: "#F4F3FD" },
        { word: "Game of Thrones", color: "#ffb946" },
        { word: "The Queen's Gambit", color: "#468cff" },
        { word: "Friends", color: "#e9ff46" },
      ],
      items: [],
    };
  },
  methods: {
    handleSearchData(event) {
      this.$data.items = event;
    },
    handleTagClick(event) {
      this.updateItems(event);
    },
    updateItems(term) {
      showSearch(term).then((data) => (this.$data.items = mapDataArray(data)));
    },
  },
  mounted() {
    this.updateItems("suits");
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";
@import "../mixins/mixins.scss";

.container {
  width: 55vw;

  background: var(--card-background-color);
  box-shadow: 0px 18px 40px -20px rgba(20, 26, 133, 0.203835);

  padding: 40px 50px;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  @include respond(tablet) {
    width: calc(100vw - 100px);
    height: calc(100vh - 80px);
  }

  .search {
    width: 100%;
    margin: 0 0 24px 0;
  }

  .words {
    width: 100%;
    display: flex;
    gap: 12px;
    flex-flow: wrap;
    margin: 15px 0 30px 0;
  }
}
</style>
