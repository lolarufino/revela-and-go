<template>
  <div class="cart__container">
    <button class="cart__delete-button">
      <img
        class="cart__delete-image"
        src="https://i.ibb.co/kBkwBPj/remove.png"
        alt="Delete button"
      />
    </button>
    <section class="cart__info">
      <img
        class="cart__image"
        src="https://i.ibb.co/Px2X67c/digital-camera.png"
        alt="Icon of a camera"
      />
      <p>Carrete 35mm • Color • Revelado y Escaneo</p>
      <span>1 <span>unidad</span></span>
      <span>14,50€</span>
    </section>
    <p class="cart__total">Total: 14,50€</p>
    <button class="cart__button" data-test="pagar">Pagar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@import "../styles/mixins";
@import "../styles/variables";
.cart__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  font-family: $font;
  font-weight: 900;
  .cart__delete-button {
    border: none;
    cursor: pointer;
    .cart__delete-image {
      width: 30px;
      position: absolute;
      margin-left: -8px;
      margin-top: -12px;
      background-color: white;
    }
  }
  .cart__info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 58vw;
    @include container;
    .cart__image {
      width: 60px;
    }
  }
  .cart__total {
    margin: 25px;
    margin-right: 0px;
    font-size: 20px;
  }
  .cart__button {
    @include button;
    font-size: 24px;
    width: 12vw;
  }
}
</style>
