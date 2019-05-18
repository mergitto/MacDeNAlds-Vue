<template>
  <div class="container">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <div id="app">
      <div id="customer-col">
      </div>
      <div id="register-col">
      </div>
      <div id="food-col">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to MacDeNAlds !!'
    }
  }
}
</script>

<style lang="scss">
header {
  margin: 40px;
}
h1 {
  margin: auto;
  font-weight: normal;
  text-align: center;
}
.container {
  text-align: center;
  width: 100vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  height: 70vh;
}
#customer-col {
  background-color: aquamarine;
  width: 50vw;
}
#register-col {
  background-color: darkgoldenrod;
  width: 25vw;
}
#food-col {
  background-color: chocolate;
  width: 25vw;
}
</style>
