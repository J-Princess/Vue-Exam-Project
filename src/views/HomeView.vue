<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <section class="section">
    <h3 class="revst">Welcome to Revst</h3>
    <div>
      <p>As a software engineer, you need the right information at the right time and with the right language.</p>
      <p>Unfortunately, that information lives in an ever-increasing mess of disconnected systems, databases, applications
        and implementations. </p>
      <p>Revst solves that problem by bringing servers and its data together in one built-in platform. With Revst,its easy
        to see all the information you need in one place and use it to make faster, better Api calls </p>
    </div>
    <div class="goto">
      <RouterLink to="/repos" class="buttoned">
        Go to Repositories
      </RouterLink>
    </div>
  </section>
</template>

<style>
.revst {
  position: absolute;
  padding: 32px 48px;
  left: 18%;
  top: -10%;
  font-size: xx-large;
  transform: translate(-50%, -70%);
  background: linear-gradient(to right, white 0, #0000 10%, rgb(60, 56, 56) 20%);
  background-position: 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: 0;
  }

  60% {
    background-position: 280px;
  }

  100% {
    background-position: 180px;
  }
}

.section {
  font-size: larger;
  /* background-color: azure; */
  top: 37%;
  width: 75%;

}

.goto {
  margin-top: 30px;
}

.buttoned {
  background-color: black;
  padding: 15px 30px;
  border-radius: 30px;

}

@media screen and (max-width: 880px) {
  .section {
    top: 140px;
    height: 700px;
    padding: 0;
  }

  .revst {
    left: 55%;
    top: -2%;
  }
}
</style>
