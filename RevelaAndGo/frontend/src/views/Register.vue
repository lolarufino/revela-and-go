<template>
  <form class="register">
    <div class="register__email">
      <img
        class="register__icon__email"
        src="https://i.ibb.co/chT60hC/register-1.png"
        alt="Icon of a person"
      />
      <input
        v-model="email"
        class="register__input"
        type="email"
        id="email"
        placeholder="E-mail"
        required
      />
    </div>
    <div class="register__password">
      <img
        class="register__icon__password"
        src="https://i.ibb.co/gV48L8w/padlock.png"
        alt="Icon of a padlock"
      />
      <input
        v-model="password"
        class="register__input"
        type="password"
        id="password"
        placeholder="Contraseña"
        required
      />
    </div>
    <button
      type="submit"
      value="Register"
      class="register__button"
      data-test="register"
    >
      Registrarse
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import auth from "../auth/auth";

export default defineComponent({
  name: "Register",
  methods: {
    async register() {
      try {
        await auth.register(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
});
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.register {
  @include container;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  font-weight: 900;
  min-width: 36vw;
  padding-top: 40px;
  padding-bottom: 40px;
  .register__email,
  .register__password {
    display: flex;
    align-items: center;
    margin: 10px;
    .register__icon__email {
      width: 60px;
      margin-right: 5px;
    }
    .register__icon__password {
      width: 45px;
      margin-right: 5px;
    }
    .register__input {
      border: none;
      min-width: 15vw;
      height: 5vh;
      font-weight: 900;
      font-family: $font;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: black;
        font-family: $font;
        font-weight: 900;
      }
    }
  }
  .register__button {
    @include button;
    min-width: 10vw;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .register__register {
    color: black;
  }
  @media screen and (max-width: 768px) {
    .register__email,
    .register__password {
      display: flex;
      flex-direction: column;
      .register__input {
        text-align: center;
      }
    }
  }
}
</style>