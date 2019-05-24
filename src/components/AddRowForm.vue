<template>
  <div id="add-customer">
    <form>
      <div>
        <input type="text" size="15" placeholder="name please!" v-model="name" string>
        <input type="number" min="0" max="1" v-model="num" number>
      </div>

      <div>
        <input name="row" type="radio" id="one" value=0 v-model="pickedIndex" number>
        <label for="one">1st row</label>

        <input name="row" type="radio" id="two" value=1 v-model="pickedIndex" number>
        <label for="two">2nd row</label>

        <input name="row" type="radio" id="three" value=2 v-model="pickedIndex" number>
        <label for="three">3rd row</label>
      </div>
    </form>
    <input type="button" v-on:click="handleHoge" value="追加する">
  </div>
</template>

<script>
export default {
  name: 'addRowForm',
  data () {
    return {
      name: 'jon',
      num: 0,
      pickedIndex: 0,
    }
  },
  methods: {
    handleHoge: function () {
      console.log(this.name, this.num, this.pickedIndex);
    }
  },
};
</script>

<style>
#add-customer {
  margin-top: 20px;
}
</style>
