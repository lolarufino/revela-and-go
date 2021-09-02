<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Profile">Profile</router-link> |
      <router-link to="/Cart">Cart</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Footer,
  },
});
</script>


<style lang="scss">
@import "./styles/mixins";
* {
  margin: 0;
}
.button {
  @include button;
}
.div {
  @include container;
}
</style>
