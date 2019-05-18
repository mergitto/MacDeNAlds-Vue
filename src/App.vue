<template>
  <div class="container">
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <div id="app">
      <Customers />
      <Register />
      <Food />
    </div>
  </div>
</template>

<script>
import Customers from './components/Customers';
import Register from './components/Register';
import Food from './components/Food';

export default {
  name: 'app',
  components: {
    Customers,
    Register,
    Food,
  },
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
</style>
