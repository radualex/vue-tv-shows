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
#app {
  font-family: "Mulish", sans-serif;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f6fe;

  width: 100vw;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
