<template>
  <div class="container">
    <Search class="search" />
    <Separator />
    <Header text="Popular searches" />
    <div class="genres">
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :text="tag.genre"
        :color="tag.color"
      />
    </div>
    <Scrollable />
  </div>
</template>

<script>
import Search from "@/components/Show/Search.vue";
import Separator from "@/components/Show/Separator.vue";
import Header from "@/components/Show/Header.vue";
import Tag from "@/components/Show/Tag.vue";
import Scrollable from "@/components/Show/Scrollable.vue";

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
        { genre: "Top Gear", color: "#E6F6F2" },
        { genre: "Suits", color: "#F4F3FD" },
        { genre: "Game of Thrones", color: "#ffb946" },
        { genre: "The Queen's Gambit", color: "#ffb946" },
        { genre: "Friends", color: "#ffb946" },
        { genre: "The Bing Bang Theory", color: "#ffb946" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";

.container {
  width: 55vw;
  // height: 385px;

  background: var(--card-background-color);
  box-shadow: 0px 18px 40px -20px rgba(20, 26, 133, 0.203835);

  padding: 40px 50px;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  .search {
    width: 100%;
    margin: 0 0 24px 0;
  }

  .genres {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0 30px 0;
  }
}
</style>
