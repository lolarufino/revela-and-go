<template>
  <div class="home">
    <section class="home__start">
      <p class="home__welcome" data-test="welcome">
        Revela & Go, es la web, en la que buscar dónde revelar tus fotografías
        analógicas, es más fácil.
      </p>
      <router-link to="/guidedfilter"
        ><button class="home__button">Comenzar</button></router-link
      >
    </section>
    <img
      class="home__image"
      src="https://i.ibb.co/PrG0wvL/pexels-cottonbro-3585017resized.jpg"
      alt="Hands holding a film"
    />
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-bottom: 20px;
  .home__start {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 90px;
    .home__welcome {
      @include container;
      font-family: $font;
      font-weight: 900;
      padding: 50px;
      width: 20vw;
    }
    .home__button {
      margin-top: 20px;
      width: 20vw;
      height: 10vh;
      font-size: 30px;
      @include button;
    }
  }
  .home__image {
    @include container;
    width: 21vw;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    .home__start {
      margin: 0;
      .home__welcome {
        padding: 20px;
        width: 72vw;
      }
      .home__button {
        margin-top: 25px;
        width: 72vw;
        height: 8vh;
        font-size: 30px;
        line-height: 10px;
      }
    }
    .home__image {
      width: 60vw;
      margin-top: 25px;
    }
  }
}
</style>

