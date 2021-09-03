<template>
  <div class="notfound">
    <img
      class="notfound__image"
      src="https://i.ibb.co/L97CjnP/code-error.png"
      alt="Image of a lens holding a 404 not found text"
    />
    <p class="notfound__text" data-test="notfound">¡Uy! Aquí no hay nada.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

<style lang="scss">
@import "../styles/variables";
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .notfound__image {
    width: 200px;
    padding: 10px;
  }
  .notfound__text {
    font-family: $font;
    font-weight: 900;
  }
}
</style>
