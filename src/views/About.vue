<template>
  <div class="container">
    <div class="about">
      <h1>About me</h1>
      <div class="flex-container">
        <img src="../assets/Jimmy.jpg" alt="Image of Jimmy Andersson" />
        <p>
          Hi! I’m a web developer from Sweden. I’ve worked in IT for over 4
          years before I began my studies. I have experience in server
          administration and IT support. During my recent time in school I’ve
          learned Javascript, PHP and Python. I’ve also learned to manage and
          build databases, MySQL, SQLite and Mongodb are the ones I’ve worked
          the most with. I like to learn new technologies.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  // justify-items: center;
  // justify-content: space-around;
  padding: 0 10rem;
  align-items: center;
  margin-top: 1rem;
  img {
    max-width: 300px;
    border: 5px solid #ddd;
    border-radius: 50%;
    margin-right: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
}

.container {
  background-color: #eee;
  // background-color: #5c5c5e;
  color: #222;
}

.about {
  min-height: 700px;
  background-color: #eee;
  color: #222;
  h1 {
    margin-top: 2rem;
  }
}
</style>
