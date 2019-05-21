<template>
  <div id="">
    <div v-for="(order, index) in ordersOfTopCustomer" v-bind:key="index" id="register-col">
      {{ ordersOfTopCustomer }}
      <div class="register-rows">
        rege
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  props: {
    ordersOfTopCustomer: Array,
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
  height: 20%;
  color: white;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 10px;
}
</style>
