<template>
  <div class="profile">
    <img
      class="profile__image"
      src="https://i.ibb.co/bBb81PW/pexels-cottonbro-3585039.jpg"
      alt="User image"
    />
    <div class="profile__container">
      <div class="profile__data">
        <span class="profile__text" data-test="userName">Nombre:</span
        ><span class="profile__apitext">{{ user.name }}</span>
      </div>
      <div class="profile__data">
        <span class="profile__text">E-mail:</span
        ><span class="profile__apitext">{{ user.email }}</span>
      </div>
      <br />
      <div class="profile__data-labs">
        <span class="profile__text">Laboratorios favoritos:</span>
        <div v-for="lab in user.favoriteLabs" :key="lab.name">
          <button class="profile__button">{{ lab.name }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["fetchUserFromApi"]),
  },
  mounted() {
    this.fetchUserFromApi();
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-bottom: 20px;
  .profile__image {
    @include container;
    width: 21vw;
  }
  .profile__container {
    display: flex;
    flex-direction: column;
    @include container;
    font-family: $font;
    font-weight: 900;
    padding: 50px;
    width: 20vw;
    margin-left: 90px;
    font-size: 15px;
    font-weight: 900;
    .profile__data {
      display: flex;
      .profile__apitext {
        margin-left: 7px;
        color: $gray;
      }
    }
    .profile__data-labs {
      display: flex;
      flex-direction: column;
      .profile__button {
        @include button;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .profile__image {
      order: 2;
      width: 60vw;
      margin-top: 25px;
    }
    .profile__container {
      order: 1;
      margin-left: 0;
      margin-bottom: 10px;
      padding: 20px;
      width: 72vw;
    }
  }
}
</style>