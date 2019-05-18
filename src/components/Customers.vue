<template>
  <div id="customer-col">
    <div class="customer-rows">
      <CustomerRows />
    </div>
    <div class="customer-rows">
      <CustomerRows />
    </div>
    <div class="customer-rows">
      <CustomerRows />
    </div>
  </div>
</template>

<script>
import CustomerRows from './CustomerRows';
export default {
  name: 'customers',
  components: {
    CustomerRows,
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
.customer-rows {
  position: relative;
  width: 100%;
  height: 30%;
  border: 1px solid black;
  background-color: white;
}
</style>
