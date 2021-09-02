<template>
  <footer class="footer">
    <small class="footer__copyright">© Revela & Go 2021</small>
    <img
      class="footer__image"
      src="https://i.ibb.co/ZTbzqVh/bottomroll.png"
      alt="Footer image of a film roll"
    />
  </footer>
</template>

<style lang='scss'>
@import "../styles/variables";

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;
  position: absolute;
  bottom: 0;
}

.footer__copyright {
  font-family: $font;
  font-weight: 900;
}

.footer__image {
  width: 100%;
}
</style>