<template>
  <div id="food-col">
    <div class="food-rows">
      <div class="food-stack">
        <div class="warm-food" v-for="index in burger" v-bind:key="index">
          <div class="stack-food">b</div>
        </div>
      </div>
      <div class="food-making">
        <div
          class="cooking-seconds-burger"
          v-for="index in burgerTimes"
          v-bind:key="index"
         >
          <div class="seconds">{{ index }} sec</div>
        </div>
      </div>
    </div>
    <div class="food-rows">
      <div class="food-stack">
        <div class="warm-food" v-for="index in flies" v-bind:key="index">
          <div class="stack-food">f</div>
        </div>
      </div>
      <div class="food-making">
        <div
          class="cooking-seconds-flies"
          v-for="index in fliesTimes"
          v-bind:key="index"
         >
          <div class="seconds">{{ index }} sec</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food',
  props: {
    seconds: Number,
    burger: Number,
    flies: Number,
  },
  data: function() {
    return {
    }
  },
  computed: {
    burgerTimes: function() {
      return this.seconds % 5;
    },
    fliesTimes: function() {
      return this.seconds % 8;
    },
  },
  methods: {
  }
}
</script>

<style lang="scss">
#food-col {
  background-color: chocolate;
  width: 35vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.food-rows {
  width: 100%;
  height: 40%;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}
.food-stack,
.food-making {
  width: 30%;
  background-color: blue;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}
.warm-food,
.cooking-seconds-burger,
.cooking-seconds-flies {
  margin: 0;
  width: 100%;
  display: flex;
}
.warm-food  {
  height: 10%;
}
// food making seconds
.cooking-seconds-burger {
  height: 25%; // 25 == 4個分
}
.cooking-seconds-flies {
  height: 14.3%; // 14.3 == 7個分
}
// end food making seconds
.stack-food {
  width: 100%;
  background-color: black;
  border: 1px solid white;
}
.seconds {
  height: 100%;
  width: 100%;
  background-color: black;
  border: 1px solid white;
}
</style>
