<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style scoped lang="scss">
@import "../assets/css/style.scss";
@import "../mixins/mixins.scss";

#container {
  width: 55vw;

  background: var(--card-background-color);
  box-shadow: 0px 18px 40px -20px rgba(20, 26, 133, 0.203835);

  padding: 40px 50px;

  position: relative;

  @include respond(tablet) {
    width: calc(100vw - 100px);
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
}
</style>
