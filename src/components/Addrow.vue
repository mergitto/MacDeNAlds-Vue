<template>
  <div id="add-customer">
    <form>
      <div>
        <input type="text" size="15" placeholder="name please!">
        <input type="number" min="0" max="1" v-model="num">
        {{ num }}
      </div>

      <div>
        <input name="row" type="radio" id="one" value="0" v-model="picked">
        <label for="one">1st row</label>

        <input name="row" type="radio" id="two" value="1">
        <label for="two">2nd row</label>

        <input name="row" type="radio" id="three" value="2">
        <label for="three">3rd row</label>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'addRow',
  data: {
    num: '',
    picked: '',
  }
}
</script>

<style>
#add-customer {
  margin-top: 20px;
}
</style>
