<template>
    <div class="tw-grid tw-grid-cols-4 tw-gap-4">
        <v-card class="hover:tw-bg-zinc-100" v-for="movie in movies" :key="movie._id">
            <router-link :to="`/movies/${movie._id}`">
                <div>
                    <v-card-title>{{ movie.name }}</v-card-title>
                    <v-card-subtitle>{{ movie.release_year }} - {{ movie.genre }}</v-card-subtitle>
                </div>
                <v-card-text class="tw-truncate">{{ movie.description }}</v-card-text>
            </router-link>
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