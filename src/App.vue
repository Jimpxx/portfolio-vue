<template>
  <div id="app">
    <Nav />
    <!-- <div class="container"> -->
    <router-view />
    <!-- <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="20"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="100"
            :moveSpeed="0.5"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
    ></vue-particles>-->
    <!-- </div> -->
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
  //   background-color: rgb(18, 20, 58);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // width: 100vw;
}

.container {
  text-align: center;
  color: #333;
  // max-width: 1100px;
  // margin: 0 auto;
}

.btn {
  display: inline-block;
  padding: 0.5em 1.2em;
  margin: 1.5rem 1rem;
  border-radius: 0.2em;
  // box-sizing: border-box;
  text-decoration: none;
  // font-family: "Roboto", sans-serif;
  // font-weight: 300;
  color: #ffffff;
  background-color: #09aeff;
  text-align: center;
  transition: all 0.2s;
  border: none;
}

.btn:hover {
  background-color: #119fe6;
}

// #nav {
//   width: 100%;
//   padding: 30px;
//   background-color: #11273d;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     margin-right: 1rem;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// #particles-js canvas {
//     display: block;
//     vertical-align: bottom;
//     -webkit-transform: scale(1);
//     -ms-transform: scale(1);
//     transform: scale(1);
//     opacity: 1;
//     -webkit-transition: opacity 0.8s ease, -webkit-transform 1.4s ease;
//     transition: opacity 0.8s ease, transform 1.4s ease;
// }

// #particles-js {
//     width: 100%;
//     height: 100%;
//     background-color: rgb(18, 20, 58);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     position: absolute;
//     z-index: -10;
//     top: 0;
//     left: 0;
// }

// #particles-js {
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     z-index: -10;
//     top: 0;
//     left: 0;
// }

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
}

img {
  width: 100%;
}
</style>
