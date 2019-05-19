<template>
  <div class="customers">
    <input v-on:click="soldBurger" value="burger" type="button" >
    <input v-on:click="soldFlies" value="flies" type="button" >
    <div v-for="(customer, index) in customers" v-bind:key="index" class="customer">
      {{ customer.name }} : {{ customer.order }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'customer',
  props: {
    customers: Array,
  },
  methods: {
    soldBurger: function() {
      const numberOfBurger = this.$parent.$parent.numberOfBurger;
      if (numberOfBurger > 0) {
        this.$parent.$parent.numberOfBurger--;
      } else {
        console.log('wait creating burger');
      }
    },
    soldFlies: function() {
      const numberOfFlies = this.$parent.$parent.numberOfFlies;
      if (numberOfFlies > 0) {
        this.$parent.$parent.numberOfFlies--;
      } else {
        console.log('wait creating flise');
      }
    },
  },
}
</script>

<style lang="scss">
.customers {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.customer {
  background-color:  mediumorchid;
  height: 50%;
  width: 20%;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>
