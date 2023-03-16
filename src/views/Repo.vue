
<template>
    <div class="single">
        <div class="post">
            <h1 class="hewd">Repo Info</h1>
            <td>{{ $route.params.id }}</td>
            <p>{{ repo.full_name }} </p>
            <p> {{ repo.description }} </p>
            <p> Url: {{ repo.url }} </p>
            <p> Language: {{ repo.language }} </p>
            <p> Created: {{ repo.created_at }} </p>
            <p>Stargazers-count: {{ repo.stargazers_count }} </p>
            <p></p>
            <div>
                <p>Visibility: {{ repo.visibility }}</p>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Repo",
    data() {
        return {
            repo: ['']
        }
        console.log(repo);
    },

    async created() {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const response = await fetch(`https://api.github.com/repositories/${this.$route.params.id}`);
        const data = await response.json();
        this.repo = data;
    },

};

</script>
<style>
.single {
    margin: auto;
    width: 50%;
    border-radius: 40px;
    padding: 10px;
    top: 20%;
    background: url("../components/images/pexels-fwstudio-129731 (7).jpg") fixed;
    background-size: cover;
    color: #000;
    font-size: large;
    font-weight: 900;
    opacity: 0.8;
}

.post {
    top: 50%;
    left: 5%;
    width: 90%;

}

.hewd {
    margin-bottom: 30px;
}

p {
    margin: 10px 0;
}

@media screen and (max-width: 880px) {
    .single {
        width: 90%;
    }
}
</style>