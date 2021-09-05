<template>
  <div class="guidedfilter">
    <transition name="fade" mode="out-in">
      <div v-if="serviceChosen.length === 0" key="1" class="guidedfilter">
        <p class="guidedfilter__title">
          Para encontrar el laboratorio que necesitas, elige entre cada una de
          las siguientes opciones:
        </p>
        <span class="guidedfilter__title">Tipo de carrete:</span>
        <div class="guidedfilter__choice-container">
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push(35), (price = price + 1)"
          >
            35mm
          </button>
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push(120), (price = price + 3)"
          >
            120mm
          </button>
        </div>
      </div>
      <div v-else-if="serviceChosen.length === 1" key="2" class="guidedfilter">
        <span class="guidedfilter__title">Tipo de carrete:</span>
        <div class="guidedfilter__choice-container">
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('color'), (price = price + 2)"
          >
            Color
          </button>
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('bnw'), (price = price + 4)"
          >
            Blanco <br />y <br />negro
          </button>
        </div>
      </div>
      <div v-else-if="serviceChosen.length === 2" key="3" class="guidedfilter">
        <span class="guidedfilter__title">Tipo de revelado:</span>
        <div class="guidedfilter__choice-container">
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('none')"
          >
            Sólo revelado
          </button>
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('scan'), (price = price + 4)"
          >
            Revelado y escaneado
          </button>
        </div>
      </div>
      <div v-else-if="serviceChosen.length === 3" key="4" class="guidedfilter">
        <span class="guidedfilter__title">Copias en papel:</span>
        <div class="guidedfilter__choice-container">
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('print'), (price = price + 14)"
          >
            Si
          </button>
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('none')"
          >
            No
          </button>
        </div>
      </div>
      <div v-else-if="serviceChosen.length === 4" key="5" class="guidedfilter">
        <span class="guidedfilter__title">Envío de carretes de vuelta:</span>
        <div class="guidedfilter__choice-container">
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('rollback'), (price = price + 2)"
          >
            Si
          </button>
          <button
            class="guidedfilter__choice"
            @click="serviceChosen.push('none')"
          >
            No
          </button>
        </div>
      </div>
      <div v-else-if="serviceChosen.length === 5" key="6" class="guidedfilter">
        <p class="guidedfilter__title">¡Genial!</p>
        <p class="guidedfilter__title">
          A continuación te mostraremos los laboratorios que coincidan con tus
          preferencias
        </p>
        <button
          class="guidedfilter__button"
          @click="updateFinalService(serviceChosen), updatePrice(price)"
        >
          <router-link to="/labslist" class="guidedfilter__showresults"
            >Mostrar laboratorios</router-link
          >
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "GuidedFiler",
  computed: {
    ...mapState(["finalService", "price"]),
  },
  methods: {
    ...mapMutations(["updateFinalService", "updatePrice"]),
  },
  data() {
    return {
      serviceChosen: [],
      price: 0,
    };
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.guidedfilter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: $font;
  font-weight: 900;
  height: 55vh;
  .guidedfilter__choice-container {
    display: flex;
    .guidedfilter__choice {
      @include container;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 19vw;
      height: 25vh;
      font-size: 27px;
      font-weight: 900;
      margin: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
        border: 1px solid white;
        border-radius: 3px;
        box-shadow: white 6px 6px 0 -1px, black 6px 6px;
      }
    }
  }
  .guidedfilter__button {
    @include button;
    .guidedfilter__showresults {
      text-decoration: none;
      color: white;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    .guidedfilter__title {
      text-align: center;
      padding: 10px;
    }
    .guidedfilter__choice-container {
      .guidedfilter__choice {
        font-size: 18px;
        width: 33vw;
        height: 18vh;
        margin: 15px;
      }
    }
  }
}
</style>