<template>
  <div id="food-col">
    <div class="food-rows">
      <div class="food-stack">
        <div class="warm-food" v-for="index in 10" v-bind:key="index">
          <div class="stack-food"></div>
        </div>
      </div>
      <div class="food-making">
        <div class="cooking-seconds-barger" v-for="index in 2" v-bind:key="index">
          <div class="seconds">{{ index }} sec</div>
        </div>
      </div>
    </div>
    <div class="food-rows">
      <div class="food-stack">
        <div class="warm-food" v-for="index in 6" v-bind:key="index">
          <div class="stack-food"></div>
        </div>
      </div>
      <div class="food-making">
        <div class="cooking-seconds-barger-flies" v-for="index in 6" v-bind:key="index">
          <div class="seconds">{{ index }} sec</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
.cooking-seconds-barger,
.cooking-seconds-barger-flies {
  margin: 0;
  width: 100%;
  display: flex;
}
.warm-food  {
  height: 10%;
}
// food making seconds
.cooking-seconds-barger {
  height: 33.3%; // 33.3 == 3個分
}
.cooking-seconds-barger-flies {
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
