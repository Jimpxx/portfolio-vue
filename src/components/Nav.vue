<template>
  <div id="nav">
    <router-link to="/">
      <img src="../assets/logo.png" alt="Logo" />
    </router-link>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <a href="https://github.com/Jimpxx" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jimmy-andersson-11895074/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss">
#nav {
  display: flex;
  justify-content: space-between;
  //   width: 100%;
  align-items: center;
  padding: 0.7rem 5rem;
  background-color: #11273d;
  a {
    font-weight: bold;
    font-size: 1.2rem;
    color: #fff;
    // color: #cfe8f5;
    // color: #2c3e50;
    margin-right: 2rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #09aeff;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    display: flex;
    list-style-type: none;

    li {
      text-decoration: none;
    }
  }
  img {
    width: 70px;
  }
}

@media (max-width: 570px) {
  #nav {
    padding: 0.7rem 1rem;
    a {
      font-size: 1rem;
      margin-right: 1.5rem;
    }
  }
}
</style>
