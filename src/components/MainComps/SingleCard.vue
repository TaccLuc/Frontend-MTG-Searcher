<script>
import { store } from '../../store';

export default {
    data() {
       return {
            store,
            imgSrc: 'https://i.ebayimg.com/images/g/3IgAAOSwvD9jyN0y/s-l1200.webp',
            loadedImg: false
       }
    },
    props: {
        singleCard: Object
    },
    methods: {
        imageLoad() {
            this.loadedImg = true
        }
    }
}
</script>

<template>

    <div class="p-1" id="singleCard" v-if="singleCard.hasOwnProperty('imageUrl')">
        <img :src="singleCard.imageUrl" :alt="singleCard.name">
        <!-- <img v-if="loadedImg" :src="singleCard.imageUrl" @load="imageLoad()" :alt="singleCard.name">
        <img v-else :src="imgSrc" :alt="singleCard.name"> -->
    </div> 

</template>

<style lang="scss" scoped>

#singleCard{
    width: 20%;

    img{
        width: 100%;
    }
}
</style>