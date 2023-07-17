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

    <div class="p-1" id="singleCard" v-if="singleCard.imageUrl != undefined">
        <img :src="singleCard.imageUrl" :alt="singleCard.name">
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