<script>
import { store } from '../../store';

export default {
    data() {
       return {
            store
       }
    },
    props: {
        singleCard: Object
    }
}
</script>

<template>

    
    <div class="p-1" id="singleCard">
        <img v-if="singleCard.imageUrl != undefined" :src="singleCard.imageUrl" :alt="singleCard.name">
        <img v-else src="https://m.media-amazon.com/images/I/61AGZ37D7eL.jpg" :alt="singleCard.name">
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