<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <div class="home">
    <h2 class="indi">Repos</h2>
    <p v-if="loading" class="post--empty">Loading....</p>
    <ul v-else>
      <div v-for="repo in displayedPosts" :key="repo.id">
        <router-link :to="{ name: 'Repo', params: { id: repo.id } }" class="red">
          <img src="../components/images/edu-grande-0vY082Un2pk-unsplash.jpg">
          <p class="pass"> {{ repo.name }}</p>
          <p class="pass">{{ repo.id }}</p>
        </router-link>
      </div>
    </ul>
    <div class="paginate">
      <li class="paged">
        <button type="button" class="page" v-if="page != 1" @click="page--"> Previous </button>
        <button type="button" class="page" v-for="pageNumber in pages.slice(page - 1, page + 2)"
          @click="page = pageNumber"> {{ pageNumber }} </button>
        <button type="button" @click="page++" v-if="page < pages.length" class="page" :disabled="page === 3">
          Next </button>
      </li>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      repos: [],
      loading: false,
      page: 1,
      perPage: 3,
      pages: [],
    };
  },
  mounted() {
    this.getRepos();
  },
  methods: {
    async getRepos() {
      this.loading = true;
      try {
        let res = await axios({
          url: "https://api.github.com/users/J-Princess/repos",
          method: "GET",
        });
        let repos = res.data;
        this.repos = repos;
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },

    setPages() {
      let numberOfPages = Math.ceil(this.repos.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(repos) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return repos.slice(from, to);
    }


  },

  computed: {
    displayedPosts() {
      return this.paginate(this.repos);
    }
  },
  watch: {
    repos() {
      this.setPages();
    }
  },
  created() {
    this.getRepos();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + '...';
    }
  },









};
</script>
<style>
.home {
  padding: 0;
  margin: 0 auto;

}

.indi {
  height: 100px;
  font-family: 'Orbitron', sans-serif;
}

.red {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 20px;
  height: 400px;
  width: 400px;
  background-color: rgb(0, 123, 255);
  opacity: 0.9;
  border-radius: 60px;
  float: left;
}

@keyframes blink {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.pass {
  margin: auto;
}

.post--empty {
  height: 250px;
  margin-top: 30px;
  animation: blink 0.8s ease-in-out infinite alternate both;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lobster", cursive;
}

ul {
  text-align: left;
}

a {
  color: inherit;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
}

.paginate {
  display: flex;
  width: 300px;
  height: 200px;
  margin: auto;
  padding-top: 70px;
}

.paged {
  list-style-type: none;
}

.page {
  width: fit-content;
  /* height: 40px; */
  margin: 2px;
  padding: 10px 15px;
}

.page:hover {
  background-color: #1f90d1;
}

@media screen and (max-width: 750px) {
  .red {
    right: 30%;
    width: 300px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto;
  }
}
</style>