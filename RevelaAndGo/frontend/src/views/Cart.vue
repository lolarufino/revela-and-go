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
      <div class="cart__items">
        <p>&nbsp;• Carrete 35mm</p>
        <p>&nbsp;• Color</p>
        <p>&nbsp;• Revelado y Escaneo</p>
      </div>
      <span class="cart__info-quantity"
        >1 <span class="cart__info-quantity">unidad</span></span
      >
      <span>14,50€</span>
    </section>
    <p class="cart__total">Total: 14,50€</p>
    <button class="cart__button" data-test="pagar">Pagar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cart",
});
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
    .cart__items {
      display: flex;
    }
    .cart__info-quantity {
      color: $lightred;
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
    min-width: 12vw;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    .cart__info {
      display: flex;
      flex-direction: column;
      .cart__image {
        padding: 5px;
      }
      .cart__items {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        padding: 5px;
      }
      .cart__info-quantity {
        padding: 5px;
      }
    }
  }
}
</style>
