<template>
  <Container v-if="item">
    <i class="material-icons" v-on:click="navigateTo">west</i>
    <Header id="header" :title="item.name" :rating="rating" />
    <div id="contentWrapper">
      <Cover id="cover" :img="item.image" />
      <Content
        class="content"
        :summary="item.summary"
        :date="item.releaseDate"
      />
    </div>
  </Container>
  <Container v-else>
    <i class="material-icons" v-on:click="navigateTo">west</i>
    <Header
      id="header"
      title="Something went wrong. Please go back."
      :style="{ marginBottom: '0px' }"
    />
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import Cover from "@/components/Cover.vue";
import Content from "@/components/Content.vue";

import { showLookup } from "../components/utils/TvShowsAPI.js";
import { mapShowItem } from "../components/utils/helpers.js";

export default {
  name: "Details",
  components: {
    Container,
    Header,
    Cover,
    Content
  },
  computed: {
    rating() {
      if (this.item.rating) {
        return `${this.item.rating}/10`;
      } else {
        return "N/A";
      }
    }
  },
  data() {
    return {
      item: null
    };
  },
  methods: {
    navigateTo() {
      this.$router.push("/");
    }
  },
  mounted() {
    showLookup(this.$route.params.id).then(
      data => (this.$data.item = mapShowItem(data))
    );
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";
@import "../mixins/mixins.scss";

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

  @include respond(tablet) {
    margin-bottom: 12px;
  }
}

#contentWrapper {
  display: flex;

  @include respond(tablet) {
    flex-direction: column;
    align-items: center;
  }

  #cover {
    margin-right: 32px;
    width: 35%;

    @include respond(tablet) {
      width: 100%;
    }
  }

  .content {
    width: 65%;

    @include respond(tablet) {
      width: 100%;
      margin: 12px 0 0 0;
    }
  }
}
</style>
