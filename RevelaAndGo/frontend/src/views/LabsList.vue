<template>
  <div>
    <p>Estos son los laboratorios que corresponden a tu búsqueda:</p>
    <div v-for="lab in labs" :key="lab.name">
      <p>{{ lab.name }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "LabsList",
  computed: {
    ...mapState(["labs"]),
  },
  methods: {
    ...mapActions(["fetchLabsFromApi"]),
  },
  mounted() {
    this.fetchLabsFromApi();
  },
});
</script>