<template>
  <div>
    <div v-for="(order, index) in topOfCustomer" v-bind:key="index" id="register-col">
      <div v-if="order" class="css-fukidashi">
        <p class="fukidashi">
          {{ orderedFood(order.orderId) }}
        </p>
      </div>
      <div v-else class="css-fukidashi">
        <p class="fukidashi-for-free-time">
          暇だなー
        </p>
      </div>
      <div class="register-rows">
        register
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  props: {
    rows: Array,
  },
  computed: {
    topOfCustomer() {
      return this.rows.map(row => {
        const copyRow = [];
        Object.assign(copyRow, row); // row配列をいじると本体に影響が出るためにコピーする
        const topOfCustomer = copyRow.reverse()[0]
        return topOfCustomer;
       });
    }
  },
  methods: {
    orderedFood: function(orderId) {
      const food = ['burger', 'burger & flies'];
      return food[orderId];
    },
  },
}
</script>

<style lang="scss">
#register-col {
  background-color: darkgoldenrod;
  width: 15vw;
  height: 33.33333%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.register-rows {
  width: 50%;
  height: 30%;
  color: white;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 10px;
}
.css-fukidashi {
  padding: 0;
  margin: 0;
}
.fukidashi,
.fukidashi-for-free-time {
  display: block;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
}
.fukidashi {
  background: chocolate;
}
.fukidashi-for-free-time {
  background: purple;
}
</style>
