<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';
import { store } from './store.js'

export default{
  components:{
    HeaderComp,
    MainComp
  },
  data() {
    return {
      cards: {

      },
      store
    }
  },
  methods: {
    cardRequest() {
      this.store.cards = [];
      this.store.loaded = false;
      axios
      .get('https://api.magicthegathering.io/v1/cards', {
        params: {
          page: 1,
          type: this.store.type,
          name: this.store.name
        }
      })
      .then((response) => {
        this.store.cards = response.data.cards;
        this.store.loaded = true;
      });
    }
  },
  created() {
    this.cardRequest()
  }
}

</script>

<template>

  <HeaderComp />
  <MainComp 
  @search="cardRequest()"/>

</template>

<style lang="scss">
@use "assets/scss/main.scss";

</style>
