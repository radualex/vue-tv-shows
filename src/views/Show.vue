<template>
  <div class="container">
    <Search class="search" @searchData="handleSearchData($event)" />
    <Separator />
    <Label text="Genres" />
    <div class="genres">
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :text="tag.genre"
        :color="tag.color"
        :isSelected="selectedTag === tag.genre"
        @tagClicked="handleTagClick($event)"
      />
    </div>
    <Scrollable :shows="filteredItems" />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Separator from "@/components/Separator.vue";
import Label from "@/components/Label.vue";
import Tag from "@/components/Tag.vue";
import Scrollable from "@/components/Scrollable.vue";

import { showSearch } from "../components/utils/TvShowsAPI.js";
import { mapDataArray } from "../components/utils/helpers.js";

export default {
  name: "Show",
  components: {
    Search,
    Separator,
    Label,
    Tag,
    Scrollable
  },
  data() {
    return {
      tags: [
        { genre: "Drama", color: "#E6F6F2" },
        { genre: "Comedy", color: "#F4F3FD" },
        { genre: "Romance", color: "#ffb946" },
        { genre: "Legal", color: "#468cff" },
        { genre: "Thriller", color: "#e9ff46" }
      ],
      items: [],
      selectedTag: null
    };
  },
  computed: {
    filteredItems() {
      if (this.$data.selectedTag) {
        return this.$data.items.filter(item =>
          item.genres.includes(this.$data.selectedTag)
        );
      }

      return this.$data.items;
    }
  },
  methods: {
    resetSelectedTag() {
      this.$data.selectedTag = null;
    },
    handleSearchData(event) {
      this.resetSelectedTag();
      this.$data.items = event;
    },
    handleTagClick(event) {
      if (event === this.$data.selectedTag) {
        this.resetSelectedTag();
      } else {
        this.$data.selectedTag = event;
      }
    }
  },
  mounted() {
    showSearch("suits").then(data => {
      this.resetSelectedTag();
      this.$data.items = mapDataArray(data);
    });
  }
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

  .genres {
    width: 100%;
    display: flex;
    gap: 12px;
    flex-flow: wrap;
    margin: 15px 0 30px 0;
  }
}
</style>
