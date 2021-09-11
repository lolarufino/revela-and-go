<template>
  <footer class="footer">
    <small class="footer__copyright" data-test="copyright"
      >© Revela & Go 2021</small
    >
    <img
      class="footer__image"
      src="https://i.ibb.co/BPrM9p7/bottomroll.png"
      alt="Footer image of a film roll"
    />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>


<style lang='scss'>
@import "../styles/variables";
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  bottom: 0;
  .footer__copyright {
    font-family: $font;
    font-weight: 900;
  }
  .footer__image {
    width: 100%;
  }
}
</style>