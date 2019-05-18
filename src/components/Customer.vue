<template>
  <v-fragment id="rows">
    <div v-for="index in parseInt(rows)" v-bind:key="index" class="customer-rows">
      <div class="customer">
        index: {{ index }}
      </div>
    </div>
  </v-fragment>
</template>

<script>
export default {
  name: 'customer',
  props: [
    'rows',
    'names',
  ],
}
</script>

<style lang="scss">
</style>
