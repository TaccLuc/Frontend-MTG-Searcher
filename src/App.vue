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
  created() {
    axios
      .get('https://api.magicthegathering.io/v1/cards', {
        params: {
          page: 1
        }
      })
      .then((response) => {
        this.store.cards = response.data.cards;
        this.store.loaded = true;
      });
  }
}

</script>

<template>

  <HeaderComp />
  <MainComp />

</template>

<style lang="scss">
@use "assets/scss/main.scss";

</style>
