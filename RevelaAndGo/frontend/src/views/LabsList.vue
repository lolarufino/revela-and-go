<template>
  <div class="labslist">
    <p class="labslist__header" data-test="foundlabs">
      Estos son los laboratorios que corresponden a tu búsqueda:
    </p>
    <div class="labslist__lab" v-for="lab in labs" :key="lab.name">
      <img class="labslist__lab-image" :src="lab.image" alt="Logo of the lab" />
      <div class="labslist__lab-info">
        <div class="lablist__lab-info-wrapper">
          <p class="labslist__lab-info-text">Nombre:</p>
          <p class="labslist__lab-info-api">{{ lab.name }}</p>
        </div>
        <div class="lablist__lab-info-wrapper">
          <p class="labslist__lab-info-text">Dirección:</p>
          <p class="labslist__lab-info-api">{{ lab.address }}</p>
        </div>
        <div class="lablist__lab-info-wrapper">
          <p class="labslist__lab-info-text">Teléfono:</p>
          <p class="labslist__lab-info-api">{{ lab.contact }}</p>
        </div>
      </div>
      <span class="labslist__lab-price">{{ lab.baseRate + price }}€</span>
      <button class="labslist__lab-button">
        <img
          class="labslist__lab-addtocart"
          src="https://i.ibb.co/w0yS2Vy/add-to-basket.png"
          alt="Icon of add to cart"
          @click="
            $toast('Añadido al carrito'),
              updateServicePrice(lab.baseRate, price)
          "
        />
      </button>
    </div>
    <button class="labslist__newsearch">
      <router-link to="/guidedfilter" class="labslist__newsearch-text"
        >Nueva búsqueda</router-link
      >
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "LabsList",
  computed: {
    ...mapState(["labs", "price", "service", "isLoggedIn"]),
  },
  methods: {
    ...mapActions(["fetchLabsFromApi", "addServiceToDB"]),
    updateServicePrice(labRate, price) {
      this.service.price = labRate + price;
      this.addServiceToDB(this.service);
    },
  },
  mounted() {
    this.fetchLabsFromApi();
  },
});
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.labslist {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $font;
  font-weight: 900;
  .labslist__header {
    margin-bottom: 50px;
  }
  .labslist__lab {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 60px;
    width: 63vw;
    height: 25vh;
    .labslist__lab-image {
      max-width: 300px;
      max-height: 165px;
      padding: 10px;
      margin-right: 10px;
    }
    .labslist__lab-info {
      font-size: 14px;
      .lablist__lab-info-wrapper {
        display: flex;
        .labslist__lab-info-api {
          margin-left: 5px;
          color: $gray;
        }
      }
    }
    .labslist__lab-price {
      font-size: 28px;
      margin: 14px;
    }
    .labslist__lab-button {
      border: none;
      background-color: white;
      cursor: pointer;

      .labslist__lab-addtocart {
        padding: 7px;
        width: 40px;
        &:hover {
          padding: 0;
          width: 50px;
          border: 2px dashed $lightred;
          border-radius: 50%;
        }
      }
    }
  }
  .labslist__newsearch {
    @include button;
    .labslist__newsearch-text {
      color: white;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 768px) {
    .labslist__header {
      text-align: center;
    }
    .labslist__lab {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 70vh;
      .labslist__lab-image {
        max-width: 220px;
        padding: 10px;
        margin-bottom: 24px;
      }
      .labslist__lab-button {
        &:hover {
          border: none;
        }
      }
    }
  }
}
</style>