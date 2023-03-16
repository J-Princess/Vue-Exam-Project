<script setup>
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
</script>

<template>
    <DocumentationIcon />

    <div class="notfound">
        <h1 class="hone">About Revst</h1>
        <p>Revst is a project done for submission for the AltSchool Africa, School of Engineering, third semester
            examination. .</p>
        <p>It fetches the list of Repositories from a Github user and displays them. Information about each repository
            is
            displayed on another page. </p>
        <p>It was built using the framework Vue.js with routes and pagination implementation </p>
    </div>
</template>

<style>
.notfound {
    top: 27%;
    width: 75%;
}

.hone {
    font-size: 50px;
}
</style>