<template>
  <div class="container">
    <Header />
    <input
      v-on:click="handleNext"
      type="button"
      value="step by step"
    />
    <input
      v-on:click="handleAuto"
      type="button"
      value="auto"
    />
    ({{ seconds }}sec)
    <li>order_id: 0 => burger</li>
    <li>order_id: 1 => burger & flies</li>
    <div id="app">
      <Customers
        v-bind:seconds="seconds"
        v-bind:rows="rows"
        v-on:orderBurger="handleOrderBurger()"
        v-on:orderFlies="handleOrderFlies()"
      />
      <Register
        v-bind:ordersOfTopCustomer="ordersOfTopCustomer"
      />
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
      limitNumberOfStack: 10,
      ordersOfTopCustomer: [null, null, null],
      rows: [
        [
          { name: 'john', orderId: 0 },
          { name: 'mike', orderId: 1 }
        ],
        [
          {name: 'marin', orderId: 1},
        ],
        [
          {name: 'hoge', orderId: 0},
        ]
      ],
    }
  },
  methods: {
    gameStart: function() {
      this.seconds++;
      this.orderTake();
      this.stackFood();
    },
    handleNext: function() {
      this.gameStart();
      console.log(this.ordersOfTopCustomer);
    },
    handleAuto: function() {
      setInterval(() => {
        this.gameStart();
      }, 1000);
    },
    orderTake: function() {
      this.rows.forEach((row, index) => {
        const copyRow = [];
        Object.assign(copyRow, row); // row配列をいじると本体に影響が出るためにコピーする
        const topOfCustomer = copyRow.reverse()[0];
        if (topOfCustomer !== undefined) {
          this.ordersOfTopCustomer[index] = topOfCustomer.orderId;
          if (this.isOrderedTake(topOfCustomer.orderId)) {
            this.rows[index].shift();
            this.ordersOfTopCustomer[index] = null;
          }
        };
      });
    },
    isOrderedTake: function(orderId) {
      if (orderId === 0) {
        if (this.isExistBurger()) {
          this.handleOrderBurger();
          return true;
        }
      } else if (orderId === 1) {
        if (this.isExistBurger() && this.isExistFlies()) {
          this.handleOrderBurger();
          this.handleOrderFlies();
          return true;
        }
      }
      return false;
    },
    stackFood: function() {
      if (this.isCookedBurger(4)) { this.numberOfBurger++ };
      if (this.isCookedFlies(7)) { this.numberOfFlies++ };
    },
    isCookedBurger: function(createTime) {
      if (this.isLimitStack(this.numberOfBurger)) { return false; }
      return this.seconds % (createTime + 1) == 0;
    },
    isCookedFlies: function(createTime) {
      if (this.isLimitStack(this.numberOfFlies)) { return false; }
      return this.seconds % (createTime + 1) == 0;
    },
    isLimitStack: function(quantity) {
      return quantity >= this.limitNumberOfStack;
    },
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
