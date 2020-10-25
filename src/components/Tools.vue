<template>
  <div class="tools">
    <div class="heading">
      <h2>Tools I've used</h2>
    </div>
    <div class="content">
      <Tool icon="html5" name="HTML" />
      <Tool icon="css3-alt" name="CSS" />
      <Tool icon="node-js" name="Javascript" />
      <Tool icon="sass" name="SASS" />
      <Tool icon="php" name="PHP" />
      <Tool icon="python" name="Python" />
      <Tool icon="vuejs" name="Vue.js" />
      <Tool icon="react" name="React.js" />
      <Tool icon="node" name="Node.js" />
      <Tool icon="git-alt" name="Git" />
      <Tool icon="github" name="Github" />
      <Tool icon="docker" name="Docker" />
      <!-- <Tool icon="linux" name="Linux" /> -->
      <!-- <Tool icon="windows" name="Windows" /> -->
    </div>
  </div>
</template>

<script>
import Tool from './Tool.vue';

export default {
  name: 'Tools',
  components: {
    Tool,
  },
};
</script>

<style lang="scss" scoped>
.tools {
  background-color: #11273d;
  padding: 3rem 2rem 5rem 2rem;
  text-align: center;
  .heading {
    color: #fff;
    margin-bottom: 3rem;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: space-between;
    color: #fff;
  }
}

@media (max-width: 1400px) {
  .tools {
    .content {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}

@media (max-width: 900px) {
  .tools {
    .content {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media (max-width: 550px) {
  .tools {
    .content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 385px) {
  .tools {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
