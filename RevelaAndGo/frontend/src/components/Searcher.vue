<template>
  <div class="searcher">
    <input class="searcher__input" placeholder="Buscar laboratorio" />
    <img class="searcher__icon" src="https://i.ibb.co/HDCqQj5/magnify.png" />
  </div>
</template>

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
    &:focus {
      outline: none;
      color: $gray;
      font-family: $font;
      font-weight: 900;
    }
    &::placeholder {
      color: $gray;
      font-family: $font;
      font-weight: 900;
    }
  }
  .searcher__icon {
    width: 30px;
  }
}
</style>