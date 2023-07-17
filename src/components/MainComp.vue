<script>
import SelectOptions from './MainComps/SelectOptions.vue';

export default{
  components: {
    SelectOptions
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
      ]
    }
  }
}

</script>

<template>
    <main>
    
      <div class="container">

        <!-- TOP MAIN -->
        <div class="py-4">

            <select id="cardType">
                <option value="">
                Choose a card type
                </option>
                <SelectOptions 
                v-for="singleType, i in cardTypes" :key="i"
                :type="singleType"/>
            </select>

            <span>
                Found X cards
            </span>
        </div>

        <!-- MAIN CONTENT -->

        <div>

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
        height: 300px;
    }
}
</style>