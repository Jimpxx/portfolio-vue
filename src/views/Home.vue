<template>
  <div class="home">
    <Showcase />
    <Tools />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from '../components/Showcase.vue';
import Tools from '../components/Tools.vue';
import Projects from '../components/Projects.vue';

export default {
  name: 'Home',
  components: {
    Showcase,
    Tools,
    Projects,
  },
};
</script>

<style lang="scss">
.home {
  // width: 100%;
}
</style>
