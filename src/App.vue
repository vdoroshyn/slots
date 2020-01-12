<template>
  <div id="app">
    <div class="description">Get the same number in all 3 slots and you will win x5 your bet</div>
    <loading  :active.sync="isLoading"
              :can-cancel="false"
              :is-full-page="true"></loading>
    <div class="balance">
      <span>Your Balance</span>
      <div>${{balance}}</div>
    </div>
    <Drum></Drum>
    <Bets></Bets>
    <div class="spin-btn-wrapper">
      <div class="win">
        <span>You Win</span>
        <div>${{win}}</div>
      </div>
      <SpinButton></SpinButton>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Drum from './components/Drum.vue';
import Bets from './components/Bets.vue';
import SpinButton from './components/SpinButton.vue';

export default {
  components: {
    Loading,
    Drum,
    Bets,
    SpinButton
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    init() {
      this.isLoading = true;
      setTimeout(() => {
        this.$store.dispatch('init');
        this.isLoading = false;
      }, 3000)
    }
  },
  computed: {
    balance() {
      return this.$store.state.balance;
    },
    rolls() {
      return this.$store.state.rolls;
    },
    win() {
      return this.$store.state.lastWin;
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style>
#app {
  width: 380px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: azure;
  padding: 40px 10px;
  border-radius: 10px;
}
.description {
  width: 320px;
  border-bottom: 2px solid black;
  margin-bottom: 70px;
}
.balance, .win {
  display: flex;
  flex-flow: column nowrap;
}
.balance {
  width: 320px;
  margin-bottom: 15px;
}
.win {
  width: 150px;
}
.spin-btn-wrapper {
  width: 320px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
