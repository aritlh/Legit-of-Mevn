<template>
    <div class="tw-flex tw-flex-wrap tw-gap-4">
        <v-card v-for="movie in movies" :key="movie._id">
            <div>
                <v-card-title>{{ movie.name }}</v-card-title>
                <v-card-subtitle>{{ movie.release_year }} - {{ movie.genre }}</v-card-subtitle>
            </div>
            <v-card-text>Description: {{ movie.description }}</v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const movies = ref([])

axios.get('http://localhost:8081/movies')
    .then((response) => {
        movies.value = response.data
    })
</script> 