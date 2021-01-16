<template>
  <div id="wrapper" v-on:click="navigateTo">
    <div id="cover">
      <div
        v-if="cover"
        id="image"
        :style="{
          background: `linear-gradient(180deg, rgba(25, 25, 38, 0.0001) 42.31%, #191926 87.5%), url('${cover}')`
        }"
      />
      <img
        v-if="!cover"
        id="image"
        src="https://via.placeholder.com/200"
        alt=""
      />
      <div id="genres">
        <span v-for="(genre, index) in genres" :key="`genre-${index}`"
          >{{ genre }}
        </span>
      </div>
    </div>
    <div id="footer">
      <span id="title">{{ name }}</span>
      <span id="channel">{{ networkName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    id: Number,
    cover: String,
    genres: Array,
    name: String,
    networkName: String
  },
  methods: {
    navigateTo() {
      this.$router.push(`/details/${this.$props.id}`);
    }
  }
};
</script>

<style scoped lang="scss">
$borderRadius: 8px;

#wrapper {
  display: flex;
  flex-direction: column;

  background: radial-gradient(
    73.32% 73.32% at 23.55% 26.12%,
    rgba(64, 64, 86, 0.546214) 0%,
    rgba(34, 34, 50, 0.55) 100%
  );
  border-radius: $borderRadius;

  #cover {
    position: relative;
    #image {
      width: 13rem;
      max-width: 13rem;
      min-height: 18rem;
      object-fit: cover;
      border-top-left-radius: $borderRadius;
      border-top-right-radius: $borderRadius;
    }
    #genres {
      position: absolute;
      bottom: 6px;
      left: 6px;
      span {
        color: #ff3466;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }

  #footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;

    #title {
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 20px;
      color: #ececec;
    }

    #channel {
      font-style: normal;
      font-weight: 800;
      font-size: 8px;
      line-height: 12px;
      text-transform: uppercase;

      color: #565665;
    }
  }
}
</style>
