<template>
  <div class="spin-btn-block">
    <loading  :active.sync="isLoading"
              :can-cancel="false"
              :is-full-page="true"></loading>
    <button class="spin-btn" @click="spin()">Spin</button>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    spin() {
      if (this.$store.state.balance < this.$store.state.currentBet) {
        alert("The balance is too low. Deposit money to your account!");
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.$store.dispatch('getServerResponse');
        this.isLoading = false;
      }, 1000)
    }
  }
}
</script>

<style scoped>
.spin-btn-block {
  width: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.spin-btn {
  min-width: 100px;
  font-size: 16px;
  border-radius: 2px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
  background: rgba(46, 205, 153, 0.85);
  color: #fff;
  border: solid 1px rgba(46, 205, 153, 0.85);
}
.spin-btn:hover {
  background: rgba(rgba(46, 205, 153, 0.85), 1);
  border-color: rgba(rgba(46, 205, 153, 0.85), 1);
}
</style>
