<template>
  <div id="customer-col">
    <CustomerRows rows=3 names="['john', 'mike', 'liza']" />
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
