<template>
  <header class="header">
    <img
      class="header__image"
      src="https://i.ibb.co/9bPQ2Xq/toproll.png"
      alt="Header image of a film roll"
    />
    <section class="header__container">
      <Searcher />
      <img
        class="header__logo"
        src="https://i.ibb.co/fQrLsKn/logo.png"
        alt="Logo of a film roll with revela&go written inside"
      />
      <Nav />
    </section>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Searcher from "./Searcher.vue";
import Nav from "./Nav.vue";

export default defineComponent({
  components: {
    Searcher,
    Nav,
  },
});
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  .header__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header__logo {
      width: 280px;
    }
  }
}
</style>