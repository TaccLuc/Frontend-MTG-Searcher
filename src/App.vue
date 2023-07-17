<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';

export default{
  components:{
    HeaderComp,
    MainComp
  },
  data() {
    return {
      cards: {

      }
    }
  },
  created() {
    axios
      .get('https://api.magicthegathering.io/v1/cards')
      .then((response) => {
        this.cards = response.data.cards;
      });
  }
}

</script>

<template>

  <HeaderComp />
  <MainComp 
  :cards="cards" />

</template>

<style lang="scss">
@use "assets/scss/main.scss";

</style>
