<template>
  <div class="container">
    <Header />
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
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Customers,
    Register,
    Food,
    Header,
  },
  data () {
    return {
      msg: 'Welcome to McDeNAlds !!'
    }
  }
}
</script>

<style lang="scss">
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
