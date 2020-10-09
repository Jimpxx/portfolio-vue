<template>
  <div class="projects" id="projects">
    <div class="heading">
      <h1>Projects</h1>
    </div>
    <div class="content">
      <Project
        v-for="project in projects"
        :project="project"
        :key="project.title"
      />
      <Project />
      <Project />
    </div>
  </div>
</template>

<script>
import Project from './Project.vue';

export default {
  name: 'Projects',
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          title: 'jimit',
          description: 'testing testing...',
          image: 'img/jimit.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'CSS'],
          code: 'https://github.com/Jimpxx/jimit',
          live: 'https://www.jimit.se/',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.projects {
  // width: 100%;
  background-color: #5c5c5e;
  // background-color: #dfe4e7;
  // background-color: #11273d;
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
  // padding: 1rem;

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1300px) {
  .projects {
    .content {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 800px) {
  .projects {
    .content {
      grid-template-columns: 1fr;
    }
  }
}
</style>
