<template>
  <div class="labslist__wrapper">
    <div v-if="value.length >= 1" class="labslist">
      <p class="labslist__header" data-test="foundlabs">
        Estos son los laboratorios que corresponden a tu búsqueda:
      </p>
      <div v-for="lab in this.value" :key="lab.name">
        <router-link :to="'/labdetail/' + lab._id">
          <div class="labslist__lab">
            <img
              class="labslist__lab-image"
              :src="lab.image"
              alt="Logo of the lab"
            />
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="labslist__notmatch">
      <p class="labslist__notfound">
        No hay laboratorios que coincidan con tu búsqueda.
      </p>
      <img
        class="labslist__image-notfound"
        src="https://i.ibb.co/BwWCRnJ/pexels-markus-spiske-4201333.jpg"
        alt="Image of a film"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "SearchLab",
  computed: {
    ...mapState(["value"]),
  },
  methods: {
    ...mapActions(["fetchLabsFromApi"]),
  },
  mounted() {
    this.fetchLabsFromApi();
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.labslist__wrapper {
  .labslist__notfound {
    font-family: $font;
    font-weight: 900;
  }
  .labslist__notfound-camera {
    margin-top: 50px;
    width: 15vw;
  }
  .labslist__image-notfound {
    @include container;
    width: 40vw;
    margin-top: 30px;
  }
  .labslist__notmatch {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>