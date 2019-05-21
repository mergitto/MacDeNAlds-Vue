<template>
  <div id="customer-col">
    <div v-for="(row, index) in rows" v-bind:key="index" class="customer-row">
      <Customer
        v-bind:customers="row"
      />
    </div>
  </div>
</template>

<script>
import Customer from './Customer';

export default {
  name: 'customers',
  props: {
    seconds: Number,
    rows: Array,
  },
  data: function() {
    return {
      limit_number_of_customer_each_row: 5,
    };
  },
  components: {
    Customer,
  },
  methods: {
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
}
</style>
