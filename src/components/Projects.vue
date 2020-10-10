<template>
  <div class="projects" id="projects">
    <div class="heading">
      <h1>Projects</h1>
      <p>This section shows some of the projects I've worked on.</p>
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
          description: 'The homepage for JimIT, the website for my company.',
          image: 'img/jimit.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'CSS'],
          code: 'https://github.com/Jimpxx/jimit',
          live: 'https://www.jimit.se/',
        },
        {
          title: 'Todo application',
          description: 'A todo-application I built using the new version of Vue (Vue 3).',
          image: 'img/todo-vue3.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'CSS', 'Materialize', 'Vue 3'],
          code: 'https://github.com/Jimpxx/todo-app-vue3',
          live: 'http://todo-vue3.surge.sh/',
        },
        {
          title: 'quote of the day',
          description: 'This application is built with React. It fetches a quote for the day (only one quote per day).',
          image: 'img/quote-of-the-day.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'CSS', 'React'],
          code: 'https://github.com/Jimpxx/quote-of-the-day-react',
          live: '',
        },
        {
          title: 'URL Shortener (Frontend)',
          description: 'The frontend for a URL shortener built with Vue.',
          image: 'img/url-shortener-vue.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'Tailwind', 'Vue'],
          code: 'https://github.com/Jimpxx/url-shortener-vue',
          live: '',
        },
        {
          title: 'URL Shortener (Backend)',
          description: 'The backend for a URL shortener built with Express.',
          image: 'img/url-shortener-node.png', // Taking the image from the static folder because of webpack
          builtWith: ['Node.js', 'Express', 'Mongodb'],
          code: 'https://github.com/Jimpxx/url-shortener-nodejs',
          live: '',
        },
        {
          title: 'Portfolio (Vue)',
          description: 'This is the portfolio you are currently visiting.',
          image: 'img/portfolio-vue.png', // Taking the image from the static folder because of webpack
          builtWith: ['HTML', 'Sass', 'Vue'],
          code: 'https://github.com/Jimpxx/portfolio-vue',
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
  padding: 3rem 0rem;
  text-align: center;
  // padding: 1rem;

  .content {
    margin: 4rem 0rem;
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
