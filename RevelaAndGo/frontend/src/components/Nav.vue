<template>
  <nav class="nav">
    <router-link to="/"
      ><img
        class="nav__icon"
        src="https://i.ibb.co/4YgR4Xk/home.png"
        alt="Icon for home. Shows a house."
    /></router-link>
    <router-link to="/profile"
      ><img
        class="nav__icon"
        src="https://i.ibb.co/fnZB8FP/id-card.png"
        alt="Icon for profile. Shows a card."
    /></router-link>
    <router-link to="/cart"
      ><img
        class="nav__icon"
        src="https://i.ibb.co/KKGmM2s/shopping-cart.png"
        alt="Icon for cart. Shows a cart."
    /></router-link>
    <router-link to="/"
      ><img
        class="nav__icon"
        src="https://i.ibb.co/8MZHcYS/enter.png"
        alt="Icon for logout. Shows a door."
    /></router-link>
  </nav>
</template>

<style lang="scss">
@import "../styles/variables.scss";
.nav {
  display: flex;
  align-items: center;
  .nav__icon {
    width: 40px;
    padding: 7px;
    &:hover {
      border-bottom: 2px dashed $lightred;
      border-top: 2px dashed $lightred;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    .nav__icon {
      &:hover {
        border-top: 0;
        border-bottom: 0;
      }
    }
  }
}
</style>