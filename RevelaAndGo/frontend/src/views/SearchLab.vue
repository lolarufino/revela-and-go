<template>
  <div class="labslist">
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
</style>
