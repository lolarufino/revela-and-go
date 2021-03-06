<template>
  <div v-if="user.cart.services !== 0">
    <div class="cart__container">
      <div
        v-for="service in user.cart.services"
        :key="service._id"
        class="cart__container"
      >
        <button
          class="cart__delete-button"
          @click="deleteService({ serviceId: service._id, cart: user.cart })"
        >
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
            <div v-if="service.scan === false">
              <p>&nbsp;• Sólo revelado</p>
            </div>
            <div v-if="service.print === true">
              <p>&nbsp;• Copias en papel</p>
            </div>
            <div v-if="service.rollback === true">
              <p>&nbsp;• Carretes de vuelta</p>
            </div>
          </div>
          <span class="cart__info-price">{{ service.price }}€</span>
        </section>
      </div>
      <p class="cart__total" data-test="addCart">
        Total: {{ updateFinalPrice(user.cart.services) }}€
      </p>
      <button
        class="cart__button"
        data-test="pagar"
        @click="$toast('Tu pago se ha realizado con éxito')"
      >
        Pagar
      </button>
    </div>
  </div>
  <div v-else class="cart__empty">
    <p class="cart__empty-info">¡Tu carrito está vacío!</p>
    <p class="cart__empty-info">
      Comienza a comparar precios y encuentra tu laboratorio de revelado
      favorito.
    </p>
    <router-link to="/guidedfilter"
      ><button class="cart__button cart__empty-info">
        Comenzar
      </button></router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Cart",
  computed: {
    ...mapState(["user", "token", "serviceId", "cartId", "services"]),
  },
  methods: {
    ...mapActions([
      "fetchUserLoggedFromApi",
      "addServiceToThisUserCart",
      "deleteService",
    ]),
    updateFinalPrice(services: [any]) {
      return services?.reduce((currentValue, { price }) => {
        return currentValue + price;
      }, 0);
    },
  },
  mounted() {
    const route = useRoute();
    const { userId } = route.params;
    this.fetchUserLoggedFromApi({ userId, token: this.token });
    if (userId !== undefined) {
      this.addServiceToThisUserCart({
        services: this.user.cart.services,
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
    justify-content: space-between;
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
.cart__empty {
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;
  font-family: $font;
  font-size: 14px;
  font-weight: 900;
  .cart__empty-info {
    padding: 20px;
  }
  .cart__button {
    @include button;
    margin-top: 20px;
    font-size: 24px;
    min-width: 12vw;
  }
}
</style>
