<template>
  <div class="container">
    <Header />
    <input
      v-on:click="handleNext"
      type="button"
      value="next step"
    />
    ({{ seconds }}sec)
    <div id="app">
      <Customers
        v-bind:seconds="seconds"
        v-on:orderBurger="handleOrderBurger()"
        v-on:orderFlies="handleOrderFlies()"
      />
      <Register />
      <Food
        v-bind:seconds="seconds"
        v-bind:burger="numberOfBurger"
        v-bind:flies="numberOfFlies"
      />
    </div>
  </div>
</template>

<script>
import Customers from './components/Customers';
import Register from './components/Register';
import Food from './components/Food';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Customers,
    Register,
    Food,
    Header,
  },
  data () {
    return {
      msg: 'Welcome to McDeNAlds !!',
      seconds: 0,
      numberOfBurger: 0,
      numberOfFlies: 0,
    }
  },
  methods: {
    isExistBurger: function() {
      return this.numberOfBurger > 0;
    },
    isExistFlies: function() {
      return this.numberOfFlies > 0;
    },
    handleOrderBurger: function() {
      if (this.isExistBurger()) {
        this.numberOfBurger--;
      } else {
        console.log('wait creating burger');
      }
    },
    handleOrderFlies: function() {
      if (this.isExistFlies()) {
        this.numberOfFlies--;
      } else {
        console.log('wait creating flise');
      }
    },
    handleNext: function() {
      this.seconds++;
      if (this.isCookedBurger(4)) { this.numberOfBurger++ };
      if (this.isCookedBurger(7)) { this.numberOfFlies++ };
    },
    isCookedBurger: function(createTime) {
      if (this.isLimitStack(this.numberOfBurger)) { return false; }
      return this.seconds % (createTime + 1) == 0;
    },
    isLimitStack: function(quantity) {
      return quantity >= 10;
    }
  },
}
</script>

<style lang="scss">
.container {
  text-align: center;
  width: 100vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  height: 70vh;
}
</style>
