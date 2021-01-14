<template>
  <div class="wrapper">
    <i class="material-icons">search</i>
    <form id="searchForm">
      <input type="search" placeholder="Search for show..." />
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;

  i {
    margin: 0 15px 0 0;
    font-size: 30px;
    mix-blend-mode: normal;
    opacity: 0.6;
  }

  #searchForm {
    width: 100%;

    input {
      outline: none;
      border: none;
      width: 100%;

      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;

      color: #202842;

      &::placeholder {
        mix-blend-mode: normal;
        opacity: 0.6;
      }
    }
  }
}
</style>
