<template>
  <div id="customer-col">
    <div class="customer-row">
      <Customer v-bind:customers="row1" />
    </div>
    <div class="customer-row">
      <Customer v-bind:customers="row2" />
    </div>
    <div class="customer-row">
      <Customer v-bind:customers="row3" />
    </div>
  </div>
</template>

<script>
import Customer from './Customer';

export default {
  name: 'customers',
  data: function() {
    return {
      row1: [
        { name: 'john', order: 0 },
        { name: 'john', order: 0 },
        { name: 'john', order: 0 },
        { name: 'john', order: 0 },
        { name: 'mike', order: 1 }
      ],
      row2: [
        {name: 'marin', order: 1},
        {name: 'jozeph', order: 1},
        {name: 'ree', order: 0},
      ],
      row3: [
        {name: 'hoge', order: 0},
      ],
      limit_number_of_customer_each_row: 5,
    };
  },
  components: {
    Customer,
  },
}
</script>

<style lang="scss">
#customer-col {
  background-color: aquamarine;
  width: 50vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.customer-row {
  position: relative;
  width: 100%;
  height: 30%;
  border: 1px solid black;
  background-color: white;
}
</style>
