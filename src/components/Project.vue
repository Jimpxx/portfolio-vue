<template>
  <div class="project">
    <div class="image">
      <!-- <img src="@/assets/img/projects/jimit.png" alt="project Jimit" /> -->
      <img :src="project.image" :alt="'Image of project ' + project.title" />
    </div>
    <div class="overlay">
      <div class="info">
        <div class="heading">
          <h2>{{ project.title }}</h2>
        </div>
        <div class="stack">
          <small>Built with:</small>
          <ul>
            <li v-for="tool in project.builtWith" :key="tool">{{ tool }}</li>
          </ul>
        </div>
        <div class="description">
          <h4>Description</h4>
          <p>
            {{ project.description }}
          </p>
        </div>
        <div class="buttons">
          <a :href="project.code" class="btn">Code</a>
          <a v-if="project.live" :href="project.live" class="btn">Live</a>
        </div>
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
  max-width: 100%;
  height: 100%;
  margin: 0rem 0rem;
  // object-fit: cover;
  // background-color: #ddd;
  // background-color: #c3d4e6;
  // background-color: #11273d;
  color: #fff;
  // max-width: 600px;

  position: relative;
  .image {
    img {
      display: block;
      vertical-align: bottom;
    }
  }
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #11273d;
  // background-color: #008cba;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.project:hover .overlay {
  height: 100%;
  opacity: 0.9;
}

.info {
  color: white;
  font-size: 0.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  // dwd
  padding: 0rem 3rem;
  display: flex;
  flex-direction: column;
  .heading {
    h2 {
      margin: 0;
      font-size: 1.6rem;
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
        margin-right: 0.4rem;
      }
    }
  }
  .description {
    margin: 0;
    p {
      margin: 0;
    }
    h4 {
      margin-top: 0.5rem;
    }
  }
  .buttons {
    justify-content: center;
    display: flex;
    a {
      margin: 0.7rem;
    }
  }
}
</style>
