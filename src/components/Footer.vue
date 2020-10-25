<template>
  <footer>
    <p>Copyright 2020 | Jimmy Andersson</p>
    <div class="links">
      <a href="https://github.com/Jimpxx" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jimmy-andersson-11895074/"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
footer {
  background-color: #11273d;
  color: #fff;
  padding: 3rem;
  text-align: center;
  .links {
    a {
      color: #fff;
      margin-right: 1rem;
    }
  }
}
</style>
