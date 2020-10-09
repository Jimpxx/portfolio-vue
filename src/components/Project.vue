<template>
  <div class="project">
    <div class="image">
      <!-- <img src="@/assets/img/projects/jimit.png" alt="project Jimit" /> -->
      <img :src="project.image" :alt="'Image of project ' + project.title" />
    </div>
    <div class="info">
      <div class="heading">
        <h2>{{ project.title }}</h2>
      </div>
      <div class="stack">
        <h3>Built with:</h3>
        <ul>
          <li v-for="tool in project.builtWith" :key="tool">{{ tool }}</li>
        </ul>
      </div>
      <div class="description">
        <p>
          {{ project.description }}
        </p>
      </div>
      <div class="buttons">
        <a :href="project.code" class="btn">View code</a>
        <a v-if="project.live" :href="project.live" class="btn">View live</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Project',
  props: ['project'],
};
</script>

<style lang="scss">
.project {
  margin: 2rem 1rem;
  // background-color: #ddd;
  // background-color: #c3d4e6;
  background-color: #11273d;
  // color: #fff;
  max-width: 600px;
}
// img {
//   max-width: 600px;
// }

.info {
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  .heading {
    h2 {
      margin: 0;
      &:first-letter {
        text-transform: capitalize;
      }
    }
  }
  .stack {
    h3 {
      margin-bottom: 0;
    }
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      li {
        margin: 0.4rem;
      }
    }
  }
  .buttons {
    a {
      margin: 1rem;
    }
  }
}
</style>
