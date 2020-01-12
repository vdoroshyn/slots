import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    currentBet: 0,
    bets: [],
    rolls: [],
    shownRolls: [],
    lastWin: 0
  },
  getters: {
  },
  mutations: {
    init: state => {
      state.balance = 1000;
      state.currentBet = 10;
      state.bets = [10, 20, 50, 100];
      state.rolls = [
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        [3, 2, 5, 1, 4]
      ];
      state.shownRolls = state.rolls.map( el => el[0]);
    },
    getServerResponse: state => {
      let possibleWin = state.currentBet * 5;

      state.shownRolls = spinTheDrums(state.rolls);
      state.lastWin = checkTheWin(state.shownRolls) ? possibleWin : 0;
      state.balance = state.balance - state.currentBet + state.lastWin;
    },
    changeCurrentBet: (state, payload) => {
      let indexOfCurrentBet = state.bets.indexOf(state.currentBet);

      if (payload === '+' && (indexOfCurrentBet < state.bets.length - 1)) {
        state.currentBet = state.bets[indexOfCurrentBet + 1]
      } else if (payload === '-' && (indexOfCurrentBet !== 0)) {
        state.currentBet = state.bets[indexOfCurrentBet - 1]
      }
    }
  },
  actions: {
    init: context => {
      context.commit('init');
    },
    getServerResponse: context => {
      context.commit('getServerResponse');
    },
    changeCurrentBet: (context, payload) => {
      context.commit('changeCurrentBet', payload);
    },
  },
})

// min and max included
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function spinTheDrums(arr) {
  let shownRolls = [];

  for (let i = 0; i < arr.length; i++) {
    let indexOfRandomEl = randomIntFromRange(0, arr[i].length - 1);
    shownRolls.push(arr[i][indexOfRandomEl]);
  }

  return shownRolls;
}

function checkTheWin(arr) {
  return arr.every( el => el === arr[0]);
}