import {reactive} from 'vue'

export const store = reactive ({
    cards: [],
    loaded: false,
    type: '',
    name: ''
});