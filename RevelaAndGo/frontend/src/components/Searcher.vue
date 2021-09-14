<template>
  <div class="searcher">
    <input
      class="searcher__input"
      placeholder="Buscar laboratorio"
      v-model="inputValue"
      v-on:input="searchLab()"
      data-test="inputSearcher"
    />
    <button class="searcher__button" @click="searchLab()" data-test="searcher">
      <img
        class="searcher__icon"
        src="https://i.ibb.co/HDCqQj5/magnify.png"
        alt="Icon of a lens"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Searcher",
  computed: {
    ...mapState(["labs"]),
  },
  methods: {
    ...mapActions(["searchingLab"]),
    searchLab() {
      if (this.inputValue !== "") {
        this.searchingLab(this.inputValue);
        this.$router.push("/searchlab");
      } else {
        this.$router.push("/");
      }
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
});
</script>


<style lang="scss">
@import "../styles/mixins";
@import "../styles/variables";

.searcher {
  display: flex;
  align-items: center;
  @include container;
  padding: 5px;
  .searcher__input {
    border: none;
    color: $gray;
    font-family: $font;
    font-weight: 900;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $gray;
      font-family: $font;
      font-weight: 900;
    }
  }
  .searcher__button {
    background-color: white;
    border: none;
    cursor: pointer;
    .searcher__icon {
      width: 30px;
    }
  }
}
</style>