<template>
  <div>
    <p>
      Para encontrar el laboratorio que necesitas, elige entre cada una de las
      siguientes opciones:
    </p>
    <span>Tipo de carrete:</span>
    <div>
      <div>35mm</div>
      <div>120mm</div>
    </div>
    <div>
      <div>Color</div>
      <div>Blanco y negro</div>
    </div>
    <span>Tipo de revelado:</span>
    <div>
      <div>Sólo revelado</div>
      <div>Revelado y escaneado</div>
    </div>
    <span>Copias en papel:</span>
    <div>
      <div>Si</div>
      <div>No</div>
    </div>
    <span>Envío de carretes de vuelta:</span>
    <div>
      <div>Si</div>
      <div>No</div>
    </div>
    <p>¡Genial!</p>
    <p>
      A continuación te mostraremos los laboratorios que coincidan con tus
      preferencias
    </p>
    <button>
      <router-link to="/labslist">Mostrar laboratorios</router-link>
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
</style>