<template>
  <div id="wrapper">
    <div id="">
      <div class="blockWrapper">
        <Title text="About the movie" />
        <div class="text" v-html="summary"></div>
      </div>
      <div class="blockWrapper">
        <Title text="Release date" />
        <span class="text">{{ formattedDate(date) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import { Months } from "../utils/constants.js";

export default {
  name: "Content",
  components: {
    Title,
  },
  props: {
    summary: String,
    date: String,
  },
  methods: {
    formattedDate(date) {
      const currentDate = new Date(date);
      const month = Months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
      return `${day}-${month}-${year}`;
    },
  },
};
</script>

<style scoped lang="scss">
#wrapper {
  display: flex;

  .blockWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .text {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 28px;
      text-align: left;

      color: #1f2229;

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
}
</style>
