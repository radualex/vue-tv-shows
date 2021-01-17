<template>
  <span
    v-bind:style="{ background: color }"
    v-bind:class="isSelected ? 'active' : ''"
    v-on:click="handleOnClick"
    >{{ text }}</span
  >
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: String,
    color: String,
    isSelected: Boolean
  },
  methods: {
    handleOnClick() {
      this.$emit("tagClicked", this.$props.text);
    }
  }
};
</script>

<style scoped lang="scss">
.active {
  border: 1px solid black;
}

span {
  padding: 9px 15px 9px 13px;
  background: #f9effa;
  border-radius: 5px;
  width: fit-content;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #202842;

  &:hover {
    cursor: pointer;
  }

  &:active {
    mix-blend-mode: normal;
    opacity: 0.6;
  }
}
</style>
