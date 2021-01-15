<template>
  <div id="container">
    <i class="material-icons">west</i>
    <Header id="header" :title="item.name" :rating="rating" />
    <div id="contentWrapper">
      <Cover id="cover" :img="item.image.medium" />
      <Content class="content" :summary="item.summary" :date="item.premiered" />
    </div>
  </div>
</template>

<script>
import { detailItem } from "./test.js";
import Header from "@/components/Details/Header.vue";
import Cover from "@/components/Details/Cover.vue";
import Content from "@/components/Details/Content.vue";

export default {
  name: "Details",
  components: {
    Header,
    Cover,
    Content,
  },
  computed: {
    rating() {
      return this.item.rating.average || "N/A";
    },
  },
  data() {
    return {
      item: detailItem,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";

#container {
  width: 55vw;
  // height: 385px;
  padding: 64px 52px;

  background: var(--card-background-color);
  box-shadow: 0px 18px 40px -20px rgba(20, 26, 133, 0.203835);
  position: relative;

  // TODO: move the pixels to assets
  @media screen and (max-width: 600px) {
    width: calc(100vw - 104px);
    height: calc(100vh - 128px);
    overflow-y: scroll;
  }

  i {
    position: absolute;
    top: 2rem;
    user-select: none;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }

    &:active {
      opacity: 0.8;
    }
  }

  #header {
    margin-bottom: 55px;

    @media screen and (max-width: 600px) {
      margin-bottom: 12px;
    }
  }

  #contentWrapper {
    display: flex;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }

    #cover {
      margin-right: 32px;
      width: 35%;

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }

    .content {
      width: 65%;

      @media screen and (max-width: 600px) {
        width: 100%;
        margin: 12px 0 0 0;
      }
    }
  }
}
</style>
