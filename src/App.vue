<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
import store from './store';

export default{
  components:{
    HeaderComp,
    MainComp,
    FooterComp
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
  <FooterComp />

</template>

<style lang="scss">
@use "assets/scss/main.scss";

</style>
