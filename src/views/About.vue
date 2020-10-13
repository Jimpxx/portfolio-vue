<template>
  <div class="container">
    <div class="about">
      <div class="about-title">
        <h1>About me</h1>
      </div>
      <div class="about-content">
        <div class="flex-container">
          <img src="../assets/Jimmy.jpg" alt="Image of Jimmy Andersson" />
          <p>
            Hi! I’m a newly educated web developer from Sweden. I’ve worked in
            IT for over 4 years before I began my studies. I have experience in
            server administration and IT support. During my recent time in
            school I’ve learned Javascript, PHP and Python. I’ve also learned to
            manage and build databases, MySQL, SQLite and Mongodb are the ones
            I’ve worked the most with. I like to learn new technologies and I'm
            interested in both backend and frontend.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about {
  min-height: 600px;
  background-color: #eee;
  color: #222;
  padding: 4rem 10rem;
  max-width: 60%;
  margin: auto;
  h1 {
    margin-top: 0rem;
  }
}

.about-title {
}

.about-content {
  margin-top: 4rem;
}

.flex-container {
  display: flex;
  // justify-items: center;
  // justify-content: space-around;
  align-items: center;
  // margin-top: 1rem;
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

@media (max-width: 1100px) {
  .about {
    padding: 4rem 8rem;
    max-width: 70%;
  }
}

@media (max-width: 900px) {
  .about {
    padding: 4rem 6rem;
    max-width: 80%;
  }
  .flex-container {
    flex-direction: column;
    img {
      margin-right: 0rem;
    }
  }
  .about-content {
    margin-top: 2rem;
  }
}

@media (max-width: 550px) {
  .about {
    padding: 4rem 2rem;
    max-width: 100%;
  }
  // .flex-container {
  //   flex-direction: column;
  // }
  // .about-content {
  //   margin-top: 2rem;
  // }
}
</style>
