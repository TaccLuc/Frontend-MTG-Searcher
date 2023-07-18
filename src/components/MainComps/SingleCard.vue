<script>
import { store } from '../../store';

export default {
    data() {
       return {
            store,
            imgSrc: 'https://i.ebayimg.com/images/g/3IgAAOSwvD9jyN0y/s-l1200.webp'
       }
    },
    props: {
        singleCard: Object
    },
    methods: {
        cardLoader() {
            this.imgSrc = this.singleCard.imageUrl
        }
    }
}
</script>

<template>

    <div class="p-1" id="singleCard" v-if="singleCard.hasOwnProperty('imageUrl')">

        <img :src="imgSrc" @load="cardLoader()" :alt="singleCard.name">
        
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