<template>
  <div class="login">
    <div class="login__email">
      <img
        class="login__icon__email"
        src="https://i.ibb.co/chT60hC/login-1.png"
        alt="Icon of a person"
      />
      <input class="login__input" placeholder="E-mail" />
    </div>
    <div class="login__password">
      <img
        class="login__icon__password"
        src="https://i.ibb.co/gV48L8w/padlock.png"
        alt="Icon of a padlock"
      />
      <input class="login__input" placeholder="Contraseña" />
    </div>
    <button class="login__button" data-test="login">Login</button>
    <small>
      ¿Sin cuenta?
      <router-link class="login__register" to="/register"
        >Regístrate</router-link
      >
    </small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
});
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.login {
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
  .login__email,
  .login__password {
    display: flex;
    align-items: center;
    margin: 10px;
    .login__icon__email {
      width: 60px;
      margin-right: 5px;
    }
    .login__icon__password {
      width: 45px;
      margin-right: 5px;
    }
    .login__input {
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
  .login__button {
    @include button;
    min-width: 10vw;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .login__register {
    color: black;
  }
  @media screen and (max-width: 768px) {
    .login__email,
    .login__password {
      display: flex;
      flex-direction: column;
      .login__input {
        text-align: center;
      }
    }
  }
}
</style>