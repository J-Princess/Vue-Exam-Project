<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sidebar">
    <header>
      <img src="./components/images/pexels-element-digital-1370298.jpg" class="logo">
      <h1 class="title">Revst</h1>
    </header>
    <section>
      <RouterLink to="/" class="links">Home</RouterLink>
      <RouterLink to="/repos" class="links">Repos</RouterLink>
      <RouterLink to="/about" class="links">About</RouterLink>
      <RouterLink to="/contact" class="links">Contact</RouterLink>
    </section>
    <footer>
      <p class="footer">&copy;2023 Revst </p>
    </footer>
  </div>
  <div class="mainbar">
    <RouterView />
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Orbitron&family=Pridi:wght@600&display=swap');



header {
  height: 30%;
  /* display: flex;
  justify-self: center;
  align-items: center; */
}

.logo {
  width: 90px;
  height: 90px;
  display: flex;
  float: left;
  border-radius: 50px;
}

.title {
  display: flex;
  font-family: 'Orbitron', sans-serif;
  color: bisque;
  font-weight: 900;
  margin: 30px;
  padding: 35px 20px;
}

.sidebar {
  background-color: black;
  padding: 2rem;
}

section {
  height: 60%;
}

.links {
  display: block;
  text-decoration: none;
  font-size: 30px;
  padding: 10px;
  font-family: 'Orbitron', sans-serif;
  color: antiquewhite;
}

.mainbar {
  /* background-color: rgb(235, 66, 66); */
  background: url("./components/images/omid-armin-TkEWozPJi5U-unsplash.jpg") fixed;
  background-size: cover;
  padding: 3rem;
}

.footer {
  font-size: large;
  font-family: sans-serif;
}

@media screen and (max-width: 1080px) {

  .mainbar {
    height: fit-content;

  }


}
</style>
