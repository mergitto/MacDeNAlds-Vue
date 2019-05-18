<template>
  <v-fragment id="rows">
    <div v-for="customer in customers" v-bind:key="customer.name" class="customers">
      <div class="customer">
        <p>
          name: {{ customer.name }}
        </p>
        <p>
          order: {{ customer.order }}
        </p>
      </div>
    </div>
  </v-fragment>
</template>

<script>
export default {
  name: 'customer',
  props: {
    customers: Object,
  },
}
</script>

<style lang="scss">
</style>
