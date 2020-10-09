<template>
  <section class="showcase">
    <h1>Jimmy Andersson</h1>
    <small>Web Developer | Backend & Frontend</small>
    <a href="#projects" class="btn">My Work</a>
    <!-- <router-link to="#projects" class="btn">My Work</router-link> -->
  </section>
</template>

<script>
export default {
  name: 'Showcase',
};
</script>

<style lang="scss">
.showcase {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  // background-image: url("../assets/img/show.jpeg");
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/img/show.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 3rem 12rem;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  small {
    font-size: 1.3rem;
  }
}

@media (max-width: 800px) {
  .showcase {
    h1 {
      font-size: 3rem;
    }
    padding: 3rem 3rem;
  }
}
</style>
