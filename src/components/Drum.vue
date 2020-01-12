<template>
  <div class="drum">
    <div class="drum-cell" v-for="(oneDrum, index) in shownRolls" v-bind:key="index">{{oneDrum}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    rolls() {
      return this.$store.state.rolls;
    },
    shownRolls() {
      return this.$store.state.shownRolls;
    }
  }
}
</script>

<style scoped>
.drum {
  width: 320px;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.drum-cell {
  width: 80px;
  border: 2px solid black;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}
</style>
