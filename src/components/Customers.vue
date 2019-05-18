<template>
  <div id="customer-col">
    <div class="customer-rows">
      <Customer />
    </div>
    <div class="customer-rows">
      <Customer />
    </div>
    <div class="customer-rows">
      <Customer />
    </div>
  </div>
</template>

<script>
import Customer from './Customer';
export default {
  name: 'customers',
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
.customer-rows {
  position: relative;
  width: 100%;
  height: 30%;
  border: 1px solid black;
  background-color: white;
}
</style>
