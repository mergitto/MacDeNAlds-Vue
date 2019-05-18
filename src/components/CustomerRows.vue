<template>
  <div class="customer-rows">
    <div v-for="index in parseInt(rows)" v-bind:key="index"  class="customer">
      index: {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'customerRows',
  props: [
    'rows',
    'names',
  ],
}
</script>

<style lang="scss">
</style>
