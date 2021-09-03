<template>
  <div>
    <h1>Esto es Labs List</h1>
    <ul>
      <li v-for="lab in labs" :key="lab.name">
        <p>{{ lab.name }}</p>
      </li>
    </ul>
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