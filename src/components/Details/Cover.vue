<template>
  <div
    v-if="img"
    id="cover"
    :style="{
      background: `url('${img}') no-repeat`,
    }"
  />
  <img v-else id="cover" src="https://via.placeholder.com/500" alt="" />
</template>

<script>
export default {
  name: "Cover",
  props: { img: String },
};
</script>

<style scoped lang="scss">
$borderRadius: 8px;

#cover {
  width: 13rem;
  max-width: 13rem;
  min-height: 18rem;
  object-fit: cover;
  border-radius: $borderRadius;
}
</style>
