<template>
  <div class="guidedfilter">
    <p class="guidedfilter__title">
      Para encontrar el laboratorio que necesitas, elige entre cada una de las
      siguientes opciones:
    </p>
    <span class="guidedfilter__title">Tipo de carrete:</span>
    <div class="guidedfilter__choice-container">
      <button class="guidedfilter__choice" v-wave="true">35mm</button>
      <button class="guidedfilter__choice" v-wave="true">120mm</button>
    </div>
    <div class="guidedfilter__choice-container">
      <button class="guidedfilter__choice" v-wave="true">Color</button>
      <button class="guidedfilter__choice" v-wave="true">
        Blanco <br />y <br />negro
      </button>
    </div>
    <span class="guidedfilter__title">Tipo de revelado:</span>
    <div class="guidedfilter__choice-container">
      <button class="guidedfilter__choice" v-wave="true">Sólo revelado</button>
      <button class="guidedfilter__choice" v-wave="true">
        Revelado y escaneado
      </button>
    </div>
    <span class="guidedfilter__title">Copias en papel:</span>
    <div class="guidedfilter__choice-container">
      <button class="guidedfilter__choice" v-wave="true">Si</button>
      <button class="guidedfilter__choice" v-wave="true">No</button>
    </div>
    <span class="guidedfilter__title">Envío de carretes de vuelta:</span>
    <div class="guidedfilter__choice-container">
      <button class="guidedfilter__choice" v-wave="true">Si</button>
      <button class="guidedfilter__choice" v-wave="true">No</button>
    </div>
    <p class="guidedfilter__title">¡Genial!</p>
    <p class="guidedfilter__title">
      A continuación te mostraremos los laboratorios que coincidan con tus
      preferencias
    </p>
    <button class="guidedfilter__button">
      <router-link to="/labslist" class="guidedfilter__showresults"
        >Mostrar laboratorios</router-link
      >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GuidedFiler",
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.guidedfilter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: $font;
  font-weight: 900;
  height: 228vh;
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