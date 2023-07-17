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
      this.pageCount++
      axios
      .get('https://api.magicthegathering.io/v1/cards', {
        params: {
          page: this.pageCount
        }
      })
      .then((response) => {
        this.store.cards = response.data.cards;
        this.store.loaded = true;
      });
    },
    prevPage() {
      if (this.pageCount > 1) {
        this.pageCount--
        axios
        .get('https://api.magicthegathering.io/v1/cards', {
          params: {
            page: this.pageCount
          }
        })
        .then((response) => {
          this.store.cards = response.data.cards;
          this.store.loaded = true;
        });
        }
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
              <select id="cardType">
                <option value="">
                Choose a card type
                </option>
                <SelectOptions 
                v-for="singleType, i in cardTypes" :key="i"
                :type="singleType"/>
              </select>

              <span>
                Found {{ store.cards.length }} cards
              </span>
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
            v-if="store.loaded">

              <SingleCard 
              v-for="(singleCard, i) in store.cards" :key="i"
              :singleCard="singleCard"/>
                
            </div>
        </div>

      </div>

    </main>
</template>

<style lang="scss" scoped>

main {
    background-color: #1D1D1D;
    border-top: 1px solid white;
    padding-bottom: 30px;

    span {
        color: white;
        margin-left: 20px;
    }

    .container>div:last-of-type {
        background-color: white;
    }
}
</style>