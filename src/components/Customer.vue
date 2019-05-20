<template>
  <div class="customers">
    <input
      v-on:click="$emit('orderBurger')"
      value="burger"
      type="button"
    />
    <input
      v-on:click="$emit('orderFlies')"
      value="flies"
      type="button"
    />
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
