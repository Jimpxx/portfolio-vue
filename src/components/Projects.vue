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
        {
          title: 'todo-vue3',
          description: 'testing testing...',
          image: 'img/todo-vue3.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'CSS', 'Materialize', 'Vue 3'],
          code: 'https://github.com/Jimpxx/todo-app-vue3',
          live: 'http://todo-vue3.surge.sh/',
        },
        {
          title: 'quote of the day',
          description: 'testing testing... React',
          image: 'img/quote-of-the-day.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'CSS', 'React'],
          code: 'https://github.com/Jimpxx/quote-of-the-day-react',
          live: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.projects {
  // width: 100%;
  background-color: #eee;
  // background-color: #5c5c5e;
  // background-color: #dfe4e7;
  // background-color: #11273d;
  color: #222;
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
