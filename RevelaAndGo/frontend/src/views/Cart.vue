<template>
  <div v-if="user" class="cart__container">
    <div
      v-for="service in user.cart.services"
      :key="service._id"
      class="cart__container"
    >
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
          <p>&nbsp;• {{ service.filmType }} mm</p>
          <div v-if="service.palette === 'bnw'">
            <p>&nbsp;• Blanco y negro</p>
          </div>
          <div v-if="service.palette === 'color'"><p>&nbsp;• Color</p></div>
          <div v-if="service.scan === true">
            <p>&nbsp;• Revelado y escaneo</p>
          </div>
          <div v-if="service.scan === false"><p>&nbsp;• Sólo revelado</p></div>
          <div v-if="service.print === true">
            <p>&nbsp;• Copias en papel</p>
          </div>
          <div v-if="service.rollback === true">
            <p>&nbsp;• Carretes de vuelta</p>
          </div>
        </div>
        <span class="cart__info-price">Price</span>
      </section>
    </div>
    <p class="cart__total">Total: 14,50€</p>
    <button class="cart__button" data-test="pagar">Pagar</button>
  </div>
  <div v-else>
    {{ this.$router.push("/Login") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Cart",
  computed: {
    ...mapState(["user", "token", "serviceId", "cartId"]),
  },
  methods: {
    ...mapActions(["fetchUserLoggedFromApi", "addServiceToThisUserCart"]),
  },
  mounted() {
    const route = useRoute();
    const { userId } = route.params;
    this.fetchUserLoggedFromApi({ userId, token: this.token });
    if (userId !== undefined) {
      this.addServiceToThisUserCart({
        cartId: this.cartId,
        serviceId: this.serviceId,
      });
    }
  },
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
    &:hover {
      transform: scale(1.1, 1.1);
    }
    .cart__delete-image {
      width: 30px;
      position: absolute;
      margin-left: -22px;
      background-color: white;
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
  .cart__info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 58vw;
    margin: 15px;
    @include container;
    .cart__image {
      width: 60px;
    }
    .cart__items {
      display: flex;
    }
    .cart__info-price {
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
