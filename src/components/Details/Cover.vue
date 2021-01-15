<template>
  <div
    id="cover"
    :style="{
      background: `url('${img}') no-repeat`,
    }"
  />
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
