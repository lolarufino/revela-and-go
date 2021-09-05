<template>
  <div class="labdetail">
    <img class="labdetail__image" :src="lab.image" alt="Logo of the lab" />
    <section class="labdetail__info">
      <div class="labdetail__data">
        <span class="labdetail__text">Nombre:</span>
        <span class="labdetail__apitext">{{ lab.name }}</span>
      </div>
      <div class="labdetail__data">
        <span class="labdetail__text" data-test="address">Dirección:</span>
        <span class="labdetail__apitext">{{ lab.address }}</span>
      </div>
      <div class="labdetail__data">
        <span class="labdetail__text">Teléfono:</span>
        <span class="labdetail__apitext">{{ lab.contact }}</span>
      </div>
      <div class="labdetail__services">
        <span v-for="service in lab.services" :key="service"
          >#{{ service }}
        </span>
      </div>
      <img
        class="labdetail__icon"
        src="https://i.ibb.co/vs4Mznp/loving.png"
        alt="Like icon"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "LabDetail",
  computed: {
    ...mapState(["lab"]),
  },
  methods: {
    ...mapActions(["fetchLabFromApi"]),
  },
  mounted() {
    const route = useRoute();
    const { labId } = route.params;
    this.fetchLabFromApi(labId);
  },
});
</script>

<style lang="scss">
@import "../styles/mixins";
@import "../styles/variables";
.labdetail {
  display: flex;
  justify-content: center;
  align-items: center;
  .labdetail__image {
    @include container;
    max-height: 40%;
    max-width: 40%;
    margin-right: 100px;
  }
  .labdetail__info {
    font-size: 15px;
    @include container;
    padding: 20px;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .labdetail__data {
      display: flex;
      font-weight: 900;
      margin: 10px;
      .labdetail__apitext {
        margin-left: 7px;
        color: $gray;
      }
    }
    .labdetail__icon {
      width: 60px;
      align-self: flex-end;
    }
    .labdetail__services {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 5px;
      font-weight: 900;
      color: $lightred;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .labdetail__image {
      order: 2;
      margin-top: 25px;
      margin-right: 0;
    }
    .labdetail__info {
      order: 1;
      margin-left: 0;
      margin-bottom: 10px;
      padding: 20px;
      width: 72vw;
    }
  }
}
</style>
