<script>
import SelectOptions from './MainComps/SelectOptions.vue';
import SingleCard from './MainComps/SingleCard.vue';
import axios from 'axios';
import { store } from '../store.js'

export default{
  components: {
    SelectOptions,
    SingleCard
  },
  data() {
    return {
      cardTypes: [
        'creature',
        'instant',
        'sorcery',
        'artifact',
        'enchantment',
        'planeswalker',
        'battle',
        'land'
      ],
      store,
      pageCount: 1
    }
  },
  methods: {
    nextPage() {
      if (this.pageCount < 18 && this.store.cards.length > 99) {
        this.pageCount++;
        this.cardFetcher()
      }
    },
    prevPage() {
      if (this.pageCount > 1) {
        this.pageCount--;
        this.cardFetcher()
      }
    },
    cardFetcher() {
      this.store.cards = [];
        this.store.loaded = false;
        axios
        .get('https://api.magicthegathering.io/v1/cards', {
          params: {
            page: this.pageCount,
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
  computed: {
    resultsNumber() {
      return store.cards.filter(obj => obj.imageUrl).length
    }
  }
}

</script>

<template>
    <main>
    
      <div class="container">

        <!-- TOP MAIN -->
        <div class="py-4 d-flex justify-content-between">

            <div class="col-auto">

              <select id="cardType" v-model="store.type" @change="cardFetcher()">

                <option value="" selected>
                Choose a card type
                </option>

                <SelectOptions 
                v-for="singleType, i in cardTypes" :key="i"
                :type="singleType"/>

              </select>

              <span>
                Found {{ resultsNumber }} cards
              </span>

              <input type="text" 
              @keyup.enter="cardFetcher()"
              v-model="store.name">

            </div>

            <div class="col-auto">

              <button
              @click="prevPage()">
                <i class="fa-solid fa-arrow-left"></i>
              </button>

              <button
              @click=" nextPage()">
                <i class="fa-solid fa-arrow-right"></i>
              </button>

            </div>
        </div>

        <!-- MAIN CONTENT -->

        <div>

            <div class="d-flex flex-wrap justify-content-center p-3"
            v-if="store.loaded && store.cards.length != 0">

              <SingleCard 
              v-for="(singleCard, i) in store.cards" :key="i"
              :singleCard="singleCard"/>
                
            </div>

            <div v-else-if="store.cards.length == 0 && store.loaded">

              <h1 class="p-3">
                No results from this search, try again
              </h1>

            </div>

            <div v-else-if="store.cards.length == 0 && store.name == '' && store.type == ''">

              <h1 class="p-3">
                Search for a card
              </h1>

            </div>
            
            <div v-else>

              <h1 class="p-3">
                Fetching cards...
              </h1>

            </div>

        </div>

      </div>

    </main>
</template>

<style lang="scss" scoped>

main {
    background-color: #1D1D1D;
    min-height: calc(100vh - 100px);
    border-top: 1px solid white;
    padding-bottom: 30px;

    select {
      text-transform: capitalize;
    }

    span {
        color: white;
        margin-left: 20px;
    }

    .container>div:last-of-type {
        background-color: white;
    }
}
</style>