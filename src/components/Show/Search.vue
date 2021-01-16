<template>
  <div class="wrapper">
    <i class="material-icons">search</i>
    <form id="searchForm">
      <input
        type="search"
        placeholder="Search for show..."
        v-model="searchTerm"
      />
    </form>
  </div>
</template>

<script>
import { showSearch } from "../utils/TvShowsAPI.js";
import {
  pluck,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
} from "rxjs/operators";

import { mapDataArray, filterOnRating } from "../utils/helpers.js";

export default {
  name: "Search",
  data() {
    return {
      searchTerm: "",
    };
  },
  created() {
    this.$watchAsObservable("searchTerm")
      .pipe(
        pluck("newValue"),
        filter((text) => text.length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(showSearch),
        map((res) => mapDataArray(filterOnRating(res)))
      )
      .subscribe((data) => this.$emit("searchData", data));
  },
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
