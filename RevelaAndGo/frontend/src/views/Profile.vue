<template>
  <div class="profile">
    <div class="profile__image-container">
      <div class="modal" v-if="showModal">
        <div class="modal__wrapper">
          <div class="modal__container">
            <button class="modal__button-close" @click="showModal = false">
              X
            </button>
            <span class="modal__header">Elige tu nueva foto de perfil:</span>
            <label for="file-upload" class="modal__input-button">
              <input
                id="file-upload"
                type="file"
                :name="uploadFieldName"
                @change="onFileChange($event.target.name, $event.target.files)"
              />
              Seleccionar archivo...
            </label>
            <button class="modal__button" @click="showModal = false">
              Guardar
            </button>
          </div>
        </div>
      </div>
      <button
        class="profile__edit-button"
        id="show-modal"
        @click="showModal = true"
      >
        <img
          class="profile__edit-image"
          src="https://i.ibb.co/55qGKN4/edit-button.png"
          alt="Edit button"
        />
      </button>
      <img class="profile__image" :src="this.imageFile" alt="User image" />
    </div>
    <div class="profile__container">
      <div class="profile__data">
        <span class="profile__text" data-test="email">E-mail:</span
        ><span class="profile__apitext">{{ user.email }}</span>
      </div>
      <br />
      <div class="profile__data-labs">
        <span class="profile__text">Laboratorios favoritos:</span>
        <div v-for="lab in user.favoriteLabs" :key="lab.name">
          <router-link :to="'/labdetail/' + lab._id">
            <button class="profile__button">{{ lab.name }}</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  computed: {
    ...mapState(["user", "token"]),
  },
  methods: {
    ...mapActions(["fetchUserLoggedFromApi"]),
    onFileChange(fieldName: string, file: string | any[]) {
      let newImage = file[0];
      if (file.length > 0) {
        let imageURL = URL.createObjectURL(newImage);
        this.imageFile = imageURL;
      }
    },
  },
  data() {
    return {
      showModal: false,
      imageFile: "https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg",
      uploadFieldName: "file",
    };
  },
  mounted() {
    const route = useRoute();
    const { userId } = route.params;
    this.fetchUserLoggedFromApi({ userId, token: this.token });
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
  width: 85%;
  margin-bottom: 20px;
  position: relative;
  .profile__image-container {
    display: flex;
    flex-direction: column;
    .modal {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: table;
      .modal__wrapper {
        display: table-cell;
        vertical-align: middle;
        .modal__container {
          display: flex;
          flex-direction: column;
          align-items: center;
          @include container;
          width: 400px;
          margin: 0px auto;
          padding: 20px 30px;
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
          font-family: $font;
          .modal__input-button {
            width: 250px;
            @include button;
            margin-top: 15px;
          }
          .modal__button {
            width: 100px;
            margin: 10px;
            @include button;
          }
          .modal__button-close {
            width: 27px;
            @include button;
            align-self: flex-end;
            padding: 1px;
            margin: 10px;
          }
        }
      }
    }
    .profile__edit-button {
      align-self: flex-end;
      border: none;
      cursor: pointer;

      .profile__edit-image {
        width: 30px;
        position: absolute;
        margin-left: -8px;
        margin-top: -12px;
        background-color: white;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
    .profile__image {
      @include container;
      width: 21vw;
    }
  }
  .profile__container {
    display: flex;
    flex-direction: column;
    @include container;
    font-family: $font;
    font-weight: 900;
    padding: 50px;
    width: 28vw;
    margin-left: 90px;
    font-size: 15px;
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
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .profile__image-container {
      order: 2;
      margin-top: 25px;
      .profile__image {
        width: 60vw;
      }
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
input[type="file"] {
  display: none;
}
</style>