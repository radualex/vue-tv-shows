<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Show</router-link> |
      <router-link to="/details">Details</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/style.scss";

#app {
  font-family: "Mulish", sans-serif;
  text-align: center;
  color: var(--font-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--app-background-color);

  width: 100vw;
  height: 100vh;
}
</style>
