<template>
  <p>{{ this.value }}</p>
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
