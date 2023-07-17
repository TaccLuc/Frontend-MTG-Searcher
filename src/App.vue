<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';
import {store} from './store';

export default{
  components:{
    HeaderComp,
    MainComp
  },
  data() {
    return {
      store
    }
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
