<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Profile">Profile</router-link> |
      <router-link to="/Cart">Cart</router-link>
    </div>
    <button class="button">This is a button</button>
    <router-view />
  </div>
</template>


<style lang="scss">
@import "./styles/mixins";
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #682f5b;

    &.router-link-exact-active {
      color: #a366a0;
    }
  }
}
.button {
  @include button;
}
</style>
