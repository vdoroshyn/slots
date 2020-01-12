<template>
  <div class="bets-block">  
    <button :disabled="isMinusDisabled" class="bet-btn" @click="changeCurrentBet('-')">-</button>
    <div class="bets">
      <span>Current Bet</span>
      <div>${{currentBet}}</div>
    </div>
    <button :disabled="isPlusDisabled" class="bet-btn" @click="changeCurrentBet('+')">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeCurrentBet(sign) {
      this.$store.dispatch('changeCurrentBet', sign);
    }
  },
  computed: {
    currentBet() {
      return this.$store.state.currentBet;
    },
    bets() {
      return this.$store.state.bets;
    },
    isMinusDisabled() {
      let indexOfCurrentBet = this.$store.state.bets.indexOf(this.$store.state.currentBet);
      if (indexOfCurrentBet === 0) {
        return true;
      }
      return false;
    },
    isPlusDisabled() {
      let indexOfCurrentBet = this.$store.state.bets.indexOf(this.$store.state.currentBet);
      if (indexOfCurrentBet === this.$store.state.bets.length - 1) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>
.bets-block {
  width: 320px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 40px;
}
.bets {
  width: 220px;
  display: flex;
  flex-flow: column nowrap;
}
.bet-btn {
  min-width: 50px;
  font-size: 16px;
  border-radius: 2px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
  background: rgba(237, 111, 86, 0.85);
  color: #fff;
  border: solid 1px rgba(237, 111, 86, 0.85);
}
.bet-btn:hover {
  background: rgba(rgba(237, 111, 86, 0.85), 1);
  border-color: rgba(rgba(237, 111, 86, 0.85), 1);
}
.bet-btn[disabled],
.bet-btn[disabled]:hover {
  background: grey;
  border: solid 1px grey;
}
</style>
