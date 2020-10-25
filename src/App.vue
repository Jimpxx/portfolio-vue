<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  text-align: center;
  color: #333;
}

.btn {
  display: inline-block;
  padding: 0.5em 1.2em;
  margin: 1.5rem 1rem;
  border-radius: 0.2em;
  text-decoration: none;
  color: #ffffff;
  background-color: #09aeff;
  text-align: center;
  transition: all 0.2s;
  border: none;
}

.btn:hover {
  background-color: #119fe6;
}

img {
  width: 100%;
}
</style>
